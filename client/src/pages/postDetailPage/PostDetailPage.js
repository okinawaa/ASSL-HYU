import React, {useEffect, useState} from 'react';
import NavBar from "../../components/navbar/NavBar";
import {Link, useParams} from "react-router-dom";
import {DescContainer, ImgSetContainer, NewsDetailContainer} from "./postDetailPageStyles";
import {collection, getDocs, query, where} from "@firebase/firestore";
import {db} from "../../firebase-config";
import Title from "../../components/title/Title";
import firebase from "firebase/compat";
import {Button} from "antd";

function PostDetailPage(props) {
    const {id} = useParams()
    const [post, setPost] = useState({})
    const [category,setCategory] = useState("publication")
    const publicationCollectionRef = collection(db, "publication")
    const newsCollectionRef = collection(db, "news")


    useEffect(() => {
        const getPost = async () => {
            const q1 = await query(publicationCollectionRef, where(firebase.firestore.FieldPath.documentId(), "==", id))
            const q2 = await query(newsCollectionRef, where(firebase.firestore.FieldPath.documentId(), "==", id))
            const data1 = await getDocs(q1);
            const data2 = await getDocs(q2);
            const newData1 = data1.docs.map(doc => ({...doc.data()}))
            const newData2 = data2.docs.map(doc => ({...doc.data()}))
            if(newData1[0]) {
                setPost(newData1[0])
            }
            else {
                setPost(newData2[0])
                setCategory("news")
            }

        }
        getPost();
    }, [])

    return (
        <div>
            <NavBar normal={"normal"}/>

            <NewsDetailContainer>
                <Title title={post.title}/>
                <DescContainer>
                    {post.desc}
                </DescContainer>
                <ImgSetContainer>
                    {/*{*/}
                    {/*    notice[0]?.images?.map(image => (*/}
                    {/*        <ImgContainer src={image} alt={image} key={image}/>*/}
                    {/*    ))*/}

                    {/*}*/}
                    <Link to={category === "publication" ? "/publication" : "/news"}>
                        <Button size={"large"}>
                            Back {category.toUpperCase()}
                        </Button>
                    </Link>
                </ImgSetContainer>

            </NewsDetailContainer>
        </div>
    );
}

export default PostDetailPage;