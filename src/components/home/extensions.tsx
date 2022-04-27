import React, { FunctionComponent, useState} from 'react';

import { Box, Center, Flex, Button, Heading, Text} from '@chakra-ui/react'
import Image from 'next/image'
import IllustrationFeaturesTab1 from '../../images/illustration-features-tab-1.svg';
import IllustrationFeaturesTab2 from '../../images/illustration-features-tab-2.svg';
import IllustrationFeaturesTab3 from '../../images/illustration-features-tab-3.svg';



const ExtensionView = () =>{
    return (
        <Box w="100" mb="80">
            <Center>
                <Heading fontSize="30">Download the extension</Heading>
                
            </Center>
            <Center ml={{base:'0%', md: '15%', sm: '5%', lg: '21%'}} mr={{base:'0%', md: '15%', sm: '5%', lg: '21%'}} textAlign="center">
                <Text fontSize="23" pt="5" color='gray.500'>
                Our aim is to make it quick and easy for you to access your favourites websites. Your bookmarks sync between your devices so you can access them on the go
                </Text>
                
            </Center>
            
            
        </Box>
    )
}

export default ExtensionView;