import React from 'react'


function ELEMENT(props){

    return(
        <div className="test">
            
            <img src={props.image} alt=""/>
            <h2>{props.date}</h2>
        </div>

    );

}


export default ELEMENT;