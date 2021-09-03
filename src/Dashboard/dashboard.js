import React, { useState, Component } from "react";
import DayVisitsReport from "./dayVisitsReport";
import CountriesReport from "./countriesReport";
import PageviewsReport from "./pageviewReport";
import SourceReport from "./sourceReport";
import BrowsersReport from "./browsersReport";
import DevicesReport from "./devicesReport";
import Header from "../Components/header";
import {
  LastRow,
  ReportSection,
  Conclusion,
  BackgroundHolder,
  Teste,
} from "./styles";
import InputField from "../Components/input";
import Report from "./report/report";
import HorizontalScroll from "react-scroll-horizontal";
import data from "../Dashboard/report/data";

const DashBoard = () => {
  const [viewID, setViewID] = useState(null);

  return (
    <>
      <Header />
      {viewID ? (
        <>
          <Teste>
            <HorizontalScroll>
              {data.map((item) => (
                <ReportSection>
                  <Report viewID={viewID} item={item} />
                </ReportSection>
              ))}
              {/*
              
              <ReportSection>
                <Report />
              </ReportSection>
              <ReportSection>
                <Report />
              </ReportSection>
              <ReportSection>
                <Report />
              </ReportSection>
              <ReportSection>
                <Report />
              </ReportSection>
              <ReportSection>
                <Report />
              </ReportSection>
              <ReportSection>
                <Report />
              </ReportSection>
              */}
            </HorizontalScroll>
          </Teste>

          {/*
          <DayVisitsReport
            metric={"ga:users"}
            title={"Users"}
            viewID={viewID}
          />
          <DayVisitsReport
            metric={"ga:sessions"}
            title={"Sessions"}
            viewID={viewID}
          />
          <DayVisitsReport
            metric={"ga:hostname"}
            title={"Hostname"}
            viewID={viewID}
          />
          


          <CountriesReport viewID={viewID} />
          <PageviewsReport viewID={viewID} />
          <SourceReport viewID={viewID} />
          <LastRow>
            <BrowsersReport viewID={viewID} />
            <DevicesReport viewID={viewID} />
          </LastRow>
          */}
        </>
      ) : (
        <InputField submitViewId={(id) => setViewID(id)} />
      )}
    </>
  );
};

export default DashBoard;
