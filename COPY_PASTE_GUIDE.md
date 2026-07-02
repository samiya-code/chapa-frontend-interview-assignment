# COPY & PASTE GUIDE - Complete Chapa Dashboard

This guide provides all the code in an easy-to-copy format. Copy each file exactly as shown below.

## DIRECTORY STRUCTURE

```
project-root/
├── src/
│   ├── pages/
│   │   ├── RoleSelection.tsx
│   │   ├── UserDashboard.tsx
│   │   ├── AdminDashboard.tsx
│   │   └── SuperAdminDashboard.tsx
│   ├── components/
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   ├── TransactionTable.tsx
│   │   ├── PaymentChart.tsx
│   │   ├── SystemChart.tsx
│   │   ├── UserManagement.tsx
│   │   └── PaymentModal.tsx
│   ├── styles/
│   │   ├── RoleSelection.css
│   │   ├── Dashboard.css
│   │   ├── Sidebar.css
│   │   ├── Header.css
│   │   ├── TransactionTable.css
│   │   ├── PaymentChart.css
│   │   ├── UserManagement.css
│   │   ├── PaymentModal.css
│   │   └── SystemChart.css
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── server.js
├── vite.config.ts
├── tsconfig.json
├── index.html
├── package.json
└── .env.example
```

---

## STEP 1: Create Your Project Directory

```bash
mkdir chapa-dashboard
cd chapa-dashboard
```

---

## STEP 2: Initialize Node & Create Folders

```bash
npm init -y
mkdir -p src/pages src/components src/styles
touch src/main.tsx src/App.tsx src/index.css src/server.js
touch vite.config.ts tsconfig.json index.html .env.example
```

---

## STEP 3: Copy Configuration Files

### `package.json`
```json
{
  "name": "chapa-dashboard",
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "concurrently \"vite\" \"node src/server.js\"",
    "server": "node src/server.js",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.18.1",
    "cors": "^2.8.6",
    "dotenv": "^16.6.1",
    "express": "^4.22.2",
    "lucide-react": "^1.16.0",
    "react": "^19",
    "react-dom": "^19"
  },
  "devDependencies": {
    "@types/node": "^24",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@vitejs/plugin-react": "^6.0.3",
    "concurrently": "^9.2.3",
    "typescript": "5.7.3",
    "vite": "^8.1.3"
  }
}
```

### `vite.config.ts`
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

### `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "noEmit": true,
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Chapa Payment Dashboard</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### `.env.example`
```
CHAPA_SECRET_KEY=your_secret_key_here
PORT=3001
FRONTEND_URL=http://localhost:3000
```

---

## STEP 4: Install Dependencies

```bash
npm install
```

Or if using pnpm:
```bash
pnpm install
```

---

## STEP 5: Copy Source Files

Create each file with the content provided in `COMPLETE_CODE.md` or follow the individual file sections below.

### Create `src/main.tsx`
[Copy from COMPLETE_CODE.md - File: src/main.tsx]

### Create `src/App.tsx`
[Copy from COMPLETE_CODE.md - File: src/App.tsx]

### Create `src/index.css`
[Copy from COMPLETE_CODE.md - File: src/index.css]

### Create All Page Components
Create files under `src/pages/`:
- `RoleSelection.tsx`
- `UserDashboard.tsx`
- `AdminDashboard.tsx`
- `SuperAdminDashboard.tsx`

[Copy from COMPLETE_CODE.md]

### Create All UI Components
Create files under `src/components/`:
- `Sidebar.tsx`
- `Header.tsx`
- `TransactionTable.tsx`
- `PaymentChart.tsx`
- `SystemChart.tsx`
- `UserManagement.tsx`
- `PaymentModal.tsx`

[Copy from COMPLETE_CODE.md]

### Create Backend Server
Create `src/server.js`

[Copy from COMPLETE_CODE.md - File: src/server.js]

### Create All CSS Files
Create files under `src/styles/`:
- `RoleSelection.css`
- `Dashboard.css`
- `Sidebar.css`
- `Header.css`
- `TransactionTable.css`
- `PaymentChart.css`
- `UserManagement.css`
- `PaymentModal.css`
- `SystemChart.css`

