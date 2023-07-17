import db from "@/config/firebase/db.config";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { CreateUserDto, UpdateUserDto, UserDto } from "./types/user";

const usersCollection = collection(db, "players");

// get all users from firestore
export const getUsersApi = async () => {
  const users = await getDocs(usersCollection);
  return users.docs.map((doc) => doc.data()) as UserDto[];
};

// create user
export const createUserApi = async (newUser: CreateUserDto) => {
  try {
    console.log('creating', newUser);
    const userDoc = doc(usersCollection);
    const updatedUser = {
      ...newUser,
      played: 0,
      updatedAt: Timestamp.now(),
      createdAt: Timestamp.now(),
    };
    await setDoc(userDoc, {
      ...updatedUser,
      id: userDoc.id,
    });
  } catch (e) {
    console.log(e);
  }
};

// update user
export const updateUserApi = async (user: UpdateUserDto) => {
  const userDoc = doc(usersCollection, user.id);
  try {
    const updatedUser = {
      ...user,
      updatedAt: Timestamp.now(),
    };
    await setDoc(userDoc, {
      ...updatedUser,
      id: userDoc.id,
    });
  } catch (e) {
    console.log(e);
  }
};

// delete user
export const deleteUserApi = async (user: string) => {
  const userDoc = doc(usersCollection, user);
  try {
    await deleteDoc(userDoc);
  } catch (e) {
    console.log(e);
  }
};
