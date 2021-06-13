import { history } from '../../../util/'
import { Container, NavRow, Logo, NavItems, Item } from './Header.styled'

// ---

export const Header = () => {
  return (
    <Container>
      <NavRow>
        <Logo
          src="/files/Logo.png"
          alt="here"
          onClick={() => {
            history.push('/')
          }}
        />
        <NavItems>
          <Item>Encrypted</Item>
          <Item>English</Item>
        </NavItems>
      </NavRow>
    </Container>
  )
}
