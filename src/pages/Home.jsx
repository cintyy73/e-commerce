import { Grid, GridItem } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Header from '../components/Header'
import bgMarmol from 'assets/marmol.jpeg'

const Home = () => {
  return (
    <Grid
      templateAreas={`"header header"
                    "nav main"
                    "footer footer"`}
      gridTemplateRows={'130px 1fr 150px'}
      gridTemplateColumns={{
        base: '150px 1fr',
        md: '200px 1fr',
      }}
      minHeight="100vh"
      minW="300px"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <Header />
      <Nav />
      <GridItem bgImage={bgMarmol} pl="2" area={'main'}>
        <Outlet />
      </GridItem>
      <Footer />
    </Grid>
  )
}

export default Home
