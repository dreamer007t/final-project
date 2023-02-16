import { Box, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  
  return(
    <HStack>
    <VStack background='white' textColor='black' borderRadius='10px'>
      <Image
      borderRadius='10px'
      boxSize='full'
      src={imageSrc}
      />
      <Box padding={5}>
      <Stack spacing={3}>
      <Heading as='h5' size='sm' marginBottom='7px'>{title}</Heading>
      <Text color="#64758b">{description}</Text>
      <Text>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
      </Stack>
      </Box>
    </VStack>
  </HStack>
  )
};

export default Card;
