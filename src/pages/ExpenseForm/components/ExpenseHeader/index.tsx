import { Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { ExpenseFormData } from "../../scheme";
import { ErrorText } from "../../../../components/Form/ErrorText";

export const ExpenseHeader = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ExpenseFormData>();
  return (
    <FormControl>
      <FormLabel htmlFor="name">
        <Flex alignItems="flex-end">
          <Text fontWeight="bold" display="flex" alignItems="center">
            申請名
          </Text>
          <ErrorText ml={5} message={errors.name?.message} />
        </Flex>
      </FormLabel>
      <Input
        id="name"
        type="text"
        placeholder="例）20xx年◯月 部活動費 申請"
        width="400px"
        maxWidth="80%"
        {...register("name")}
        isInvalid={Boolean(errors.name)}
      />
    </FormControl>
  );
};
