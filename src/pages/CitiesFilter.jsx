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
  Portal,
} from '@chakra-ui/react'

import City from '../components/City'
import { useMenu } from '../hooks/useMenu'
import { useEffect, useState } from 'react'
import { allCitiesFilters } from '../services/cities'
import { useDebounce } from '../hooks/useDebonce'

const CitiesFilter = () => {
  const { menu } = useMenu()

  const [loading, setLoading] = useState(true)
  const [values, setValues] = useState({
    min: 0,
    max: 1000,
    country: '',
  })
  const [countryCities, setCountryCities] = useState([])
  const debounceMin = useDebounce(values.min, 2000)
  const debounceMax = useDebounce(values.max, 2000)

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value })

  const handleCountry = (city) =>
    setValues({ ...values, country: city.country })

  useEffect(() => {
    const getCitiesCountry = async () => {
      const cities = await allCitiesFilters(values.country)
      const filtList = cities.filter((city) => {
        if (city.price < debounceMin) {
          return false
        }
        if (city.price > debounceMax) {
          return false
        }
        return true
      })
      setCountryCities(filtList)

      setLoading(false)
    }

    getCitiesCountry()
  }, [debounceMax, debounceMin, values.country])
  if (loading) {
    return <Spinner />
  }

  return (
    <VStack minH="100vh">
      <HStack
        flexDir={{ base: 'column', md: 'row' }}
        w="100%"
        justifyContent="space-evenly"
        alignItems={{ base: 'center', md: 'flex-end' }}
        gap={4}
        color="yellow.300"
        p={6}
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
          <Portal>
            <MenuList bg="blackAlpha.600">
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
          </Portal>
        </Menu>
        <Heading m={4} color="yellow.300" bg="black">
          {values.country}
        </Heading>
        <VStack>
          <FormLabel fontSize={20} bg="blackAlpha.600" color="yellow.200">
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
          <FormLabel fontSize={20} bg="blackAlpha.600" color="yellow.300">
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
          {countryCities.length === 0 && (
            <Heading
              fontSize={20}
              p={7}
              color="yellow.200"
              border="solid 3px green"
              bg="blackAlpha.800"
              rounded={10}
            >
              No matches,choose a country and change price range please!
            </Heading>
          )}
        </SimpleGrid>
      )}
    </VStack>
  )
}

export default CitiesFilter
