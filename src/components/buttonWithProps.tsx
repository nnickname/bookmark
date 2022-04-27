import React, { FunctionComponent } from 'react';
import { Flex, Box, Spacer, Stack, Button } from '@chakra-ui/react'

type ButtonProps = {
    title: string,
    variant: string,
    size: string,
    color: string,
    hoverColor: string,
    boxShadow: string,
    activeBorderColor: string,
}
const ButtonWithProps:FunctionComponent<ButtonProps> = ({ title, variant, size, color, hoverColor, boxShadow = '0px', activeBorderColor='transparent'}) => 
    <Button 
        _focus={{boxShadow}} 
        _active={{borderColor: activeBorderColor}} 
        _hover={{color: hoverColor}} 
        colorScheme={color} 
        variant={variant} 
        size={size} 
        
>{title}</Button>
export default ButtonWithProps;