import React, { useState, useEffect } from "react";
import Input from "../../ui/Input";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const ApiFee = styled.div`
  padding: 50px 25px 0 25px;
  width: 6pc;
  border-bottom: 1px solid white;
  text-align: left;
  margin-right: 10px;

  p {
    color: black;
    font-size: 30px;
  }

  small {
    color: gray;
    font-size: 20px;
  }
`;

const Fee = styled.div`
  padding: 10px;
  text-align: left;

  small {
    color: gray;
    font-size: 12px;
  }

  p {
    color: black;
    font-size: 30px;
  }

  .new-rate {
    color: #0368F6;
  }
`;

const Percentage = styled.div`
  color: #26A69A;
  padding: 10px;
  font-size: 30px;
`;


const Row = ({ pair, value}) => {
  const [percentage, setPercentage] = useState(0);
  const [fee, setFee] = useState(value);
  const [newFee, setNewFee] = useState(value);
  const [amountDifference, setAmountDifference] = useState(0);

  const calcPercentage = () => {
    const result = (percentage * fee)/100;
    setAmountDifference(result);
    return setNewFee((fee + result));
  }

  useEffect(() => {
    if (percentage) {
      calcPercentage();
    }
  }, [percentage]);

  return (
    <Wrapper>
      <ApiFee>
        <small>{pair}</small>
        <p>{value.toFixed(4)}</p>
      </ApiFee>
      <Input id={pair} type="number" value={percentage} onChange={setPercentage} />
      <Percentage>{percentage} %</Percentage>
      <Fee>
        <small>Fee amount</small>
        <p>{amountDifference.toFixed(4)}</p>
      </Fee>
      <Fee>
        <small>New rate</small>
        <p className="new-rate">{newFee.toFixed(4)}</p>
      </Fee>
    </Wrapper>    
  );
}

export default Row;
