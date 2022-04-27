import React, { FunctionComponent, useState} from 'react';

import { Box, Center, Flex, Button, Heading, Text} from '@chakra-ui/react'
import Image from 'next/image'
import IllustrationFeaturesTab1 from '../../images/illustration-features-tab-1.svg';
import IllustrationFeaturesTab2 from '../../images/illustration-features-tab-2.svg';
import IllustrationFeaturesTab3 from '../../images/illustration-features-tab-3.svg';



const FAQView = () =>{
    return (
        <Box w="100">
            <Center>
                <Heading fontSize="30">Frequently Asked Questions</Heading>
                
            </Center>
            <Center ml={{base:'0%', md: '15%', sm: '5%', lg: '21%'}} mr={{base:'0%', md: '15%', sm: '5%', lg: '21%'}} textAlign="center">
                <Text fontSize="23" pt="5" color='gray.500'>
                Our aim is to make it quick and easy for you to access your favourites websites. Your bookmarks sync between your devices so you can access them on the go
                </Text>
                
            </Center>
            
            <Center>
                <Button
                    background="rgb(86, 86, 224)"
                    m="1"
                    _focus={{
                    boxShadow:
                    '0px',
                    }} 
                    _active={{borderColor: 'transparent'}} 
                    _hover={{color: 'teal', background: 'transparent'}} 
                    colorScheme="teal" 
                    size="lg" 
                    
                >More info</Button>
            </Center>
            
        </Box>
    )
}

export default FAQView;