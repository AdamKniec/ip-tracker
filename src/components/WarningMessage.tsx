import React from "react";
import styled from "styled-components";

type WarningMessageProps = {
  showWarning: boolean;
};

const WarningMessage = ({ showWarning }: WarningMessageProps) => {
  return (
    <Warning className={showWarning ? "show" : ""}>
      <p>We did not find anything matching the given address / domain</p>
    </Warning>
  );
};

export default WarningMessage;

const Warning = styled.div`
  color: white;
  position: absolute;
  right: 0;
  background: chocolate;
  padding: 10px;
  border-radius: 10px;
  transform: translateX(500px);
  transition: transform 0.2s;
  z-index: 9999;
  &.show {
    transform: translateX(0);
    transition: transform 0.2s;
  }
`;
