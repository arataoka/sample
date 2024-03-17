import {
  Box,
  Divider,
  IconButton,
  ScaleFade,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { ExpenseDetailHeader } from "./ExpenseDetailHeader";
import { ExpenseDetailItem } from "./ExpenseDetailItem";
import { useFieldArray, useFormContext } from "react-hook-form";
import { ExpenseFormData, ItemData } from "../../scheme";
import { MAX_ITEM_COUNT, MAX_ITEMS_ERROR_MESSAGE } from "../../constants";
import { useFetchExpenseCategories } from "../../../../hooks/api/useFetchExpenseCategories";

export const TEMPLATE_GRID_COLUMNS_STYLE = "130px 150px 150px 1fr 100px";

export const ExpenseDetails = () => {
  const { control, getValues } = useFormContext<ExpenseFormData>();
  const { fields, append, remove, insert } = useFieldArray({
    control,
    name: "items",
  });
  const copyItem = (index: number) => {
    const currentItemValue = getValues(`items.${index}`);
    insert(index + 1, currentItemValue, { focusIndex: -1 }); // 追加要素にフォーカスをさせないめのoption
  };

  const { data } = useFetchExpenseCategories();

  return (
    <VStack>
      <Box>
        <ExpenseDetailHeader />
        <Divider my={4} />
        {fields.map((item, index) => (
          <ScaleFade key={item.id} in={true} initialScale={0.9}>
            <ExpenseDetailItem
              itemIndex={index}
              remove={() => remove(index)}
              copy={() => copyItem(index)}
              itemCount={fields.length}
              categories={data?.categories}
            />
          </ScaleFade>
        ))}
        <Box display="flex" justifyContent="center" mt={4}>
          <Tooltip
            hasArrow
            label={MAX_ITEMS_ERROR_MESSAGE}
            bg="red.600"
            isDisabled={fields.length < MAX_ITEM_COUNT}
          >
            <IconButton
              aria-label="明細項目を追加"
              icon={<AddIcon />}
              onClick={() => append({} as ItemData, { focusIndex: -1 })} // 追加要素にフォーカスをさせないめのoption
              isDisabled={fields.length >= MAX_ITEM_COUNT}
            />
          </Tooltip>
        </Box>
      </Box>
    </VStack>
  );
};
