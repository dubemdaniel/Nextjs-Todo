"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TodoDetail({ params }) {
  const [todo, setTodo] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => response.json())
        .then((data) => setTodo(data));
    }
  }, [id]);

  const handleEdit = async () => {
    const updatedTodo = { ...todo };

    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedTodo),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setEditMode(false);
  };

  const handleDelete = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    });

    router.push('/');
  };

  if (!todo) return <div>Loading...</div>;

  return (
    <div className='h-screen text-center'>
      <h2 className="mb-6 text-2xl font-bold">Todo Details</h2>
      {editMode ? (
        <div>
          <input
            type="text"
            value={todo.title}
            onChange={(e) =>
              setTodo({
                ...todo,
                title: e.target.value,
              })
            }
            className="w-full p-2 text-blue-600 border border-gray-300 rounded"
          />
          <button
            onClick={handleEdit}
            className="px-4 py-2 mt-4 text-white bg-green-500 rounded"
          >
            Save Changes
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-xl">{todo.title}</h3>
          <button
            onClick={() => setEditMode(true)}
            className="px-4 py-2 mt-4 text-white bg-yellow-500 rounded"
          >
            Edit
          </button>
        </div>
      )}
      <button
        onClick={handleDelete}
        className="px-4 py-2 mt-4 text-white bg-red-500 rounded"
      >
        Delete
      </button>
    </div>
  );
}
