import Navbar from "../Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Destination from "../components/Destination.jsx";
import Trip from "../components/Trip.jsx";
import Footer from "../components/Footer.jsx";

function Home () {
   return (
        <>
        <Navbar />

        <Hero 
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=906&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
   );
}

export default Home;