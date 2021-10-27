import React from 'react';
import {TitleStyled} from "./titleStyles";

function Title({title}) {

    return (
        <TitleStyled>
            <h2 >{title}</h2>
        </TitleStyled>
    );
}


export default Title;