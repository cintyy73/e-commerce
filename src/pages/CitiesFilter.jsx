import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import {
  FormLabel,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
  Heading,
  SimpleGrid,
  Spinner,
  Button,
  HStack,
} from '@chakra-ui/react'

import City from '../components/City'
import { useMenu } from '../hooks/useMenu'
import { useEffect, useState } from 'react'
import { allCitiesFilters } from '../services/cities'
// import { useEffect, useState } from 'react'
// import { allCitiesFilters } from '../services/cities'

const CitiesFilter = () => {
  const { menu } = useMenu()

  const [loading, setLoading] = useState(true)
  const [countryCities, setCountryCities] = useState([])
  const [values, setValues] = useState({
    min: 0,
    max: 1000,
    country: '',
  })
  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value })

  const handleCountry = (city) =>
    setValues({ ...values, country: city.country })

  useEffect(() => {
    const getCitiesCountry = async () => {
      const cities = await allCitiesFilters(values.country)
      const filtList = cities.filter((city) => {
        if (city.price < values.min) {
          return false
        }
        if (city.price > values.max) {
          return false
        }
        return true
      })
      setCountryCities(filtList)
      setLoading(false)
    }
    getCitiesCountry()
  }, [values])
  return (
    <VStack>
      <HStack
        w="100%"
        justifyContent="space-evenly"
        alignItems="flex-end"
        gap={4}
        color="yellow.300"
        pb={6}
      >
        <Menu>
          <MenuButton
            colorScheme="yellow"
            as={Button}
            rightIcon={<ChevronDownIcon />}
            size="lg"
          >
            <SearchIcon /> Country
          </MenuButton>
          <MenuList background="black">
            {menu.map(
              (city) =>
                city.recommended && (
                  <MenuItem
                    background="black"
                    color="yellow.200"
                    key={city.country + city.id}
                    city={city}
                    onClick={() => handleCountry(city)}
                  >
                    {city.country}
                  </MenuItem>
                )
            )}
          </MenuList>
        </Menu>
        <Heading m={4} color="yellow.200" bg="black">
          {values.country}
        </Heading>
        <VStack>
          <FormLabel fontSize={20} bg="black" color="yellow.200">
            Minimmum Price
          </FormLabel>
          <Input
            bg="black"
            size="md"
            type="number"
            onChange={handleChange}
            value={values.name}
            name="min"
            placeholder="100-1000"
          />
        </VStack>

        <VStack>
          <FormLabel fontSize={20} bg="black" color="yellow.200">
            Maximmum Price
          </FormLabel>

          <Input
            bg="black"
            size="md"
            type="number"
            onChange={handleChange}
            value={values.name}
            name="max"
            placeholder="100-1000"
          />
        </VStack>
      </HStack>

      {loading && <Spinner color="yellow" size="xl" />}
      {!loading && (
        <SimpleGrid
          padding={6}
          spacing={4}
          templateColumns={{
            base: 'repeat(1, minmax(300px, 1fr))',
            md: 'repeat(2, minmax(300px, 1fr))',
            xl: 'repeat(3, minmax(300px, 1fr))',
          }}
        >
          {countryCities.map((city) => (
            <City key={city.id} city={city}></City>
          ))}
        </SimpleGrid>
      )}
    </VStack>
  )
}

export default CitiesFilter
