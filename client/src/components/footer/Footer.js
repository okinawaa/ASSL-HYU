import React from 'react';
import {FooterContainer} from "./footerStyles";
import mark1 from '../../images/homePage/mark1.png'
import mark2 from '../../images/homePage/mark2.png'
import mark3 from '../../images/homePage/mark3.png'
function Footer() {
    const images = [mark1, mark2,mark3]
    return (
        <FooterContainer>
            {
                images.map(item=>(
                    <img key={item} src={item} alt={item}/>
                ))
            }

        </FooterContainer>
    );
}

export default Footer;