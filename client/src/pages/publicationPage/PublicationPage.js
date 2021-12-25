import React, {useEffect, useState} from 'react';
import NavBar from "../../components/navbar/NavBar";
import { Table, Tag} from "antd";
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import {NewsContainer} from "../newsPage/newsPageStyles";
import Title from "../../components/title/Title";
import {collection, getDocs} from "@firebase/firestore";
import {db} from "../../firebase-config";





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
        render: text => <Link key={text} to={`/publication/${text}`}>{text}</Link>
    },
    {
        title: '저널',
        key: 'journals',
        dataIndex: 'journals',
        render: journals => {
            let color = journals.length > 2   ? 'geekblue' : 'green';
            return <>
                        <Tag color={color} key={journals}>
                            {journals.toUpperCase()}
                        </Tag>
            </>
        },
    },

];








function PublicationPage(props) {


    const [publications,setPublications] = useState([]);
    const publicationCollectionRef = collection(db,"publication")
    useEffect(()=>{
        const getPublications = async () => {
            const data = await getDocs(publicationCollectionRef);
            setPublications(data.docs.map((doc) => ({...doc.data(),id:doc.id})))
        }
        getPublications();
    },[])



    return (
        <div>
            <NavBar normal={"normal"}/>
            <NewsContainer>
                <Title title={"Publication"}/>
                <Table columns={columns} dataSource={publications}/>
            </NewsContainer>
        </div>
    );
}

export default PublicationPage;