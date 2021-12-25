import React, {useEffect, useState} from 'react';
import NavBar from "../../components/navbar/NavBar";
import {NewsContainer} from "./newsPageStyles";
import {Button, Table, Tag} from "antd";
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import Title from "../../components/title/Title";
import {collection, deleteDoc, doc, getDocs} from "@firebase/firestore";
import {db} from "../../firebase-config";


function NewsPage(props) {


    const [isAdmin, setIsAdmin] = useState(localStorage.getItem("name") === "관리자")

    const columns = [
        {
            title: '날짜',
            dataIndex: 'date',
            key: 'date',
        },

        {
            title: '제목',
            dataIndex: 'title',
            key: 'title',
            render: (text,index) => <><Link to={`/post/${index.id}`}>{text}</Link>
                {
                    isAdmin &&
                    <Button onClick={() => {
                        deleteNews(index.id);
                    }} style={{marginLeft: '20px'}}>삭제</Button>
                }
            </>
        },
        {
            title: '태그',
            key: 'tag',
            dataIndex: 'tag',
            render: tag => {
                let color = tag.length > 2 ? 'geekblue' : 'green';
                return <>
                    <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                    </Tag>
                </>
            },
        },

    ];

    const [news, setNews] = useState([]);
    const newsCollectionRef = collection(db, "news")

    const deleteNews = async (id) => {
        const newsDoc = doc(db, "news", id);
        await deleteDoc(newsDoc);
        const getNews = async () => {
            const data = await getDocs(newsCollectionRef);
            setNews(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getNews();
    }
    useEffect(() => {
        const getNews = async () => {
            const data = await getDocs(newsCollectionRef);
            setNews(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getNews();
    }, [])


    return (
        <div>
            <NavBar normal={"normal"}/>
            <NewsContainer>
                <Title title={"연구실 소식"}/>
                {
                    isAdmin &&
                    <>
                        <Link to={"/addPublication"}>
                            <Button>연구실소식 글작성</Button>
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
                <Table columns={columns} dataSource={news}/>
            </NewsContainer>
        </div>
    );
}

export default NewsPage;