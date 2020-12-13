import React from "react";
import styled from "styled-components";

interface DetailsProps {
  detailsData: {
    ipAddress: string;
    location: string;
    timezone: string;
    isp: string;
  };
}

const AddressDetails: React.FC<DetailsProps> = ({
  detailsData,
}: DetailsProps) => {
  const { ipAddress, location, timezone, isp } = detailsData;
  return (
    <AddressDetailsContainer>
      <div>{ipAddress}</div>
      <div>{location}</div>
      <div>{timezone}</div>
      <div>{isp}</div>
    </AddressDetailsContainer>
  );
};

export default AddressDetails;

const AddressDetailsContainer = styled.div`
  position: absolute;
  width: 60%;
  background-color: #fff;
  border-radius: 10px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(50%);
  z-index: 100;
  bottom: 0;
`;
