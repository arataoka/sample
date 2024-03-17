import React from "react";
import { ErrorText } from "../../../../../../components/Form/ErrorText";
import { Input } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { ExpenseFormData } from "../../../../scheme";

interface ExpenseDetailItemPayeeProps {
  itemIndex: number;
}

export const ExpenseDetailItemPayee: React.FC<ExpenseDetailItemPayeeProps> = ({
  itemIndex,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ExpenseFormData>();

  return (
    <>
      <ErrorText message={errors.items?.[itemIndex]?.payee?.message} mb={1} />
      <Input
        isInvalid={Boolean(errors.items?.[itemIndex]?.payee)}
        placeholder="例) 弁護士法人〇〇"
        type="text"
        minWidth="200px"
        {...register(`items.${itemIndex}.payee`)}
      />
    </>
  );
};
