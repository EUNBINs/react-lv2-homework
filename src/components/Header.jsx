import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <StHeader>
      <div>μλΉμ΄μ TodoList</div>
    </StHeader>
  )
}

export default Header

const StHeader = styled.div`
  border: 2px solid #ddd;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin-top: 10px;
  margin-bottom: 24px;
`