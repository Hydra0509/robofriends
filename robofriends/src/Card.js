import React from 'react';

const Card = (props) =>{
	return (
		<div className='tc bg-blue b--light-blue bw1 shadow-5 dib br3 ba pa3 ma2 fl w-15 grow'>
			<img alt="photo" src={`https://robohash.org/${props.id}?500x500`} />
		<div>
			<h2>{props.name}</h2>
			<p>{props.email}</p>
		</div>
	</div>

	);

} 

export default Card;