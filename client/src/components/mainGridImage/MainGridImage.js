import React from 'react';
import {Col, Row} from "antd";
import mainImage1 from '../../images/homePage/main1.jpg'
import mainImage2 from '../../images/homePage/main2.png'
import mainImage3 from '../../images/homePage/main3.png'
import mainImage4 from '../../images/homePage/main4.png'
import member1 from '../../images/homePage/member1.png'
import member2 from '../../images/homePage/member2.png'
import member3 from '../../images/homePage/member3.png'
import {ColContentContainer, MainGridImageContainer} from "./mainGridImageStyles";

function MainGridImage({member}) {
    let images;

    if (member) {
        images = [
            {images: member1, desc: " Teacher’s Day."},
            {images: member2, desc: " Teacher’s Birthday."},
            {images: member3, desc: " Korean Physical Society in JEJU"}
        ]
    } else {
        images = [
            {images: mainImage1},
            {images: mainImage2},
            {images: mainImage3},
            {images: mainImage4}
        ]
    }

    return (
        <MainGridImageContainer member={member}>
            <Row gutter={{xs: 2, sm: 4, md: 8, lg: 16}}>
                {
                    images.map(item => (
                        <Col lg={1} md={2} xs={4}>
                            <ColContentContainer >
                                <img src={item.images} alt={item.images}/>
                                {member &&
                                <span> {item.desc} </span>
                                }
                            </ColContentContainer>
                        </Col>
                    ))
                }
            </Row>
        </MainGridImageContainer>
    );
}

export default MainGridImage;