import React, { useState, useEffect } from 'react';
import { LayoutGrid, ArrowRight, Wallet, TrendingUp, CheckCircle, Clock, Lock, } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TransactionTable from '../components/TransactionTable';
import PaymentModal from '../components/PaymentModal';
import SectionPlaceholder from '../components/SectionPlaceholder';
import '../styles/Dashboard.css';
export default function UserDashboard({ onLogout }) {
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [banks, setBanks] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchBanks = async () => {
            try {
                const response = await fetch('/api/banks');
                const data = await response.json();
                setBanks(data.data || []);
            }
            catch (error) {
                console.error('Error fetching banks:', error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchBanks();
    }, []);
    const menuItems = [
        { icon: LayoutGrid, label: 'Dashboard', active: true },
        { icon: ArrowRight, label: 'Transactions' },
        { icon: Wallet, label: 'Make Payment' },
        { icon: Wallet, label: 'Wallet' },
        { icon: Lock, label: 'Profile' },
        { icon: Lock, label: 'Settings' },
    ];
    const mockTransactions = [
        {
            id: 'TXN-1001',
            date: 'May 28, 2025',
            description: 'Payment to Abebe',
            amount: 'ETB 1,200.00',
            status: 'Success',
        },
        {
            id: 'TXN-1002',
            date: 'May 27, 2025',
            description: 'Payment to Worku',
            amount: 'ETB 850.00',
            status: 'Success',
        },
        {
            id: 'TXN-1003',
            date: 'May 26, 2025',
            description: 'Bill Payment',
            amount: 'ETB 300.00',
            status: 'Pending',
        },
        {
            id: 'TXN-1004',
            date: 'May 25, 2025',
            description: 'Mobile Recharge',
            amount: 'ETB 150.00',
            status: 'Success',
        },
        {
            id: 'TXN-1005',
            date: 'May 24, 2025',
            description: 'Payment to Sara',
            amount: 'ETB 2,000.00',
            status: 'Failed',
        },
    ];
    const activeItem = menuItems[activeIndex] || menuItems[0];
    const isDashboard = activeItem.label === 'Dashboard';
    return (<div className="dashboard-container">
      <Sidebar menuItems={menuItems} onLogout={onLogout} logoText="chapa" activeIndex={activeIndex} onSelect={(i) => setActiveIndex(i)}/>

      <div className="dashboard-main">
        <Header title={`User · ${activeItem.label}`} userName="Abebe Kebede" userRole="User" onLogout={onLogout}/>

        <div className="dashboard-content">
          {!isDashboard && (<SectionPlaceholder icon={activeItem.icon} label={activeItem.label}/>)}
          {isDashboard && (<>
          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon wallet">
                <Wallet size={24}/>
              </div>
              <div>
                <p>Wallet Balance</p>
                <h3>ETB 12,450.00</h3>
                <span>This Month</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon transactions">
                <TrendingUp size={24}/>
              </div>
              <div>
                <p>Total Transactions</p>
                <h3>38</h3>
                <span>This Month</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon success">
                <CheckCircle size={24}/>
              </div>
              <div>
                <p>Successful Payments</p>
                <h3>32</h3>
                <span>This Month</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon pending">
                <Clock size={24}/>
              </div>
              <div>
                <p>Pending Payments</p>
                <h3>6</h3>
                <span>This Month</span>
              </div>
            </div>
          </div>

          {/* Recent Transactions & Payment */}
          <div className="transaction-section">
            <div className="transactions-container">
              <div className="section-header">
                <h2>Recent Transactions</h2>
                <a href="#" className="view-all">
                  View all
                </a>
              </div>
              <TransactionTable transactions={mockTransactions}/>
            </div>

            <div className="payment-container">
              <h2>Make a Payment</h2>
              <div className="payment-form">
                <div className="form-group">
                  <label>Amount (ETB)</label>
                  <input type="number" placeholder="Enter amount" defaultValue=""/>
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Enter recipient email"/>
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea placeholder="Payment description"></textarea>
                </div>

                <button className="pay-btn" onClick={() => setShowPaymentModal(true)}>
                  Pay Now
                </button>
              </div>

              <div className="security-notice">
                <Lock size={20}/>
                <div>
                  <h4>Secure payments with Chapa</h4>
                  <p>Your payments are safe and encrypted end-to-end.</p>
                </div>
              </div>
            </div>
          </div>
          </>)}
        </div>
      </div>

      {showPaymentModal && (<PaymentModal banks={banks} onClose={() => setShowPaymentModal(false)}/>)}
    </div>);
}
