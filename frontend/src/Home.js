import './App.css';
import Navbar from './Navbar'
import homeImage from './home1.jpg'
import LineChart from './components/LineChart';
import Beans from './images/bean.jpg';
import Onion from './images/onion.jpg';
import Ginder from './images/ginder.jpg';
import Celery from "./images/Celery.jpg";
import Cherry from "./images/cherry-tomoto.jpg";
import About from "./images/about.jpg"
import {Link} from "react-router-dom";
import Footer from './Footer.js';

function Home() {
  return (
    <div className="App">
    
      <header>
        <Navbar />
      </header>
      <main>
          <div className='homepage'>
            <img src={homeImage} alt="" className='main-img' />
            
             <Link to="/vegTrade" className='link-signin' >
             <button className='main-signin'>GET START
             </button>
             </Link> 
            
          </div>
          <div className='main-chart'>
              <LineChart/>
          </div>
          <div className='now-stock'>
              <h2>Now On Stock</h2>
                <ul className='main-stock'>
                  <li className='main-product'><img src={Beans} alt=''/></li>
                  <li className='main-product'><img src={Onion} alt=''/></li>
                  <li className='main-product'><img src={Ginder} alt=''/></li>
                </ul>
          </div>
          <div className='peak'>
            <h2>On Peak</h2>
            <ul className='main-peak'>

              <li className='left'>
                  <img src={Celery} />
              </li> 
              <li className='right'>
                <ul className='right-peak'> 
                  <li className='top'>
                    <img src={Cherry} />
                  </li>
                  <li className='bottom'>
                    <h3>Food</h3>
                    <h4>Tell me what you eat, and I will tell you who you are.  Once, during Prohibition, I was forced to live for days on nothing but food and water.</h4>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='about-us'>

                <ul>
                  <li className='main-about'>
                    <h2>About Us</h2>
                    <h4>
                    We take pride in sourcing the finest vegetables from local farmers, ensuring that each item is selected for its freshness, quality, and nutritional value.  With our user-friendly website, you can easily explore our wide selection, make your choices, and experience the joy of cooking with the freshest ingredients.  At Harizibam and Davish's Vegetable Shop, we are committed to promoting a healthy lifestyle and supporting sustainable agriculture practices, making every bite a step towards a greener future.
                    </h4>

                    <a href='#'>Learn more</a>
                  </li>
                  <li className='main-about'>
                    <img src={About}/>
                  </li>
                </ul>
          </div>
        <div className='footer'>
          <Footer/>
        </div>
       
      </main> 
    </div>
  );
}

export default Home;
