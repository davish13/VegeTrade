from flask import Flask, jsonify, request
import pandas as pd
import requests
from io import StringIO
from datetime import datetime, timedelta
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import LabelEncoder
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['GET'])
def predict():
    product_name = request.args.get('product_name')

    # Step 1: Retrieve the CSV file from GitHub
    csv_url = f"https://raw.githubusercontent.com/Harizibam7/dataset/main/{product_name}.csv"
    response = requests.get(csv_url)
    
    if response.status_code == 200:
        data = response.text

        # Step 2: Load and preprocess the CSV data
        df = pd.read_csv(StringIO(data))

        # Step 3: Prepare the data for forecasting
        # Label encode the vegetable names
        label_encoder = LabelEncoder()
        df['VegetableCode'] = label_encoder.fit_transform(df['Commodity'])

        # Convert the date string to a datetime object
        df['Date'] = pd.to_datetime(df['Date'], format="%d-%m-%Y")

        # Sort the data by date
        df.sort_values(by='Date', inplace=True)

        # Create lagged features or use moving averages, etc.

        # Step 4: Train a predictive model
        X = df[['VegetableCode', 'Minimum', 'Maximum']]
        y = df['Average']
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, shuffle=False)

        model = LinearRegression()
        model.fit(X_train, y_train)

        # Step 5: Make predictions for tomorrow
        last_observation = df.iloc[-1]
        next_day = last_observation['Date'] + timedelta(days=1)
        next_day_vegetable_code = label_encoder.transform([last_observation['Commodity']])
        next_day_minimum = last_observation['Minimum']
        next_day_maximum = last_observation['Maximum']
        next_day_features = [[next_day_vegetable_code[0], next_day_minimum, next_day_maximum]]
        predicted_price = int(model.predict(next_day_features)[0])

        return jsonify({'predicted_price': predicted_price}), 200, {'Cache-Control': 'no-cache, no-store, must-revalidate'}
    
    else:
        return jsonify({'error': 'CSV not found'}), 404

if __name__ == '__main__':
    app.run(port=5000)
