import { Box, Button, Center, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { UserDto } from './provider/function/types/user';
import { usePlayerProvider } from './provider/player.provider';
import Router from 'next/router';
import { Gap } from './resources/Gap';

interface CountdownProps {
    targetDate: Date;
    user: UserDto
}

const Countdown: React.FC<CountdownProps> = ({ targetDate, user }) => {
    const { update, currentState_ } = usePlayerProvider() || {};
    const [remainingTime, setRemainingTime] = useState<number>(0);
    const [isPaused, setIsPaused] = useState<boolean>(false);

    const onCountdownComplete = async () => {
        const { played, ...theRest } = user;
        update && await update.updateUser({
            ...theRest,
            played: played + 1,
        });
        currentState_ && currentState_.setCountdownParams(undefined);
        Router.push('/');
    }

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined = undefined;

        if (!isPaused) {
            interval = setInterval(() => {
                const currentTime = new Date().getTime();
                const timeDifference = targetDate.getTime() - currentTime;

                if (timeDifference <= 0) {
                    clearInterval(interval);
                    onCountdownComplete();
                }

                setRemainingTime(timeDifference);
            }, 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [targetDate, isPaused, onCountdownComplete]);


    // Helper function to format remaining time
    const formatTime = (time: number): string => {
        const hours = Math.floor(time / (1000 * 60 * 60));
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);

        return `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handlePause = () => {
        setIsPaused(!isPaused);
    };

    return (
        <Center>
            <Box justifyContent={'center'} alignContent={'center'}>
                <Text fontSize={17} textAlign={'center'} >Countdown for {user.username}</Text>
                <Text fontSize={30} textAlign={'center'} fontWeight={'bold'}>Time remaining: {formatTime(remainingTime)}</Text>
                <Gap size={5} />
                <Button alignContent={'center'} onClick={handlePause}>{isPaused ? 'Resume' : 'Pause'}</Button>
            </Box>
        </Center>
    );
};

export default Countdown;