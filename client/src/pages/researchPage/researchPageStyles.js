import styled from "styled-components";

export const ResearchPageContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 500px ) {
  }
`

export const ResearchContainer = styled.div`
  margin: 7rem 15vh;


  @media screen and (max-width: 500px ) {
    margin: 2rem 2vh;
  }
  
  img{
    @media screen and (max-width: 500px ) {
    width: 100%;
    }
  }
  
  ul > li {
    
    font-size: 1.1rem;
  }

  h2 {
    color: #385723;
    font-weight: 800;
  }

  p > code {
    background: yellow;

  }

  pre {
    
    & > code{
      display: inline-block;
      white-space: normal;
      max-width: 100%;
    }
    
    background-color: #e5eaee;
    padding: 2rem;
    line-height: 1.5rem;
    margin: 2rem auto;
  }

  blockquote {
    padding: 1rem;
    border: 1px dashed black;
  }
`

export const MarkDownStyle = styled.div`
  font-size: 1rem;
  line-height: 2.5rem;
`


export const BlockQuoteStyle = styled.blockquote`
  padding: 1rem;
  border: 1px dashed black;
`