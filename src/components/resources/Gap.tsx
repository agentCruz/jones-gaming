import { Box } from '@chakra-ui/react';

type GapProps = {
    size?: number;
};

export const Gap: React.FC<GapProps> = (props) => (
    <Box h={props.size} w={props.size} />
);
