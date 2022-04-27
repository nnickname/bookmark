import { Box, Grid, GridItem, Heading, Text, Button, Flex} from '@chakra-ui/react'
import Image from 'next/image'
import IllustrationFeaturesTab1 from '../../images/illustration-hero.svg';

export default function PresentationView(){
    return (
        <Box>
          <Flex  pt="20" pb="80">
            <Box w="50%" pt="20">
              <Heading  fontSize="50">A simple Bookmark Manager</Heading>
              <Text fontSize="22" pt="5" color='gray.500'>
              A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
            </Text>
            <Flex pt="10">
              <Button
                  m="1"
                  _focus={{
                  boxShadow:
                  '0px',
                  }} 
                  _active={{borderColor: 'transparent'}} 
                  _hover={{color: 'teal'}} 
                  colorScheme="teal" 
                  variant="outline" 
                  size="lg" 
                  
              >Get it on chrome</Button>
              <Button
                  m="1"
                  _focus={{
                  boxShadow:
                  '0px',
                  }} 
                  _active={{borderColor: 'transparent'}} 
                  _hover={{color: 'teal'}} 
                  colorScheme="gray" 
                  variant="outline" 
                  size="lg" 
                  
              >Get it on firefox</Button>
            </Flex>
            
            </Box>
            <Box> 
                <Box className="shapeBackground" />
                <Image  src={IllustrationFeaturesTab1}/>
            </Box>
          </Flex>
        </Box>
    )
}