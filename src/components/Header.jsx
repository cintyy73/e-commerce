import {
  Avatar,
  GridItem,
  HStack,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'

const Header = () => {
  return (
    <GridItem pl="2" bg="black" color="#ffc600" area={'header'}>
      <HStack justifyContent="space-between" alignItems="center">
        <Avatar size="md" name="logo resto" src="./src/assets/favicon.png" />{' '}
        <VStack>
          {' '}
          <Heading>Arian Maldonado</Heading>
          <Text>CHEF INTERNATIONAL</Text>
        </VStack>
      </HStack>
    </GridItem>
  )
}

export default Header
