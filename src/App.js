import React, {useState,useEffect}from 'react';
import logo from './logo.svg';
import './App.css';
import ELEMENT from './components/element'

function App() {

const [NASADATA,setData] = useState([])
 useEffect(
()=>{
  getNASAInfo()
},[])// useEffect End

const  getNASAInfo= async() =>{
const key = "fa91vUIuqfycJ6TNqc9q5CYscX3k2aiRxGbCvmLh"
const api   = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=30&api_key=${key}`;

const response = await fetch(api);
const NasaInfo = await response.json();
setData(NasaInfo.photos)
console.log(NasaInfo.photos)

}
  return(
    <div className="app"> 
    {
      NASADATA.map(data=>(
      <ELEMENT  image={data['img_src']} date={data['earth_date']} />
      ))
    }

    </div>
  );

}
export default App;


// fetch(api)
// .then(response=>{
//   return response.json();
// })
// .then(data =>{

//   return (
//     <div className="app">
//       {
//         data.map(info =>{
//           <ELEMENT image={data.photos['img_src']} date={data.photos['earth_date']}/>
//         })
//       }
//     </div>
//     )
// }

// )