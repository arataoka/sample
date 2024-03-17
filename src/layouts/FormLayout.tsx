import { Box, Container } from "@chakra-ui/react";

export const FormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Container maxW="4xl">{children}</Container>
    </Box>
  );
};
