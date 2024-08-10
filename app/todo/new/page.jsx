"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'; 

export default function NewTodo() {
  const [title, setTitle] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTodo = { title, completed: false };

    await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    router.push('/');
  };

  return (
    <div className='h-screen'>
      <h2 className="mb-6 text-2xl font-bold">Add New Todo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo title"
          className="w-full p-2 text-black border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}
