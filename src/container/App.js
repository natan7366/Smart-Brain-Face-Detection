import React, {Component} from 'react';
import Navigation from '../components/Navigation/Navigation';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';
import Logo from '../components/Logo/Logo';
import Rank from '../components/Rank/Rank';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
	particles: {
		number:{
			value: 80,
			density:{
				enable: true,
				value_area: 800
			}
		}
	}
} 

const initialState = {
	input: '',
	imgUrl: '',
	box: {},
	route: 'signin',
	isSignedIn: false,
	user: {
		id: '',
		name: '',
		email : '',
		entries: 0, 
		joined: ''
	}
}

class App extends Component {
	constructor() {
		super();
		this.state = initialState;
	}

	// componentDidMount() {
	// 	fetch('http://localhost:3000')
	// 		.then(response => response.json())
	// 		.then(data => console.log(data)) // A short way is just console.log
	// }

	loadUser = (data) => {
		this.setState ({user: {
			id: data.id,
			name: data.name,
			email : data.email,
			entries: data.entries, 
			joined: data.joined
		}})
	}

	calculateFaceLocation = (data) => { /*converting the location from % to pixels*/
		const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById('inputimage');
		const width = Number(image.width);
		const height = Number(image.height);
		console.log(width, height)
		return {
			leftCol: clarifaiFace.left_col*width,
			rightCol: width - clarifaiFace.right_col*width,
			topRow: clarifaiFace.top_row*height,
			bottomRow: height - clarifaiFace.bottom_row*height
		}
	}

	displayFaceBox = (mybox) => {
		console.log(mybox);
		this.setState( {box: mybox} )
	}

	onInputChange = (event) => {
		// console.log ('event.target.value');
		this.setState( {input: event.target.value} );
	}

	onButtonSubmit = () => {
		// console.log('click');
		this.setState ({imgUrl: this.state.input}) 
		fetch('https://whispering-fjord-40915.herokuapp.com/imageurl', {
			method: 'post', //because the default of fetch is GET
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({ //we can't just send a js object to the server, but as a json
				input: this.state.input
			})
		})
		.then(response => response.json())
		.then( response => {
			if (response) {
				fetch('https://whispering-fjord-40915.herokuapp.com/image', {
					method: 'put', //because the default of fetch is GET
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({ //we can't just send a js object to the server, but as a json
						id: this.state.user.id
					})
				})
				.then(response => response.json())
				.then(count => {
					this.setState (Object.assign(this.state.user, {entries: count}))
				})
				.catch(console.log) // = console.log(err)

			}	

			this.displayFaceBox(this.calculateFaceLocation(response) ) 
		})
	    .catch( err => console.log(err) )
	}

	onRouteChange = (route) => {
		if (route==='signout'){
			this.setState( initialState );
		} else if (route==='home'){
			this.setState( {isSignedIn: true} );
		}
		
		this.setState( {route: route} );
	}

	render () {
		const {isSignedIn, imgUrl, route, box, user} = this.state;
		return (
			<div className="App">
				<Particles className='particles'
			        params={particlesOptions}
			    />
			    
				<Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
			    { route === 'home' 
					?	<div> 
						    <Logo />
						    <Rank name ={user.name} entries= {user.entries}/>
						    <ImageLinkForm 
							    onInputChange = {this.onInputChange} 
							    onButtonSubmit = {this.onButtonSubmit}
						    />
					        <FaceRecognition box = {box} imgUrl = {imgUrl}/>	
				        </div> 

			    	: (
				    	route === 'signin'
						? <SignIn  loadUser={this.loadUser} onRouteChange = {this.onRouteChange} /> 
						: <Register loadUser={this.loadUser} onRouteChange = {this.onRouteChange} />
			    	  )
			    }
			    
		    </div>
	  );
	}
	  
}

export default App;


// onButtonSubmit = () => {
// 		// console.log('click');
// 		this.setState ({imgUrl: this.state.input}) 
// 		app.models.predict(
// 			Clarifai.FACE_DETECT_MODEL,
// 			this.state.input) /*the url*/
// 		.then(
// 	    function(response) {
// 	      // console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
// 	      this.calculateFaceLocation(response);
// 	    },
// 	    function(err) {
// 	      // there was an error
// 	    }
// 	  );
// 	}