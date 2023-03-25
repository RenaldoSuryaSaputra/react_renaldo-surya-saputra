import React from 'react'
import './css/mystyle.css'
import './css/bootstrap.min.css';
import Navbar from './components/navbar';
import Welcome from './components/welcome';
import ContactUs from './components/contact-us';
import Footer from './components/footer';
import About from './components/about-us';


const App = () => {
  return ( 
    <>
    <Navbar />
    <Welcome />
    <About />
    <ContactUs />
    <Footer />
    </>
   );
}
 
export default App;