import React from 'react';
import {MemberContainer} from "./memberPageStyles";
import NavBar from "../../components/navbar/NavBar";
import Title from "../../components/title/Title";
import MemberCard from "../../components/memberCard/MemberCard";
import professorImg from '../../images/membersPage/professor.jpg'
import EducationList from "../../components/EducationList/EducationList";
import ArticleList from "../../components/articleList/ArticleList";
import BorderLine from "../../components/borderLine/borderLine";
import hoonJungImg from "../../images/membersPage/HoonJung.jpg"
import EunJiParkImg from "../../images/membersPage/EunJiPark.jpg"
import JongSeonParkImg from "../../images/membersPage/JongSeonPark.jpg"
import YeJinOhImg from "../../images/membersPage/YeJinOh.png"
import JinPilKimImg from "../../images/membersPage/JinPilKim.png"
import HyeMiParkImg from "../../images/membersPage/HyeMiPark.png"
import InChulParkImg from "../../images/membersPage/InChulPark.png"
import EunKyoungParkImg from "../../images/membersPage/EunKyoungPark.png"
function MemberPage(props) {
    const members =  [
        {name : "Eun Ji Park", position:"Ph. D. student", desc:"pj2033@gmail.com" , image : EunJiParkImg},
        {name : "Jong Seon Park", position:"Ph. D. student", desc:"jonsn@gmail.com" , image : JongSeonParkImg},
        {name : "Ye Jin Oh", position:"Ph. D. student", desc:"ohyejin0730@gmail.com" , image : YeJinOhImg},
        {name : "Jin Pil Kim", position:"M.S. student", desc:"kimjinpil0649@gmail.com", image : JinPilKimImg },
        {name : "Hye Mi Park", position:"M.S. student", desc:"hyem92@hanyang.ac.kr", image : HyeMiParkImg },
        {name : "In Chul Park", position:"Undergraduate Student", desc:"qkrdlscjf@hanyang.ac.kr", image : InChulParkImg },
        {name : "Eun Kyoung Park", position:"Undergraduate Student", desc:"kamj1020@hanyang.ac.kr" , image : EunKyoungParkImg},

    ]
    return (
        <>
            <NavBar normal={"normal"}/>
            <MemberContainer>
                <Title title={"MEMBERS"}/>
                <MemberCard image={professorImg} position={"Professor"} name={"Ji Won Kim"}
                            desc={"Department of Photonics and Nanoelectronics\n" +
                            "Hanyang University, ERICA campus\n" +
                            "jwk7417@hanyang.ac.kr\n"}/>
                <Title size={"small"} title={"Education"}/>
                <EducationList/>
                <Title size={"small"} title={"Main article"}/>
                <ArticleList/>
                <BorderLine/>
                <MemberCard image={hoonJungImg} position={"공동 연구 및 지도 "} name={"Hoon Jung"}
                            desc={"KITECH (Korean Institute of Industrial Technology)\n" +
                            "hoonj@kitech.re.kr\n"}/>
                {
                    members.map(member=>(
                        <React.Fragment key={member.name}>
                            <BorderLine/>
                            <MemberCard image={member.image} name={member.name} desc={member.desc} position={member.position}/>
                        </React.Fragment>
                    ))


                }
            </MemberContainer>
        </>
    );
}

export default MemberPage;