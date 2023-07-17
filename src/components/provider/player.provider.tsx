import { PropsWithChildren, useContext, useMemo, useState } from "react";
import { CountdownParams, PlayerContext } from "./types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createUserApi, deleteUserApi, getUsersApi, updateUserApi } from "./function/function";
import { UserDto } from "./function/types/user";

export const usePlayerProvider = () => {
  return useContext(PlayerContext);
};

export const PlayersProvider: React.FC<PropsWithChildren> = ({ children }) => {
  // Query to load equipment.
  const { isLoading, error, data, isFetching } = useQuery(
    ['Users'],
    getUsersApi,
    {
      keepPreviousData: true,
    }
  ) as {
    isLoading: boolean;
    error: any;
    data: UserDto[];
    isFetching: boolean;
  };


  // queryClient?
  const queryClient = useQueryClient();

  // mutation for creating User.
  const {
    mutateAsync: createUser,
    isLoading: creatingUser,
    error: createUserError,
    isSuccess: createUserSuccess,
  } = useMutation(createUserApi, {
    onSuccess: () => {
      queryClient.invalidateQueries(['Users']);
    },
  });

  const create = {
    createUser,
    creatingUser,
    createUserError,
    createUserSuccess,
  };

  // mutation for updating User.
  const {
    mutateAsync: updateUser,
    isLoading: updatingUser,
    error: updateUserError,
    isSuccess: updateUserSuccess,
  } = useMutation(updateUserApi, {
    onSuccess: () => {
      queryClient.invalidateQueries(['Users']);
    },
  });

  const update = {
    updateUser,
    updatingUser,
    updateUserError,
    updateUserSuccess,
  };

  // mutation for deleting User.
  const {
    mutateAsync: deleteUser,
    isLoading: deletingUser,
    error: deleteUserError,
    isSuccess: deleteUserSuccess,
  } = useMutation(deleteUserApi, {
    onSuccess: () => {
      queryClient.invalidateQueries(['Users']);
    },
  });

  const delete_ = {
    deleteUser,
    deletingUser,
    deleteUserError,
    deleteUserSuccess,
  };

  // store countdown parameters in state
  const [countdownParams, setCountdownParams] = useState<CountdownParams>();

  const currentState_ = {
    countdownParams,
    setCountdownParams,
  }

  // search
  const [searchState, setSearchState] = useState('');

  const players = useMemo(() => {
    if (searchState === '') return data;

    return data?.filter((row) => {
      return (
        row.username
          .toLowerCase()
          .includes(searchState.toLowerCase()) ||
        row.email
          .toLowerCase()
          .includes(searchState.toLowerCase()) ||
        row.phone
          .toLowerCase()
          .includes(searchState.toLowerCase())
      );
    });
  }, [data, searchState]);


  const getAll = {
    isLoading: isLoading,
    error: error,
    data: players,
    isFetching: isFetching,
  };

  const search = {
    searchState,
    setSearchState,
  };

  return (
    <PlayerContext.Provider value={{ getAll, create, update, delete_, currentState_, search }}>
      {children}
    </PlayerContext.Provider>
  );
};
