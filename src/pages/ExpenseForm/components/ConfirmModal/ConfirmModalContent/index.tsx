import React from "react";
import {
  Flex,
  Icon,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Tfoot,
  Box,
} from "@chakra-ui/react";
import { ExpenseFormData } from "../../../scheme";
import { CalendarIcon } from "@chakra-ui/icons";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { LiaYenSignSolid } from "react-icons/lia";
import { PiHandCoins } from "react-icons/pi";
import dayjs from "dayjs";
import { formatCurrencyToNumber } from "../../../../../utils/formatCurrencyToNumber";

interface ConfirmModalContentProps extends ExpenseFormData {}

export const ConfirmModalContent: React.FC<ConfirmModalContentProps> = ({
  name,
  items,
}) => {
  const sumPriceNumber = items
    .map((item) => item.price)
    .reduce((sum, price) => sum + formatCurrencyToNumber(price), 0);

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption placement="top" textAlign="left" fontWeight="bold">
          <Flex flexDirection="column" mb={2}>
            <Box mb={2}>申請日：{dayjs().format("YYYY年MM月DD日")}</Box>
            <Box>申請名：{name}</Box>
          </Flex>
        </TableCaption>
        <Thead>
          <Tr>
            <Th>
              <Flex alignItems="center">
                <CalendarIcon mr={2} />
                日付
              </Flex>
            </Th>
            <Th>
              <Flex alignItems="center">
                <Icon as={MdOutlineContentPasteSearch} mr={2} />
                内訳
              </Flex>
            </Th>
            <Th>
              <Flex alignItems="center" justifyContent="flex-end">
                <Icon as={LiaYenSignSolid} mr={1}></Icon>金額
              </Flex>
            </Th>
            <Th>
              <Flex alignItems="center">
                <Icon as={PiHandCoins} mr={2} />
                支払先
              </Flex>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map(({ date, breakdown, price, payee }, id) => (
            <Tr key={id}>
              <Td>{dayjs(date).format("YYYY年MM月DD日")}</Td>
              <Td>{breakdown}</Td>
              <Td textAlign="right">
                {price}
                <Text as="span" ml={3}>
                  円
                </Text>
              </Td>
              <Td>{payee}</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot bg="lightcyan">
          <Tr>
            <Td />
            <Td />
            <Td textAlign="right" fontWeight="bold">
              合計：
              <Text mr={2} as="span">
                {sumPriceNumber.toLocaleString("ja-JP")}
              </Text>
              円
            </Td>
            <Td />
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};
