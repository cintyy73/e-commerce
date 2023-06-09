import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons'
import Order from './Order'

import { Button, GridItem, List, ListIcon, ListItem } from '@chakra-ui/react'

import { Link, NavLink } from 'react-router-dom'
import { useMenu } from '../hooks/useMenu'

const Nav = () => {
  const { menu } = useMenu()

  return (
    <GridItem pl="2" bg="black" color="yellow.300" area={'nav'}>
      <List padding={6} spacing={6}>
        <ListItem>
          <Order />
        </ListItem>
        <ListItem>
          <Button
            size={{ base: 'xs', md: 'md' }}
            to="/"
            as={NavLink}
            colorScheme="yellow"
          >
            📌 HOME
          </Button>
        </ListItem>

        <ListItem>
          <Button
            size={{ base: 'xs', md: 'md' }}
            to="/menu"
            as={NavLink}
            colorScheme="yellow"
          >
            🗒️ MENU
          </Button>
        </ListItem>
        <ListItem>
          <Button
            size={{ base: 'xs', md: 'md' }}
            to="/search"
            as={NavLink}
            colorScheme="yellow"
          >
            🔎 SEARCH
          </Button>
        </ListItem>
        <ListItem>
          <ListItem fontSize={{ base: 'xs', md: 'lg' }} to="/cities" as={Link}>
            <ListIcon color="blue.300" as={CheckCircleIcon} /> All Cities
          </ListItem>
          <List spacing={4}>
            <ListItem
              fontSize={{ base: 'xs', md: 'lg' }}
              as={Link}
              to="/recommended"
              size="md"
            >
              <ListIcon color="blue.300" as={CheckCircleIcon} />
              Top 5
            </ListItem>

            {menu.map(
              (city) =>
                city.recommended && (
                  <ListItem
                    fontSize={{ base: 'xs', md: 'lg' }}
                    key={city.id}
                    city={city}
                  >
                    <ListIcon color="green" as={StarIcon} />
                    <NavLink to={'/city/' + city.id}> {city.name}</NavLink>
                  </ListItem>
                )
            )}
          </List>
        </ListItem>
      </List>
    </GridItem>
  )
}

export default Nav
