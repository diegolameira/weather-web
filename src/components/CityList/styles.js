import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
`

const ListItem = styled.li`
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background: ${({ theme }) => theme.lightColor};
`

const HeadInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Icon = styled.img`
  max-width: 40px;
`

const Label = styled.span`
  color: ${({ theme }) => theme.darkerColor};
  font-weight: ${props => props.bold ? 'bold' : 'normal'}
`

const CurrentTempWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const MoreInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const ErrorMessage = styled.p`
  text-align: center;
  margin: 10px;
  color: ${({ theme }) => theme.darkColor};
`

export {
  List,
  ListItem,
  Icon,
  Label,
  CurrentTempWrapper,
  HeadInformation,
  MoreInfoWrapper,
  ErrorMessage
}