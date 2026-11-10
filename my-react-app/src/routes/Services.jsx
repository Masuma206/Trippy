import Navbar from "../Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Trip from "../components/Trip.jsx";
import Footer from "../components/Footer.jsx";


function Services () {
   return (
        <>
        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg="https://plus.unsplash.com/premium_photo-1700483717331-6da3888bc3db?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        title="Services"
      
        btnClass="hide"
        />
        <Trip/>
        <Footer/>
        </>
   )
}

export default Services; 