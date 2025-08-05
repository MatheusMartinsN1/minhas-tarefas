import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 16px;
`

export const Tag = styled.span`
  display: inline-block;
  border-radius: 8px;
  padding: 4px 8px;
  margin-right: 16px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: #e1a32a;
`

export const Descricao = styled.textarea`
  display: block;
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  font-family: 'Roboto Mono', monospace;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  color: #fff;
  background-color: #2f3640;
  font-weight: bold;
  font-size: 12px;
  padding: 8px 12px;
  margin-right: 8px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`
