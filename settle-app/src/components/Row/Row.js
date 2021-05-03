import React, { useState, useEffect } from "react";
import Input from "../../ui/Input";
import styled from "styled-components";

const media = {
  tablet: '@media(min-width: 768px)',
  desktop: '@media(min-width: 1366px)',
};

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 6pc;

  .delete-pair {
    width: 100%;
    border: none;
    color: white;
    font-size: 22px;
    background: red;
    padding: 10px;
    border-radius: 3px;
  }

  ${media.desktop} {
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 0;

    .delete-pair {
      width: 6pc;
      background: transparent;
      color: red;
      cursor: pointer;
    }
  }
`;

const ApiFee = styled.div`
  padding: 0;
  width: 6pc;
  border-bottom: 1px solid white;
  text-align: left;
  margin: 3px

  p {
    color: black;
    font-size: 20px;
  }

  small {
    color: gray;
    font-size: 20px;
  }

  ${media.desktop} {
    padding: 50px 25px 0 25px;
    margin-right: 10px;

    p {
      font-size: 30px;
    }
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
    color: #0069fb;
  }

  ${media.desktop} {
    background: unset;
    
    small {
      color: gray;
      font-size: 12px;
    }

    p {
      color: black;
      font-size: 30px;
    }

    .new-rate {
      width: 10pc;
    }
  }
`;

const Percentage = styled.div`
  color: #26A69A;
  font-size: 30px;
  min-width: 4pc;

  ${media.desktop} {
    padding: 10px 30px;
  }
`;


const Row = ({ pair, value, deletePair}) => {
  const fee = value;
  const [percentage, setPercentage] = useState(0);
  const [newFee, setNewFee] = useState(value);
  const [amountDifference, setAmountDifference] = useState(0);
  const [showPairList, setShowPairList] = useState(false);

  const calcPercentage = () => {
    const result = (percentage * fee)/100;
    setAmountDifference(result);
    return setNewFee((fee + result));
  }

  useEffect(() => {
    if (percentage) {
      calcPercentage();
    }

    if (pair) {
      setShowPairList(true);
    }
  }, [percentage, pair]);

  return (
    <Wrapper>
      {showPairList ? (
        <>
          <ApiFee>
            <small>{pair.label}</small>
            <p>{value.toFixed(4)}</p>
          </ApiFee>
          <Input id={pair.label} type="number" value={percentage} onChange={setPercentage} />
          <Percentage>{percentage} %</Percentage>
          <Fee>
            <small>Fee amount</small>
            <p>{amountDifference.toFixed(4)}</p>
          </Fee>
          <Fee>
            <small>New rate</small>
            <p className="new-rate">{newFee.toFixed(4)}</p>
          </Fee>
          <button className="delete-pair" type="button" onClick={() => deletePair(pair)}>
            Delete
          </button>
        </>
      ) : (
        ""
      )}
    </Wrapper>    
  );
}

export default Row;
