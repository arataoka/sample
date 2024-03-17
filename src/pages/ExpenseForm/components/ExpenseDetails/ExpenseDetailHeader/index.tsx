import { Flex, Grid, Icon } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import { LiaYenSignSolid } from "react-icons/lia";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { PiHandCoins } from "react-icons/pi";
import { TEMPLATE_GRID_COLUMNS_STYLE } from "../index";

export const ExpenseDetailHeader = () => {
  return (
    <Grid
      templateColumns={TEMPLATE_GRID_COLUMNS_STYLE}
      gap={4}
      fontWeight="bold"
      bg="gray.100"
      p={2}
      fontSize="sm"
    >
      <Flex alignItems="center">
        <CalendarIcon mr={2} />
        日付
      </Flex>
      <Flex alignItems="center">
        <Icon as={MdOutlineContentPasteSearch} mr={2} />
        内訳
      </Flex>
      <Flex alignItems="center">
        <Icon as={LiaYenSignSolid} mr={1}></Icon>
        金額
      </Flex>
      <Flex alignItems="center">
        <Icon as={PiHandCoins} mr={2} />
        支払先
      </Flex>
    </Grid>
  );
};
