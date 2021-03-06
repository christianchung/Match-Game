import React from "react";
import "./CharacterCard.css";


const CharacterCard = props => (
    <div className="card">
    <div className="img-container">
    <a onClick={() => props.selectCharacter(props.name)}
    className = {props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}>
    <img alt={props.name} src={props.image}/>
    </a>
    </div>
    </div>
);

export default CharacterCard;
