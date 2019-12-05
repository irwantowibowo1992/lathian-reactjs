import React, { Component, Fragment } from 'react'
import './Products.css'
import CardProduct from '../CardProduct/CardProduct'

class Products extends Component {

	constructor(props){
		super(props)

		this.state = {
			order: 5
		}
	}

	handleOnChange = newValue => {
		this.setState({
			order: newValue
		})
	}

	render(){
		return(
			<Fragment>
				<div className="card">
					<div className="card-header">
						<p>Jumlah item : {this.state.order}</p>
					</div>
					
					<CardProduct onCounterChange={value => this.handleOnChange(value) } />
				</div>
			</Fragment>
		)
	}
}

export default Products