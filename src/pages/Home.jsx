import { Grid, GridItem } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <Grid
      templateAreas={`"header header"
                    "nav main"
                    "nav footer"`}
      gridTemplateRows={'130px 1fr 30px'}
      gridTemplateColumns={'200px 1fr'}
      minHeight="100vh"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <Header />
      <Nav />
      <GridItem bgImage="url(src/assets/marmol.jpeg)" pl="2" area={'main'}>
        <Outlet />
      </GridItem>
      <Footer />
    </Grid>
  )
}

export default Home
