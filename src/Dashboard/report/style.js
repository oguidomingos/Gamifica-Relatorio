import styled from "styled-components";

export const FullPageReport = styled.div`
  display: flex;
  padding: 0;
  box-sizing: border-box;
  height: 640px;
  flex-direction: row;
  gap: 20px;
  margin: 0px auto;
  border: 1px solid red;
  flex: 1;
  position: relative;
  top: 0;
`;

export const TitleSection = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  position: absolute;
  top: 20px;

  h1 {
    width: 100%;
    height: 100%;
    font-size: 42px;
    color: white;
    font-weight: 400;
    margin: 0;
  }
`;

export const Subtitle = styled.div`
  display: flex;
  width: 100%;
  height: 15px;
  top: 0;
  position: absolute;
  border: 1px solid yellow;

  p {
    color: white;
    font-size: 12px;
    font-weight: 200;
    margin: 0;
  }
`;

export const TextArea = styled.div`
  display: flex;
  width: 450px;
  height: 400px;
  position: relative;
  margin: 118px 54px;
  border: 1px solid white;
  float: left;
`;

export const GraphicArea = styled.div`
 /*
  display: flex;
  width: 450px;
  height: 400px;
  position: relative;
  margin: 118px 54px;
  border: 1px solid white;
  float: right;
  */
`;

export const Background = styled.div`
  display: flex;
  background-color: transparent;
  flex-direction: column;
  position: relative;
  top: 0;
  margin: 0 auto;
  left: 0;
  height: 640px;
  margin-left: 195px;
`;

export const TextDesc = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  top: 82px;
  border: 1px white;


  p {
    color: white;
    font-size: 18px;
    font-weight: 200;
    margin: 0;
  }
`;
