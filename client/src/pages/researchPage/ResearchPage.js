import React from 'react';
import {BlockQuoteStyle, InlineCode, MarkDownStyle, Pre, ResearchContainer} from "./researchPageStyles";
import NavBar from "../../components/navbar/NavBar";
import ReactMarkdown from "react-markdown";
import Title from "../../components/title/Title";

const firstMarkdown = `

## ⁜ 고출력 고체 레이저
\`\`\`
- 고출력 고효율 CW 및 펄스 레이저 공진기 및 MOPA 시스템 설계 및 분석
- 펌핑 빔 모양, 도핑 농도, ETU 등에 의한 결정 내 열 발생 및 온도 분포, 열렌즈 분석 및 레이저 발진에 미치는 영향 연구
- Laguerre-Gaussian 모드 레이저빔 생성 연구
- 소용돌이 파면 레이저빔 발생 및 원리 연구
    » 단일 공진기에서 HG 모드 - LG모드를 쉽게 선택할 수 있을 뿐 아니라 두 종류의 모드를 비율에 따라 동시에 발진시킬 수 있어 출력 레이저빔 모양 조절이 가능한 레이저 시스템
    » 세계 최초로 본 연구실에서 연구, 개발하고 구현함
    » 국제 SCI 저널 논문 4편 출판, 국제 학회 초청 발표 2회, 국내 특허 등록 및 국제 특허 출원 완료
\`\`\`
> ![image](https://user-images.githubusercontent.com/69495129/139122704-c1acfb75-a041-4e2d-9f87-6b7593692038.png)


\`\`\`
- 출력 레이저빔 모양을 조절할 수 있는 이중공진기 구조 레이저 시스템 개발 및 연구
    » 단일 공진기에서 HG 모드 - LG모드를 쉽게 선택할 수 있을 뿐 아니라 두 종류의 모드를 비율에 따라 동시에 발진시킬 수 있어 출력 레이저빔 모양 조절이 가능한 레이저 시스템
    » 세계 최초로 본 연구실에서 연구, 개발하고 구현함
    » 국제 SCI 저널 논문 4편 출판, 국제 학회 초청 발표 2회, 국내 특허 등록 및 국제 특허 출원 완료
\`\`\`
> ![image](https://user-images.githubusercontent.com/69495129/139123132-1b16a9c6-bc5e-418c-a368-b90bb057a4b0.png)

　



## ⁜ 고출력 광섬유 레이저
\`\`\`
- 고출력 광섬유 레이저 최적화를 위한 이론적 시뮬레이션
- kW급 고출력 Yb 광섬유 레이저 및 MOPA 시스템 연구 및 개발
- >100 W 급 고출력 Er, Tm & Ho 광섬유 레이저 및 MOPA 시스템 연구 및 개발
- 광섬유 레이저로 펌핑한 광섬유 레이저 (Tandem-pumped laser) 시스템 연구 및 개발
- Self-pulsing 등 광섬유 레이저 발진 메커니즘 연구 및 출력 안정화 기술 개발
- 3 kW 단일 모드 단일 공진기 Yb 광섬유 레이저 개발
    » 양방향 펌핑을 통한 열 분산
    » 단일 모드 3 kW 레이저 개발
    » 국내에서 보고된 가장 높은 출력의 연속발진 광섬유 레이저(2021)
\`\`\`
> ![image](https://user-images.githubusercontent.com/69495129/139124080-e8cebb3f-c7bb-4af3-a4e5-71d2f8ac7c9a.png)
> ![image](https://user-images.githubusercontent.com/69495129/139123807-9368ccb9-479a-49be-ac8f-e97781ba5880.png)

　

## ⁜ 고출력 하이브리드 레이저 : 광섬유 레이저 펌핑 고체 레이저

\`\`\`
- Er 광섬유 레이저으로 펌핑한 고출력 고에너지 Er:YAG 레이저 연구 및 개발
- Tm 광섬유 레이저으로 펌핑한 고출력 고에너지 Ho:YAG & Ho:LLF  레이저 연구 및 개발 
\`\`\`
> ![image](https://user-images.githubusercontent.com/69495129/139121779-e9b02510-3486-45d9-8198-a4911821d449.png)


　


## ⁜ 파장 변환 가시광 레이저

\`\`\`
- 비선형 광학 현상을 이용한 고출력 녹색 레이저 시스템 연구 및 개발
- 지문감식용 녹색 레이저  개발 및 시연
\`\`\`
> ![image](https://user-images.githubusercontent.com/69495129/139122057-44fff81d-3a43-4e2c-9b8f-523f06ed6288.png)
`

const secondMarkdown = `
## ⁜ 논문 및 학회 발표
\`\`\`
- 고출력 고체 레이저 분야 국제 저명 SCI 저널 주저자 및 교신저자 논문 발표 23편 : 상위 20% 이내 7편, 상위 40% 이내 14편
- 국내외 학술 발표 67회 : 국내 42회, 국제 25회, 국제 학회 초청 5회, 국내 학회 초청 6회 
\`\`\`

## ⁜ 수상
\`\`\`
- 2013년 한국광학회 하계학술발표회에서 이정섭 학생 우수 논문상 수상
- 2013년 한국물리학회 추계 학술대회 학부생 연구 포스터 발표회에서 김동준 학생 우수논문상 수상
- 한국물리학회 2016년 가을 학술발표회에서 노승현 학생 우수논문 구두 발표상
- 한국물리학회 2017년 봄 학술발표회에서 김동준 학생 우수논문 구두 발표상
\`\`\`

## ⁜ 기타
\`\`\`
- 8건의 정부과제 수행 (3년 : 3건, 5년 : 2건, 1년 : 3건)
- 국제 특허 2건 포함, 5건 특허 출원 및 등록
- 국외 공동 연구  활동 (영국, 일본, 중국 등) 
- 정부출연연구소와 활발한 공동 연구 (한국생산기술연구원, 한국과학기술연구원, 한국전기연구원, 한국전자통신연구원, 한국원자력연구원, 고등광기술연구소 등)
- 산업체 연구소 공동 연구 및 자문 : ㈜EO technics, (주)LIS, ㈜대한광통신 등
\`\`\`

`

function ResearchPage(props) {
    return (
        <>
            <NavBar normal={"normal"}/>
            <ResearchContainer>

                <Title title={"주 연구 분야 및 보유기술"}/>
                <MarkDownStyle>
                    <ReactMarkdown
                    >
                        {firstMarkdown}
                    </ReactMarkdown>
                </MarkDownStyle>

                <Title title={"주요 연구 활동 및 실적"}/>
                <MarkDownStyle>
                    <ReactMarkdown
                    >
                        {secondMarkdown}
                    </ReactMarkdown>
                </MarkDownStyle>

            </ResearchContainer>
        </>
    );
}

export default ResearchPage;