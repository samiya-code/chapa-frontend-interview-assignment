import React, { useState } from 'react';
import { LayoutGrid, Users, CreditCard, Landmark, BarChart3, Lock, } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import UserManagement from '../components/UserManagement';
import PaymentChart from '../components/PaymentChart';
import SectionPlaceholder from '../components/SectionPlaceholder';
import '../styles/Dashboard.css';
export default function AdminDashboard({ onLogout }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const menuItems = [
        { icon: LayoutGrid, label: 'Dashboard', active: true },
        { icon: Users, label: 'Users' },
        { icon: CreditCard, label: 'Payments' },
        { icon: Landmark, label: 'Banks' },
        { icon: BarChart3, label: 'Reports' },
        { icon: Lock, label: 'Settings' },
    ];
    const mockUsers = [
        {
            id: 1,
            name: 'Abebe Kebede',
            email: 'abebe@email.com',
            status: 'Active',
            joined: 'May 20, 2025',
        },
        {
            id: 2,
            name: 'Sara Tesfaye',
            email: 'sara@email.com',
            status: 'Inactive',
            joined: 'May 19, 2025',
        },
        {
            id: 3,
            name: 'Worku Assefa',
            email: 'worku@email.com',
            status: 'Active',
            joined: 'May 18, 2025',
        },
        {
            id: 4,
            name: 'Hana Getachew',
            email: 'hana@email.com',
            status: 'Active',
            joined: 'May 17, 2025',
        },
        {
            id: 5,
            name: 'Daniel Assefa',
            email: 'daniel@email.com',
            status: 'Inactive',
            joined: 'May 14, 2025',
        },
    ];
    const mockBanks = [
        {
            name: 'Commercial Bank of Ethiopia',
            icon: '🏦',
            code: 'CBE',
        },
        {
            name: 'Awash Bank',
            icon: '🏛',
            code: 'AWASH',
        },
        {
            name: 'Dashen Bank',
            icon: '🏦',
            code: 'DASHEN',
        },
        {
            name: 'Bank of Abyssinia',
            icon: '🏦',
            code: 'BOA',
        },
        {
            name: 'Cooperative Bank of Oromia',
            icon: '🏦',
            code: 'CBO',
        },
    ];
    const paymentData = [
        { name: 'Bank Transfer', value: 40, color: '#6d28d9' },
        { name: 'Card Payment', value: 35, color: '#06b6d4' },
        { name: 'Mobile Money', value: 15, color: '#10b981' },
        { name: 'Other', value: 10, color: '#f59e0b' },
    ];
    const activeItem = menuItems[activeIndex] || menuItems[0];
    const isDashboard = activeItem.label === 'Dashboard';
    return (<div className="dashboard-container">
      <Sidebar menuItems={menuItems} onLogout={onLogout} logoText="chapa" activeIndex={activeIndex} onSelect={(i) => setActiveIndex(i)}/>

      <div className="dashboard-main">
        <Header title={`Admin · ${activeItem.label}`} userName="Admin User" userRole="Administrator" onLogout={onLogout}/>

        <div className="dashboard-content">
          {!isDashboard && (<SectionPlaceholder icon={activeItem.icon} label={activeItem.label}/>)}
          {isDashboard && (<>
          {/* Stats Cards */}
          <div className="stats-grid admin-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <Users size={24}/>
              </div>
              <div>
                <p>Total Users</p>
                <h3>156</h3>
                <span>All Users</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <Users size={24}/>
              </div>
              <div>
                <p>Active Users</p>
                <h3>120</h3>
                <span>This Month</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <CreditCard size={24}/>
              </div>
              <div>
                <p>Total Payments</p>
                <h3>ETB 245,680</h3>
                <span>This Month</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <BarChart3 size={24}/>
              </div>
              <div>
                <p>Total Transactions</p>
                <h3>532</h3>
                <span>This Month</span>
              </div>
            </div>
          </div>

          {/* Users Management & Chart */}
          <div className="admin-section">
            <UserManagement users={mockUsers}/>

            <div className="payment-summary">
              <h2>Payment Summary (This Month)</h2>
              <PaymentChart data={paymentData}/>
            </div>
          </div>

          {/* Supported Banks */}
          <div className="banks-section">
            <div className="section-header">
              <h2>Supported Banks</h2>
              <a href="#" className="view-all">
                View all
              </a>
            </div>
            <div className="banks-grid">
              {mockBanks.map((bank, index) => (<div key={index} className="bank-card">
                  <span className="bank-icon">{bank.icon}</span>
                  <p>{bank.name}</p>
                </div>))}
            </div>
          </div>
          </>)}
        </div>
      </div>
    </div>);
}
