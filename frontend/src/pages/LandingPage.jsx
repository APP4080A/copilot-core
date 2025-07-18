// src/pages/LandingPage.jsx
import React from 'react';
import "./styles/LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {

    return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Co-Pilot</div>
        <div className="nav-buttons">
          <Link to="/signup">
          <button className="btn primary">Sign Up</button>
          </Link>
          <Link to="/login">
          <button className="btn secondary">Login</button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Elevate Your Team's Productivity with Co-Pilot</h1>
        <p>
          Co-Pilot is the ultimate project management tool designed for modern
          teams. Streamline workflows, enhance collaboration, and achieve your
          goals faster.
        </p>
        <div className="hero-buttons">
          <Link to="/signup">
          <button className="btn primary">Get Started – It’s Free</button>
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Co-Pilot?</h2>
        <p className="features-subtitle">
          Discover the powerful features that make Co-Pilot the preferred choice
          for teams committed to efficiency and success.
        </p>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Effortless Task Management",
    description:
      "Organize, prioritize, and track all your tasks with intuitive tools. Never miss a deadline again.",
    icon: "🗒️",
  },
  {
    title: "Seamless Team Collaboration",
    description:
      "Communicate, share files, and collaborate in real-time with your team members.",
    icon: "👥",
  },
  {
    title: "Insightful Performance Analytics",
    description:
      "Gain deep insights into project progress and team performance with dashboards.",
    icon: "📈",
  },
  {
    title: "Integrated Scheduling",
    description:
      "Plan and manage project timelines, meetings, and deadlines in one calendar view.",
    icon: "📅",
  },
  {
    title: "Customizable Workflows",
    description:
      "Adapt Co-Pilot to your unique processes with flexible and configurable workflows.",
    icon: "⚙️",
  },
  {
    title: "AI-Powered Suggestions",
    description:
      "Leverage intelligent recommendations for task assignments and resource allocation.",
    icon: "🤖",
  },
  {
    title: "Robust Security",
    description:
      "Your data is protected with industry-leading security protocols and standards.",
    icon: "🔒",
  },
  {
    title: "Contextual Communication",
    description:
      "Discuss tasks and projects directly where the work happens, reducing context switching.",
    icon: "💬",
  },
];

