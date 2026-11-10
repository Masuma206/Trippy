import DestinationData from "./DestinationData";
import "./DestinationStyle.css";
import "./DestinationData";

const Destination = () => {
    return(
       <div className="destination">
          <h1>Popular Destinations</h1>
         <p>Tours give you the opportunity to see a lot, within a time frame</p>
      
           <DestinationData  
           className="first-des"
           heading="Taal Volcano, Batangas"

           text="One of the most iconic views Luzon, Mt. Taal boasts a valcano inside a lake insie an island. If you fancy a closer looks, the hike up to the creater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including valcanic rocks and stream vents.The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
           
           img1="https://images.unsplash.com/photo-1663050891405-287645cf0775?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
           img2="https://images.unsplash.com/photo-1529663991015-c3d2056835c5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
           />
         <DestinationData 
          className="first-des-reverse" 
           heading="Mt.Daguldul,Batangas"

           text="If you're looking for a hike that's a little more challenging but still good for a beginner mountainer,check out Mt.Daguldul in San Juan, Batangas. You'll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There's a small store halfway up the trail where you can take a break and drink buko juice, and through the summit itself may not have the best view, the breeze is fantastic. Once you're made it back down, head straight to the beach for a refreshing, well-deserved swim."
           
           img1="https://images.unsplash.com/photo-1693559018746-e627737a11d7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
           img2="https://images.unsplash.com/photo-1764357030659-9244f92d81e0?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"

           />

       </div>
     
    );
}

export default Destination 