import { Box, Flex, HStack, Link, IconButton, useDisclosure, VStack, Image } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const Links = ['The Couple', 'Events', 'Love Story', 'Photos', 'RSVP'];

    const NavLink = ({ children }) => (
        <Link
            px={4}
            py={2}
            h={16}
            rounded="md"
            display="flex" // Use flexbox
            alignItems="center" // Center vertically
            justifyContent="center" // Center horizontally
            textAlign="center"
            fontWeight="bold"
            _hover={{ textDecoration: 'none', }}
            href={`#${children.toLowerCase()}`}
        >
            {children}
        </Link>
    );

    return (
        <Box bg="whiteAlpha.900"
             px={4}
             boxShadow="md"
             w={"100%"}
             position="sticky" // Makes the navbar sticky
             top={0} // Sticks at the top of the viewport
             zIndex={10} // Ensures it's above other content
        >
            <Flex  alignItems="center" justifyContent={{base:'space-between', sm:'center'}} minW={{base:'100vw', md:'initial'}} px={5} py={2}>
                <Box fontWeight="bold"
                     fontSize="lg"
                     mr="4"
                     display={{base:"flex",md:'none'}}
                     alignItems="center" // Center vertically
                     justifyContent="center" // Center horizontally
                     textAlign={{ base: 'center', lg: 'left' }}
                     flex={{ base: 1, lg: 'unset' }} // Take full width on small screens
                     minW={"fit-content"}
                >
                    <Image h={16} src={"images/navbar-brand-mobile.png"}></Image>
                </Box>
                <IconButton
                    size="md"
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label="Toggle Navigation"
                    display={{ md: 'none' }}

                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems="center" display={{ base: 'none', md: 'flex' }}>
                    {Links.slice(0,2).map((link) => (
                        <NavLink key={link}>{link}</NavLink>
                    ))}
                    <Box
                        w={"10rem"}
                        mr={4}
                    >
                        <Image h={32}
                               mt={-8}
                               pl={10}
                               src={"images/navbar-brand.png"}
                               position={"absolute"}

                        ></Image>

                    </Box>
                    {Links.slice(2).map((link) => (
                        <NavLink key={link}>{link}</NavLink>
                    ))}
                </HStack>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <VStack as="nav" spacing={4}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </VStack>
                </Box>
            ) : null}
        </Box>
    );
};

export default Navbar;
