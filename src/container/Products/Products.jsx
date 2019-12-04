import React, { Component, Fragment } from 'react'
import './Products.css'

class Products extends Component {

	constructor(props){
		super(props)

		this.state = {
			order: 5
		}
	}

	handleTambah = () => {
		this.setState({
			order: this.state.order + 1
		})
	}

	handleKurang = () => {
		if(this.state.order > 0){
			this.setState({
				order: this.state.order - 1
			})
		} else {
			alert("Value minimal 0")
			return false
		}
	}

	render(){
		return(
			<Fragment>
				<div className="card">
					<div className="card-header">
						<p>Jumlah item : {this.state.order}</p>
					</div>
					<div>
						<img src="https://www.w3schools.com/w3images/jeans3.jpg" alt="Denim Jeans" className="img" />
						<h1>Tailored Jeans</h1>
						<p className="price">Rp. 200.000,-</p>
						<p>lorem ipsum dolor sit amet adispicing wuo wuoy amoy katuve cupu</p>
						<p>
							<button className="btn" onClick={this.handleKurang} > - </button>
							<input type="text" className="input" value={this.state.order} />
							<button className="btn" onClick={this.handleTambah}> + </button>
						</p>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Products