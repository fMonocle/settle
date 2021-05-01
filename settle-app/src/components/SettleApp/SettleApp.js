import React from "react";
import styled from "styled-components";

const media = {
  tablet: '@media(min-width: 768px)',
  desktop: '@media(min-width: 1366px)',
};

const Header = styled.div`
  width: 100%;
  display: flex;
  background: #0069fb;
  justify-content: flex-start;
  
  .logo-wrapper {
    width: 7pc;
  }

  img {
    width: 100%;
    margin: 10px;
  }

  ${media.desktop} {
    .logo-wrapper {
      width: 10pc;
    }

    img {
      margin: 10px 10px 10px 135px;
    }
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  margin: 0 auto;
`;

const SettleApp = () => {
  return (
    <>
      <Header>
        <div className="logo-wrapper">
          <img src="../../../img/logo.png" alt="logo" />
        </div>
      </Header>
      <Wrapper>
        <h1>laksdjalksdj</h1>
      </Wrapper>
    </>
  );
}

export default SettleApp;
