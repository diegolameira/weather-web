import styled from 'styled-components'

const Input = styled.input`
  width: 240px;
  height: 32px;
  padding: 0 12px;
  border-radius: 3px;
  font-size: 14px;
  outline: none;
  border: ${({ theme }) => `2px solid ${theme.lightColor}`};
  text-overflow: ellipses;
  position: absolute;
  left: 10px;
  top: 120px;
`

export { Input }