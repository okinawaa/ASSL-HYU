import React from 'react';
import NavBar from "../../components/navbar/NavBar";
import {PublicationContainer} from "./publicationPageStyles";
import { Table, Tag} from "antd";
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import {notices} from "../../notice/notice";

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
        render: text => <Link to={`/${text}`}>{text}</Link>
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








function PublicationPage(props) {






    return (
        <div>
            <NavBar normal={"normal"}/>
            <PublicationContainer>

                <Table columns={columns} dataSource={notices}/>


            </PublicationContainer>



        </div>
    );
}

export default PublicationPage;