import React, { FunctionComponent } from 'react';

import { Box, Center, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Button, Heading, Text} from '@chakra-ui/react'

type ListItemProps = {
    question: string,
    answer: string
}
const contentBag: Array<ListItemProps> = [
    {
        question: "What is Bookmark?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
    },
    {
        question: "How can I request a new browser?",
        answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
    },
    {
        question: "Is there a mobile app?",
        answer: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
    },
    {
        question: "What about other Chromium browsers?",
        answer: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
    }
    
];
const ListItem:FunctionComponent<ListItemProps> = ({question, answer}) => 
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

const FAQView = () =>{
    return (
        <Box w="100">
            <Center>
                <Heading fontSize="30">Frequently Asked Questions</Heading>
                
            </Center>
            <Center mb="5" ml={{base:'0%', md: '15%', sm: '5%', lg: '21%'}} mr={{base:'0%', md: '15%', sm: '5%', lg: '21%'}} textAlign="center">
                <Text fontSize="23" pt="5" color='gray.500'>
                Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
                </Text>
                
            </Center>
            <Center>
                <Accordion defaultIndex={[1]} allowMultiple w={{base: "100%", lg: "50%"}}>
                    {contentBag.map((array) => <ListItem {...array}/>)}
                </Accordion>
            </Center>
            <Center>
                <Button
                    background="rgb(86, 86, 224)"
                    m="4"
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