import { Box, Flex, HStack, Link, IconButton, useDisclosure, VStack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const Links = ['Home', 'Details', 'RSVP', 'Gallery', 'Contact'];

    const NavLink = ({ children }) => (
        <Link
            px={3}
            py={2}
            rounded="md"
            _hover={{ textDecoration: 'none', bg: 'pink.200' }}
            href={`#${children.toLowerCase()}`}
        >
            {children}
        </Link>
    );

    return (
        <Box bg="pink.100" px={4} boxShadow="md">
            <Flex h={16} alignItems="center" justifyContent="space-between">
                <Box fontWeight="bold" fontSize="lg" color="pink.600">
                    Our Wedding
                </Box>
                <IconButton
                    size="md"
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label="Toggle Navigation"
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems="center" display={{ base: 'none', md: 'flex' }}>
                    {Links.map((link) => (
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
