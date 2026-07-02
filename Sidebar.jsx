import React, { useState } from 'react';
import { LogOut } from 'lucide-react';
import '../styles/Sidebar.css';

export default function Sidebar({ menuItems, onLogout, logoText, activeIndex, onSelect }) {
  const initial = (() => {
    if (typeof activeIndex === 'number') return activeIndex;
    const idx = menuItems.findIndex((m) => m.active);
    return idx >= 0 ? idx : 0;
  })();
  const [internalActive, setInternalActive] = useState(initial);
  const current = typeof activeIndex === 'number' ? activeIndex : internalActive;

  const handleClick = (e, index, item) => {
    e.preventDefault();
    setInternalActive(index);
    if (onSelect) onSelect(index, item);
    if (item.onClick) item.onClick();
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <img src="/chapa-logo.png" alt="Chapa" className="logo-img" />
          {logoText ? <span className="logo-text">{logoText}</span> : null}
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = current === index;
            return (
              <li key={index} className={isActive ? 'active' : ''}>
                <a
                  href="#"
                  onClick={(e) => handleClick(e, index, item)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                  {item.badge ? <span className="nav-badge">{item.badge}</span> : null}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn" onClick={onLogout}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
