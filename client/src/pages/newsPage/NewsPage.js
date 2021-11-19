import React from 'react';
import NavBar from "../../components/navbar/NavBar";
import {NewsContainer} from "./newsPageStyles";
import { Table, Tag} from "antd";
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import {notices} from "../../notice/notice";
import Title from "../../components/title/Title";

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
        render: text => <Link to={`/news/${text}`}>{text}</Link>
    },
    {
        title: '태그',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
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








function NewsPage(props) {






    return (
        <div>
            <NavBar normal={"normal"}/>
            <NewsContainer>
                <Title title={"연구실 소식"}/>
                <Table columns={columns} dataSource={notices}/>
            </NewsContainer>



        </div>
    );
}

export default NewsPage;