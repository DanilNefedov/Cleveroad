import React from 'react';






class AddItem extends React.Component{

	photoRef = React.createRef();
	nameRef = React.createRef();
	aboutRef = React.createRef();
	priceRef = React.createRef();



	createItem = (event) =>{
		event.preventDefault();


		const item = {
			photo: this.photoRef.current.value,
			name: this.nameRef.current.value,
			about: this.aboutRef.current.value,
			price: parseFloat(this.priceRef.current.value || 0) 
		}

		this.props.addItem(item);

		event.currentTarget.reset();
	}

	render(){
		return(
			<form className='add' onSubmit={this.createItem}>
				<input ref={this.photoRef} type='text' name='photo' placeholder="Photo" autoComplete='off'></input>
				<input ref={this.nameRef} type='text' name='name' placeholder="Name" autoComplete='off'></input>
				<input ref={this.aboutRef} type='text' name='about' placeholder="About" autoComplete='off'></input>
				<input ref={this.priceRef} type='text' name='price' placeholder="Price" autoComplete='off'></input>
				<button type='submit'>Загрузить элемент</button>
			</form>
		)
	}
}

export default AddItem;