import React from 'react';
import {DescContainer, MemberCardContainer } from "./memberCardStyles";


function MemberCard({image,position,name,desc}) {
    return (
        <MemberCardContainer>
            <img src={image}/>
            <DescContainer>
                <span>{position}</span>
                <span>{name}</span>
                <p>{desc.split("\n").map((item)=>(
                    <>
                        {item}
                        <br />
                    </>
                ))}</p>
            </DescContainer>
        </MemberCardContainer>
    );
}

export default MemberCard;