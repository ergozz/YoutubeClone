import { createContext, useEffect, useState } from "react";
import { categories } from "../utils/constants";
import { getData } from "../utils/helpers";

export const YoutubeContext = createContext();


export const YoutubeProvider = ({children}) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const [videos,setVideos] = useState(null);

    useEffect(()=>{
     if(selectedCategory.type==="home" || selectedCategory.type === 'trending') {
        setVideos(null)
        getData(`/${selectedCategory.type}`).then(res =>{

            const filtered = res.data.data.filter(item => item.type ==='video');
            setVideos(filtered);
          
        })
     }
     if(selectedCategory.type === "category") {
        //eski stati temizle 
        setVideos(null)
        getData(`/search?query=${selectedCategory.name}`)
        .then(res=> {
            const filtered = res.data.data.filter(item => item.type ==='video');
            setVideos(filtered);
        })
     }
    },[selectedCategory])

    return (
        <YoutubeContext.Provider value={{selectedCategory,setSelectedCategory,videos}}>
            {children}
        </YoutubeContext.Provider>
    )
}