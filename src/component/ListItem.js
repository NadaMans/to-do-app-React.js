import React from 'react';
import './ListItem.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move'


function ListItems (props){
   const items = props.items;
   let length = items.length;
   const listItems = length?( items.map(item=>
{
	return (<div className="list" key={item.key}>
		<p>{item.text}
        <span> 
            <FontAwesomeIcon className="faicon" icon='trash'
            onClick={()=> props.deleteItem(item.key)}/>
        </span>
        </p>
        
		</div>) 

})) : (<p className="noI">There is no items to show</p>)


	return(

		<div>
            <FlipMove duration={500} easing = "ease-in-out">
            {listItems}
            </FlipMove>
        </div>
)	

}

export default ListItems;