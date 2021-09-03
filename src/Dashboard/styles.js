import styled from "styled-components";

export const ChartWrapper = styled.div`
  width: auto;
  margin: 0 auto;
`;

export const PieChartWrapper = styled.div`
  width: 48vw;
  margin: 0 auto;
`;

export const ReportSection = styled.div`
  display: flex;
  background-color: transparent;
  position: absolute;
  width: 1350px;
  flex-direction: row;
  flex: 1;
  gap: 50px;
  height: 640px;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

export const BackgroundHolder = styled.div`
  display: flex;
  background-color: red;
  top: 0;
  width: 100%;
  position: absolute;
  margin: 0 auto;
  height: 640px;
  flex-direction: row;
`;

export const StyledTable = styled.table`
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background: black;
    color: white;
  }

  .left-align {
    text-align: left;
  }
`;

export const colors = [
  "#fcba03",
  "#fa8c5c",
  "#9fc934",
  "#60d17e",
  "#45afed",
  "#7c5cdb",
  "#ce5cdb",
  "#db5c97",
];

export const ChartTitle = styled.h2`
  color: #4b2f57;
  font-size: 2rem;
`;

export const Subtitle = styled.h3`
  color: #35213d;
  padding-bottom: 20px;
`;

export const ReportWrapper = styled.div`
  padding: 40px 0;
  border-bottom: 1px solid #f0eee9;
  width: 400px;
`;

export const LastRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
`;

export const DatepickerRow = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  margin: 0 auto;
`;

export const DatepickerWrapper = styled.div`
  color: #35213d;
  font-weight: 500;
  .picker {
    width: fit-content;
    border-color: #c0c0c0;
    border-radius: 10px;
    background-color: #fff;
    text-align: center;
    line-height: 20px;
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

export const DatepickerLabel = styled.label`
  padding-right: 5px;
`;

export const Report = styled.div`
  display: flex;
`;

export const Conclusion = styled.div`
  height: 600px;
  background-color: black;
  bottom: 0;
  width: 100%;
  height: 640px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const Teste = styled.div`
  position: fixed;
  height: 640px;
  width: 100%;
  display: flex;
  flex-direction: row;
  top: 70px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: 0 auto;
`;
