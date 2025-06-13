import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function TodoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-4">
      <button
      aria-label="Show selected details"
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline cursor-pointer"
      >
        <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-circle-arrow-left-icon lucide-circle-arrow-left"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M16 12H8" />
          <path d="m12 8-4 4 4 4" />
        </svg> <span>Back to Todos</span>
       </div>
      </button>

      {loading ? (
        <p>Loading Todo...</p>
      ) : (
        <div className="max-w-xl mx-auto p-4 bg-white rounded shadow">
          <h2 className="text-2xl font-bold mb-2">Todo Detail</h2>
          <p>
            <span className="font-semibold">ID:</span> {todo.id}
          </p>
          <p>
            <span className="font-semibold">Title:</span> {todo.title}
          </p>
          <p>
            <span className="font-semibold">User ID:</span> {todo.userId}
          </p>
          <p>
            <span className="font-semibold">Status:</span>{" "}
            <span
              className={todo.completed ? "text-green-600" : "text-red-500"}
            >
              {todo.completed ? "Completed" : "Not Completed"}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
