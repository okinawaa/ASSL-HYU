import styled from "styled-components";

export const ResearchContainer = styled.div`
  margin: 7rem 3rem;
  
  ul > li {
    font-size: 1.1rem;
  }
  
  h2 {
    color: #385723;
    font-weight: 800;
  }
  p > code{
    background:yellow;

  }
  pre{
    background-color: #e5eaee;
    padding:2rem;
    line-height: 1.5rem;
    margin:2rem auto;
  }
  blockquote{
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