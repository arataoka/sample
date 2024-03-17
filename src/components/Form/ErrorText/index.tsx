import { SlideFade, Text, TextProps } from "@chakra-ui/react";

interface ErrorTextProps extends TextProps {
  message?: string;
}

export const ErrorText: React.FC<ErrorTextProps> = ({ message, ...props }) => {
  if (!message) return;
  return (
    <SlideFade offsetY="5px" in={Boolean(message)}>
      <Text fontSize="xs" color="red.500" {...props}>
        ※ {message}
      </Text>
    </SlideFade>
  );
};
