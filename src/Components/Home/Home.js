import React from 'react';
import './Home.css'
import Product from '../Products/Products';
const Home = () => {
    return (
        <div className="home">
        <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
        />
        <div className="home_row">
          <Product
          id="123"
          title="Hi this is a Product"
          price={20}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
          <Product
        id='12345465'
        title='New Apple iPad Pro (12.9-inch, Wi-fi, 128GB)'
        price={700}
        rating={ 4}
        image="data:image/jpeg;base64,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"
        />
          </div>
          <div className="home_row">
          <Product
          id="123"
          title="Hi this is a Product"
          price={20}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
          <Product
          id="123"
          title="Hi this is a Product"
          price={20}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
          <Product
          id="123"
          title="Hi this is a Product"
          price={20}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
          </div>
          <div className="home_row">
          <Product
          id="123"
          title="Hi this is a Product"
          price={20}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
        
          </div>
        </div>
    );
};

export default Home;