# Chapa Payment Dashboard

A comprehensive payment dashboard built with React + Vite, featuring role-based access control (User, Admin, Super Admin) and integrated with the Chapa payment API.

## Features

- **Role-Based Access Control**: Three different dashboard views
  - **User Dashboard**: View wallet balance, transactions, and make payments
  - **Admin Dashboard**: Manage users, view payment summaries, and bank information
  - **Super Admin Dashboard**: Full system access, admin management, and system overview

- **Chapa API Integration**:
  - Fetch list of supported banks
  - Initialize payments
  - Verify transactions
  - Process bank transfers

- **Real-time Data**: Dynamic charts and transaction tables
- **Responsive Design**: Mobile-friendly interface
- **Modern UI**: Clean and intuitive design with Tailwind CSS

## Project Structure

```
src/
├── pages/
│   ├── RoleSelection.tsx      # Role selection landing page
│   ├── UserDashboard.tsx      # User dashboard
│   ├── AdminDashboard.tsx     # Admin dashboard
│   └── SuperAdminDashboard.tsx # Super admin dashboard
├── components/
│   ├── Sidebar.tsx            # Navigation sidebar
│   ├── Header.tsx             # Top header with user info
│   ├── TransactionTable.tsx   # Transaction listing
│   ├── PaymentChart.tsx       # Donut chart for payments
│   ├── SystemChart.tsx        # Line chart for system overview
│   ├── UserManagement.tsx     # Users table
│   ├── PaymentModal.tsx       # Payment method selection
│   └── ...other components
├── styles/
│   ├── index.css              # Global styles
│   ├── RoleSelection.css      # Role selection page styles
│   ├── Dashboard.css          # Dashboard layout styles
│   └── ...component styles
├── App.tsx                    # Main app component
├── main.tsx                   # Entry point
└── server.js                  # Express server for API routes

public/                        # Static assets
index.html                    # HTML entry point
vite.config.ts               # Vite configuration
package.json                 # Dependencies
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- pnpm (recommended) or npm

### Installation

1. **Clone/Extract the project**
   ```bash
   cd chapa-payment-dashboard
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file and add your Chapa API credentials:
   ```env
   CHAPA_SECRET_KEY=your_actual_chapa_secret_key
   PORT=3001
   FRONTEND_URL=http://localhost:3000
   VITE_API_URL=http://localhost:3001
   ```

   **How to get your CHAPA_SECRET_KEY:**
   1. Visit [Chapa.co](https://chapa.co) and create an account
   2. Go to your dashboard Settings → API Keys
   3. Copy your Secret Key and paste it in `.env`

### Running the Application

**Development Mode** (Runs both Vite dev server and Express API server):
```bash
pnpm dev
```

This will start:
- Frontend on: `http://localhost:3000`
- Backend API on: `http://localhost:3001`

**Or run them separately:**

Terminal 1 - Frontend:
```bash
pnpm run dev
```

Terminal 2 - Backend API:
```bash
pnpm run server
```

### Building for Production

```bash
pnpm build
```

This creates an optimized build in the `dist/` folder.

## API Endpoints

### Available Endpoints (Backend runs on port 3001)

- **GET** `/api/banks` - Get list of supported banks
- **POST** `/api/payment` - Initialize a payment
- **GET** `/api/transaction/verify/:tx_ref` - Verify a transaction
- **POST** `/api/transfer` - Process a bank transfer
- **GET** `/api/health` - Health check

## Usage

### 1. Starting the Application
```bash
pnpm dev
```

### 2. Select a Role
Choose between:
- **User** - View balance and make payments
- **Admin** - Manage users and payments
- **Super Admin** - Full system access

### 3. Explore Dashboards
Each role has access to different features and data.

### 4. Making Payments
- Click "Make a Payment" or "Pay Now"
- Select a bank from the list
- Complete the payment process

## Technologies Used

- **Frontend**: React 19, Vite, Tailwind CSS
- **Backend**: Express.js, Node.js
- **API Integration**: Axios, Chapa Payment Gateway
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `CHAPA_SECRET_KEY` | Chapa API secret key | Required |
| `PORT` | Backend server port | 3001 |
| `FRONTEND_URL` | Frontend URL for callbacks | http://localhost:3000 |
| `VITE_API_URL` | API URL for frontend | http://localhost:3001 |

## Troubleshooting

### "Cannot find module" errors
```bash
pnpm install
```

### API Connection Issues
- Ensure the backend server is running on port 3001
- Check that `CHAPA_SECRET_KEY` is correctly set in `.env`
- Verify network connectivity to api.chapa.co

### CORS Errors
- Make sure the Express server is running
- Check that `FRONTEND_URL` is correctly configured

### Transaction Verification Fails
- Verify the `tx_ref` is correct
- Ensure your Chapa API key is active
- Check Chapa dashboard for transaction details

## Mock Data

The dashboards use mock data for demonstration. To connect real data:
1. Replace mock data in components with actual API calls
2. Add state management (Redux, Context API, or Zustand) if needed
3. Implement proper error handling and loading states

## Security Notes

- Never commit `.env` files with real API keys to version control
- Always use HTTPS in production
- Implement proper authentication before deploying
- Validate all inputs on both frontend and backend
- Use proper CORS configuration for production

## License

This project is provided as-is for educational and demonstration purposes.

## Support

For issues related to:
- **Chapa API**: Visit [Chapa Documentation](https://docs.chapa.co)
- **React/Vite**: Check [Vite Documentation](https://vitejs.dev)
- **Express.js**: Check [Express Documentation](https://expressjs.com)

## Next Steps

1. Add user authentication (Login/Register)
2. Connect to a database (PostgreSQL, MongoDB, etc.)
3. Implement real transaction history
4. Add email notifications
5. Implement analytics and reporting
6. Add admin analytics dashboard
7. Implement file upload for receipts
8. Add multi-language support
