import { Box, Center, Flex, Button, Heading, Spacer, Text} from '@chakra-ui/react'
import Image from 'next/image'
import IllustrationFeaturesTab1 from '../../images/illustration-hero.svg';

export default function FeaturesView(){
    return (
        <Box w="100">
            <Center>
                <Heading fontSize="30">Features</Heading>
                
            </Center>
            <Center ml="21%" mr="21%" textAlign="center">
                <Text fontSize="23" pt="5" color='gray.500'>
                Our aim is to make it quick and easy for you to access your favourites websites. Your bookmarks sync between your devices so you can access them on the go
                </Text>
                
            </Center>
            <Center ml="21%" mr="21%" textAlign="center" mt="20" mb="40">
                <Flex >
                    <Button
                        size='lg'
                        variant="ghost"
                        className="buttonUnderline"
                        _focus={{
                            boxShadow:
                            '0px',
                            }} 
                            _active={{borderColor: 'transparent'}} 
                    >
                        Simple Pookmarking
                    </Button>
                    <Button
                        _focus={{
                        boxShadow:
                        '0px',
                        }} 
                        _active={{borderColor: 'transparent'}} 
                        size='lg'
                        variant="ghost"
                        className="buttonUnderline"
                    >
                        Speedy Searching
                    </Button>
                    <Button
                        _focus={{
                        boxShadow:
                        '0px',
                        }} 
                        _active={{borderColor: 'transparent'}} 
                        size='lg'
                        variant="ghost"
                        className="buttonUnderline"
                    >
                        Easy Sharing
                    </Button>
                </Flex>
            </Center>
        </Box>
    )
}