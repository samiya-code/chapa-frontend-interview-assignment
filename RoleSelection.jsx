import React from 'react';
import { ChevronRight, User, Lock, Crown } from 'lucide-react';
import '../styles/RoleSelection.css';
export default function RoleSelection({ onSelectRole }) {
    return (<div className="role-selection-container">
      <div className="role-selection-left">
        <div className="logo-section">
          <div className="logo">
            <img src="/chapa-logo.svg" alt="Chapa" className="logo-icon-img"/>
            <span className="logo-text">chapa</span>
          </div>
          <h1>Welcome to Chapa Payment Dashboard</h1>
          <p>Manage your payments, users and transactions in one place.</p>
        </div>

        <div className="illustration">
          <div className="wallet-card">
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="card-coin"></div>
            </div>
          </div>
          <div className="floating-sphere sphere-1"></div>
          <div className="floating-sphere sphere-2"></div>
          <div className="floating-sphere sphere-3"></div>
        </div>
      </div>

      <div className="role-selection-right">
        <div className="selection-box">
          <h2>Select your role to continue</h2>
          <p>This is a demo. Choose a role to access the dashboard.</p>

          <div className="roles-container">
            {/* User Role */}
            <button onClick={() => onSelectRole('user')} className="role-card user">
              <div className="role-icon">
                <User size={24}/>
              </div>
              <div className="role-info">
                <h3>User</h3>
                <p>View your balance, transactions and make payments</p>
              </div>
              <input type="radio" name="role" value="user" readOnly/>
            </button>

            {/* Admin Role */}
            <button onClick={() => onSelectRole('admin')} className="role-card admin">
              <div className="role-icon">
                <Lock size={24}/>
              </div>
              <div className="role-info">
                <h3>Admin</h3>
                <p>Manage users and view payment summary</p>
              </div>
              <input type="radio" name="role" value="admin" readOnly/>
            </button>

            {/* Super Admin Role */}
            <button onClick={() => onSelectRole('superadmin')} className="role-card superadmin">
              <div className="role-icon">
                <Crown size={24}/>
              </div>
              <div className="role-info">
                <h3>Super Admin</h3>
                <p>Full system access and manage admins</p>
              </div>
              <input type="radio" name="role" value="superadmin" readOnly/>
            </button>
          </div>

          <button onClick={() => onSelectRole('user')} className="continue-btn">
            Continue <ChevronRight size={20}/>
          </button>
        </div>
      </div>
    </div>);
}
