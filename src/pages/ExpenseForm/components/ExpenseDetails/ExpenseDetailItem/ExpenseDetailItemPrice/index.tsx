import React from "react";
import { ErrorText } from "../../../../../../components/Form/ErrorText";
import { Flex, Input, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { ExpenseFormData } from "../../../../scheme";
import {
  extractNumberString,
  formatToCurrency,
} from "../../../../../../utils/formatToCurrency";

interface ExpenseDetailItemPriceProps {
  itemIndex: number;
}

export const ExpenseDetailItemPrice: React.FC<ExpenseDetailItemPriceProps> = ({
  itemIndex,
}) => {
  const {
    register,
    formState: { errors },
    setValue,
    trigger,
  } = useFormContext<ExpenseFormData>();
  const handleOnBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const formattedValue = formatToCurrency(value);
    setValue(`items.${itemIndex}.price`, formattedValue);
    trigger(`items.${itemIndex}.price`);
  };
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const replacedValue = extractNumberString(value);
    setValue(`items.${itemIndex}.price`, replacedValue);
  };
  return (
    <>
      <ErrorText message={errors.items?.[itemIndex]?.price?.message} mb={1} />
      <Flex alignItems="flex-end">
        <Input
          isInvalid={Boolean(errors.items?.[itemIndex]?.price)}
          placeholder="1000"
          type="text"
          {...register(`items.${itemIndex}.price`, {
            onChange: handleOnChange,
            onBlur: handleOnBlur,
          })}
        />
        <Text as="span" ml={2}>
          円
        </Text>
      </Flex>
    </>
  );
};
