import React, {useContext} from 'react';
import {Context} from '../index';
import firebase from 'firebase';


const Login = () => {

	const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }




	return(
		<div className="login">
			<div className="container">
				<button onClick={login} className="login-btn">
					Войти с помощью Google
				</button>
			</div>
		</div>
	)
}
export default Login;












// const style ={
// 	form:{
// 		maxWidth: 600,
// 		borderWidth: 1,
// 		borderStyle: 'solid',
// 		borderColor:'blue',
// 		paddingTop:25,
// 		paddingRight:25,
// 		paddingBottom:25,
// 		paddingLeft:25,
// 		marginTop: 200,
// 		marginLeft:'auto',
// 		marginRight:'auto',
// 		display:'flex',
// 		flexDirection:'column',
// 		borderRadius:10,
// 	},

// 	label:{
// 		display:'flex',
// 		flexDirection:'column',
// 		fontSize:18,
// 		color:'blue',
// 	},
	
// }


// const btn = {
// 	maxWidth:150,
// 	backgroundColor:'white',
// 	marginLeft:'auto',
// 	marginRight:'auto',
// 	textAlign:'center',
// 	color:'blue',
// 	fontWeight:800,
// 	fontSize:18,
// 	paddingTop:10,
// 	paddingLeft:10,
// 	paddingRight:10,
// 	paddingBottom:10,
// 	marginTop:20,
// 	borderColor:'blue',
// 	cursor:'pointer'
// }



// const log ={
// 	marginTop: 10,
// 	paddingBottom: 10,
// 	paddingTop:10,

// }




// export default function Login() {
// 	return(
// 		<form style={style.form}>
//         	<label style={style.label}>
//           		Login:<input style={log} type="text" />
//           		Password:<input style={log} type="password"/>
//         	</label>
//         	<input onChange = {() => console.log('w')} style={style.input, btn} type="submit" value="Log in" />
//       	</form>
// 	)
// }