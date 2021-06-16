import styled from 'styled-components'

export const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 30%;
  @media (max-width: 1400px) {
    width: 40%;
  }
  @media (max-width: 978px) {
    width: 60%;
  }
  @media (max-width: 778px) {
    width: 70%;
  }
  @media (max-width: 640px) {
    width: 80%;
  }
  @media (max-width: 550px) {
    width: 90vw;
    margin: 0;
  }
  height: 100%;
  font-weight: 700;
  font-size: 16px;
  .label {
    padding-top: auto;
    margin-top: -0.5px;
    color: white;
    width: 25%;
    text-align: right;
    padding-right: 9px;
    padding-top: 5px;
    height: 30px;
    @media (max-width: 400px) {
      font-weight: 400;
    }
    @media (max-width: 377px) {
      width: 20%;
      padding-right: 7px;
      margin-top: 7px;
      font-size: 10px;
    }
  }
  input {
    color: white;
    width: 75%;
    padding-top: 0.4px;
    @media (max-width: 375px) {
      width: 80%;
      font-size: 10px;
    }
    background-color: #292929;
    border: 1px solid #363636;
    text-align: left;
    height: 32px;
    border-radius: 3px;
    padding-left: 15px;
  }
`
