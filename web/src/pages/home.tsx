import React from 'react'
import {
  Flex,
  Button,
  Text,
  Link,
  Grid,
  Heading,
  Stack,
  Tooltip,
  Box,
  Image,
  Badge
} from '@chakra-ui/core'
import Divider from '../components/Divider'

const Home: React.FC = () => {
  const property = {
    comments: 3,
    views: 2,
    likes: 2,
    title: 'A simple title',
    postContent:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " +
      'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ' +
      'a type specimen book.'
  }

  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="10% 10% 50% 20% 10%"
      templateRows="1fr 900px 1fr"
      templateAreas="
                '. . . . .'
                '. toolbar main bookmarks .'
                '. . . . .'
            "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="toolbar" height="100%" borderRadius="md">
        <Stack shouldWrapChildren spacing={4}>
          <Tooltip label="Home" aria-label="Home">
            <Button variant="outline">Home</Button>
          </Tooltip>

          <Tooltip label="Notificações" aria-label="Notificações">
            <Button variant="outline">Notificações</Button>
          </Tooltip>

          <Tooltip label="Favoritos" aria-label="Favoritos">
            <Button variant="outline">Favoritos</Button>
          </Tooltip>

          <Tooltip label="Perfil" aria-label="Perfil">
            <Button variant="outline">Perfil</Button>
          </Tooltip>
        </Stack>
      </Flex>

      <Flex gridArea="main" height="100%" borderRadius="md">
        <Box borderWidth="1px" rounded="lg" marginX="30px" overflow="hidden">
          <Heading
            size="md"
            alignItems="center"
            lineHeight="shorter"
            paddingTop="20px"
            paddingLeft="20px"
          >
            {property.title}
          </Heading>

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge rounded="full" px="2" variantColor="teal">
                Novo
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {property.comments} comentários &bull;
                {property.views} visualizações &bull;
                {property.likes} likes
              </Box>
            </Box>

            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
              {property.postContent}
            </Box>
          </Box>
        </Box>
      </Flex>

      <Flex gridArea="bookmarks" height="100%" borderRadius="md">
        <Heading size="2xl" lineHeight="shorter">
          Destaques
        </Heading>

        <Divider />
      </Flex>
    </Grid>
  )
}

export default Home
