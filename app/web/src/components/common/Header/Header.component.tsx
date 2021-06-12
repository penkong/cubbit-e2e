import { Container, ItemRow, Logo, NavItems } from './Header.styled'

export const Header = () => {
  return (
    <Container>
      <ItemRow>
        <Logo src="/files/Logo.png" alt="here" />
        <NavItems />
      </ItemRow>
    </Container>
  )
}
