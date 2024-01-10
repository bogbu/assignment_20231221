import Img1 from "../../../../public/assets/img1.png";
import Img2 from "../../../../public/assets/img2.jpg";
import Img3 from "../../../../public/assets/img3.png";
import Img4 from "../../../../public/assets/img4.png";
import Img5 from "../../../../public/assets/img5.png";
import Img6 from "../../../../public/assets/img6.png";
export const newsList: newsType[] = [
    {
        title: "Snorlax Blocks Out the Competition",
        text: "The Sleeping Pokémon is snoozing and  winning in the Pokémon TCG with a unique strategy that doesn’t take Prize cards.",
        src: Img1,
        color : "gray",
        isWidth : false

    },
    {
        title: "Pokémon GO January Community Day: Rowlet",
        text: "",
        src: Img2,
        color : "green",
        isWidth : true

    },
    {
        title: "The Hidden Treasure of Area Zero  Part 2: The Indigo Disk  Now Available",
        text: "",
        src: Img3,
        color : "black",
        isWidth : false
    },
    {
        title: "New Season Overview for the GO Battle League",
        text: "",
        src: Img4,
        color : "sand",
        isWidth : false

    },
    {
        title: "Celebrate the New Year with Snazzy Seasonal Sync Pairs",
        text: "",
        src: Img5,
        color : "blue",
        isWidth : false

    },
    {
        title: "Scarlet & Violet Series Artist Debuts",
        text: "",
        src: Img6,
        color : "red",
        isWidth : false
    }
]

interface newsType {
    title: string,
    text: string,
    src: string,
    color : string,
    isWidth : boolean
}