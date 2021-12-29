import React, {useEffect, useState} from 'react';
import NavBar from "../../components/navbar/NavBar";
import {Button, Table, Tag} from "antd";
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import {NewsContainer} from "../newsPage/newsPageStyles";
import Title from "../../components/title/Title";
import {collection, deleteDoc, doc, getDocs, orderBy, query} from "@firebase/firestore";
import {db} from "../../firebase-config";


function PublicationPage(props) {
    const [isAdmin, setIsAdmin] = useState(localStorage.getItem("name") === "관리자")
    const columns = [
        {
            title: '출판년도',
            dataIndex: 'date',
            key: 'date',
            render: text => <span key={text}>{text}</span>

        },
        {
            title: '저자',
            dataIndex: 'author',
            key: 'author',
            render: text => <span key={text}>{text}</span>
        },

        {
            title: '논문제목',
            dataIndex: 'title',
            key: 'title',
            render: (text, index) => <>
                <Link key={text} to={`/post/${index.id}`}>{text}</Link>
                {
                    isAdmin &&
                    <Button onClick={() => {
                        deletePublication(index.id);
                    }} style={{marginLeft: '20px'}}>삭제</Button>
                }
            </>
        },
        {
            title: '저널',
            key: 'journals',
            dataIndex: 'journals',
            render: journals => {
                let color = journals.length > 2 ? 'geekblue' : 'green';
                return <>
                    <Tag color={color} key={journals}>
                        {journals.toUpperCase()}
                    </Tag>
                </>
            },
        },

    ];

    const [publications, setPublications] = useState([]);
    const publicationCollectionRef = collection(db, "publication")

    const deletePublication = async (id) => {
        const publicationDoc = doc(db, "publication", id);
        await deleteDoc(publicationDoc);
        const getPublications = async () => {
            const q = await query(publicationCollectionRef,orderBy("date","desc"))
            const data = await getDocs(q);
            setPublications(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getPublications();
    }

    useEffect(() => {
        const getPublications = async () => {
            const q = await query(publicationCollectionRef,orderBy("date","desc"))
            const data = await getDocs(q);
            setPublications(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getPublications();
    }, [])


    return (
        <div>
            <NavBar normal={"normal"}/>
            <NewsContainer>
                <Title title={"Publication"}/>
                {
                    isAdmin &&
                    <>
                        <Link to={"/addPublication"}>
                            <Button>PUBLICATION 글작성</Button>
                        </Link>
                        <Button onClick={() => {
                            localStorage.setItem("name", "");
                            setIsAdmin(false);
                        }
                        }>
                            관리자 로그아웃
                        </Button>
                    </>
                }
                <Table columns={columns} dataSource={publications}/>
            </NewsContainer>
        </div>
    );
}

export default PublicationPage;