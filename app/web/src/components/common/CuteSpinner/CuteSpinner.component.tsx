import { CuteSpinnerStyled } from './CuteSpinner.styled'

// ---

export const CuteSpinner = () => {
  return (
    <CuteSpinnerStyled>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </CuteSpinnerStyled>
  )
}
