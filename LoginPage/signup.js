import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  export default function SignupCard({ onToggle }) {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg='page_bg'>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'} color='page_text'>
              Sign up
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg='page_sec_bg'
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel color='page_sec_text'>First Name</FormLabel>
                    <Input type="text"  color='page_sec_text' borderColor='page_sec_text'/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel color='page_sec_text'>Last Name</FormLabel>
                    <Input type="text"  color='page_sec_text' borderColor='page_sec_text'/>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel color='page_sec_text'>Email address</FormLabel>
                <Input type="email"  color='page_sec_text' borderColor='page_sec_text'/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel color='page_sec_text'>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'}  color='page_sec_text' borderColor='page_sec_text'/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      color='button_bg'
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg='button_bg'
                  color='button_text'
                  _hover={{
                    bg: 'button_hover_bg',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'} color='page_sec_text'>
                  Already a user? <Link onClick={ onToggle }color='link_text'>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
