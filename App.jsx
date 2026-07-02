import React, { useState } from 'react';
import RoleSelection from './pages/RoleSelection';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
function App() {
    const [role, setRole] = useState(null);
    const handleRoleSelect = (selectedRole) => {
        setRole(selectedRole);
    };
    const handleLogout = () => {
        setRole(null);
    };
    if (role === null) {
        return <RoleSelection onSelectRole={handleRoleSelect}/>;
    }
    if (role === 'user') {
        return <UserDashboard onLogout={handleLogout}/>;
    }
    if (role === 'admin') {
        return <AdminDashboard onLogout={handleLogout}/>;
    }
    if (role === 'superadmin') {
        return <SuperAdminDashboard onLogout={handleLogout}/>;
    }
    return null;
}
export default App;
