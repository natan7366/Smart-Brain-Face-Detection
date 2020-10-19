import React from 'react';
import Tilt from 'react-tilt'; /*taken from: https://www.npmjs.com/package/react-tilt*/
import brain_img from './brain.png'
import './Logo.css'

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2 pa3" options={{ max : 60 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner">
					<img style={{paddingTop: '20px'}} alt='logo' src={brain_img}  />
				</div>
			</Tilt>
		</div>
	);
}

export default Logo;