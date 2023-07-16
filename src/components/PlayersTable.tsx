import { formatter } from "@/utils/formatter";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
  Link,
  Checkbox,
  HStack,
  Avatar,
} from "@chakra-ui/react";

const PlayersTable: React.FC = () => {
  return (
    <TableContainer>
      <Table variant="unstyled" p={5}>
        <Thead borderRadius={"5px"}>
          <Tr background="crunchrGrey.100" color="crunchrBlack.900">
            <Th>{""}</Th>
            <Th>Name</Th>
            <Th>Phone Number</Th>
            <Th>Number of Times Played</Th>
            <Th>Email</Th>
            <Th>Favourite Game</Th>
            <Th>Total Spent</Th>
          </Tr>
        </Thead>
        <Tbody borderBottom={"1px"} borderColor={"crunchrGrey.100"}>
          <Tr borderBottom={"1px"} borderColor={"crunchrGrey.100"}>
            <Td>
              <Checkbox colorScheme={"crunchrGreen"} />
            </Td>
            <Td>
              <Link>
                <Text>Joseph N</Text>
              </Link>
            </Td>
            <Td>
              <Text>5g</Text>
            </Td>
            <Td>
              <Td>{formatter.format(10000)}</Td>
            </Td>
            <Td>
              <Text>50</Text>
            </Td>
          </Tr>
          <Tr borderBottom={"1px"} borderColor={"crunchrGrey.100"}>
            <Td>
              <Checkbox colorScheme={"crunchrGreen"} />
            </Td>
            <Td>
              <Link>
                <Text>Joseph N</Text>
              </Link>
            </Td>
            <Td>
              <Text>5g</Text>
            </Td>
            <Td>
              <Td>{formatter.format(10000)}</Td>
            </Td>
            <Td>
              <Text>50</Text>
            </Td>
          </Tr>
          <Tr borderBottom={"1px"} borderColor={"crunchrGrey.100"}>
            <Td>
              <Checkbox colorScheme={"crunchrGreen"} />
            </Td>
            <Td>
              <Link>
                <Text>Joseph N</Text>
              </Link>
            </Td>
            <Td>
              <Text>5g</Text>
            </Td>
            <Td>
              <Td>{formatter.format(10000)}</Td>
            </Td>
            <Td>
              <Text>50</Text>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PlayersTable;
