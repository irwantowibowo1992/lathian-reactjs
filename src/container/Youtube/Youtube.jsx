import React, { Component } from 'react'
import YoutubeComponent from '../../component/Youtube/YoutubeComponent'

class Youtube extends Component {

	constructor(props){
		super(props)

		this.state = {
			img: "https:\//www.w3schools.com/howto/img_avatar.png"
		}
	}

	render() {
		return(
			<div>
				<h3>Youtube Component</h3>
				<hr />

				<YoutubeComponent nama="Irwanto" job="CEO" img={this.state.img} />
				<YoutubeComponent nama="Wibowo" job="CTO" img={this.state.img} />
				<YoutubeComponent nama="Agus" job="MANAGER" img={this.state.img} />
				<YoutubeComponent nama="Paijo" job="SUPERVISOR" img={this.state.img} />
			</div>
		)
	}
}

export default Youtube