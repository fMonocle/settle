import React, { useState ,useEffect } from "react";
import client from "../../api/api";
import Row from "../Row";
import styled from "styled-components";

const media = {
  tablet: '@media(min-width: 768px)',
  desktop: '@media(min-width: 1366px)',
};

const TableWrap = styled.div`
  display: flex;
  margin: 0;
  padding: 10px;
  flex-direction: column;

  p {
    margin: 0;
  }

  ${media.desktop} {
    margin: 2pc 9pc;
  }
`;

const SettleApp = () => {
  const [rates, setRates] = useState([]);
  
  const fetch = async () => {
    try {
      const res = await client.endpoints.rates.get();
      setRates([
        { pair: "EURUSD", value: res.data.rates["USD"] },
        { pair: "EURARS", value: res.data.rates["ARS"] },
        { pair: "EURBRL", value: res.data.rates["BRL"] }
      ]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <TableWrap>
      {rates.map(e => {
        return <Row pair={e.pair} value={e.value} />
      })}
    </TableWrap>
    );
  }

export default SettleApp;
