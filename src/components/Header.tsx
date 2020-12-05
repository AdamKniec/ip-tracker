import React, { useState } from "react";
import styled from "styled-components";
import headerBg from "../assets/pattern-bg.png";
import GlobalFonts from "../assets/fonts/fonts";
import { getTheDataBasedOnTheIpAddress } from "../domain";

const Header: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    inputvalue: string
  ) => {
    e.preventDefault();
    getTheDataBasedOnTheIpAddress(inputValue).then((data) => console.log(data));
  };

  return (
    <HeaderSection className="header">
      <GlobalFonts />
      <InputWrapper>
        <MainHeading>IP Address Tracker</MainHeading>
        <form onSubmit={(e) => handleFormSubmit(e, inputValue)}>
          <label htmlFor="ip-input">
            <input
              type="text"
              id="ip-input"
              onChange={(e) => handleInputChange(e)}
            />
            <button type="submit"></button>
          </label>
        </form>
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
