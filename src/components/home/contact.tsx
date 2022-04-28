import React, {useState, useEffect, Suspense} from 'react';
import { Box, Center, Container, Heading, Text, InputGroup, InputRightElement, Input, Button, useToast} from "@chakra-ui/react"
import { AtSignIcon, InfoOutlineIcon} from '@chakra-ui/icons'
//import ContactRoute from '../../pages/api/user';
//import type { NextApiRequest, NextApiResponse } from 'next'


function EmailValidation(enteredEmail:string) {
    const lastAtPos = enteredEmail.lastIndexOf('@');
    const lastDotPos = enteredEmail.lastIndexOf('.');
    return (lastAtPos < lastDotPos && lastAtPos > 0 && enteredEmail.indexOf('@@') === -1 && lastDotPos > 2 && (enteredEmail.length - lastDotPos) > 2);
}
const ContactView = () =>{
    const toast = useToast();
    const [Email, setEmail] = useState(String);
    const [errorForm, setErrorForm] = useState(Boolean);

    useEffect(() => {
        setEmail('');
        setErrorForm(false);
    }, [])
    const submitForm = async () =>{
        if(Email.length > 0 && EmailValidation(Email)) {
            setErrorForm(false);
            return toast({
                title: 'Yes!',
                description: "Your email is sending to administration.",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        }

        // await to DB
        /*try{
            return await ContactRoute(NextApiRequest, NextApiResponse)
        }
        catch(error){
            toast({
                title: 'Oops!.',
                description: "Error an occurred",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
            console.log(error)
        }*/
        
        setErrorForm(true);
        return toast({
                title: 'Oops!.',
                description: "Write your email correctly",
                status: 'error',
                duration: 9000,
                isClosable: true,
        })
        
    }
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
                    <Suspense>
                        <InputGroup>
                            
                            <Input bg="white" borderColor={errorForm ? 'tomato' : 'green'} color="black" placeholder='example@email.com' value={Email} onChange={(e) => setEmail(e.target.value)}/>
                            <InputRightElement>
                                {errorForm ? <InfoOutlineIcon color="tomato"/> : <AtSignIcon color='green.500'/> }
                            </InputRightElement>
                        </InputGroup>
                        <Button
                            p="5"
                            border="1px"
                            borderColor={errorForm ? 'tomato' : 'green'}
                            background="white"
                            color="gray"
                            m="2"
                            _focus={{boxShadow:'0px',}} 
                            _active={{borderColor: 'transparent'}} 
                            _hover={{color: 'white', background: 'transparent'}}
                            variant="solid"
                            size="sm"       
                            onClick={() => submitForm()}            
                        >Contact Us</Button>
                    </Suspense>
                </Center>
            </Container>
        </Box>
    )
}
export default ContactView;