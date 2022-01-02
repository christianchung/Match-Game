import React from "react";

const CharacterCard = props => (
	<div className="card">
	<div className="img-container">
	<img alt={props.name} src={props.image}/>
	</a>
	</div>
	</div>
);

export default CharacterCard;
