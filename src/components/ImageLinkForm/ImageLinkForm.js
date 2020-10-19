import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<div>
			<p className='f3'>
				{'This magic brain will detect faces in your pictures,'} <br/> 
				{'upload an image url and give it a try !'}
			</p>
			<div className='center'> {/*a class that sit in the App.css - a display of flex for the input & button*/}
				<div className='center form pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center'  type='text' onChange={onInputChange}/>
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
						onClick={onButtonSubmit} > Detect
					</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;