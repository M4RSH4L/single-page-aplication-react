import React, {useEffect, useState} 
from 'react';
import Gif from './Gif'
import getGifs from '../services/getGifs'

export default function ListOfGif ({params}){
  
   const { keyword } = params 

   const [gifs, setGifs] = useState([])

   useEffect(function(){
      getGifs({keyword })
      .then(gifs => setGifs(gifs))
    }, [keyword]) 

   return <div> 
      {
      gifs.map(({id, title, url})=>
     <Gif 
     // id={id}
     key={id }
     title={title} 
     url={url} 
     />  
     )       
      }
  
  </div> 
  }