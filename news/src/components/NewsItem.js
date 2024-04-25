import React from 'react'
import image from "../assets/images/buba.jpg";

function NewsItem({title, description, src, url}) {
  return (
    <div className="card bg-dark text-light d-inline-block mb-3 mx-3 my-3 px-2 py-2" style={{maxWidth: '345px'}}>
      <img src={src?src: image} style={{height: '200px', width: ''}} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,100): "One could argue that Google just made its biggest announcement in years, as it formed a new \"Platforms and Devices\" division. I can't shake the feeling that the Google that we know and love will never be the same again."}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  )
}

export default NewsItem