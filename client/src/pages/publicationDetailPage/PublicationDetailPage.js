import React, {useEffect, useState} from 'react';
import NavBar from "../../components/navbar/NavBar";
import {Link, useParams} from "react-router-dom";
import {DescContainer, ImgSetContainer, NewsDetailContainer} from "./publicationDetailPageStyles";
import {collection, getDocs, query, where} from "@firebase/firestore";
import {db} from "../../firebase-config";
import Title from "../../components/title/Title";

function PublicationDetailPage(props) {
    const {title} = useParams()
    const [publication, setPublication] = useState({})
    const publicationCollectionRef = collection(db, "publication")
    useEffect(() => {
        const getPublication = async () => {
            const q = await query(publicationCollectionRef, where("title", "==", title))
            const data = await getDocs(q);
            const newData = data.docs.map(doc => ({...doc.data()}))
            setPublication(newData[0]);
        }
        getPublication();
    }, [])

    return (
        <div>
            <NavBar normal={"normal"}/>

            <NewsDetailContainer>
                <Title title={publication.title}/>
                <DescContainer>
                    {publication.desc}
                </DescContainer>
                <ImgSetContainer>
                    {/*{*/}
                    {/*    notice[0]?.images?.map(image => (*/}
                    {/*        <ImgContainer src={image} alt={image} key={image}/>*/}
                    {/*    ))*/}

                    {/*}*/}
                    <Link to={"/publication"}>
                        <button>
                            Back Publication
                        </button>

                    </Link>
                </ImgSetContainer>

            </NewsDetailContainer>
        </div>
    );
}

export default PublicationDetailPage;