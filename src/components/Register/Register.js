import React from 'react';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			name: '',
			email: '',
			password:''
		}
	}

	onNameChange = (event) => {
		this.setState ({name: event.target.value} )
	}

	onEmailChange = (event) => {
		this.setState ({email: event.target.value} )
	}

	onPasswordChange = (event) => {
		this.setState ({password: event.target.value} )
	}

	onSubmitSignIn = () => {
		// console.log(this.state);
		fetch('https://whispering-fjord-40915.herokuapp.com/register', {
			method: 'post', //because the default of fetch is GET
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({ //we can't just send a js object to the server, but as a json
				email: this.state.email,
				password: this.state.password,
				name: this.state.name
			})
		})
			.then(response => response.json())
			.then(user => {
				if (user.id) {
					this.props.loadUser(user)
					this.props.onRouteChange('home');
				}
			})
	}

	render() {
		return(
		<div >
			<article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center">{/*from tachyons card*/}
				<main className="pa4 black-80"> {/*from tachyons signin form*/}
				  <div className="measure ">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f1 fw6 ph0 mh0">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f3" htmlFor="Name">Name</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        type="text" 
					        name="name"  
					        id="name" 
					        onChange = {this.onNameChange}
				        />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f3" htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
					        type="email" 
					        name="email-address" 
					        id="email-address" 
							onChange = {this.onEmailChange}
				        />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f3" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        type="password" 
					        name="password"  
					        id="password" 
					        onChange = {this.onPasswordChange}
				        />
				      </div>
				    </fieldset>
				    <div className="">
				      <input 
				      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				       onClick={this.onSubmitSignIn}
				       type="submit"
				       value="Register"
				      />
				    </div>
				  </div>
				</main>
			</article>
		</div>
		);
	}
}


export default Register;