import React from 'react';
import {DescContainer, MemberCardContainer } from "./memberCardStyles";


function MemberCard({image,position,name,desc}) {
    return (
        <MemberCardContainer>
            <img src={image} alt={image}/>
            <DescContainer>
                <span>{position}</span>
                <span>{name}</span>
                <p>{desc.split("\n").map((item)=>(
                    <React.Fragment key={item}>
                        {item}
                        <br />
                    </React.Fragment>
                ))}</p>
            </DescContainer>
        </MemberCardContainer>
    );
}

export default MemberCard;