import { Grid, GridItem } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Header from '../components/Header'

const Home = () => {
  return (
    <Grid
      templateAreas={`"header header"
                    "nav main"
                    "nav footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'150px 1fr'}
      minHeight="100vh"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <Header />
      <Nav />
      <GridItem pl="2" bg="green.300" area={'main'}></GridItem>
      <Footer />
    </Grid>
  )
}

export default Home
