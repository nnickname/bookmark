import { Box, Center, Accordion, Heading, Text} from '@chakra-ui/react'
import { ItemAccordion, ItemAccordionProps } from '../../helpers/cards';
import ButtonWithProps from '../../helpers/buttons';

const contentBag: Array<ItemAccordionProps> = [
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
                    {contentBag.map((array, index) => <ItemAccordion key={index} {...array}/>)}
                </Accordion>
            </Center>
            <Center>
                <ButtonWithProps title="More info" variant="solid" size="md" background="rgb(86, 86, 224)" color="white" hoverColor="white" boxShadow = '0px' activeBorderColor="transparent"></ButtonWithProps>

            </Center>
            
        </Box>
    )
}

export default FAQView;