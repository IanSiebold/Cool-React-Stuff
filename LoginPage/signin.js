import React, { useState } from 'react';

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
  } from '@chakra-ui/react';
  
  export default function SimpleCard({ onSignIn, onToggle }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
      e.preventDefault();
      onSignIn(username, password);
    };

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg='page_bg'>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} color='page_text'>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg='page_sec_bg'
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel color='page_sec_text'>Email address</FormLabel>
                <Input type="email" color='page_sec_text' borderColor='page_sec_text' value={username} onChange={(e) => setUsername(e.target.value)}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel color='page_sec_text'>Password</FormLabel>
                <Input type="password" color='page_sec_text' borderColor='page_sec_text' value={password} onChange={(e) => setPassword(e.target.value)} 
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSignIn(e);
                    }
                }}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox color='page_sec_text' borderColor='page_sec_text' colorScheme='white'>Remember me</Checkbox>
                  <Link onClick={ onToggle } color='link_text'>New User?</Link>
                </Stack>
                <Button
                  onClick={handleSignIn}
                  bg='button_bg'
                  color='button_text'
                  _hover={{
                    bg: 'button_hover_bg',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
