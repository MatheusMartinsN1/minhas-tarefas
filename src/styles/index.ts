import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export default EstiloGlobal
