import React from 'react';
import {MainGridTextContainer} from "../mainGridText/mainGridTextStyles";

function EducationList(props) {

    const carrer = [
        { year : "1990 ~ 1994" , desc : "한국과학기술원(KAIST) 물리학 이학사"},
        { year : "1994 ~ 1996" , desc : "한국과학기술원(KAIST) 물리학 이학석사"},
        { year : "1996 ~ 2000" , desc : "한국과학기술원(KAIST) 물리학 이학박사"},
        { year : "2000 ~ 2004" , desc : "박사후 연구원, 한국과학기술원 자연과학연구소"},
        { year : "2004 ~ 2011" , desc : "Research fellow, Optoelectronics Research Center, Uni. Of Southampton"},
        { year : "2011 ~ 현재" , desc : "교수, 한양대학교 ERICA"},
    ]


    return (<>
            <div style={{marginBottom:'1rem', fontSize:'1.2rem',fontWeight:'800'}}>전공 : 레이저 광학 및 비선형 광학 </div>
            <MainGridTextContainer>
                {
                    carrer.map(item=>(
                        <>
                        <div>{item.year}</div>
                        <div>{item.desc}</div>
                        </>
                    ))
                }

            </MainGridTextContainer>
        </>
    );
}

export default EducationList;