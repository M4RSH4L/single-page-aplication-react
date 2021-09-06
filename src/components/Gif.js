import React from 'react'
import './Giff.css'

export default function Gif ({title, id, url}) {
    return (
        <a href={`#${id}`} className='Gif'>
              <h4> {title}</h4>
              <small>{id}</small>
              <img alt={title} src={url}/> 
            </a>
    )
}