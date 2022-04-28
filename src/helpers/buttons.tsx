import React, { FunctionComponent } from 'react';
import { Button } from '@chakra-ui/react'

type ButtonProps = {
    title: string,
    variant: string,
    size: string,
    color: string,
    background: string,
    hoverColor: string,
    boxShadow: string,
    activeBorderColor: string,
}
const ButtonWithProps:FunctionComponent<ButtonProps> = ({ title, variant, size, color, hoverColor, background, boxShadow = '0px', activeBorderColor='transparent'}) => 
    <Button 
        _focus={{boxShadow}} 
        _active={{borderColor: activeBorderColor}} 
        _hover={{color: hoverColor}} 
        color={color}
        colorScheme={variant === 'outline' ? background : ''}
        background={background}
        variant={variant} 
        size={size} 
        m={3}
        
>{title}</Button>
export default ButtonWithProps;