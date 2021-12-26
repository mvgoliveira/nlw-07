import styled from "styled-components";
import backgroundImage from './assets/background.svg'; 

export const Container = styled.div `
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 0 100px;

  display: grid;
  grid-template-columns: 1fr 453px;
  column-gap: 120px;
  
  position: relative;
`;

export const MessageContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 0 100px;

  display: grid;
  grid-template-columns: 1fr 453px;
  column-gap: 120px;
  
  position: relative;

  ::before {
    content: "";
    height: 100vh;
    width: 320px;
    background: url(${backgroundImage}) no-repeat;
    background-size: cover;
    position: absolute;
    z-index: -8;
    right: 0px;
    top: 0;
  }
`;