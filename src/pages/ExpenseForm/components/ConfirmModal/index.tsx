import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { ExpenseFormData } from "../../scheme";
import { ConfirmModalContent } from "./ConfirmModalContent";

export const ConfirmModal = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getValues, handleSubmit, trigger, reset } =
    useFormContext<ExpenseFormData>();
  const currentData = getValues();
  const onConfirm = async () => {
    const isValid = await trigger();
    if (isValid) onOpen();
  };

  // 仮実装
  const onSubmit = (data: ExpenseFormData) => {
    setTimeout(() => {
      console.log(data);
      reset();
      onClose();
      toast({ description: "申請が完了しました", position: "top-right" });
    }, 500);
  };

  return (
    <>
      <Button
        onClick={onConfirm}
        colorScheme="teal"
        size="lg"
        mx="auto"
        width={300}
      >
        申請
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent minWidth="300px" maxWidth="80%">
          <ModalHeader textAlign="center">以下の内容で申請します</ModalHeader>
          <ModalBody>
            <ConfirmModalContent
              name={currentData.name}
              items={currentData.items}
            />
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              キャンセル
            </Button>
            <Button
              colorScheme="teal"
              type="button" // NOTE: submitが伝搬しないためonClickで処理
              onClick={handleSubmit(onSubmit)}
            >
              申請する
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
