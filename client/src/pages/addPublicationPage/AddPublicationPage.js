import React, {useState} from 'react';
import NavBar from "../../components/navbar/NavBar";
import {AddPublicationPageContainer} from "./addPublicationPageStyles";
import {Button} from "antd";
import {addDoc, collection} from "@firebase/firestore";
import {db} from "../../firebase-config";

function AddPublicationPage({history}) {
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [journals, setJournals] = useState("");
    const [sent, setSent] = useState(false);

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
            default:
                return;
        }
    };
    const publicationCollectionRef = collection(db, "publication")

    const formSubmit = async () => {
        const current = new Date();
        const year = current.getFullYear();
        const month = current.getMonth() + 1;
        const date = current.getDate();
        let today = year + "-" + month + "-" + date;

        await addDoc(publicationCollectionRef,{author,title,desc,journals,date:today})
        setSent(true)

        setTimeout(()=>{
            history.push('/publication')
        },1000)
    }
    return (
        <>
            <NavBar/>
            <AddPublicationPageContainer>
                <div className={"contact-section"}>
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>PUBLICATION 글작성</h4>
                        </div>
                        <form className="form" onSubmit={formSubmit}>
                            <div className="form-field">
                                <label htmlFor="author">저자</label>
                                <input
                                    type="text"
                                    name="author"
                                    id="author"
                                    value={author}
                                    onChange={handleChangeInput}
                                />
                            </div>

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
                            <div className="form-field">
                                <label htmlFor="journals">저널</label>
                                <input
                                    type="text"
                                    name="journals"
                                    id="journals"
                                    value={journals}
                                    onChange={handleChangeInput}
                                />
                            </div>
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
                                    <Button>게시글 등록</Button>

                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </AddPublicationPageContainer>
        </>
    );
}

export default AddPublicationPage;