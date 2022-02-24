import React, {useEffect, useState} from 'react';
import NavBar from "../../components/navbar/NavBar";
import {ModifyPublicationPageContainer} from "./modifyPostPageStyles";
import {Button, DatePicker} from "antd";
import {addDoc, collection, doc, getDocs, query, updateDoc, where} from "@firebase/firestore";
import {db} from "../../firebase-config";
import {Select} from "antd";
import moment from "moment";
import firebase from "firebase/compat";
import {useParams} from "react-router-dom";

const {Option} = Select;

function ModifyPostPage({history}) {
  const {id} = useParams()

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [journals, setJournals] = useState("");
  const [tag, setTag] = useState("");
  const [sent, setSent] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [category, setCategory] = useState("publication")
  const dateFormat = 'YYYY-MM-DD';
  const [publicationDate, setPublicationDate] = useState(moment().format(dateFormat))
  const [post, setPost] = useState({})
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
      if (newData1[0]) {
        setAuthor(newData1[0].author)
        setTitle(newData1[0].title)
        setJournals(newData1[0].journals)
        setDesc(newData1[0].desc)
        setPublicationDate(moment(newData1[0].date).format(dateFormat))
        console.log(newData1[0])
        setPost(newData1[0])
      } else {
        setTitle(newData2[0].title)
        setTag(newData2[0].tag)
        setDesc(newData2[0].desc)
        setPost(newData2[0])
        setCategory("news")
      }

    }
    getPost();
  }, [])
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

    if (category === "publication") {
      await updateDoc(doc(db,"publication",id),{
        title,
        author,
        desc,
        journals,
        date:publicationDate
      })
    } else {
      await updateDoc(doc(db,"news",id),{
        title,
        tag,
        desc,
        date:today,
      })
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
      <ModifyPublicationPageContainer>

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
              <h4>{category} 글수정</h4>
            </div>
            {category === "publication" && post.date &&  <> 출판년도 ✌
              <DatePicker defaultValue={moment(post.date, dateFormat)} format={dateFormat}
                          onChange={(value) => {
                            if (value) {
                              const dateValue = value.toDate();
                              const year = dateValue.getFullYear();
                              const month = dateValue.getMonth() + 1;
                              const date = dateValue.getDate();
                              setPublicationDate(`${year}-${month >= 10 ? month : '0' + month}-${date >= 10 ? date : '0' + date}`)
                            }
                          }}/>
            </>}
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
                  <Button disabled={disabled}>게시글 수정</Button>

                </div>
              )}
            </form>
          </div>
        </div>
      </ModifyPublicationPageContainer>
    </>
  );
}

export default ModifyPostPage;