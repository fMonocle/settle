import styled from "styled-components";

const media = {
  tablet: '@media(min-width: 768px)',
  desktop: '@media(min-width: 1366px)',
};

const InputWrap = styled.div`
  border: none;
  width: 100%;

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

  ${media.desktop} {
    width: unset;

    input {
      border-radius: unset;
      border: none;
      border-bottom: 1px solid darkgray;
      margin: 0;
    }
  }

`;


const Input = ({ id, type, defaultValue, onChange }) => {
  return (
    <InputWrap>
      <label>
        <input 
          id={id} 
          min={0}
          type={type} 
          onChange={e => onChange(e.target.value)} 
          defaultValue={defaultValue} 
          placeholder="Ingresá un porcentaje..."/>
      </label>
    </InputWrap>
  );
}

export default Input;