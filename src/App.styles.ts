import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/background.jpg';

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

body {
  background-image: url(${BGImage}); 
  background-size: cover;
  margin: 0;
  padding: 0 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
}

* {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  font-family: 'Catamaran', sans-serif;
}
`;

///projects/games/Quiz-App

export const Wrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  .high-score {
    font-size: 2rem;
    margin: 0;
    color: #210000;
    font-weight: bold;
  }

  h1,
  h2 {
    font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold',
      sans-serif;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#fff),
      to(#87f1ff)
    );
    background-image: -o-linear-gradient(top, #fff, #87f1ff);
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-backgroud-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-filter: drop-shadow(2px 2px #0085a3);
    filter: drop-shadow(2px 2px #0085a3);
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  h1 {
    font-size: 70px;
  }

  .start,
  .next {
    cursor: pointer;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#fff),
      to(#ffcc91)
    );
    background: -o-linear-gradient(top, #fff, #ffcc91);
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    -webkit-box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
