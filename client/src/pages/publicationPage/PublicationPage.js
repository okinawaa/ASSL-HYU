import React from 'react';
import NavBar from "../../components/navbar/NavBar";
import { Table, Tag} from "antd";
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import {NewsContainer} from "../newsPage/newsPageStyles";
import Title from "../../components/title/Title";
import {publications} from "../../publications/publications";

const columns = [
    {
        title: '출판년도',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: '저자',
        dataIndex: 'author',
        key: 'author',
        render: text => <span>{text}</span>
    },

    {
        title: '논문제목',
        dataIndex: 'title',
        key: 'title',
        render: text => <Link to={`/news/${text}`}>{text}</Link>
    },
    {
        title: '저널',
        key: 'journals',
        dataIndex: 'journals',
        render: journals => (
            <>
                {journals.map(tag => {
                    let color = tag.length > 2   ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    if(tag === '경조사'){
                        color = 'darkgray'
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },

];








function PublicationPage(props) {






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