import React, { useState, useEffect } from "react";
import styled from "styled-components";
import headerBg from "../assets/pattern-bg.png";
import {
  getTheDataBasedOnTheIpAddress,
  getTheDataBasedOnTheDomain,
  isIP,
} from "../domain";
import AddressDetails from "./AddressDetails";
import WarningMessage from "../components/WarningMessage";
import { respondTo } from "../respondTo";
import { trimTheEmptySpaces } from "../domain";

type headerProps = {
  setNewCoords: Function;
  initialDetailsData: {
    ipAddress: string;
    region: string;
    timezone: string;
    isp: string;
  };
};

const Header: React.FC<headerProps> = ({
  setNewCoords,
  initialDetailsData,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [detailsData, setDetailsData] = useState<typeof initialDetailsData>({
    ipAddress: "",
    region: "",
    timezone: "",
    isp: "",
  });
  const [showErrorFlag, setShowErrorFlag] = useState(false);

  useEffect(() => {
    setDetailsData(initialDetailsData);
  }, [initialDetailsData]);

  useEffect(() => {
    setTimeout(() => {
      setShowErrorFlag(false);
    }, 5000);
  }, [showErrorFlag]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedValue = trimTheEmptySpaces(inputValue);
    if (isIP(inputValue)) {
      getTheDataBasedOnTheIpAddress(trimmedValue).then(
        ({ location: { region, lat, lng }, ip: ipAddress, isp }) => {
          setDetailsData({
            ...initialDetailsData,
            ipAddress,
            isp,
            region,
          });
          setNewCoords([lat, lng]);
        }
      );
    } else {
      getTheDataBasedOnTheDomain(trimmedValue).then((data) => {
        if (data.messages) {
          setShowErrorFlag(true);
        } else {
          const {
            ip: ipAddress,
            location: { region, lat, lng },
            isp,
          } = data;
          setDetailsData({
            ...initialDetailsData,
            ipAddress: ipAddress,
            isp,
            region,
          });
          setNewCoords([lat, lng]);
        }
      });
    }
  };

  return (
    <HeaderSection className="header">
      <InputWrapper>
        <MainHeading>IP Address Tracker</MainHeading>
        <WarningMessage showWarning={showErrorFlag} />
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
  ${respondTo.sm`
    font-size: 10px;
    height: 40px;
`}
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
  ${respondTo.sm`
    width: 40px;
    height: 40px;
`}
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  width: 500px;
  ${respondTo.sm`
    min-width: 200px;
   width: auto
`}
`;
