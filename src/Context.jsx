import React, { useContext, useState } from "react";
import useFetch from "./useFetch";

const AppContext = React.createContext();

/* plz subsribe to thapa technical channel 
          https://www.youtube.com/thapatechnical
         */

// we are getting the children and that is app component in our case
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("hacker");
  const { isLoading, isError, movie } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ query, movie, setQuery, isLoading, isError }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };


// import React, { useContext, useEffect, useState } from "react"

// const API_URL=`https://www.omdbapi.com/?apikey=727bbdc1&s=titanic`

// const AppContext=React.createContext();
// const AppProvider=({children})=>{
//     const [isLoading,setIsLoading]=useState(true)
//     const [movie,setMovie] =  useState([]);
//     const [isError,setIsError]=useState({show:"false" ,msg:""})

// const getMovies= async(url)=>{
//     try{
//         const res=await fetch(url)
//         const data= await res.json();
//         console.log(data)
//         if(data.response==="true"){
//             setMovie(data.search)
//             setIsLoading(false)
//         }
//         else{
//             setIsError({
//                 show:"true",
//                 msg:data.error
//             })
//         }
//     }catch(error){
//         console.log(error)
//     }
// }

//         useEffect(()=>{
//         getMovies(API_URL)
// },[])

//    return(
//     <AppContext.Provider  value={{isLoading,isError,movie}}>
//         {children}
//     </AppContext.Provider>
//    )}

//    const useGlobalContext=()=>{
//     return useContext(AppContext)
//    }

// export {AppContext, AppProvider,useGlobalContext}