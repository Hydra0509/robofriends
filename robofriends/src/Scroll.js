import React from 'react'

const Scroll = (props) => {
	return (
		<div style={{padding:'150px' , overflow: 'scroll' , border: '5px solid black' , height: '800px' , width: '1900px'}}>
		{props.children}
		</div>
		);
};




export default Scroll;