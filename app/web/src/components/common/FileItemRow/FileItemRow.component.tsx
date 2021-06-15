import React, { FC } from 'react'

import { RowStyled } from './FileItemRow.styled'

// ---

interface IAppProps {
  label: string
  info: string
}

export const FileItemRow: FC<IAppProps> = ({ label, info }) => {
  return (
    <RowStyled>
      <div className="label">{label}</div>
      <input className="info" defaultValue={info} />
    </RowStyled>
  )
}
