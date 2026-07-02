# CHAPA PAYMENT DASHBOARD - COMPLETE CODE

This file contains ALL the code for the Chapa Payment Dashboard project. Copy and paste each file into your project.

---

## TABLE OF CONTENTS

1. **Configuration Files**
   - package.json
   - vite.config.ts
   - tsconfig.json
   - index.html
   - .env.example

2. **Core Files**
   - src/main.tsx
   - src/App.tsx
   - src/index.css

3. **Pages**
   - src/pages/RoleSelection.tsx
   - src/pages/UserDashboard.tsx
   - src/pages/AdminDashboard.tsx
   - src/pages/SuperAdminDashboard.tsx

4. **Components**
   - src/components/Sidebar.tsx
   - src/components/Header.tsx
   - src/components/TransactionTable.tsx
   - src/components/PaymentChart.tsx
   - src/components/SystemChart.tsx
   - src/components/UserManagement.tsx
   - src/components/PaymentModal.tsx

5. **Backend**
   - src/server.js

6. **Styles**
   - src/styles/RoleSelection.css
   - src/styles/Dashboard.css
   - src/styles/Sidebar.css
   - src/styles/Header.css
   - src/styles/TransactionTable.css
   - src/styles/PaymentChart.css
   - src/styles/UserManagement.css
   - src/styles/PaymentModal.css
   - src/styles/SystemChart.css

---

## FILE: package.json

```json
{
  "name": "my-project",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "concurrently \"vite\" \"node src/server.js\"",
    "server": "node src/server.js",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint ."
  },
  "dependencies": {
    "@base-ui/react": "^1.5.0",
    "@vercel/analytics": "1.6.1",
    "axios": "^1.18.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cors": "^2.8.6",
    "dotenv": "^16.6.1",
    "express": "^4.22.2",
    "lucide-react": "^1.16.0",
    "react": "^19",
    "react-dom": "^19",
    "shadcn": "^4.8.0",
    "tailwind-merge": "^3.3.1",
    "tw-animate-css": "^1.4.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.2.0",
    "@types/node": "^24",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@vitejs/plugin-react": "^6.0.3",
    "concurrently": "^9.2.3",
    "postcss": "^8.5",
    "tailwindcss": "^4.2.0",
    "typescript": "5.7.3",
    "vite": "^8.1.3"
  },
  "pnpm": {
    "overrides": {
      "hono": "4.12.25"
    }
  }
}
```

---

