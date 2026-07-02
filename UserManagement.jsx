import React from 'react';
import { Trash2 } from 'lucide-react';
import '../styles/UserManagement.css';
export default function UserManagement({ users }) {
    return (<div className="user-management">
      <div className="section-header">
        <h2>Users Management</h2>
        <a href="#" className="view-all">
          View all
        </a>
      </div>

      <div className="users-table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Joined</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (<tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <div className={`status-indicator ${user.status.toLowerCase()}`}>
                    <span className="indicator-dot"></span>
                    {user.status}
                  </div>
                </td>
                <td>{user.joined}</td>
                <td>
                  <button className="action-btn delete">
                    <Trash2 size={16}/>
                  </button>
                </td>
              </tr>))}
          </tbody>
        </table>
      </div>
    </div>);
}
