import React from 'react';
import { UsersList } from '../components/UsersList';

export const Users = () => {
   const USERS = [
      {
         id: 'u1',
         name: 'John',
         image: 'https://picsum.photos/200',
         places: 3,
      },
   ];
   return <UsersList items={USERS} />;
};
