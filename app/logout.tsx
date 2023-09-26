'use client';

import { signOut } from 'next-auth/react';

export default function Logout() {
  return (
    <span
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </span>
  );
}
