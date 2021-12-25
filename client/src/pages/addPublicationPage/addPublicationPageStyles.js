import styled from "styled-components";

export const AddPublicationPageContainer = styled.div`
  margin: 0 auto;
  width: 100%;

  .contact-section {
    width: 100%;
    padding: 0 30px;
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }

    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }

      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;

        label {
          position: absolute;
          left: 20px;
          top: -13px;
          display: inline-block;
          background-color: #6d8e65;
          padding: 0 0.5rem;
          color: inherit;
        }

        input {
          border: 1px solid green;
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }

        textarea {
          background-color: transparent;
          border: 1px solid green;
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }

    .success-message {
      width: 100%;
      height: 100%;
      display: flex;
      justify-self: center;
      margin: 2rem 0;

      span {
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 2rem;
      }
    }
  }
`

