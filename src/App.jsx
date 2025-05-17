import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Products from './components/products/Products';
import Aos from 'aos';
import 'aos/dist/aos.css';
import TopProducts from './components/TopProducts/TopProducts';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';


const App = () => {

  const [orderPopup, setOrderPopup ] = React.useState(false);
  const handleOrderPopup = () =>{
    setOrderPopup(!orderPopup);
  };


  React.useEffect(()=>{
    Aos.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
  }, []);

  return (
    <div className='bg-white dark:bg-gray-900  dark:text-white duration-200'>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Header handleOrderPopup={handleOrderPopup}/>
      <Products/>  
      <TopProducts handleOrderPopup={handleOrderPopup}/>
      <Banner/>
      <Subscribe/>
      <Products/> 
      <Testimonials/>
      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default App