import { Grid, Stack, Heading, Skeleton, Flex } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { ExpenseHeader } from "./components/ExpenseHeader";
import { ExpenseDetails } from "./components/ExpenseDetails";
import { ExpenseFormData } from "./scheme";
import { ConfirmModal } from "./components/ConfirmModal";
import { Suspense } from "react";
import { useExpenseForm } from "./hooks/useExpenseForm";
import { DEFAULT_FORM_VALUE } from "./constants";

export const ExpenseForm = () => {
  const { validatedExpenseFormSchema } = useExpenseForm();

  const methods = useForm<ExpenseFormData>({
    resolver: zodResolver(validatedExpenseFormSchema),
    mode: "onBlur",
    defaultValues: DEFAULT_FORM_VALUE,
  });

  return (
    <FormProvider {...methods}>
      <Grid
        minHeight="100vh"
        templateRows="auto 1fr"
        mx="auto"
        py={10}
        pb={20}
        px={4}
        gap={4}
        bg="white"
      >
        <Heading as="h1" size="lg" textAlign="center" my={6}>
          経費申請フォーム
        </Heading>
        {/* formのsubmitはConfirmModalで行う */}
        <form>
          <Grid templateRows="1fr auto" height="100%">
            <Stack spacing={4}>
              <Stack mb={8}>
                <ExpenseHeader />
              </Stack>
              <Suspense fallback={<Skeleton height="182px" />}>
                <ExpenseDetails />
              </Suspense>
            </Stack>
            <Flex mt={10} justifyContent="center">
              <ConfirmModal />
            </Flex>
          </Grid>
        </form>
      </Grid>
    </FormProvider>
  );
};
