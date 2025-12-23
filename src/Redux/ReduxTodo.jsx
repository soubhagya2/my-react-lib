import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  editTask,
  toggleTask,
  filterTask,
} from "./slicer/slice";

export default function TodoApp() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTask(text.trim()));
    setText("");
  };

  const tasks = useSelector((state) => state.task.tasks);
  const filter = useSelector((state) => state.task.filter);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filter === "active") return !task.completed;
      if (filter === "completed") return task.completed;
      return true;
    });
  }, [tasks, filter]);

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Todo List</h1>

          <form onSubmit={handlesubmit} className="flex gap-2 mb-6">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Add a new todo..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition flex items-center gap-2"
            >
              <i className="fas fa-plus"></i>
              Add
            </button>
          </form>

          <div className="flex gap-2 mb-4">
            <button
              onClick={() => dispatch(filterTask("all"))}
              className={`px-4 py-2 rounded-lg transition ${
                filter === "all"
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              All
            </button>
            <button
              onClick={() => dispatch(filterTask("active"))}
              className={`px-4 py-2 rounded-lg transition ${
                filter === "active"
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => dispatch(filterTask("completed"))}
              className={`px-4 py-2 rounded-lg transition ${
                filter === "completed"
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Completed
            </button>
          </div>

          <div className="space-y-2">
            {filteredTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => dispatch(toggleTask(task.id))}
                  className="w-5 h-5 cursor-pointer"
                />

                {editId === task.id ? (
                  <>
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="flex-1 px-3 py-1 border rounded"
                    />
                    <button
                      onClick={() => {
                        dispatch(editTask({ id: task.id, title: editText }));
                        setEditId(null);
                        setEditText("");
                      }}
                      className="text-green-600"
                    >
                      ✔
                    </button>

                    <button
                      onClick={() => {
                        setEditId(null);
                        setEditText("");
                      }}
                      className="text-red-600"
                    >
                      ✖
                    </button>
                  </>
                ) : (
                  <>
                    <span
                      className={`flex-1 ${
                        task.completed
                          ? "line-through text-gray-500"
                          : "text-gray-800"
                      }`}
                    >
                      {task.title}
                    </span>

                    <button
                      onClick={() => {
                        setEditId(task.id);
                        setEditText(task.title);
                      }}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <i className="fas fa-edit"></i>
                    </button>

                    <button
                      onClick={() => dispatch(deleteTask(task.id))}
                      className="text-red-600 hover:text-red-700"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
