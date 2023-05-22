import { Grid, styled } from '@mui/material'
import Header from '../../molecules/Header'
import NavBar from '../../organisms/NavigationBar'

interface MainTemplateProps {
  children?: React.ReactNode
}

const ChildrenContainer = styled(Grid)({
  paddingLeft: '40px',
  paddingRight: '80px',
})
const MainTemplate = (props: MainTemplateProps) => {
  const { children } = props
  return (
    <Grid data-testid="main-template">
      <Header />
      <NavBar />
      <ChildrenContainer>{children}</ChildrenContainer>
    </Grid>
  )
}

export default MainTemplate
