import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons'

import { Button, GridItem, List, ListIcon, ListItem } from '@chakra-ui/react'

import { Link, NavLink } from 'react-router-dom'
import { useMenu } from '../hooks/useMenu'

const Nav = () => {
  const { menu } = useMenu()

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
          <Button to="/search" as={NavLink} colorScheme="yellow">
            🔎 SEARCH
          </Button>
        </ListItem>
        <ListItem>
          <ListItem to="/cities" as={Link}>
            <ListIcon color="blue.300" as={CheckCircleIcon} /> All Cities
          </ListItem>
          <List>
            <ListItem as={Link} to="/recommended" size="md">
              <ListIcon color="blue.300" as={CheckCircleIcon} />
              Recommended
            </ListItem>

            {menu.map(
              (city) =>
                city.recommended && (
                  <ListItem key={city.id} city={city}>
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
