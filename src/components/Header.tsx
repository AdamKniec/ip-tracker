import React, { useState } from "react";
import styled from "styled-components";
import headerBg from "../assets/pattern-bg.png";
import GlobalFonts from "../assets/fonts/fonts";
import { getTheDataBasedOnTheIpAddress } from "../domain";
import AddressDetails from "./AddressDetails";

interface headerProps {
  setNewCoords: Function;
}

const Header: React.FC<headerProps> = ({ setNewCoords }) => {
  const [inputValue, setInputValue] = useState("");
  const [detailsData, setDetailsData] = useState<{
    ipAddress: string;
    location: string;
    timezone: string;
    isp: string;
  }>({ ipAddress: "", location: "", timezone: "", isp: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    inputvalue: string
  ) => {
    e.preventDefault();
    getTheDataBasedOnTheIpAddress(inputValue)
      .then((data) => {
        setNewCoords([data.location.lat, data.location.lng]);
        setDetailsData({
          ipAddress: data.ip,
          location: data.location.region,
          timezone: data.location.timezone,
          isp: data.isp,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <HeaderSection className="header">
      <GlobalFonts />
      <InputWrapper>
        <MainHeading>IP Address Tracker</MainHeading>
        <Form onSubmit={(e) => handleFormSubmit(e, inputValue)}>
          <Label htmlFor="ip-input">
            <Input
              type="text"
              id="ip-input"
              onChange={(e) => handleInputChange(e)}
            />
          </Label>
          <Button type="submit"></Button>
        </Form>
      </InputWrapper>
      <AddressDetails detailsData={detailsData} />
    </HeaderSection>
  );
};

export default Header;

const HeaderSection = styled.header`
  background-image: url(${headerBg});
  width: 100%;
  height: 400px;
  display: block;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  position: relative;
`;

const MainHeading = styled.h1`
  margin: 0;
  color: white;
  font-family: "Rubik-Bold";
`;

const InputWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px 0 0 10px;
  border: none;
  box-sizing: border-box;
`;

const Button = styled.button`
  height: 40px;
  width: 35px;
  background-color: #000;
  border: none;
  position: relative;
  border-radius: 0 10px 10px 0;
  &:after {
    content: ">";
    display; block;
    color: #fff;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  width: 30%;
`;
