import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { history } from '../../../util/'
import { Container, NavRow, Logo, NavItems, Item } from './Header.styled'

// ---

export const Header = () => {
  const [selected, setSelected] = useState<'it' | 'en'>('it')
  const { i18n } = useTranslation()
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
          <Item
            selected={selected === 'it'}
            onClick={() => {
              setSelected('it')
              i18n.changeLanguage('it')
            }}
          >
            Encrypted
          </Item>
          <Item
            selected={selected === 'en'}
            onClick={() => {
              setSelected('en')
              i18n.changeLanguage('en')
            }}
          >
            {selected === 'en' ? 'English' : "b-&+(2'"}
          </Item>
        </NavItems>
      </NavRow>
    </Container>
  )
}
