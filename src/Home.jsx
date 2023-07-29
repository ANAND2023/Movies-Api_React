import AllMovie from "./Allmovies";

import Search from "./Search";

const Home = () => {
  return (
    <>
      <div className="container">
        {/* plz subsribe to thapa technical channel 
          https://www.youtube.com/thapatechnical
         */}
        <Search />
        <AllMovie/>
      </div>
    </>
  );
};

export default Home;


// import React from 'react'
// import Search from './Search'

// import Allmovies from './Allmovies'

// const Home = () => {
//   return (
//     <>
  
//     <Search/>
//  <Allmovies/>
   
//     </>
//   )
// }

// export default Home