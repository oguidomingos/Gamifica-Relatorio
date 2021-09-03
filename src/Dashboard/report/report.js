import React from "react";
import PadraoSection from "../../padraoSection";
import DayVisitsReport from "../dayVisitsReport";
import CountriesReport from "../countriesReport";
import PageviewsReport from "../pageviewReport";
import SourceReport from "../sourceReport";
import BrowsersReport from "../browsersReport";
import DevicesReport from "../devicesReport";
import Data from "./data";
import * as S from "./style";
import {
  FullPageReport,
  TitleSection,
  Subtitle,
  TextArea,
  GraphicArea,
  Background,
  TextDesc,
} from "./style";

function Report({ viewID, item }) {
  console.log(item);
  const Graphic = [
    {
      name: "DayVisitsReport",
      component: DayVisitsReport,
    },

  ];
  return (
    <>
      <Background>
        <FullPageReport>
          <TextArea>
            <Subtitle>
              <p> {item.subtitulo} </p>
            </Subtitle>
            <TitleSection>
              <h1> {item.titulo} </h1>
            </TitleSection>
            <TextDesc>
              <p>{item.texto}</p>
            </TextDesc>
          </TextArea>
          {item?.GraphicName &&
            Graphic.map(({name,Component}) => {
              if (item.GraphicName === name)
              console.log(item.GraphicName)
              console.log(name)
                return (
                  <GraphicArea>
                    <Component
                      metric={item.metric}
                      title={"Users"}
                      viewID={viewID}
                    />
                  </GraphicArea>
                );
            })}
        </FullPageReport>
      </Background>
    </>
  );
}

export default Report;
