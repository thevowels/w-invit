
import {Box, Image, VStack, Text,Textarea, FormControl, FormLabel, Input, Button} from '@chakra-ui/react';
import styles from "./rsvp.module.css"
import { useState } from "react";

export default function RSVP() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        people: "",
        attend: "",
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLSc9qQ7r1strwpbyJhSx29g9Y20RmLke0b0Hbap78uw4ZEF1Ww/formResponse'
        const formURL = 'https://docs.google.com/forms/d/e/testing/formResponse'

        const data = new URLSearchParams();

        data.append('entry.15114930', formData.name)
        data.append('entry.1412892325',formData.phone)
        data.append('entry.2109120357', formData.people)
        data.append('entry.166233164', formData.attend)

        try {
            await fetch(formURL, {
                method: "POST",
                body: data,
            });
            alert("Form submitted successfully!");
        } catch (error) {
            console.error("Error submitting form", error);
            alert("Failed to submit the form.");
        }
    }


        return(
         <Box position={"relative"}>
             <Image className={styles.topleftBanner} width={"300px"} position={"absolute"} src={"images/shape-wave-top-left-2.svg"}  />
             <Image width={"150px"} src={"images/shape-wave-middle-right.svg"} position={"absolute"} right={0} top={"50%"}         transform="translateY(-50%)"
             />
            <VStack spacing={4}>
                <Box alignItems={"center"} alignContent={"center"} textAlign={"center"} display={"flex"} flexDirection={"column"} mb={8}>
                    <Text fontSize={"40px"} fontWeight={"thin"}  fontFamily={"Kaushan Script"}>
                        Come and Celebrate with Us
                    </Text>
                    <Text fontFamily={"Poppins"} color={"rgba(33, 37, 41, 0.75)"} fontSize={"20px"}>
                        If you have only one smile in you give it to the people you love.
                    </Text>
                    <Image width={"150px"} src={"images/divider-arrow.svg"} mt={5}/>
                </Box>
                <div className={styles.rsvp}>
                    <div className={styles['rsvp-form']} >
                        <Box width={"486px"}>
                            <form onSubmit={handleSubmit}>
                                <VStack spacing={4}>
                                    <Box bg={"rgb(180, 106, 72)"} width={"100%"}>
                                            <Text fontFamily={"'Kaushan Script', 'serif'"} fontSize={"28px"} px={4} py={4} textAlign={"center"} color={"rgb(255, 255, 255)"}>Are You Attending?</Text>
                                    </Box>
                                    <FormControl id="name" isRequired>
                                        {/*<FormLabel>Your Name</FormLabel>*/}
                                        <Input
                                            type="text"
                                            name="name"
                                            placeholder="Your Full Name"
                                            variant="flushed"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                        />
                                    </FormControl>

                                    <FormControl id="phone" isRequired>
                                        <FormLabel>Your Email</FormLabel>
                                        <Input
                                            type="phone"
                                            name="phone"
                                            placeholder="Enter your Phone Number"
                                            variant="flushed"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                    </FormControl>

                                    <FormControl id="message" isRequired>
                                        <FormLabel>Your Message</FormLabel>
                                        <Textarea
                                            name="message"
                                            placeholder="Enter your message"
                                            value={formData.people}
                                            onChange={handleInputChange}
                                        />
                                    </FormControl>

                                    <Button colorScheme="blue" type="submit" w="full">
                                        Submit
                                    </Button>

                                </VStack>
                            </form>
                        </Box>
                    </div>
                    <div className={styles['rsvp-content']} >
                        <Text color={"rgb(33, 37, 41)"} fontFamily={"'Kaushan Script', 'cursive'"} fontSize={"28px"} mb={4}>We Can't Wait to See You!</Text>
                        <Image width={"60px"} src={"images/divider-heart.svg"}/>
                        <Text fontFamily={"Poppins"} color={"rgba(33, 37, 41, 0.75)"}>Saturday, July 11th, 2026</Text>
                        <Text fontFamily={"Poppins"} color={"rgba(33, 37, 41, 0.75)"} maxWidth={"27rem"}>St. Patrick's Catholic Church, 619 10th Street NW, Washington, DC 20001, United States</Text>
                    </div>
                </div>
            </VStack>

         </Box>

)
}