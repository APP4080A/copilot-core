import React from 'react';
import '../styles/Navbar.css';

// Accept profilePicUrl dynamically
export default function Navbar({ profilePicUrl }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">Co‑Pilot</span>
        <ul className="nav-links">
          <li>Dashboard</li>
          <li>Team</li>
          <li className="active">Task Board</li>
          <li>Profile</li>
        </ul>
      </div>
      <div className="navbar-right">
        <input className="search" placeholder="Search tasks, teams, users..." />
        <button className="icon-btn">+</button>
        <button className="icon-btn">🔔</button>
        <img
          className="profile-pic"
          src={profilePicUrl}
          alt="User avatar"
        />
      </div>
    </nav>
  );
}