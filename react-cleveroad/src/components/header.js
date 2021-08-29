import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../consts/untils";
import {useAuthState} from 'react-firebase-hooks/auth';
import {Context} from '../index'




const Header = () => {
	const {auth} = useContext(Context);
	const  [user] = useAuthState(auth);

	return(
		<div className = 'header'>

			{user ?
				<button onClick={() => auth.signOut()} className="btn">Выйти</button>
				:
				<NavLink to={LOGIN_ROUTE}>
					<button className="btn">Логин</button>
				</NavLink>
				
			}
			
			
		</div>
	)
}

export default Header;















// const style = {
// 	nav:{
// 		paddingTop: 75,
// 		display:'flex',
// 		width:700,
// 		justifyContent:'space-between',
// 		margin: 'auto',
// 		fontSize: 20,
// 	},

// 	a:{
// 		color:'black',
// 		transition:0.3,
// 	},

// }


// export default function Navigation(){
// 	return(
// 		<nav style={style.nav}>
// 			<a style={style.a} href="">
// 				Добавить новый товар
// 			</a>
// 			<a style={style.a} href="">
// 				Редактировать товар
// 			</a>
// 		</nav>
// 	)
// }