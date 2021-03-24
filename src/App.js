import { useState } from 'react';
import DebounceInput from './input';

function App() {
	const onFinish = (val) => {
    if(!val.value){
      return
    }
    console.log('val :>> ', val);
    if (val.name === 'userName') {
			setUsrName(val.value);
		} else {
			setPassword(val.value);
		}
    console.log("Updating Status");
    setTimeout(() => {
      console.log("Updated");
    }, 2000);
	};
	const [ usrName, setUsrName ] = useState('');
	const [ password, setPassword ] = useState('');
  const onSubmit=(e)=>{
    alert("Login success!");

    e.preventDefault();
  }
	return (
		<div className="container">
      <div className="content">
			<h1>Simple login form</h1>
			<form onSubmit={onSubmit}>
        <label>Username:</label>
				<DebounceInput
					placeholder=''
					type='text'
					name='userName'
					value=''
					size='60'
					onFinish={onFinish}
				/>
				<br />
        <label>Password:</label>
				<DebounceInput
					placeholder=''
					type='password'
					name='passWord'
					value=''
					size='60'
					onFinish={onFinish}
				/>
        <br/>
        <button type='submit'>Login</button>
			</form>
			<hr />
      <h1>Your info</h1>
			<label>UserName: {usrName}</label>
      <br/>
			<label>PassWord: {password}</label>
      </div>
		</div>
	);
}

export default App;
