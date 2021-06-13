import styled from 'styled-components'

export const SubHeaderStyled = styled.div`
  font-weight: 400;
  font-size: 16px;
  font-style: normal;
  color: white;
  line-height: 26px;
  width: 80vw;
  text-align: center;
`

export const UploaderStyled = styled.div`
  max-width: 936px;
  max-height: 216px;
  width: 80vw;
  height: 20vh;
  background-color: #ffa047;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 1200px) {
    width: 80vw;
  }
  @media (max-width: 590px) {
    width: 100vw;
  }

  .droparea {
    margin: auto;
    width: 99%;
    height: 94%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    border: 1px dashed #363636;
    background-color: rgba(22, 22, 22, 0.16);
    border-radius: 3px;
  }

  #filePicker {
    margin-bottom: 1rem;
    background: blue;
    height: 100%;
    display: none;
  }

  .button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 264px;
    height: 48px;
    background: #ffffff;
    color: #292929;
    font-weight: 400;
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    line-height: 26px;
    border-radius: 3px;

    &:hover {
      background: #f2f2f2;
      cursor: pointer;
    }
  }

  .readyforhash {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      margin-top: 1rem;
    }
  }

  .removeIcon {
    position: absolute;
    right: 12px;
    bottom: 6px;
    cursor: pointer;
    color: #292929;
  }
`

export const BtnRowStyled = styled.div`
  width: 38%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1200px) {
    width: 50vw;
    justify-content: space-around;
  }
  @media (max-width: 728px) {
    width: 86vw;
  }
  @media (max-width: 350px) {
    width: 96vw;
  }
`

export const BtnStyled = styled.button<{ upload?: true; disabled?: boolean }>`
  width: 168px;
  height: 48px;
  background-color: ${props => (props.upload ? '#009eff' : '#0065ff')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: white;
  text-align: center;
  border-radius: 3px;
  @media (max-width: 768px) {
    width: 150px;
  }

  @media (max-width: 330px) {
    width: 130px;
    height: 40px;
  }

  &:hover {
    background-color: ${props => (props.upload ? '#008ce4' : '#005ae2')};
  }
`
