import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  height: 72px;
  left: 0%;
  right: 0%;
  top: 0px;
  background: #292929;
`

export const NavRow = styled.div`
  width: 85vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`

export const Logo = styled.img`
  margin-left: 2vw;
  cursor: pointer;
`

export const NavItems = styled.div`
  width: 240px;
  height: 40px;
  border-radius: 2px;
  background-color: #009eff;
  color: black;
  background-size: cover;
  margin-left: auto;
  background-blend-mode: screen;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    position: absolute;
    top: 12vh;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`

export const Item = styled.button<{ color?: string }>`
  min-width: 48%;
  width: 116px;
  min-height: 90%;
  height: 36px;
  color: white;
  background-color: ${({ color }) => (color ? color : '#009EFF')};
  border-radius: 2px;
`
