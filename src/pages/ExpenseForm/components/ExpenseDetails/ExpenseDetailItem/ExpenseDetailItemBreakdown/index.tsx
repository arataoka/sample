import React from "react";
import { ErrorText } from "../../../../../../components/Form/ErrorText";
import { Select } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { ExpenseFormData } from "../../../../scheme";
import { Category } from "../../../../../../generated/@types";

interface ExpenseDetailItemBreakdownProps {
  categories: Category[];
  itemIndex: number;
}

export const ExpenseDetailItemBreakdown: React.FC<
  ExpenseDetailItemBreakdownProps
> = ({ categories, itemIndex }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ExpenseFormData>();

  return (
    <>
      <ErrorText
        message={errors.items?.[itemIndex]?.breakdown?.message}
        mb={1}
      />
      <Select
        isInvalid={Boolean(errors.items?.[itemIndex]?.breakdown)}
        placeholder="内訳を選択"
        {...register(`items.${itemIndex}.breakdown`)}
      >
        {categories?.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </Select>
    </>
  );
};
