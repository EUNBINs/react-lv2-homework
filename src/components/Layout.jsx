import React from 'react'
import styled from 'styled-components'

function Layout({ children }) {
  return <StLayout>{children}</StLayout>
}

export default Layout

const StLayout = styled.div`
  max-width: 1400px;
  min-width: 800px;
  margin: 0 auto;
`