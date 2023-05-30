import {
  CheckCircleIcon,
  ChevronDownIcon,
  SearchIcon,
  StarIcon,
} from '@chakra-ui/icons'

import {
  Button,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  List,
  ListIcon,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'

import { Link, NavLink } from 'react-router-dom'
import { useMenu } from '../hooks/useMenu'
import { useEffect, useState } from 'react'
import { filters } from '../services/cities'

const Nav = () => {
  const { menu } = useMenu()
  const [country, setCountry] = useState([])
  console.log(country)
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
    const getFilterCity = async () => {
      const countryList = await filters(values.country)
      setCountry(countryList)
    }
    getFilterCity()
  }, [values])

  // const listFilterPrice = () => {
  //   country.filter((city) => city.price === 430)
  // }
  // console.log(listFilterPrice())
  //hasta aca me filtra x country
  return (
    <GridItem pl="2" bg="black" color="yellow.300" area={'nav'}>
      <List padding={6} spacing={6}>
        <ListItem>
          <Button to="/" as={NavLink} colorScheme="yellow">
            📌 HOME
          </Button>
        </ListItem>

        <ListItem>
          <Button to="/menu" as={NavLink} colorScheme="yellow">
            🗒️ MENU
          </Button>
        </ListItem>
        <ListItem>
          <ListItem to="/cities" as={Link}>
            <ListIcon color="gray" as={CheckCircleIcon} /> All Cities
          </ListItem>
          <List>
            <ListItem as={Link} to="/recommended" size="md">
              <ListIcon color="gray" as={CheckCircleIcon} />
              All Recommended
            </ListItem>

            {menu.map(
              (city) =>
                city.recommended && (
                  <ListItem key={city.id} city={city}>
                    <ListIcon color="gray" as={StarIcon} />
                    <NavLink to={'/city/' + city.id}> {city.name}</NavLink>
                  </ListItem>
                )
            )}
          </List>
        </ListItem>
        <ListItem>
          <Menu>
            <MenuButton
              colorScheme="yellow"
              as={Button}
              rightIcon={<ChevronDownIcon />}
              size="sm"
            >
              <SearchIcon /> Country
            </MenuButton>
            <MenuList background="black">
              {menu.map(
                (city) =>
                  city.recommended && (
                    <MenuItem
                      background="black"
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
        </ListItem>

        <ListItem>
          <FormControl>
            <FormLabel>$ Price minim</FormLabel>
            <Input
              type="number"
              onChange={handleChange}
              value={values.name}
              name="min"
              placeholder="100-1000"
            />
            <FormLabel>$ Price maxim</FormLabel>

            <Input
              type="number"
              onChange={handleChange}
              value={values.name}
              name="max"
              placeholder="100-1000"
            />
          </FormControl>
        </ListItem>
      </List>
    </GridItem>
  )
}

export default Nav
