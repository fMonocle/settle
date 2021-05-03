import React, { useState ,useEffect } from "react";
import client from "../../api/api";
import SelectPair from "../../ui/SelectPair";
import Row from "../Row";
import styled from "styled-components";

const media = {
  tablet: '@media(min-width: 768px)',
  desktop: '@media(min-width: 1366px)',
};

const SettleAppWrap = styled.div`
  h3 {
    padding: 12px;
    margin: 0 auto;
  }
`;

const TableWrap = styled.div`
  display: flex;
  margin: 0;
  padding: 10px;
  flex-direction: column;

  p {
    margin: 0;
  }

  p.error-msg {
    color: red;
  }

  ${media.desktop} {
    margin: 2pc 9pc;
  }
`;

let pairList = [];
const SettleApp = () => {
  const [rates, setRates] = useState([]);
  const [pair, setPair] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  
  const fetch = async () => {
    try {
      const res = await client.endpoints.rates.get();
      const rateList = [];

      for (const property in res.data.rates) {
        rateList.push({ label: `EUR${property}`, value: res.data.rates[property] });
      }
      
      setRates(rateList);
    } catch (error) {
      setErrorMsg("Error al traer el listado de rates");
    }
  }

  const setPairList = e => {
    pairList.push(e);
  }

  useEffect(() => {
    fetch();
  }, []);


  console.log(pairList);

  return (
    <SettleAppWrap>
      <h3>Select a pair</h3>
      <SelectPair options={rates} onChange={setPair} setPairList={setPairList} value={pair}/>
      {pairList.length > 0 ? (
        <TableWrap>
          <p className="error-msg">{errorMsg}</p>
          {pairList.map(e => {
            return <Row pair={e.label} value={e.value} />
          })}
        </TableWrap>
      ) : (
        ""
      )}
    </SettleAppWrap>
    
    );
  }

export default SettleApp;
