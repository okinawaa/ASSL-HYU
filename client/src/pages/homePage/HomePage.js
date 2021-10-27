import React from 'react';
import {HomeContainer, MainImgContainer} from "./homeStyles";
import mainImage from '../../images/mainImage.png'

function HomePage(props) {
    return (
        <HomeContainer>
            <MainImgContainer >
                <img src={mainImage}/>
                <h1>Advanced Solid State Laser Lab.</h1>
            </MainImgContainer>

        </HomeContainer>
    );
}

export default HomePage;