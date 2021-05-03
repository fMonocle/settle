import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";

const media = {
  tablet: '@media(min-width: 768px)',
  desktop: '@media(min-width: 1366px)',
};

const SelectWrap = styled.div`
  border: none;
  width: 100%;
  text-align: left;

  label {
    width: 100%;
  }

  input {
    width: 90%;
    border: 1px solid darkgray;
    border-radius: 4px;
    padding: 14px;
    margin: 30px auto;
  }

  .custom-select {
    padding: 10px;
  }

  .custom-select input {
    margin: 3px;
  }

  ${media.desktop} {
    width: unset;

    label {
      width: 200px;
    }

    input {
      border-radius: unset;
      border: none;
      border-bottom: 1px solid darkgray;
      margin: 0;
    }

    .custom-select {
      padding: 10px;
      width: 22pc;
      margin: 0 auto;
    }
  }

`;


const SelectPair = ({ options, onChange, setPairList, value }) => {
  return (
    <SelectWrap>
      <label htmlFor="select">
        <Select
          className="custom-select"
          id="pairs"
          options={options}
          value={value}
          onChange={opt => {
            onChange(opt);
            setPairList(opt);
          }}
        />
      </label>
    </SelectWrap>
  );
}

export default SelectPair;