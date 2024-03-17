import { Flex, Grid, GridItem, IconButton } from "@chakra-ui/react";
import { CopyIcon, DeleteIcon } from "@chakra-ui/icons";
import { MAX_ITEM_COUNT, MIN_ITEM_COUNT } from "../../../constants";
import { TEMPLATE_GRID_COLUMNS_STYLE } from "../index";
import { Category } from "../../../../../generated/@types";
import { ExpenseDetailItemBreakdown } from "./ExpenseDetailItemBreakdown";
import { ExpenseDetailItemDate } from "./ExpenseDetailItemDate";
import { ExpenseDetailItemPrice } from "./ExpenseDetailItemPrice";
import { ExpenseDetailItemPayee } from "./ExpenseDetailItemPayee";

interface ExpenseDetailItemProps {
  itemIndex: number;
  remove: () => void;
  copy: () => void;
  itemCount: number;
  categories?: Category[];
}

export const ExpenseDetailItem: React.FC<ExpenseDetailItemProps> = ({
  itemIndex,
  remove,
  copy,
  itemCount,
  categories,
}) => {
  return (
    <Grid
      templateColumns={TEMPLATE_GRID_COLUMNS_STYLE}
      gap={4}
      alignItems="flex-end"
      py={2}
    >
      <GridItem>
        <ExpenseDetailItemDate itemIndex={itemIndex} />
      </GridItem>
      <GridItem>
        <ExpenseDetailItemBreakdown
          itemIndex={itemIndex}
          categories={categories || []}
        />
      </GridItem>
      <GridItem>
        <ExpenseDetailItemPrice itemIndex={itemIndex} />
      </GridItem>
      <GridItem>
        <ExpenseDetailItemPayee itemIndex={itemIndex} />
      </GridItem>
      <GridItem w="100px">
        <Flex justifyContent="center" px={2}>
          <IconButton
            size="sm"
            aria-label="複製"
            icon={<CopyIcon />}
            mr={2}
            onClick={copy}
            isDisabled={itemCount >= MAX_ITEM_COUNT}
          />
          <IconButton
            size="sm"
            aria-label="削除"
            onClick={remove}
            icon={<DeleteIcon />}
            isDisabled={itemCount <= MIN_ITEM_COUNT}
          />
        </Flex>
      </GridItem>
    </Grid>
  );
};
