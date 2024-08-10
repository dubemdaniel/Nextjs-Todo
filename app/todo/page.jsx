"use client"; 

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data.slice(0, 10))); 
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Todo List</h2>
        <Link href="/todo/new">
          <span className="px-4 py-2 text-white bg-blue-500 rounded">Add New</span>
        </Link>
      </div>
      <ul>
        {todos.map((todo) => (
         
            <Link href={`/todo/${todo.id}`}>
                 <li key={todo.id} className="p-4 mb-4 text-black bg-white rounded shadow">
                <span className="text-xl">{todo.title}</span>
                </li>
            </Link>

        ))}
      </ul>
    </div>
  );
}
