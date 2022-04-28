import React, {Suspense, FunctionComponent, useState, useEffect} from 'react';

import { Box, Center, Button, Heading, Text} from '@chakra-ui/react'
import Image from 'next/image'
import IllustrationFeaturesTab1 from '../../images/illustration-features-tab-1.svg';
import IllustrationFeaturesTab2 from '../../images/illustration-features-tab-2.svg';
import IllustrationFeaturesTab3 from '../../images/illustration-features-tab-3.svg';
import ButtonWithProps from '../../helpers/buttons';


// NO REUTILIZABLE

type ViewProps = {
    title: string,
    description: string,
    buttonTitle: string,
    labelTitle: string,
    image: string,
}
const contentBag: Array<ViewProps> = [
    {
        title: "Bookmark in one click",
        description: "Organize your bookmarks however you like. Our simple drag-and-drop gives you complete control over how you manage your favourites sites",
        buttonTitle: "More Info",
        labelTitle: "Simple Bookmarking",
        image: IllustrationFeaturesTab1
    },
    {
        title: "Intelligent search",
        description: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        buttonTitle: "More Info",
        labelTitle: "Speedy Searching",
        image: IllustrationFeaturesTab2
    },
    {
        title: "Share your bookmarks",
        description: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
        buttonTitle: "More Info",
        labelTitle: "Easy Sharing",
        image: IllustrationFeaturesTab3
    }
];
const SectionView:FunctionComponent<ViewProps> = ({ title, description, buttonTitle, image}) => 
    <Box className='flexResponsive'  pt="5" pb="10">
        <Box position='relative' mb={{base: '150px', md: '110px', lg: '90px'}}> 
            <Box className="shapeBackgroundReverse" />
            <Image src={image} alt="ShapeBackground"/>
        </Box>
        <Box  w={{base:'100%', md: '100%', sm: '100%', lg: '70%'}} p={{base: '5', lg: '20'}}>
            <Heading  fontSize="40">{title}</Heading>
            <Text fontSize="20" pt="5" pb="5" color='gray.500'>
            {description}
            </Text>
            <ButtonWithProps title={buttonTitle} variant="solid" size="md" background="rgb(86, 86, 224)" color="white" hoverColor="black" boxShadow = '0px' activeBorderColor="transparent"></ButtonWithProps>

        </Box>
        
    </Box>

const FeaturesView = () =>{
    const [selectedBag, setSelectedBag] = useState(Number);
    useEffect(() => setSelectedBag(0), [])
    return (
        <Box w="100" mb="30">
            <Center>
                <Heading fontSize="30">Features</Heading>
                
            </Center>
            <Center ml={{base:'0%', md: '15%', sm: '5%', lg: '21%'}} mr={{base:'0%', md: '15%', sm: '5%', lg: '21%'}} textAlign="center">
                <Text fontSize="23" pt="5" color='gray.500'>
                Our aim is to make it quick and easy for you to access your favourites websites. Your bookmarks sync between your devices so you can access them on the go
                </Text>
                
            </Center>
            <Center width="100%" textAlign="center" mt="20" mb="5">
                <Suspense>
                    <Box className='flexResponsive' >
                        {contentBag.map((array, index) => {
                            return (
                                <Button
                                    key={index}
                                    width={{sm: '100%'}}
                                    mb="10px"
                                    size="lg"
                                    variant="ghost"
                                    color='gray'
                                    className={selectedBag === index ? "buttonUnderline active" : "buttonUnderline"}
                                    _focus={{
                                        boxShadow:
                                        '0px',
                                        }} 
                                        _active={{borderColor: 'transparent'}}
                                    onClick={() => setSelectedBag(index)} 
                                >
                                {array.labelTitle}
                                </Button>
                            )})
                        }

                        

                    </Box>
                </Suspense>
                
            </Center>
            
            <SectionView {...contentBag[selectedBag]}/>
            
        </Box>
    )
}

export default FeaturesView;