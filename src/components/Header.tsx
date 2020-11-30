import React from "react";
import styled from "styled-components";
import headerBg from "../assets/pattern-bg.png";
import GlobalFonts from "../assets/fonts/fonts";

const Header: React.FC = () => {
  return (
    <HeaderSection className="header">
      <GlobalFonts />
      <InputWrapper>
        <MainHeading>IP Address Tracker</MainHeading>
        <label htmlFor="ip-input">
          <input type="text" id="ip-input" />
        </label>
      </InputWrapper>
    </HeaderSection>
  );
};

export default Header;

const HeaderSection = styled.header`
  background-image: url(${headerBg});
  width: 100%;
  height: 500px;
  display: block;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
`;

const MainHeading = styled.h1`
  margin: 0;
  color: white;
  font-family: "Rubik-Bold";
`;

const InputWrapper = styled.div``;
