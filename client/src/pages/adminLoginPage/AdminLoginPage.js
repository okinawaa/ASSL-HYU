import React, {useState, useEffect} from 'react';
import Title from "../../components/title/Title";
import {SigninBlock, SigninFormBlock} from "./adminLoginPageStyles";
import {Button} from "antd";

const AdminLoginPage = ({error, history}) => {

    useEffect(() => {
        return () => {
        };
    }, []);

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        if (inputs.email === "assl" && inputs.password === "assl") {
            localStorage.setItem("name", "관리자")
        }
        history.push('/')

    };

    return (
        <>
            <Title title={"관리자로그인"}/>
            <SigninBlock>
                <div className="tabs"></div>
                <SigninFormBlock>
                    <div className="center">
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">

                                <input
                                    type="text"
                                    name="email"
                                    placeholder="아이디를 입력해주세요"
                                    value={inputs.email}
                                    onChange={handleChange}
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="비밀번호를 입력해주세요"
                                    value={inputs.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit">로그인</button>

                        </form>
                        {error && <p className="error-message">{error}</p>}
                    </div>
                </SigninFormBlock>
                <Button onClick={() => {
                    localStorage.setItem("name", "")
                    history.push('/')
                }}>로그아웃
                </Button>
            </SigninBlock>

        </>
    );
};

export default AdminLoginPage;