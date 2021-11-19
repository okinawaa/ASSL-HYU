import React from 'react';
import {DescContainer, ImgContainer, ImgSetContainer, NewsDetailContainer} from "./newsDetailPageStyles";
import NavBar from "../../components/navbar/NavBar";
import {Link, useParams} from "react-router-dom";
import {notices} from "../../notice/notice";
import Title from "../../components/title/Title";
import {publications} from "../../publications/publications";

function NewsDetailPage(props) {
    const {title} = useParams()
    let currentCategory = "news"
    let notice = notices.filter(item => item.title === title)
    if (notice.length === 0) {
        currentCategory = "publication"
        notice = publications.filter(item => item.title === title)
    }
    return (
        <div>
            <NavBar normal={"normal"}/>

            <NewsDetailContainer>
                <Title title={notice[0].title}/>
                <DescContainer>
                    {notice[0].desc}
                </DescContainer>
                <ImgSetContainer>
                    {
                        notice[0]?.images?.map(image => (
                            <ImgContainer src={image} alt={image} key={image}/>
                        ))

                    }
                    <Link to={currentCategory === "news" ? "/news" : "/publication"}>
                        <button>
                            Back {currentCategory}
                        </button>

                    </Link>
                </ImgSetContainer>

            </NewsDetailContainer>
        </div>
    );
}

export default NewsDetailPage;