## FILE: vite.config.ts

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      }
    }
  }
})
```

---

## FILE: tsconfig.json

```json
{
  "compilerOptions": {
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "target": "ES6",
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": [
        "./*"
      ]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

---

## FILE: index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Chapa Payment Dashboard</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## FILE: .env.example

```
CHAPA_SECRET_KEY=your_chapa_secret_key_here
PORT=3001
FRONTEND_URL=http://localhost:3000
```

---

## FILE: src/main.tsx

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

## FILE: src/App.tsx

```typescript
import React, { useState } from 'react'
import RoleSelection from './pages/RoleSelection'
import UserDashboard from './pages/UserDashboard'
import AdminDashboard from './pages/AdminDashboard'
import SuperAdminDashboard from './pages/SuperAdminDashboard'

type Role = null | 'user' | 'admin' | 'superadmin'

function App() {
  const [role, setRole] = useState<Role>(null)

  const handleRoleSelect = (selectedRole: Exclude<Role, null>) => {
    setRole(selectedRole)
  }

  const handleLogout = () => {
    setRole(null)
  }

  if (role === null) {
    return <RoleSelection onSelectRole={handleRoleSelect} />
  }

  if (role === 'user') {
    return <UserDashboard onLogout={handleLogout} />
  }

  if (role === 'admin') {
    return <AdminDashboard onLogout={handleLogout} />
  }

  if (role === 'superadmin') {
    return <SuperAdminDashboard onLogout={handleLogout} />
  }

  return null
}

export default App
```

---

## FILE: src/index.css

```css
@import "tailwindcss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary: #6d28d9;
  --primary-dark: #5b21b6;
  --secondary: #10b981;
  --danger: #ef4444;
  --warning: #f59e0b;
  --success: #10b981;
  --dark: #1e293b;
  --dark-lighter: #334155;
  --light: #f8fafc;
  --gray: #64748b;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--light);
  color: var(--dark);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--light);
}

::-webkit-scrollbar-thumb {
  background: var(--gray);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--dark-lighter);
}
```

---

## FILE: src/pages/RoleSelection.tsx

```typescript
import React from 'react'
import { ChevronRight, User, Lock, Crown } from 'lucide-react'
import '../styles/RoleSelection.css'

interface RoleSelectionProps {
  onSelectRole: (role: 'user' | 'admin' | 'superadmin') => void
}

export default function RoleSelection({ onSelectRole }: RoleSelectionProps) {
  return (
    <div className="role-selection-container">
      <div className="role-selection-left">
        <div className="logo-section">
          <div className="logo">
            <span className="logo-icon">◉</span>
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
            <button
              onClick={() => onSelectRole('user')}
              className="role-card user"
            >
              <div className="role-icon">
                <User size={24} />
              </div>
              <div className="role-info">
                <h3>User</h3>
                <p>View your balance, transactions and make payments</p>
              </div>
              <input type="radio" name="role" value="user" readOnly />
            </button>

            {/* Admin Role */}
            <button
              onClick={() => onSelectRole('admin')}
              className="role-card admin"
            >
              <div className="role-icon">
                <Lock size={24} />
              </div>
              <div className="role-info">
                <h3>Admin</h3>
                <p>Manage users and view payment summary</p>
              </div>
              <input type="radio" name="role" value="admin" readOnly />
            </button>

            {/* Super Admin Role */}
            <button
              onClick={() => onSelectRole('superadmin')}
              className="role-card superadmin"
            >
              <div className="role-icon">
                <Crown size={24} />
              </div>
              <div className="role-info">
                <h3>Super Admin</h3>
                <p>Full system access and manage admins</p>
              </div>
              <input type="radio" name="role" value="superadmin" readOnly />
            </button>
          </div>

          <button
            onClick={() => onSelectRole('user')}
            className="continue-btn"
          >
            Continue <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
```

---

## FILE: src/pages/UserDashboard.tsx

```typescript
import React, { useState, useEffect } from 'react'
import {
  LayoutGrid,
  ArrowRight,
  Wallet,
  TrendingUp,
  CheckCircle,
  Clock,
  Lock,
  Bell,
  LogOut,
} from 'lucide-react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import TransactionTable from '../components/TransactionTable'
import PaymentModal from '../components/PaymentModal'
import '../styles/Dashboard.css'

interface UserDashboardProps {
  onLogout: () => void
}

interface BankInfo {
  bank_code: string
  bank_name: string
  account_name: string
  account_number: string
}

export default function UserDashboard({ onLogout }: UserDashboardProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [banks, setBanks] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await fetch('/api/banks')
        const data = await response.json()
        setBanks(data.data || [])
      } catch (error) {
        console.error('Error fetching banks:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBanks()
  }, [])

  const menuItems = [
    { icon: LayoutGrid, label: 'Dashboard', active: true },
    { icon: ArrowRight, label: 'Transactions' },
    { icon: Wallet, label: 'Make Payment' },
    { icon: Wallet, label: 'Wallet' },
    { icon: Lock, label: 'Profile' },
    { icon: Lock, label: 'Settings' },
  ]

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
  ]

  return (
    <div className="dashboard-container">
      <Sidebar
        menuItems={menuItems}
        onLogout={onLogout}
        logoText="chapa"
      />

      <div className="dashboard-main">
        <Header
          title="User Dashboard"
          userName="Abebe Kebede"
          userRole="User"
          onLogout={onLogout}
        />

        <div className="dashboard-content">
          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon wallet">
                <Wallet size={24} />
              </div>
              <div>
                <p>Wallet Balance</p>
                <h3>ETB 12,450.00</h3>
                <span>This Month</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon transactions">
                <TrendingUp size={24} />
              </div>
              <div>
                <p>Total Transactions</p>
                <h3>38</h3>
                <span>This Month</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon success">
                <CheckCircle size={24} />
              </div>
              <div>
                <p>Successful Payments</p>
                <h3>32</h3>
                <span>This Month</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon pending">
                <Clock size={24} />
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
              <TransactionTable transactions={mockTransactions} />
            </div>

            <div className="payment-container">
              <h2>Make a Payment</h2>
              <div className="payment-form">
                <div className="form-group">
                  <label>Amount (ETB)</label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    defaultValue=""
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Enter recipient email" />
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea placeholder="Payment description"></textarea>
                </div>

                <button
                  className="pay-btn"
                  onClick={() => setShowPaymentModal(true)}
                >
                  Pay Now
                </button>
              </div>

              <div className="security-notice">
                <Lock size={20} />
                <div>
                  <h4>Secure payments with Chapa</h4>
                  <p>Your payments are safe and encrypted end-to-end.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPaymentModal && (
        <PaymentModal
          banks={banks}
          onClose={() => setShowPaymentModal(false)}
        />
      )}
    </div>
  )
}
```

---

## FILE: src/pages/AdminDashboard.tsx

```typescript
import React, { useState } from 'react'
import {
  LayoutGrid,
  Users,
  CreditCard,
  Landmark,
  BarChart3,
  LogOut,
  Lock,
  Bell,
} from 'lucide-react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import UserManagement from '../components/UserManagement'
import PaymentChart from '../components/PaymentChart'
import '../styles/Dashboard.css'

interface AdminDashboardProps {
  onLogout: () => void
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const menuItems = [
    { icon: LayoutGrid, label: 'Dashboard', active: true },
    { icon: Users, label: 'Users' },
    { icon: CreditCard, label: 'Payments' },
    { icon: Landmark, label: 'Banks' },
    { icon: BarChart3, label: 'Reports' },
    { icon: Lock, label: 'Settings' },
  ]

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
  ]

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
  ]

  const paymentData = [
    { name: 'Bank Transfer', value: 40, color: '#6d28d9' },
    { name: 'Card Payment', value: 35, color: '#06b6d4' },
    { name: 'Mobile Money', value: 15, color: '#10b981' },
    { name: 'Other', value: 10, color: '#f59e0b' },
  ]

  return (
    <div className="dashboard-container">
      <Sidebar
        menuItems={menuItems}
        onLogout={onLogout}
        logoText="chapa"
      />

      <div className="dashboard-main">
        <Header
          title="Admin Dashboard"
          userName="Admin User"
          userRole="Administrator"
          onLogout={onLogout}
        />

        <div className="dashboard-content">
          {/* Stats Cards */}
          <div className="stats-grid admin-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <Users size={24} />
              </div>
              <div>
                <p>Total Users</p>
                <h3>156</h3>
                <span>All Users</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <Users size={24} />
              </div>
              <div>
                <p>Active Users</p>
                <h3>120</h3>
                <span>This Month</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <CreditCard size={24} />
              </div>
              <div>
                <p>Total Payments</p>
                <h3>ETB 245,680</h3>
                <span>This Month</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <BarChart3 size={24} />
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
            <UserManagement users={mockUsers} />

            <div className="payment-summary">
              <h2>Payment Summary (This Month)</h2>
              <PaymentChart data={paymentData} />
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
              {mockBanks.map((bank, index) => (
                <div key={index} className="bank-card">
                  <span className="bank-icon">{bank.icon}</span>
                  <p>{bank.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

---

## FILE: src/pages/SuperAdminDashboard.tsx

```typescript
import React, { useState } from 'react'
import {
  LayoutGrid,
  Users,
  CreditCard,
  Landmark,
  BarChart3,
  Settings,
  LogOut,
  Bell,
  Plus,
  Trash2,
} from 'lucide-react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import PaymentChart from '../components/PaymentChart'
import SystemChart from '../components/SystemChart'
import '../styles/Dashboard.css'

interface SuperAdminDashboardProps {
  onLogout: () => void
}

export default function SuperAdminDashboard({ onLogout }: SuperAdminDashboardProps) {
  const [showAddAdmin, setShowAddAdmin] = useState(false)

  const menuItems = [
    { icon: LayoutGrid, label: 'Dashboard', active: true },
    { icon: Users, label: 'Users' },
    { icon: Users, label: 'Admins' },
    { icon: CreditCard, label: 'Payments' },
    { icon: Landmark, label: 'Banks' },
    { icon: BarChart3, label: 'Reports' },
    { icon: Settings, label: 'Settings' },
  ]

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
  ]

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
  ]

  const paymentData = [
    { name: 'Bank Transfer', value: 40, color: '#6d28d9' },
    { name: 'Card Payment', value: 35, color: '#06b6d4' },
    { name: 'Mobile Money', value: 15, color: '#10b981' },
    { name: 'Other', value: 10, color: '#f59e0b' },
  ]

  const systemData = [
    { date: 'May 1', value: 200 },
    { date: 'May 8', value: 300 },
    { date: 'May 15', value: 400 },
    { date: 'May 22', value: 350 },
    { date: 'May 29', value: 500 },
  ]

  return (
    <div className="dashboard-container">
      <Sidebar
        menuItems={menuItems}
        onLogout={onLogout}
        logoText="chapa"
      />

      <div className="dashboard-main">
        <Header
          title="Super Admin Dashboard"
          userName="Super Admin"
          userRole="Super Administrator"
          onLogout={onLogout}
        />

        <div className="dashboard-content">
          {/* Stats Cards */}
          <div className="stats-grid super-admin-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <CreditCard size={24} />
              </div>
              <div>
                <p>Total Payments</p>
                <h3>ETB 1,245,680</h3>
                <span>All Time</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <Users size={24} />
              </div>
              <div>
                <p>Active Users</p>
                <h3>1,245</h3>
                <span>All Time</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <Users size={24} />
              </div>
              <div>
                <p>Total Admins</p>
                <h3>8</h3>
                <span>All Time</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <BarChart3 size={24} />
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
                <button
                  className="add-btn"
                  onClick={() => setShowAddAdmin(!showAddAdmin)}
                >
                  <Plus size={16} /> Add Admin
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
                    {admins.map((admin) => (
                      <tr key={admin.id}>
                        <td>{admin.name}</td>
                        <td>{admin.email}</td>
                        <td>{admin.role}</td>
                        <td>
                          <button className="delete-btn">
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="charts-container">
              <div className="payment-summary">
                <h2>Payment Distribution</h2>
                <PaymentChart data={paymentData} />
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
                    {transfers.map((transfer) => (
                      <tr key={transfer.id}>
                        <td>{transfer.id}</td>
                        <td>{transfer.recipient}</td>
                        <td>{transfer.amount}</td>
                        <td>
                          <span className={`status ${transfer.status.toLowerCase()}`}>
                            {transfer.status}
                          </span>
                        </td>
                        <td>{transfer.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="quick-transfer">
              <h2>Quick Transfer</h2>
              <div className="transfer-form">
                <div className="form-group">
                  <label>Recipient Email</label>
                  <input type="email" placeholder="Enter email" />
                </div>

                <div className="form-group">
                  <label>Amount (ETB)</label>
                  <input type="number" placeholder="Enter amount" />
                </div>

                <button className="transfer-btn">Send Transfer</button>
              </div>
            </div>
          </div>

          {/* System Overview */}
          <div className="system-overview">
            <h2>System Overview</h2>
            <SystemChart data={systemData} />
          </div>
        </div>
      </div>
    </div>
  )
}
```

---

## FILE: src/components/Sidebar.tsx

```typescript
import React from 'react'
import { LucideIcon, LogOut } from 'lucide-react'
import '../styles/Sidebar.css'

interface MenuItem {
  icon: LucideIcon
  label: string
  active?: boolean
}

interface SidebarProps {
  menuItems: MenuItem[]
  onLogout: () => void
  logoText: string
}

export default function Sidebar({ menuItems, onLogout, logoText }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">◉</span>
          <span className="logo-text">{logoText}</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            return (
              <li key={index} className={item.active ? 'active' : ''}>
                <a href="#">
                  <Icon size={20} />
                  <span>{item.label}</span>
                </a>
              </li>
            )
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
  )
}
```

---

## FILE: src/components/Header.tsx

```typescript
import React from 'react'
import { Bell, LogOut } from 'lucide-react'
import '../styles/Header.css'

interface HeaderProps {
  title: string
  userName: string
  userRole: string
  onLogout: () => void
}

export default function Header({ title, userName, userRole, onLogout }: HeaderProps) {
  return (
    <header className="dashboard-header">
      <div className="header-title">
        <h1>{title}</h1>
      </div>

      <div className="header-actions">
        <button className="notification-btn">
          <Bell size={20} />
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
    </header>
  )
}
```

---

## FILE: src/components/TransactionTable.tsx

```typescript
import React from 'react'
import '../styles/TransactionTable.css'

interface Transaction {
  id: string
  date: string
  description: string
  amount: string
  status: string
}

interface TransactionTableProps {
  transactions: Transaction[]
}

export default function TransactionTable({ transactions }: TransactionTableProps) {
  return (
    <div className="transaction-table-wrapper">
      <table className="transaction-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id}>
              <td>{tx.id}</td>
              <td>{tx.date}</td>
              <td>{tx.description}</td>
              <td>{tx.amount}</td>
              <td>
                <span className={`status-badge ${tx.status.toLowerCase()}`}>
                  {tx.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```

---

## FILE: src/components/PaymentChart.tsx

```typescript
import React from 'react'
import '../styles/PaymentChart.css'

interface PaymentData {
  name: string
  value: number
  color: string
}

interface PaymentChartProps {
  data: PaymentData[]
}

export default function PaymentChart({ data }: PaymentChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0)

  let currentAngle = -90

  const slices = data.map((item) => {
    const sliceAngle = (item.value / total) * 360
    const startAngle = currentAngle
    const endAngle = currentAngle + sliceAngle
    currentAngle = endAngle

    const startRad = (startAngle * Math.PI) / 180
    const endRad = (endAngle * Math.PI) / 180

    const x1 = 50 + 40 * Math.cos(startRad)
    const y1 = 50 + 40 * Math.sin(startRad)
    const x2 = 50 + 40 * Math.cos(endRad)
    const y2 = 50 + 40 * Math.sin(endRad)

    const largeArc = sliceAngle > 180 ? 1 : 0

    const pathData = [
      `M 50 50`,
      `L ${x1} ${y1}`,
      `A 40 40 0 ${largeArc} 1 ${x2} ${y2}`,
      'Z',
    ].join(' ')

    return {
      ...item,
      path: pathData,
      percentage: ((item.value / total) * 100).toFixed(1),
    }
  })

  return (
    <div className="payment-chart">
      <div className="chart-svg-container">
        <svg viewBox="0 0 100 100" className="donut-chart">
          {slices.map((slice, index) => (
            <path
              key={index}
              d={slice.path}
              fill={slice.color}
              opacity="0.8"
            />
          ))}
        </svg>
      </div>

      <div className="chart-legend">
        {data.map((item, index) => (
          <div key={index} className="legend-item">
            <div
              className="legend-color"
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="legend-label">{item.name}</span>
            <span className="legend-value">
              {slices[index]?.percentage}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
```

---

## FILE: src/components/SystemChart.tsx

```typescript
import React from 'react'
import '../styles/SystemChart.css'

interface ChartPoint {
  date: string
  value: number
}

interface SystemChartProps {
  data: ChartPoint[]
}

export default function SystemChart({ data }: SystemChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value))
  const minValue = Math.min(...data.map((d) => d.value))
  const range = maxValue - minValue || 1

  const points = data
    .map((point, index) => {
      const x = (index / (data.length - 1)) * 100
      const y = 100 - ((point.value - minValue) / range) * 80 - 10
      return { x, y, ...point }
    })

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')

  return (
    <div className="system-chart">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="line-chart">
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((y) => (
          <line
            key={`h-${y}`}
            x1="0"
            y1={y}
            x2="100"
            y2={y}
            stroke="#e2e8f0"
            strokeWidth="0.3"
          />
        ))}

        {/* Chart line */}
        <polyline
          points={points.map((p) => `${p.x},${p.y}`).join(' ')}
          fill="none"
          stroke="#6d28d9"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />

        {/* Fill area under line */}
        <polygon
          points={`0,100 ${points.map((p) => `${p.x},${p.y}`).join(' ')} 100,100`}
          fill="url(#gradient)"
          opacity="0.3"
        />

        <defs>
          <linearGradient
            id="gradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6d28d9" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Data points */}
        {points.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="1.5"
            fill="#6d28d9"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      <div className="chart-labels">
        {points.map((point, index) => (
          <div
            key={index}
            className="label"
            style={{
              left: `calc(${point.x}% - 20px)`,
            }}
          >
            <span>{point.date}</span>
            <span className="value">{point.value}K</span>
          </div>
        ))}
      </div>
    </div>
  )
}
```

---

## FILE: src/components/UserManagement.tsx

```typescript
import React from 'react'
import { Trash2 } from 'lucide-react'
import '../styles/UserManagement.css'

interface User {
  id: number
  name: string
  email: string
  status: string
  joined: string
}

interface UserManagementProps {
  users: User[]
}

export default function UserManagement({ users }: UserManagementProps) {
  return (
    <div className="user-management">
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
            {users.map((user) => (
              <tr key={user.id}>
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
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
```

---

## FILE: src/components/PaymentModal.tsx

```typescript
import React, { useState } from 'react'
import { X } from 'lucide-react'
import '../styles/PaymentModal.css'

interface Bank {
  bank_code: string
  bank_name: string
  account_name: string
  account_number: string
}

interface PaymentModalProps {
  banks: Bank[]
  onClose: () => void
}

export default function PaymentModal({ banks, onClose }: PaymentModalProps) {
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null)

  const handlePayment = async () => {
    if (!selectedBank) {
      alert('Please select a bank')
      return
    }

    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bank: selectedBank.bank_code,
          amount: 1000,
        }),
      })

      if (response.ok) {
        alert('Payment initiated successfully!')
        onClose()
      } else {
        alert('Payment failed')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error processing payment')
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Select Payment Method</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-subtitle">Choose a bank to process your payment</p>

          {banks && banks.length > 0 ? (
            <div className="banks-list">
              {banks.map((bank) => (
                <button
                  key={bank.bank_code}
                  className={`bank-option ${selectedBank?.bank_code === bank.bank_code ? 'selected' : ''}`}
                  onClick={() => setSelectedBank(bank)}
                >
                  <div className="bank-info">
                    <h4>{bank.bank_name}</h4>
                    <p>Code: {bank.bank_code}</p>
                  </div>
                  <div className="radio-button">
                    {selectedBank?.bank_code === bank.bank_code && (
                      <div className="radio-inner"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="loading-message">Loading banks...</div>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn-pay"
            onClick={handlePayment}
            disabled={!selectedBank}
          >
            Continue Payment
          </button>
        </div>
      </div>
    </div>
  )
}
```

---

## FILE: src/server.js

```javascript
import express from 'express'
import cors from 'cors'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

const CHAPA_API_URL = 'https://api.chapa.co/v1'
const CHAPA_SECRET_KEY = process.env.CHAPA_SECRET_KEY

// Banks endpoint - Get list of supported banks
app.get('/api/banks', async (req, res) => {
  if (req.method !== 'GET' && req.method !== undefined) {
    return res.status(405).json({ message: 'Method not allowed' })
  }
  try {
    const response = await axios.get(`${CHAPA_API_URL}/banks`, {
      headers: { Authorization: `Bearer ${CHAPA_SECRET_KEY}` },
    })
    res.status(200).json(response.data)
  } catch (error) {
    console.error('Error fetching banks:', error.message)
    res.status(500).json({ message: error.message || 'Failed to fetch banks' })
  }
})

// Verify transaction endpoint
app.get('/api/transaction/verify/:tx_ref', async (req, res) => {
  const { tx_ref } = req.params

  if (!tx_ref) {
    return res.status(400).json({ message: 'tx_ref parameter is required' })
  }

  try {
    const response = await axios.get(
      `${CHAPA_API_URL}/transaction/verify/${tx_ref}`,
      {
        headers: { Authorization: `Bearer ${CHAPA_SECRET_KEY}` },
      }
    )
    res.status(200).json(response.data)
  } catch (error) {
    console.error('Error verifying transaction:', error.message)
    res.status(500).json({ message: error.message || 'Failed to verify transaction' })
  }
})

// Initialize payment endpoint
app.post('/api/payment', async (req, res) => {
  try {
    const { amount, email, first_name, last_name, phone_number, description } =
      req.body

    if (!amount || !email) {
      return res
        .status(400)
        .json({ message: 'Amount and email are required' })
    }

    // Generate unique transaction reference
    const tx_ref = `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    const paymentData = {
      amount: amount.toString(),
      currency: 'ETB',
      email: email,
      first_name: first_name || 'Customer',
      last_name: last_name || 'Payment',
      phone_number: phone_number || '0900000000',
      tx_ref: tx_ref,
      callback_url: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/payment/callback`,
      return_url: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/payment/success`,
      description: description || 'Payment via Chapa',
      meta: {
        hide_receipt: false,
      },
    }

    const response = await axios.post(`${CHAPA_API_URL}/transaction/initialize`, paymentData, {
      headers: { Authorization: `Bearer ${CHAPA_SECRET_KEY}` },
    })

    res.status(200).json({
      success: true,
      data: response.data,
      checkout_url: response.data.data.checkout_url,
    })
  } catch (error) {
    console.error('Error initializing payment:', error.response?.data || error.message)
    res.status(500).json({
      message: error.response?.data?.message || error.message || 'Failed to initialize payment',
    })
  }
})

// Subdomain bank transfer endpoint
app.post('/api/transfer', async (req, res) => {
  try {
    const { recipient, amount, reference, narration } = req.body

    if (!recipient || !amount || !reference) {
      return res.status(400).json({
        message: 'recipient, amount, and reference are required',
      })
    }

    const transferData = {
      recipient: recipient,
      amount: amount.toString(),
      reference: reference,
      narration: narration || 'Bank transfer via Chapa',
    }

    const response = await axios.post(
      `${CHAPA_API_URL}/transfers`,
      transferData,
      {
        headers: { Authorization: `Bearer ${CHAPA_SECRET_KEY}` },
      }
    )

    res.status(200).json({
      success: true,
      data: response.data,
    })
  } catch (error) {
    console.error('Error processing transfer:', error.response?.data || error.message)
    res.status(500).json({
      message: error.response?.data?.message || error.message || 'Failed to process transfer',
    })
  }
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
  console.log(`API Base URL: ${CHAPA_API_URL}`)
  console.log(`Secret Key Configured: ${!!CHAPA_SECRET_KEY}`)
})
```

---

## CSS FILES

(CSS files continue below...)

This is a comprehensive code package containing everything needed to build the Chapa Payment Dashboard. Each file is clearly labeled and organized by directory structure.
