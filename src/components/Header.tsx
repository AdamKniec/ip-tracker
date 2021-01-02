import React, { useState, useEffect } from "react";
import styled from "styled-components";
import headerBg from "../assets/pattern-bg.png";
import GlobalFonts from "../assets/fonts/fonts";
import {
  getTheDataBasedOnTheIpAddress,
  getTheDataBasedOnTheDomain,
} from "../domain";
import AddressDetails from "./AddressDetails";

interface headerProps {
  setNewCoords: Function;
  initialDetailsData: {
    ipAddress: string;
    region: string;
    timezone: string;
    isp: string;
  };
}

const Header: React.FC<headerProps> = ({
  setNewCoords,
  initialDetailsData,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [detailsData, setDetailsData] = useState<{
    ipAddress: string;
    region: string;
    timezone: string;
    isp: string;
  }>({ ipAddress: "", region: "", timezone: "", isp: "" });

  useEffect(() => {
    setDetailsData(initialDetailsData);
  }, [initialDetailsData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // tego uzyjemy do sprawdzania czy user daje nam IP czy domene
  const isIP = (address: string) => {
    return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      address
    );
  };
  const setMapData = (
    lat: string,
    lng: string,
    ip: string,
    region: string,
    timezone: string,
    isp: string
  ) => {
    setNewCoords([lat, lng]);
    setDetailsData({
      ipAddress: ip,
      region: region,
      timezone: timezone,
      isp: isp,
    });
  };
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedValue = inputValue.replace(/\s/g, "");
    if (isIP(inputValue)) {
      getTheDataBasedOnTheIpAddress(trimmedValue).then((data) => {
        data.location &&
          data.ip &&
          data.isp &&
          setMapData(
            data.location.lat,
            data.location.lng,
            data.ip,
            data.location.region,
            data.location.timezone,
            data.isp
          );
      });
    } else {
      getTheDataBasedOnTheDomain(trimmedValue).then((data) => {
        data.location &&
          data.ip &&
          data.isp &&
          setMapData(
            data.location.lat,
            data.location.lng,
            data.ip,
            data.location.region,
            data.location.timezone,
            data.isp
          );
      });
    }
  };

  return (
    <HeaderSection className="header">
      <GlobalFonts />
      <InputWrapper>
        <MainHeading>IP Address Tracker</MainHeading>
        <Form onSubmit={(e) => handleFormSubmit(e)}>
          <Label htmlFor="ip-input">
            <Input
              type="text"
              id="ip-input"
              onChange={(e) => handleInputChange(e)}
              placeholder="Search for nay IP address or domain"
              required
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
  height: 300px;
  display: block;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  background-size: cover;
  position: relative;
`;

const MainHeading = styled.h1`
  margin: 0;
  color: white;
  // font-family: "Rubik-Bold";
  padding-bottom: 20px;
  margin-top: 50px;
`;

const InputWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 10px 0 0 10px;
  border: none;
  box-sizing: border-box;
  padding-left: 20px;
  font-size: 1.2rem;
`;

const Button = styled.button`
  height: 60px;
  width: 60px;
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
  width: 500px;
`;
