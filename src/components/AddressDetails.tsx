import React from "react";
import styled from "styled-components";
import { respondTo } from "../respondTo";

type DetailsProps = {
  detailsData: {
    ipAddress: string;
    region: string;
    timezone: string;
    isp: string;
  };
};

const AddressDetails: React.FC<DetailsProps> = ({
  detailsData,
}: DetailsProps) => {
  const { ipAddress, region, timezone, isp } = detailsData;
  return (
    <AddressDetailsContainer>
      <div className="details-chunk">
        <span className="details-chunk-title">IP ADDRESS</span>
        {ipAddress}
      </div>
      <div className="details-chunk">
        <span className="details-chunk-title">LOCATION</span>
        {region}
      </div>
      <div className="details-chunk">
        <span className="details-chunk-title">TIMEZONE</span>
        {timezone}
      </div>
      <div className="details-chunk">
        <span className="details-chunk-title">ISP</span>
        {isp}
      </div>
    </AddressDetailsContainer>
  );
};

export default AddressDetails;

const AddressDetailsContainer = styled.div`
  position: absolute;
  width: 65%;
  background-color: #fff;
  border-radius: 10px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(50%);
  z-index: 999;
  bottom: 0;
  justify-content: space-around;
  ${respondTo.sm`
    flex-direction: column;
    height: auto;
  `}
  .details-chunk {
    display: flex;
    flex-direction: column;
    border-left: 1px solid #75757540;
    height: 50px;
    padding-left: 20px;
    padding-right: 20px;
    width: 25%;
    font-weight: bold;
    &:nth-child(1) {
      border-left: none;
      margin: 10px;
    }
    ${respondTo.sm`
      border-left: none;
      width: 250px;
      align-items: center;
  `}
    .details-chunk-title {
      font-size: 0.7em;
      padding-bottom: 10px;
      color: #757575;
      font-weight: bold;
    }
  }
`;
