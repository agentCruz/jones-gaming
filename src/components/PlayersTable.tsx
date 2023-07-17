import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Text,
  Stack,
} from "@chakra-ui/react";
import { usePlayerProvider } from "./provider/player.provider";
import { PlayerItem } from "./PlayerItem";
import { Gap } from "./resources/Gap";
import SearchUi from "./resources/SearchUi";


const PlayersTable: React.FC = () => {
  const { getAll, search } = usePlayerProvider() || {};

  let itemListRows = null;

  itemListRows =
    getAll &&
    getAll.data &&
    getAll.data.map((item, index) => {
      return <PlayerItem key={index} item={item} />;
    });


  return (
    <>
      {
        search && (
          <>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              align={'center'}
              p={6}
            >
              <Text fontSize={21} fontWeight={'bold'}>
                Players
              </Text>
              <SearchUi
                placeholder={'Search Player'}
                value={search.searchState}
                onChange={(e) => search.setSearchState(e.target.value)}
              />
            </Stack>
          </>
        )
      }
      <Gap size={5} />
      <TableContainer>
        <Table variant="unstyled" p={5}>
          <Thead borderRadius={"5px"}>
            <Tr background="crunchrGrey.100" color="crunchrBlack.900">
              <Th>{""}</Th>
              <Th>Name</Th>
              <Th>Phone Number</Th>
              <Th>Number of Times Played</Th>
              <Th>Total Spent</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody borderBottom={"1px"} borderColor={"crunchrGrey.100"}>
            {itemListRows}
          </Tbody>
        </Table>
      </TableContainer>
    </>


  );
};

export default PlayersTable;
