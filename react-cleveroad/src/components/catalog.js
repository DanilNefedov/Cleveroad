import React from 'react';
import Edit from './edit';
import Delete from './delete';
import {
	BrowserRouter,
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink
} from 'react-router-dom';
import itemList from '../item-list';
import ItemDisp from './item';
import base from '../index';




class Item extends React.Component{
	state = {
		items: {},
		order: {}
	}




	addItem = (item) =>{

		//делаем копию объекта state
		const items = {...this.state.items};

		//добавляем новую переменную item в items
		items[`item${Date.now()}`] = item;

		//Записать наш новый объекст items в state
		this.setState({items}); //ES6 
	};


	updatedItem = (key, updateItem) =>{
		const items = {...this.state.items};
		items[key] = updateItem;
		this.setState({items})
	}
	


	loadItemList = () => {
		this.setState({items:itemList})
	}



	deleteItem = key => {
		const items = {...this.state.items};

		delete items[key];
		this.setState({items});
	}



	render(){
		return(
			<div className="container-item">
				<ul className='item-block'>
					{Object.keys(this.state.items).map(key =>{//проходим по всем ключам объекта
						return (<ItemDisp 
						key={key}
						index={key}
						details={this.state.items[key]}
						/>
						)
					})}
						
						
					
				</ul>
			<BrowserRouter>
				<Router basename='/'>

					<NavLink to='/edit' className='btn-item' >Редактировать</NavLink>
					<NavLink to = '/delete' className='btn-item' >Удалить</NavLink>

				
					<Switch>
						<Route path ='/Edit' component={Item}>
							<Edit 
							addItem={this.addItem}
							loadItemList={this.loadItemList}
							items = {this.state.items }
							updatedItem = {this.updatedItem}
							deleteItem = {this.props.deleteItem}
							/>
						</Route>
						<Route path ='/Delete' component={Delete}>
							<Delete
							
							/>
						</Route>
					</Switch>
				

				</Router>
			</BrowserRouter>
		</div>
		)
	}
	

}

export default Item;