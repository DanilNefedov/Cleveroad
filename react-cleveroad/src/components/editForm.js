import React from 'react';


class EditForm extends React.Component{

	handleChange = (event) =>{	
		const updateItem = {
			...this.props.item,
			[event.currentTarget.name]:event.currentTarget.value,
		}

		this.props.updatedItem(this.props.index, updateItem)
	}


	render(){

		return(
			<div className='editForm'>
				<input className='editForm-input' type='text' onChange={this.handleChange} name='photo' value={this.props.item.photo}/>
				<input className='editForm-input' onChange={this.handleChange} name='name' type="text"  value={this.props.item.name}/>
				<input className='editForm-input' onChange={this.handleChange} name='about' type="text"  value={this.props.item.about}/>
				<input className='editForm-input' onChange={this.handleChange} name='price' type="text"  value={this.props.item.price}/>
				<button onClick={function(){this.props.deleteItem(this.props.index)}}>Удалить</button>
			</div>
		)
	}
}



export default EditForm;


