import React, { FunctionComponent} from 'react';
import { Box, Button, Heading, Text, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel} from '@chakra-ui/react'
import Image from 'next/image'

import BGDots from '../images/bg-dots.svg';

type CardProps = {
    title: string,
    minimumVersion: string,
    image: string,
    separation: number
}
type ItemAccordionProps = {
    question: string,
    answer: string
}

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

const ItemAccordion:FunctionComponent<ItemAccordionProps> = ({question, answer}) => 
    <AccordionItem p={4}>
        <Heading>
            <AccordionButton 
                _hover={{color: 'red'}} 
                fontWeight="700" 
                _focus={{boxShadow:'0px',}} 
                _active={{borderColor: 'transparent'}}>
                
                <Box flex='1' textAlign='left'>
                {question}
                </Box>
                <AccordionIcon />
            </AccordionButton>
        </Heading>
        <AccordionPanel pt={4} pb={4}>
        {answer}
        </AccordionPanel>
    </AccordionItem>
export {ItemAccordion, CardView, type ItemAccordionProps, type CardProps}