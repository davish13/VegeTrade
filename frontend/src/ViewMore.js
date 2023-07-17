import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LineChart from './components/LineChart';
import ImgBanner from './images/banner.jpg';
import { data, lowdata, Ondata } from './data.js';
import './ViewMore.css';

function ViewMore() {
  const location = useLocation();
  const [predictedPrice, setPredictedPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { slug } = useParams();
  const searchParams = new URLSearchParams(location.search);
  const dataSource = searchParams.get('source');
  const csvfile = searchParams.get('csv');
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://127.0.0.1:5000/predict',{
      params: {
        product_name: product.name
      }
    });
        const jsonData = response.data;
        setResponseData(jsonData.predicted_price);
        setLoading(false);
      } catch (error) {
        setError('Error fetching predicted price');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getProduct = () => {
    if (dataSource === 'data') {
      return data.products.find(p => p.slug === slug);
    } else if (dataSource === 'lowdata') {
      return lowdata.products.find(item => item.slug === slug);
    } else {
      return Ondata.products.find(item => item.slug === slug);
    }
  };

  const product = getProduct();

  return (
    <div className='viewmore'>
      <Navbar />
      <div className='productin'>
        <div className='productin-img'>
          <img src={product.image} alt='product' />
        </div>
        <div className='productin-details'>
          <div className='productin-name'>
            <h1>{product.name}</h1>
          </div>
          <hr className='line' />
          <div className='product-about'>
            <h3>MRP: ₹{responseData + 10}</h3>
           
            <h2>Tomorrow: ₹{responseData}</h2>
            <hr className='line' />
            <img src={ImgBanner} className='banner' alt='banner' />
            <h4>About this item</h4>
            <ul className='veg-about'>
              <li>Store in a cool & dry place</li>
              <li>Hygienically packed</li>
              <li>Premium quality vegetables</li>
              <li>100% fresh vegetables</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='productin-graph'>
        <div className='prediction'>
          <LineChart csv={csvfile} />
        </div>
      </div>
      <hr className='line' />
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default ViewMore;
