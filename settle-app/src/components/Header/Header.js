import React from "react";
import styled from "styled-components";

const media = {
    tablet: '@media(min-width: 768px)',
    desktop: '@media(min-width: 1366px)',
  };

const HeaderWrap = styled.div`
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

const Header = () => {
  return (
    <HeaderWrap>
      <div className="logo-wrapper">
        <img src="../../../img/logo.png" alt="logo" />
      </div>
    </HeaderWrap>
  );
}

export default Header;
