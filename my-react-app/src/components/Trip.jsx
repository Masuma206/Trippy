import TripData from "./TripData";
import "./TripStyle.css";

function Trip (){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image="https://images.unsplash.com/photo-1476158085676-e67f57ed9ed7?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                heading="Trip in Indonesia"
                text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 island, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
                />
                <TripData
                image="https://images.unsplash.com/photo-1720511849359-4fa5df588340?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                heading="Trip in Malaysia"
                text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo.it's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences."
                />
                <TripData
                image="https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                heading="Trip in France"
                text="France, in Western Europe,encompasses medieval cities,alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the louvre and monuments like the Eiffel Tower. "
                />
            </div>
        </div>
    );
}

export default Trip;