import React from 'react';
import {ContentContainer, HomeContainer, MainImgContainer} from "./homeStyles";
import mainImage from '../../images/homePage/mainImage.png'
import NavBar from "../../components/navbar/NavBar";
import MainGridImage from "../../components/mainGridImage/MainGridImage";
import BorderLine from "../../components/borderLine/borderLine";
import Title from "../../components/title/Title";
import MainGridText from "../../components/mainGridText/MainGridText";
import Footer from "../../components/footer/Footer";

function HomePage(props) {

    return (
        <HomeContainer>
            <MainImgContainer>
                <img src={mainImage}/>
                <h1>Advanced Solid State Laser Lab.</h1>
            </MainImgContainer>
            <NavBar/>
            <ContentContainer>
                <p><span>레이저</span>는 1960년 처음 개발된 이후 우수한 특성으로 인해 산업, 군사, 의료, 학문 등 광범위한 분야에서 사용되고 있으며 최근에는 4차 산업혁명의 시대를
                    맞아 필수적인 기반
                    기술로서 그 중요성과 응용 분야는 점점 넓어지고 있다. 이에 맞추어 <span>첨단레이저 연구실</span>에서는 여러 가지 종류의 고출력 첨단 고체 레이저 시스템을 연구,
                    개발하고 있다. 주요 연구
                    분야는 <span>고출력 고체 레이저</span>, <span>광섬유 레이저</span>, <span>하이브리드 레이저</span> 등 다양한 고체 레이저 시스템에서 레이저의 근본
                    현상 탐구 및 발진 특성 연구, 수 W에서 >1 kW에 이르는
                    고출력, 고에너지 레이저 빔의 효율적 생성, 출력 빔 특성을 조절 및 개선할 수 있는 레이저 시스템 연구 및 개발이다. 이와 더불어 비선형 광학 현상을 이용한 파장 변환 가시광 및
                    UV 레이저에 대한 연구도 병행하고 있고, 향후 고출력 레이저 빔과 물질과의 상호작용, 새로운 레이저 응용 분야 탐구에도 많은 관심을 가지고 있다.
                </p>
                <MainGridImage/>
                <BorderLine/>
                <Title title={"RECENT HIGHLIGHTS"}/>
                <MainGridImage member={"member"}/>
                <BorderLine/>
                <Title title={"RESEARCH IN THE ASSL LABS IS SUPPORTED BY"}/>
                <MainGridText/>
                <Footer/>

            </ContentContainer>


        </HomeContainer>
    );
}

export default HomePage;