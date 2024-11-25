import styled from "styled-components";

export const MainStyle = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  padding: 20px;
  background-color: #f7f7f7;
  text-align: center;

  section {
    max-width: 800px;
    margin: 20px auto;
  }

  h2 {
    font-size: 2rem;
    color: #555;
  }

  h1 {
    font-size: 3rem;
    color: #222;
    margin: 10px 0;

    span {
      color: green;
    }
  }

  p {
    font-size: 1.2rem;
    color: #666;
    line-height: 1.6;
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color:green;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: white;
      color: green;
    }
  }

  div {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 20px;

    img {
      width: 100px;
      height: auto;
    }
  }
`;

export const Section = styled.section`
  position: relative; 
`;

export const Copo = styled.img`
  position: absolute;
`;
