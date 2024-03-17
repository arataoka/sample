import React from "react";
import { ErrorText } from "../../../../../../components/Form/ErrorText";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { executeOnSecondClick } from "../utils/executeOnSecondClick";
import { useFormContext } from "react-hook-form";
import { ExpenseFormData } from "../../../../scheme";

interface ExpenseDetailItemDateProps {
  itemIndex: number;
}

export const ExpenseDetailItemDate: React.FC<ExpenseDetailItemDateProps> = ({
  itemIndex,
}) => {
  const {
    formState: { errors },
    setValue,
    watch,
    trigger,
  } = useFormContext<ExpenseFormData>();
  // registerを直接渡すと挙動が正しく動作しないため、カスタムの関数を作成する
  const handleDateChange = (newDate: Date) => {
    setValue(`items.${itemIndex}.date`, newDate, { shouldValidate: true });
  };
  const date = watch(`items.${itemIndex}.date`);
  return (
    <>
      <ErrorText message={errors.items?.[itemIndex]?.date?.message} mb={1} />
      <SingleDatepicker
        date={date}
        onDateChange={handleDateChange}
        propsConfigs={{
          inputProps: {
            isInvalid: Boolean(errors.items?.[itemIndex]?.date),
            name: "date",
            // onBlurが正しく機能しないため、独自でtriggerさせる
            onClick: () =>
              executeOnSecondClick(
                async () => await trigger(`items.${itemIndex}.date`)
              ),
          },
          ...CALENDAR_STYLES_PROPS,
        }}
      />
    </>
  );
};

const CALENDAR_STYLES_PROPS = {
  dayOfMonthBtnProps: {
    defaultBtnProps: {
      variant: "ghost",
      colorScheme: "blue",
      // eslint-disable-next-line @typescript-eslint/naming-convention
      _hover: {
        bg: "blue.100",
      },
    },
    todayBtnProps: {
      fontWeight: "bold",
      border: "1px dotted #ccc",
      // eslint-disable-next-line @typescript-eslint/naming-convention
      _hover: {
        bg: "blue.300",
      },
    },
    selectedBtnProps: {
      bg: "blue.600",
      color: "white",
      // eslint-disable-next-line @typescript-eslint/naming-convention
      _hover: {
        bg: "blue.700",
      },
    },
  },
};
