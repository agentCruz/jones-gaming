import {
  Button,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import { usePlayerProvider } from "./provider/player.provider";
import { Form, Formik } from "formik";
import { TextInputUi } from "./formik/TextInput";
import { Gap } from "./resources/Gap";
import { useState } from "react";
import { CreateUserDto } from "./provider/function/types/user";
import Router from "next/router";

const AddPlayerForm: React.FC = () => {
  const { create } = usePlayerProvider() || {};


  const initialValues = {
    username: '',
    email: '',
    phone: ''
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Player's username is required"),
    phone: Yup.string().required('Phone number is required')
  });

  const [isLoading, setIsLoading] = useState(false);


  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Player creation
        </Heading>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            setIsLoading(true);
            const newValues: CreateUserDto = {
              username: values.username,
              email: values.email,
              phone: values.phone,
            };
            create && (await create.createUser(newValues));
            setIsLoading(false);
            resetForm();
          }}
        >
          <Form>

            <TextInputUi
              label="User name"
              name={'username'}
              style={{
                w: '100%',
                borderRadius: '56px',
                placeholder: 'User name',
              }}
            />

            <TextInputUi
              label="Email address"
              name={'email'}
              style={{
                w: '100%',
                borderRadius: '56px',
                placeholder: 'Email Address',
              }}
            />

            <TextInputUi
              label="Phone number"
              name={'phone'}
              style={{
                w: '100%',
                borderRadius: '56px',
                placeholder: 'Phone number',
              }}
            />

            <Gap size={5} />

            <Stack spacing={6} direction={["column", "row"]}>
              <Button
                bg={"red.400"}
                color={"white"}
                w="full"
                _hover={{
                  bg: "red.500",
                }}
                onClick={() => {
                  Router.back();
                }}
              >
                Cancel
              </Button>
              <Button
                isLoading={isLoading}
                bg={"blue.400"}
                color={"white"}
                type={'submit'}
                w="full"
                _hover={{
                  bg: "blue.500",
                }}
              >
                Submit
              </Button>
            </Stack>
          </Form>
        </Formik>

      </Stack>
    </Flex>
  );
};

export default AddPlayerForm;
