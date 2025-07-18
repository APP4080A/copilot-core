// src/pages/TaskboardPage.jsx
import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import './styles/Taskboard.css'


const initialColumns = [
  { title: 'To Do', tasks: [] },
  { title: 'In Progress', tasks: [] },
  { title: 'Review', tasks: [] },
  { title: 'Blocked', tasks: [] },
  { title: 'Done', tasks: [] }
];

export default function TaskBoard({profilePicUrl}) {
  const [columns, setColumns] = useState(initialColumns);

  const addTask = (colTitle, task) => {
    setColumns(cols =>
      cols.map(col =>
        col.title === colTitle
          ? { ...col, tasks: [...col.tasks, task] }
          : col
      )
    );
  };

  return (
    <>
    {/*The navbar */}
      <Navbar profilePicUrl={profilePicUrl} />

    {/* Your page title */}
      <h1 className="page-title">TASK BOARD</h1>

    {/* The task columns*/}
    <div className="task-board">
      {columns.map(col => (
        <Column
          key={col.title}
          title={col.title}
          tasks={col.tasks}
          onAdd={addTask}
        />
      ))}
    </div>
    </>
  );
}

// Inner: Column and TaskCard components (page-specific)
function Column({ title, tasks, onAdd }) {
  const [showForm, setShowForm] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', date: '', tags: '', assignee: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setNewTask(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!newTask.title) return;
    onAdd(title, {
      title: newTask.title,
      date: newTask.date || 'No date',
      tags: newTask.tags.split(',').map(t => t.trim()),
      assignee: newTask.assignee || 'Unassigned'
    });
    setNewTask({ title: '', date: '', tags: '', assignee: '' });
    setShowForm(false);
  };

  return (
    <div className="column">
      <div className="column-header">
        <span>{title}</span>
        <span className="count">{tasks.length}</span>
      </div>
      <div className="tasks-list">
        {tasks.map((t, i) => <TaskCard key={i} {...t} />)}
      </div>
      {showForm ? (
        <form className="task-form" onSubmit={handleSubmit}>
          <input name="title" placeholder="Task title" value={newTask.title} onChange={handleChange} required />
          <input name="date" placeholder="Due date" value={newTask.date} onChange={handleChange} />
          <input name="tags" placeholder="Tags (comma separated)" value={newTask.tags} onChange={handleChange} />
          <input name="assignee" placeholder="Assignee" value={newTask.assignee} onChange={handleChange} />
          <div className="form-actions">
            <button type="submit">Add</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </form>
      ) : (
        <button className="add-task" onClick={() => setShowForm(true)}>+ Add Task</button>
      )}
    </div>
  );
}

function TaskCard({ title, date, tags, assignee }) {
  return (
    <div className="task-card">
      <input type="checkbox" />
      <div className="details">
        <div className="task-title">{title}</div>
        <div className="meta">
          <span className="date">{date}</span>
          <div className="tags">{tags.map((tag,i)=><span key={i} className="tag">{tag}</span>)}</div>
          <span className="assignee">{assignee}</span>
        </div>
      </div>
    </div>
  );
}