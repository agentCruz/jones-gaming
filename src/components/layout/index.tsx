import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import Navbar from "@components/Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Box minH={"100vh"}>
        <Box position="fixed" w={"100%"} zIndex={50}>
          <Navbar />
        </Box>
        <Box as={"main"} pos={"relative"} top={20}>
          <Box style={{ width: "100%" }}>{children}</Box>
        </Box>
      </Box>
    </>
  );
}
