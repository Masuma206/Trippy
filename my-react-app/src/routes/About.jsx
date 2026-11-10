import Navbar from "../Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";
import AboutUs from "../components/AboutUs.jsx";

function About () {
   return (
        <>
        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1614088459293-5669fadc3448?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        title="About"
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        </>
   )
}

export default About;