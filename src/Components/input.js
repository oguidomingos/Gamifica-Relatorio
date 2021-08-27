import React, { useState } from "react";
import styled from "styled-components";
import { FaRegQuestionCircle } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import { IntroSection, ImageBox, TextBox, InputRow, ButtonSection } from "./style";
import logogamifica1 from "./logo.svg";
import SectionIntro from "./IntroSection/introSection";

const InputField = ({ submitViewId }) => {
  const [viewID, setViewID] = useState("243502569");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitViewId(viewID);
  };
  return (
    <InputRow>
      <IntroSection>
        
        <Button variant="outlined" onClick={handleSubmit}>
          Entrar
        </Button>
        
        <ImageBox></ImageBox>

        <TextBox>
          <SectionIntro />
        </TextBox>
      </IntroSection>
    </InputRow>
  );
};

export default InputField;
