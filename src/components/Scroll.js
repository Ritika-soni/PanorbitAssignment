import React from 'react';

const Scroll = (props) => {
  return (
  	<div className= 'flex justify-center content-center'>
	    <div style={{ overflow: 'scroll', border: '5px solid black', height: '400px', width:  '300px' }}>
	      {props.children}
	    </div>
	</div>
  );
};

export default Scroll;