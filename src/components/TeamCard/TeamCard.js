import React from 'react';
import './TeamCard.css';

const TeamCard = props => (
    <div className="card" onClick={() => props.clickCount(props.id)}>
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
            <ul>
                <li>
                    <strong>Team Name:</strong> {props.name}
                </li>
                <li>
                    <strong>Country of Origin:</strong> {props.location}
                </li>
            </ul>
        </div>
    </div>
);

export default TeamCard;
