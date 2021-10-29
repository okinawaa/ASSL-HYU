import React from 'react';
import {DescContainer, ImgContainer, ImgSetContainer, PublicationDetailContainer} from "./publicationDetailPageStyles";
import NavBar from "../../components/navbar/NavBar";
import {Link, useParams} from "react-router-dom";
import {notices} from "../../notice/notice";
import Title from "../../components/title/Title";

function PublicationDetailPage(props) {
    const {title} = useParams()

    const notice = notices.filter(item => item.title === title)
    return (
        <div>
            <NavBar normal={"normal"}/>

            <PublicationDetailContainer>
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
                    <Link to={"/publication"}>
                        <button>
                            Go Publication
                        </button>

                    </Link>
                </ImgSetContainer>

            </PublicationDetailContainer>
        </div>
    );
}

export default PublicationDetailPage;