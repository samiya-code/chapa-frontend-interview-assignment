import React, { useState } from 'react';
import { LayoutGrid, Users, CreditCard, Landmark, BarChart3, Settings, Plus, Trash2, } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import PaymentChart from '../components/PaymentChart';
import SystemChart from '../components/SystemChart';
import SectionPlaceholder from '../components/SectionPlaceholder';
import '../styles/Dashboard.css';
export default function SuperAdminDashboard({ onLogout }) {
    const [showAddAdmin, setShowAddAdmin] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const menuItems = [
        { icon: LayoutGrid, label: 'Dashboard', active: true },
        { icon: Users, label: 'Users' },
        { icon: Users, label: 'Admins' },
        { icon: CreditCard, label: 'Payments' },
        { icon: Landmark, label: 'Banks' },
        { icon: BarChart3, label: 'Reports' },
        { icon: Settings, label: 'Settings' },
    ];
    const admins = [
        {
            id: 1,
            name: 'Admin User',
            email: 'admin@email.com',
            role: 'Admin',
        },
        {
            id: 2,
            name: 'Mekidies Alemu',
            email: 'mekidies@email.com',
            role: 'Admin',
        },
        {
            id: 3,
            name: 'Yonas Bekele',
            email: 'yonas@email.com',
            role: 'Admin',
        },
        {
            id: 4,
            name: 'Selam Tesfaye',
            email: 'selam@email.com',
            role: 'Admin',
        },
    ];
    const transfers = [
        {
            id: 'TRF-1001',
            recipient: 'abebe@email.com',
            amount: 'ETB 5,000.00',
            status: 'Success',
            date: 'May 28, 2025',
        },
        {
            id: 'TRF-1002',
            recipient: 'sara@email.com',
            amount: 'ETB 3,350.00',
            status: 'Pending',
            date: 'May 27, 2025',
        },
    ];
    const paymentData = [
        { name: 'Bank Transfer', value: 40, color: '#6d28d9' },
        { name: 'Card Payment', value: 35, color: '#06b6d4' },
        { name: 'Mobile Money', value: 15, color: '#10b981' },
        { name: 'Other', value: 10, color: '#f59e0b' },
    ];
    const systemData = [
        { date: 'May 1', value: 200 },
        { date: 'May 8', value: 300 },
        { date: 'May 15', value: 400 },
        { date: 'May 22', value: 350 },
        { date: 'May 29', value: 500 },
    ];
    const activeItem = menuItems[activeIndex] || menuItems[0];
    const isDashboard = activeItem.label === 'Dashboard';
    return (<div className="dashboard-container">
      <Sidebar menuItems={menuItems} onLogout={onLogout} logoText="chapa" activeIndex={activeIndex} onSelect={(i) => setActiveIndex(i)}/>

      <div className="dashboard-main">
        <Header title={`Super Admin · ${activeItem.label}`} userName="Super Admin" userRole="Super Administrator" onLogout={onLogout}/>

        <div className="dashboard-content">
          {!isDashboard && (<SectionPlaceholder icon={activeItem.icon} label={activeItem.label}/>)}
          {isDashboard && (<>
          {/* Stats Cards */}
          <div className="stats-grid super-admin-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <CreditCard size={24}/>
              </div>
              <div>
                <p>Total Payments</p>
                <h3>ETB 1,245,680</h3>
                <span>All Time</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <Users size={24}/>
              </div>
              <div>
                <p>Active Users</p>
                <h3>1,245</h3>
                <span>All Time</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <Users size={24}/>
              </div>
              <div>
                <p>Total Admins</p>
                <h3>8</h3>
                <span>All Time</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <BarChart3 size={24}/>
              </div>
              <div>
                <p>Total Transactions</p>
                <h3>2,450</h3>
                <span>All Time</span>
              </div>
            </div>
          </div>

          {/* Admin Management & Charts */}
          <div className="super-admin-section">
            <div className="admin-management">
              <div className="section-header">
                <h2>Admin Management</h2>
                <button className="add-btn" onClick={() => setShowAddAdmin(!showAddAdmin)}>
                  <Plus size={16}/> Add Admin
                </button>
              </div>

              <div className="admin-table">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {admins.map((admin) => (<tr key={admin.id}>
                        <td>{admin.name}</td>
                        <td>{admin.email}</td>
                        <td>{admin.role}</td>
                        <td>
                          <button className="delete-btn">
                            <Trash2 size={16}/>
                          </button>
                        </td>
                      </tr>))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="charts-container">
              <div className="payment-summary">
                <h2>Payment Distribution</h2>
                <PaymentChart data={paymentData}/>
              </div>
            </div>
          </div>

          {/* Transfers & System Overview */}
          <div className="transfers-section">
            <div className="recent-transfers">
              <h2>Recent Transfers (Chapa API)</h2>
              <div className="transfers-table">
                <table>
                  <thead>
                    <tr>
                      <th>Reference</th>
                      <th>Recipient</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transfers.map((transfer) => (<tr key={transfer.id}>
                        <td>{transfer.id}</td>
                        <td>{transfer.recipient}</td>
                        <td>{transfer.amount}</td>
                        <td>
                          <span className={`status ${transfer.status.toLowerCase()}`}>
                            {transfer.status}
                          </span>
                        </td>
                        <td>{transfer.date}</td>
                      </tr>))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="quick-transfer">
              <h2>Quick Transfer</h2>
              <div className="transfer-form">
                <div className="form-group">
                  <label>Recipient Email</label>
                  <input type="email" placeholder="Enter email"/>
                </div>

                <div className="form-group">
                  <label>Amount (ETB)</label>
                  <input type="number" placeholder="Enter amount"/>
                </div>

                <button className="transfer-btn">Send Transfer</button>
              </div>
            </div>
          </div>

          {/* System Overview */}
          <div className="system-overview">
            <h2>System Overview</h2>
            <SystemChart data={systemData}/>
          </div>
          </>)}
        </div>
      </div>
    </div>);
}
