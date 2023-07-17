import { UseMutateAsyncFunction } from "@tanstack/react-query";
import { Dispatch, SetStateAction, createContext } from "react";
import { CreateUserDto, UserDto } from "./function/types/user";

export type CountdownParams = {
  targetDate: Date;
  user: UserDto;
};

type AppStateProviderType = null | {
  getAll: {
    isLoading: boolean;
    error: any;
    data: UserDto[];
    isFetching: boolean;
  };
  create: {
    createUser: UseMutateAsyncFunction<void, unknown, CreateUserDto, unknown>;
    creatingUser: boolean;
    createUserError: unknown;
    createUserSuccess: boolean;
  };
  update: {
    updateUser: UseMutateAsyncFunction<
      void,
      unknown,
      Partial<UserDto>,
      unknown
    >;
    updatingUser: boolean;
    updateUserError: unknown;
    updateUserSuccess: boolean;
  };
  delete_: {
    deleteUser: UseMutateAsyncFunction<void, unknown, string, unknown>;
    deletingUser: boolean;
    deleteUserError: unknown;
    deleteUserSuccess: boolean;
  };
  currentState_: {
    countdownParams: CountdownParams | undefined;
    setCountdownParams: Dispatch<SetStateAction<CountdownParams | undefined>>;
  };
  search: {
    searchState: string;
    setSearchState: Dispatch<SetStateAction<string>>;
  };
};

export const PlayerContext = createContext<AppStateProviderType>(null);
