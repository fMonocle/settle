import styled from "styled-components";

const InputWrap = styled.div`
  padding: 10px;
  border: none;
  
  input {
    padding: 10px;
    border: none;
    border-bottom: 1px solid darkgray;
}
  }
`;


const Input = ({ id, type, defaultValue, onChange }) => {
  return (
    <InputWrap>
      <label>
        <input 
          id={id} 
          type={type} 
          onChange={e => onChange(e.target.value)} 
          defaultValue={defaultValue} 
          placeholder="Ingresá un porcentaje..."/>
      </label>
    </InputWrap>
  );
}

export default Input;