import styled from 'styled-components'

export const GetterTitleStyled = styled.div`
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: white;
`

export const FileGetter = () => {
  return (
    <div>
      <GetterTitleStyled>Insert your file id:</GetterTitleStyled>
      <div>
        <input type="text" />
      </div>
      <div>
        <button>Get file</button>
      </div>
    </div>
  )
}
