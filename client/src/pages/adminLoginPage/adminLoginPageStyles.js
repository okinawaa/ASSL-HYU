import styled from "styled-components";

export const SigninBlock = styled.div`
  
`;

export const SigninFormBlock = styled.div`
  background: #8d8472;
  width: 100%;
  height: 580px;

  .center {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  form {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .input-group {
      flex: 1;

      input {
        display: block;
        width: 100%;
        height: 45px;
        padding: 0 18px;
        font-size: 14px;
        font-family: 'Noto Sans KR', 'Roboto', 'dotum', 'sans-serif';
        border: 1px solid #ddd;
        border-radius: 4px;
        outline: none;
      }

      div {
        display: flex;
      }

      select {
        margin-top: 10px;
        display: block;
        width: 50%;
        height: 45px;
        padding: 0 18px;
        font-size: 14px;
        font-family: 'Noto Sans KR', 'Roboto', 'dotum', 'sans-serif';
        border: 1px solid #ddd;
        border-radius: 4px;
        outline: none;
      }


      input + input {
        margin-top: 10px;
      }
    }

    button {
      background: #6d8e65;
      width: 110px;
      border: none;
      border-radius: 4px;
      outline: none;
      color: #fff;
      font-size: 16px;
      margin-left: 10px;
      cursor: pointer;
      transition: background 0.5s ease;

      &:hover {
        background: #90ad90;
      }
    }
  }

  .error-message {
    font-family: 'Noto Sans KR', 'Roboto', 'dotum', 'sans-serif';
    color: #6d8e65;
    margin-top: 20px;
  }
`;