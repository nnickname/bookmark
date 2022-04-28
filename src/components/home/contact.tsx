import React, {useState} from 'react';
import { Box, Center, Container, Heading, Text, InputGroup, InputRightElement, Input, Button} from "@chakra-ui/react"
import { AtSignIcon, InfoIcon} from '@chakra-ui/icons'

const ContactView = () =>{
    return (
        <Box bg="rgb(86, 86, 224)" p={5}>
            <Container w={{base: '100%', lg: '60%'}}>
                <Center m={3} mb={5}>
                    <Text letterSpacing={5} fontSize={15} color="white"> 35,000+ already joined</Text>
                </Center>
                <Center mb={5} textAlign="center" m={3}>
                    <Heading fontSize={28} color="white" m={1}>Stay up-to-date with what we’re doing</Heading>
                </Center>
                <Center mb={5} className='flexResponsive'>
                    <InputGroup>
                        
                        <Input bg="white" color="black" placeholder='example@email.com' />
                        <InputRightElement children={<AtSignIcon color='green.500' />} />
                    </InputGroup>
                    <Button
                        p="5"
                        background="white"
                        color="gray"
                        m="2"
                        _focus={{boxShadow:'0px',}} 
                        _active={{borderColor: 'transparent'}} 
                        _hover={{color: 'white', background: 'transparent'}}
                        variant="solid"
                        size="sm"                   
                    >Contact Us</Button>
                </Center>
            </Container>
        </Box>
    )
}
export default ContactView;