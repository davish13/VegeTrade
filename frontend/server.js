// // const express = require("express");
// // const app = express();
// // const mongoose = require("mongoose");
// // const bcrupt = require("bcrypt");
// // const cors = require("cors");
// // const User = require("./src/User");


// // app.use(cors());
// // app.use(express.json());


// // //Connect to MongoDB

// // mongoose.connect("mongodb://localhost:27017",{
// //     useNewUrlParser:true,
// //     useUnifiedTopology:true,
// // })
// // .then(()=>console.log("Connected to MongoDB"))
// // .catch((error)=> console.error("MongoDB connection error:",error));

// // //Register
// // app.post("/register",async (req,res)=>{
// //     const {email,password} = req.body;
// //     try{
// //         //Check is the user already exists

// //         const existingUser = await user.findOne({email});
// //         if(existingUser){
// //             return res.status(409).json({message:"User already exists"});
// //         }

// //         //hash the password
// //             const hashedPassword =await bcrypt.hash(password,10);

// //         //Create a new user
// //         const newUser = new User({email,password:hashedPassword});
// //         //save the user to the database

// //         await newUser.save();

// //         res.status(201).json({message: "Registration successful"});

// //     }catch(error){
// //         res.status(500).json({message:"Registration failed"});
// //     }
// // })


// // //Login

// // app.post("/login",async(req,res)=>{
// //     const {email,password} = req.body;
// //     try{
// //         const user = await User.findOne({email});

// //         if(!user || !(await bcrupt.compare(password,user.password))){
// //             return res.status(401).json({message:"Invalid email or password"});

// //         }
// //         res.json({message:"Login Successful"});
// //     }catch(error){
// //         res.status(500).json({message:"Login failed"});
// //     }
// // });


// // //Start the server

// // app.listen(5000,()=>{
// //     console.log("Server is running on port 5000");
// // });




// const express = require('express');
// const axios = require('axios');
// const { SARIMAX } = require('statsmodels');

// const app = express();
// const port = 3000;

// // Load the dataset
// app.get('/prediction', async (req, res) => {
//   try {
//     const { vegetable } = req.query;

//     // Construct the dataset URL dynamically based on the vegetable name
//     const datasetUrl = `https://raw.githubusercontent.com/Harizibam7/dataset/main/${vegetable}.csv`;
//     const response = await axios.get(datasetUrl);
//     const dataset = response.data;

//     // Preprocess the dataset
//     dataset['Date'] = new Date(dataset['Date']);
//     dataset.set_index('Date', inplace=true);

//     // Create and fit the SARIMA model
//     const model = new SARIMAX(dataset['Average'], { order: [1, 0, 1], seasonal_order: [1, 1, 1, 12] });
//     const modelFit = model.fit();

//     // Forecast future values
//     const nPeriods = 1;
//     const forecast = modelFit.get_forecast({ steps: nPeriods });

//     // Get the predicted values for the next period
//     const predictedValues = forecast.predicted_mean;

//     // Extract the last predicted value
//     const predictedPrice = predictedValues.iloc[-1];

//     // Send the predicted price as the response
//     res.json({ predictedPrice });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to retrieve the prediction' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