[Copy from COMPLETE_CODE.md]

---

## STEP 6: Setup Environment Variables

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Edit `.env` and add your Chapa API key:
```
CHAPA_SECRET_KEY=your_actual_secret_key
PORT=3001
FRONTEND_URL=http://localhost:3000
```

Get your key from: https://chapa.co

---

## STEP 7: Run the Project

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## FILE SIZES

| File | Lines | Size |
|------|-------|------|
| src/App.tsx | 40 | 1.2 KB |
| src/main.tsx | 11 | 0.3 KB |
| src/index.css | 53 | 1.8 KB |
| src/server.js | 152 | 4.5 KB |
| src/pages/RoleSelection.tsx | 98 | 3.1 KB |
| src/pages/UserDashboard.tsx | 225 | 7.2 KB |
| src/pages/AdminDashboard.tsx | 201 | 6.8 KB |
| src/pages/SuperAdminDashboard.tsx | 271 | 8.9 KB |
| src/components/Sidebar.tsx | 52 | 1.6 KB |
| src/components/Header.tsx | 37 | 1.2 KB |
| src/components/TransactionTable.tsx | 48 | 1.5 KB |
| src/components/PaymentChart.tsx | 81 | 2.6 KB |
| src/components/SystemChart.tsx | 102 | 3.2 KB |
| src/components/UserManagement.tsx | 63 | 2.0 KB |
| src/components/PaymentModal.tsx | 104 | 3.3 KB |
| styles/* (all CSS) | 1200+ | 35+ KB |

---

## QUICK REFERENCE

### API Endpoints
- `GET /api/banks` - Get supported banks
- `POST /api/payment` - Initialize payment
- `GET /api/transaction/verify/:tx_ref` - Verify transaction
- `POST /api/transfer` - Process transfer
- `GET /api/health` - Health check

### Dashboard Routes
- `/` - Role selection (landing page)
- User Dashboard - View balance, transactions
- Admin Dashboard - Manage users, view analytics
- Super Admin Dashboard - Full system control

### Components Hierarchy
```
App
├── RoleSelection
├── UserDashboard
│   ├── Sidebar
│   ├── Header
│   ├── TransactionTable
│   └── PaymentModal
├── AdminDashboard
│   ├── Sidebar
│   ├── Header
│   ├── UserManagement
│   └── PaymentChart
└── SuperAdminDashboard
    ├── Sidebar
    ├── Header
    ├── PaymentChart
    └── SystemChart
```

---

## TROUBLESHOOTING

**Port Already in Use**
```bash
# Kill process on port 3000 and 3001
lsof -i :3000
kill -9 <PID>
```

**Missing Dependencies**
```bash
npm install
```

**Module Not Found**
- Check file paths are correct
- Ensure files are in the right directories
- Restart dev server

**API Not Working**
- Check `.env` has `CHAPA_SECRET_KEY`
- Verify server is running on port 3001
- Check Chapa API key is valid

---

## CUSTOMIZATION

### Change Colors
Edit `src/index.css` to modify CSS variables:
```css
:root {
  --primary: #6d28d9;      /* Change this */
  --secondary: #10b981;
  --danger: #ef4444;
  /* ... */
}
```

### Add More Users
Edit mock data in dashboard pages:
```typescript
const mockUsers = [
  { id: 1, name: 'User Name', email: 'email@example.com', ... },
  // Add more users here
]
```

### Customize Sidebar Menu
Modify `menuItems` in each dashboard page.

---

## NEXT STEPS

1. Test all three dashboards
2. Try the payment flow
3. Connect real database (optional)
4. Add authentication (optional)
5. Deploy to production

---

## SUPPORT

- Check `README.md` for full documentation
- Check `QUICKSTART.md` for quick start guide
- Check `IMPLEMENTATION_COMPLETE.md` for project overview

---

**Ready to go!** Start with `npm install` then `npm run dev`
