import styled from "styled-components";

export const InputRow = styled.div`
  display: flex;
  position: absolute;
  top:70px;
  align-self:center;
`;


export const TextGrid = styled.div`
  background-color: transparent;
    width: 300px;
    height: 364px;
    display: flex;
    position: absolute;
    flex-direction: column;
    right: 0;
    margin-right: 0;
    gap: 10px;
    

`;

export const TitleGrid = styled.div`
  opacity: 100%;
  width: 300px;
  height: 30px;
  position: absolute;
  right: 0;
  margin-bottom: 10px;

  

  h1 {
    font-size:28px;
    font-family: 'Lato';
    align-items: flex-end;
    margin: 0;
    color: white;
    padding-bottom: 10px;
    text-align: right;

  }
`;

export const DescGrid = styled.div`
  display: flex;
  position: absolute;
  align-items: flex-end;
  height: 16px;
  top:40px;
  width: 300px;
  right: 0px;



  p {
    font-size: 14px;
    font-weight: 500;
    color: white;
    text-align: right;
    margin:0;
    text-align: right;
    position: absolute;
    display: flex;
    right: 0;


  }
`;

export const TextMainGrid = styled.div`
  display: flex;
  position: absolute;
  align-items: flex-end;
  height: 135px;
  width: 300px;
  margin: 0;
  top: 75px;


  p {
    font-size: 14px;
    font-weight: 300;
    color: white;
    margin: 0;
    text-align: right;


  }
`;


export const TextCompGrid = styled.div `
  display: flex;
  position: absolute;
  align-items: flex-end;
  height: 134px;
  width: 300px;
  margin: 0;
  top: 222px;
  p {
    font-size: 14px;
    font-weight: 300;
    color: white;
    margin: 0;
    text-align: right;
  }
`;
 