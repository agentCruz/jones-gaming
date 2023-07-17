import { formatter } from "@/utils/formatter";
import { Checkbox, Link, Td, Tr, Text, Button } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import { UserDto } from "./provider/function/types/user";
import { useRouter } from "next/router";
import { usePlayerProvider } from "./provider/player.provider";

type Props = {
    item: UserDto
} & PropsWithChildren

export const PlayerItem: React.FC<Props> = ({ children, item }) => {
    const targetDate = new Date();
    targetDate.setMinutes(targetDate.getMinutes() + 15);
    const router = useRouter();

    const { currentState_ } = usePlayerProvider() || {};

    const handleNavigate = () => {
        const countdownParams = {
            targetDate: targetDate,
            user: item,
        };
        currentState_ && currentState_.setCountdownParams(countdownParams);

        router.push({
            pathname: `/counter`,
        });
    };

    return (
        <Tr borderBottom={"1px"} borderColor={"crunchrGrey.100"}>
            <Td>
                <Checkbox colorScheme={"crunchrGreen"} />
            </Td>
            <Td>
                <Link>
                    <Text>{item.username}</Text>
                </Link>
            </Td>
            <Td>
                <Text>{item.phone}</Text>
            </Td>
            <Td>
                <Text>{item.played}</Text>
            </Td>
            <Td>
                <Td>{formatter.format(item.played * 3000)}</Td>
            </Td>
            <Td>
                <Button onClick={handleNavigate}>Start game</Button>
            </Td>
        </Tr>
    )
}