import Navbar from "../Navbar.jsx";
import Hero from "../components/Hero.jsx";
import ContactImg from "../assets/9 image.jpg";
import Footer from "../components/Footer.jsx";
import ContactFrom from "./ContactFrom.jsx";

function Contact() {
   return (
        <>
        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        btnClass="hide"
        />
        <ContactFrom/>
        <Footer/>
        </>
   )
}

export default Contact;