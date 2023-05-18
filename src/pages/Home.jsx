import { Grid, GridItem } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import bgMarmol from 'assets/bg-menu.jpeg'
const Home = () => {
  return (
    <Grid
      templateAreas={`"header header"
                    "nav main"
                    "footer footer"`}
      gridTemplateRows={'130px 1fr 100px'}
      gridTemplateColumns={{
        base: '150px 1fr',
        md: '200px 1fr',
      }}
      minHeight="100vh"
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
