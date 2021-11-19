import React from 'react';
import NavBar from "../../components/navbar/NavBar";
import ongoing1 from '../../images/onGoingPage/ongoing1.png'
import ongoing2 from '../../images/onGoingPage/ongoing2.png'
import ongoing3 from '../../images/onGoingPage/ongoing3.png'
import OngoingCard from "../../components/onGoingCard/OngoingCard";
import {OnGoingResearchContainer} from "./onGoingResearchStyles";
import BorderLine from "../../components/borderLine/borderLine";

function OngoingResearchPage() {
    const onGoingResearch = [
        {
            title: "◼  Sagnac interferometer와 s-waveplate를 이용한  polarized vortex beam 생성",
            desc: "변형된 sagnac interferometer를 이용하여 TEM00 mode를 LG mode vortex beam으로 변환하고, S-waveplate를 삽입하여 radial/azimuthal polarization을 가지는 beam을 생성한다. \n",
            image: ongoing1
        },
        {
            title: "◼  이터븀이 첨가된 실리카 기반 실린더형 매질을 이용한 레이저 특성 조사",
            desc: "새로운 레이저 물질로써 Yb이 첨가된 rod 타입의 silica (Yb:silica)의 가능성에 대한 연구를 진행중이다. Yb 첨가 실리카 레이저 매질 Yb:silica를 직경 1 mm의 실린더형으로 가공한 후 레이저 광특성 및 증폭 특성에 대한 연구를 진행중이다.",
            image: ongoing2
        },
        {
            title: "◼  방사형/방위형 편광을 가지는 광소용돌이 레이저빔 생성 및 특성 연구",
            desc: "수동/능동적 방법으로 생성된 방사형/방위형 편광 광소용돌이 고출력 레이저빔의 생성 및 전파 특성 연구, 궤도 각운동량 차수와 편광과의 상관 관계, SCF를 사용한 MOPA 시스템을 구축하여 출력 증강 및 펄스 동작을 수행함과 동시에 광소용돌이 레이저빔으로 비선형 광학 현상을 유도하는 연구를 진행.",
            image: ongoing3
        },
    ]
    return (
        <div>
            <NavBar normal={"normal"}/>
            <OnGoingResearchContainer>
            {
                onGoingResearch.map((oneResearch,index) => (
                    <>
                    <OngoingCard key={index} title={oneResearch.title} desc={oneResearch.desc} image={oneResearch.image}/>
                        <BorderLine/>
                    </>
                ))
            }
            </OnGoingResearchContainer>
        </div>
    );
}

export default OngoingResearchPage;