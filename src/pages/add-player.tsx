import AddPlayerForm from "@/components/AddPlayerForm";
import { ColorModeScript, Flex, useColorModeValue } from "@chakra-ui/react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";

export async function getStaticProps({}: GetStaticPropsContext) {
  return {
    props: {},
  };
}

export default function AddPlayerPage({}: InferGetStaticPropsType<
  typeof getStaticProps
>) {
  return (
    <div className={"container"} style={{ width: "100%" }}>
      <Flex
        minH={"100vh"}
        mt={10}
        mb={10}
        mx={"auto"}
        maxW={"5xl"}
        w={"100%"}
        justify={"center"}
        pb={10}
        borderRadius={"5px"}
        bg={useColorModeValue("white", "gray.800")}
      >
        <AddPlayerForm />
      </Flex>
    </div>
  );
}
