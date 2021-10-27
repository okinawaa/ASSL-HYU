import React from 'react';
import {TitleStyled} from "./titleStyles";

function Title({title, size}) {

    return (
        <TitleStyled>
            {
                size === 'small' ? <h3> {title} </h3> : <h2 >{title}</h2>
            }
        </TitleStyled>
    );
}


export default Title;