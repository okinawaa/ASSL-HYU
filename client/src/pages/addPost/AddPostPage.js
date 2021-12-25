import React, {useState} from 'react';
import NavBar from "../../components/navbar/NavBar";
import {AddPublicationPageContainer} from "./addPostPageStyles";
import {Button} from "antd";
import {addDoc, collection} from "@firebase/firestore";
import {db} from "../../firebase-config";
import {Select} from "antd";

const {Option} = Select;

function AddPostPage({history}) {
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [journals, setJournals] = useState("");
    const [tag, setTag] = useState("");
    const [sent, setSent] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [category, setCategory] = useState("publication")

    const handleChangeInput = (e) => {
        const {name, value} = e.target;
        switch (name) {
            case "author":
                setAuthor(value);
                break;
            case "title":
                setTitle(value);
                break;
            case "desc":
                setDesc(value);
                break;
            case "journals":
                setJournals(value);
                break;
            case "tag":
                setTag(value);
                break;
            default:
                return;
        }
    };

    const handleCategoryChange = (value) => {
        setCategory(value);
    };

    const formSubmit = async () => {
        const current = new Date();
        const year = current.getFullYear();
        const month = current.getMonth() + 1;
        const date = current.getDate();
        let today = year + "-" + month + "-" + date;
        setDisabled(true)
        const CollectionRef = collection(db, category)

        if (category === "publication") {
            await addDoc(CollectionRef, {author, title, desc, journals, date: today})
        } else {
            await addDoc(CollectionRef, {title, tag, desc, date: today})
        }

        setSent(true)


        setTimeout(() => {
            if (category === "publication") {
                history.push('/publication')
            } else {
                history.push('/news')
            }
        }, 1000)

    }
    return (
        <>
            <NavBar/>
            <AddPublicationPageContainer>

                <div className={"contact-section"}>
                    <Select
                        defaultValue="publication"
                        style={{width: 200}}
                        name="tag"
                        onChange={handleCategoryChange}
                    >
                        <Option value="publication">publication</Option>
                        <Option value="news">news</Option>

                    </Select>
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>{category} 글작성</h4>
                        </div>
                        <form className="form" onSubmit={formSubmit}>
                            {category === "publication" && <div className="form-field">
                                <label htmlFor="author">저자</label>
                                <input
                                    type="text"
                                    name="author"
                                    id="author"
                                    value={author}
                                    onChange={handleChangeInput}
                                />
                            </div>}

                            <div className="form-field">
                                <label htmlFor="title">제목</label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    value={title}
                                    onChange={handleChangeInput}
                                />
                            </div>
                            {

                                category === "publication" ?
                                    <div className="form-field">
                                        <label htmlFor="journals">저널</label>
                                        <input
                                            type="text"
                                            name="journals"
                                            id="journals"
                                            value={journals}
                                            onChange={handleChangeInput}
                                        />
                                    </div> :
                                    <div className="form-field">
                                        <label htmlFor="tag">태그</label>
                                        <input
                                            type="text"
                                            name="tag"
                                            id="tag"
                                            value={tag}
                                            onChange={handleChangeInput}
                                        />
                                    </div>
                            }
                            <div className="form-field">
                                <label htmlFor="text-area">글 내용작성</label>
                                <textarea
                                    name="desc"
                                    id="desc"
                                    value={desc}
                                    onChange={handleChangeInput}
                                    cols="30"
                                    rows="10"
                                />
                            </div>

                            {sent ? (
                                <div className="success-message">
                                    <span>게시글 등록 성공!</span>
                                </div>
                            ) : (
                                <div className="form-field f-button" onClick={formSubmit}>
                                    <Button disabled={disabled}>게시글 등록</Button>

                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </AddPublicationPageContainer>
        </>
    );
}

export default AddPostPage;