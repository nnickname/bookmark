import React, { FunctionComponent, useState} from 'react';

import { Box, Center, Flex, Button, Heading, Text} from '@chakra-ui/react'
import Image from 'next/image'
import IconChrome from '../../images/logo-chrome.svg';
import IconOpera from '../../images/logo-opera.svg';
import IconFirefox from '../../images/logo-firefox.svg';

import BGDots from '../../images/bg-dots.svg';

const separationViews: number = 10;
type CardProps = {
    title: string,
    minimumVersion: string,
    image: string,
    separation: number
}
const contentBag: Array<CardProps> = [
    {
        title: "Chrome",
        minimumVersion: "6.2",
        image: IconChrome,
        separation: separationViews * 4
    },
    {
        title: "Firefox",
        minimumVersion: "5.5",
        image: IconFirefox,
        separation: separationViews * 8
    },
    {
        title: "Opera",
        minimumVersion: "4.6",
        image: IconOpera,
        separation: separationViews * 12
    },
    
];
const CardView:FunctionComponent<CardProps> = ({ title, minimumVersion, image, separation}) => 
    <Box m="2">
        <Box textAlign='center' borderRadius='10' boxShadow='md' mt={{lg:separation + "px"}}>
            <Box p="10">
                <Image src={image}/>
                <Heading fontSize="22" m="2">Add to {title}</Heading>
                <Text fontSize="18" color='gray.500'> Minimum version {minimumVersion}</Text>
            </Box>
            <Box>
                <Image src={BGDots}/>
            </Box>
            <Box p="3">
                <Button
                    p="7"
                    background="rgb(86, 86, 224)"
                    m="1"
                    _focus={{boxShadow:'0px',}} 
                    _active={{borderColor: 'transparent'}} 
                    _hover={{color: 'teal', background: 'transparent'}} 
                    colorScheme="teal" 
                    size="lg"                   
                >Add & Install Extension</Button>
            </Box>
        </Box>
    </Box>


const ExtensionView = () =>{
    return (
        <Box w="100" mb="40">
            <Center>
                <Heading fontSize="30">Download the extension</Heading>
                
            </Center>
            <Center ml={{base:'0%', md: '15%', sm: '5%', lg: '21%'}} mr={{base:'0%', md: '15%', sm: '5%', lg: '21%'}} textAlign="center">
                <Text fontSize="23" pt="5" color='gray.500'>
                We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.
                </Text>
                
                
            </Center>
            <Center>
                <Box className='flexResponsive'>
                    {contentBag.map((array) => <CardView {...array}/>)}
                </Box>
            </Center>
            
            
        </Box>
    )
}

export default ExtensionView;