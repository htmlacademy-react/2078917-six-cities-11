import { User } from '../types/user';

const USER_DATA_KEY_NAME = 'six-cities-user-data';

export const getUserData = (): User => {
  const userData = JSON.parse(localStorage.getItem(USER_DATA_KEY_NAME) as string) as User;
  return userData ?? '';
};

export const saveUserData = (userData: User): void => {
  localStorage.setItem(USER_DATA_KEY_NAME, JSON.stringify(userData));
};

export const dropUserData = (): void => {
  localStorage.removeItem(USER_DATA_KEY_NAME);
};
