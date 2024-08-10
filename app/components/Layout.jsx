// components/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <header className="p-4 text-white bg-blue-600">
        <h1 className="text-3xl text-center">My Todo List</h1>
      </header>
      <main className="max-w-3xl p-6 mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
