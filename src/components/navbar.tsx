import Image from 'next/image'
import { Flex, Box, Spacer, Stack, Button } from '@chakra-ui/react'
import SVGBookmarkIcon from '../images/logo-bookmark.svg';
import ButtonWithProps from './buttonWithProps';

  

export const Navbar = () => {
    return (
        
        <Flex minWidth='max-content' alignItems='center' gap='2' p="4">
            <Box p='2'>
                <Image src={SVGBookmarkIcon}/>
            </Box>
            <Spacer />
            <Box gap="2">
                <Stack spacing={4} direction='row' align='center'>
                    <ButtonWithProps title="FEATURES" color='facebook' variant="ghost" size='md' hoverColor="tomato"/>
                    <ButtonWithProps title="PRICING" color='facebook' variant="ghost" size='md' hoverColor="tomato"/>
                    <ButtonWithProps title="CONTACT" color='facebook' variant="ghost" size='md' hoverColor="tomato"/>
                    <ButtonWithProps title="LOGIN" color='pink' variant="outline" size='md' hoverColor="blue"/>
                    
                </Stack>
            </Box>
        </Flex>
    )
}
