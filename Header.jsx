import React from 'react';
import { Bell } from 'lucide-react';
import '../styles/Header.css';
export default function Header({ title, userName, userRole, onLogout }) {
    return (<header className="dashboard-header">
      <div className="header-title">
        <h1>{title}</h1>
      </div>

      <div className="header-actions">
        <button className="notification-btn">
          <Bell size={20}/>
        </button>

        <div className="user-menu">
          <div className="user-info">
            <div className="user-avatar">{userName.charAt(0)}</div>
            <div className="user-details">
              <p className="user-name">{userName}</p>
              <p className="user-role">{userRole}</p>
            </div>
          </div>
        </div>
      </div>
    </header>);
}
