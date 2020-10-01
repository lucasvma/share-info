import React, { useState, FormEvent } from 'react';
import { Flex, Button, Text, Link } from '@chakra-ui/core';
import axios from 'axios';
import Input from '../components/Input';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');

  function handleSignUp(event: FormEvent) {
    event.preventDefault()

    axios.post('/api/signup', { name, email, password, bio })
  }

  return (
    <Flex as="main" height="100vh" justifyContent="center" alignItems="center">
      <Flex
        as="form"
        onSubmit={handleSignUp}
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={8}
        marginTop={4}
        width="100%"
        maxW="400px"
      >
        <Text
          textAlign="center"
          fontSize="lg"
          fontWeight="bold"
          color="gray.400"
        >
          Crie sua conta
        </Text>

        <Input
          placeholder="Nome"
          value={name}
          marginTop={6}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="email"
          value={email}
          marginTop={2}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          value={password}
          marginTop={2}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          marginTop={2}
        />

        <Button
          type="submit"
          backgroundColor="purple.500"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: 'purple.600' }}
        >
          INSCREVER
        </Button>

        <Link marginTop={2} href="/" fontSize="sm" textAlign="right">
          <a>Voltar</a>
        </Link>
      </Flex>
    </Flex>
  )
}

export default SignUp
