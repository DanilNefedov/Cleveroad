import React from 'react';



class ItemDisp extends React.Component{
	render(){
		const photo = this.props.details.photo;
		const name = this.props.details.name;
		const about = this.props.details.about;
		const price = this.props.details.price;


		return(
			<li className='itemComp'>
				<div>
					<img className='item-img' src={photo} alt="Item"/>
				</div>
				<div className='text-item name'>
					<h3>{name}</h3>
				</div>
				<div className='text-item about'>
					<p>{about}</p>
				</div>
				<div className='text-item price'>
					<p>{price}$</p>
				</div>
			</li>
			
		)
	}
}

export default ItemDisp;