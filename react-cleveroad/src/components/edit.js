import React from 'react';
import AddItem from './addItem';
import EditForm from './editForm'






class Edit extends React.Component{

	render(){
		return(
			<div>
				<h2>Изменение товара</h2>
				{Object.keys(this.props.items).map(key => {
					return( <EditForm 
					key={key} 
					index={key}
					item={this.props.items[key]}
					updatedItem = {this.props.updatedItem}
					deleteItem = {this.props.deleteItem}
					/>
				)
				})}
				<AddItem addItem={this.props.addItem}/>
				<button onClick={this.props.loadItemList}>Загрузить товар</button>
			</div>
			

		)
	}
}
	


export default Edit;