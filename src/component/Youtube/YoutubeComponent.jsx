import React from 'react'
import './YoutubeComponent.css'

const YoutubeComponent = (props) => {
	return(
		<div className="card">
		  <img src={props.img} alt="Avatar" className="img" />
		  <div className="container">
		    <h4><b>{props.nama}</b></h4>
		    <p>{props.job}</p>
		  </div>
		</div>
	)
}

export default YoutubeComponent