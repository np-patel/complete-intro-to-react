import React from 'react'
import {render} from 'react-dom'


const ce = React.createElement;

const MyTitle = function(props) {
  // return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
  return (
  		<div>
  			<h1 style={{color: props.color}}>{props.title}</h1>
  		</div>
  	);
};

const MyFirstComponent = function() {
  return (
  		<div id="MyFirstComponent">
  			<MyTitle title = "Game of Thrones" color= "YellowGreen"/>
  			<MyTitle title = "Stranger Things'" color= "GreenYellow"/>
  			<MyTitle title = "AIB" color= "LimeGreen"/>
  			<MyTitle title = "Eeast India Comedy" color= "peru"/>
    </div>
  );
};

render(<MyFirstComponent/>, document.getElementById('app'));
