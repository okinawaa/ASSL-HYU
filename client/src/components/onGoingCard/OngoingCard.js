import React from 'react';
import {OngoingCardContainer, OngoingDescContainer} from "./onGoingCardStyles";

function OngoingCard({title,desc,image}) {
    return (
        <OngoingCardContainer>
            <img src={image} alt={image}/>
            <OngoingDescContainer>
                <span>{title}</span>
                <p>{desc.split("\n").map((item)=>(
                    <React.Fragment key={item}>
                        {item}
                        <br />
                    </React.Fragment>
                ))}</p>
            </OngoingDescContainer>
        </OngoingCardContainer>
    );
}

export default OngoingCard;