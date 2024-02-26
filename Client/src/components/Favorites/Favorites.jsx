import { useSelector } from "react-redux";
import Card from "../Card/Card";

export default function Favorites(){
    const myFavorites = useSelector((state)=>state.myFavorites);

    return(
        <div>
            {myFavorites?.map((fav)=>(
                <Card 
                    id={fav.id} 
                    name = {fav.name}
                    key={fav.id}
                    gender={fav.gender}
                    image={fav.image}
                />
            ))}
        </div>
    )
}