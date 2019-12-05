import React, { Component } from 'react'

class CardProduct extends Component {

	constructor(props){
		super(props)

		this.state = {
			order: 5
		}
	}

	handleCounterChange = () => {
		this.props.onCounterChange(this.state.order)
	}

	handleTambah = () => {
		this.setState({
			order: this.state.order + 1
		}, () => {
			this.handleCounterChange();
		})
	}

	handleKurang = () => {
		if(this.state.order > 0){
			this.setState({
				order: this.state.order - 1
			}, () => {
				this.handleCounterChange()
			})
		} else {
			alert ("Value tidak boleh kurang dari 0")
			return false
		}
	}

	render() {
		return(
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
		)
	}
}

export default CardProduct