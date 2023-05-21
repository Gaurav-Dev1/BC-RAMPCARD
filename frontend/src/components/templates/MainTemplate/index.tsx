import { Grid } from '@mui/material'
import Header from '../../molecules/Header'
import NavBar from '../../organisms/NavigationBar'

interface MainTemplateProps {
    children?: React.ReactNode
}
const MainTemplate = (props: MainTemplateProps) => {
    const {children} = props
  return (
    <Grid data-testid = "main-template">
        <Header />
        <NavBar />
        {children}
    </Grid>
  )
}

export default MainTemplate