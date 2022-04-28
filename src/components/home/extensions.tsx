import { Box, Center, Heading, Text} from '@chakra-ui/react'
import IconChrome from '../../images/logo-chrome.svg';
import IconOpera from '../../images/logo-opera.svg';
import IconFirefox from '../../images/logo-firefox.svg';
import { CardView, CardProps } from '../../helpers/cards';

const separationViews: number = 10;

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
                    {contentBag.map((array, index) => <CardView key={index} {...array}/>)}
                </Box>
            </Center>
            
            
        </Box>
    )
}

export default ExtensionView;