
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">

        <NavLink to="/" className="text-2xl font-extrabold tracking-tight">
          <span className="text-white">Paste</span>
          <span className="text-violet-500">Flow.</span>
        </NavLink>

        <div className="flex items-center gap-3">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-5 py-2 rounded-xl font-semibold transition ${
                isActive
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/10'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/pastes"
            className={({ isActive }) =>
              `px-5 py-2 rounded-xl font-semibold transition ${
                isActive
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/10'
              }`
            }
          >
            My Pastes
          </NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
