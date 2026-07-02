# Chapa Payment Dashboard - Setup Guide

## Getting Started

This complete Chapa Payment Dashboard has been set up for you. Follow these steps to run it locally.

## Step 1: Get Your Chapa API Key

1. Visit [Chapa.co](https://chapa.co) and create a free account
2. Log in to your account
3. Go to **Settings** → **API Keys** in the left sidebar
4. You'll see two keys:
   - **Public Key** - Use for frontend (public)
   - **Secret Key** - Use for backend (KEEP PRIVATE ✓)
5. Copy your **Secret Key**

## Step 2: Configure Environment Variables

1. Create a `.env` file in the project root:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and add your Chapa Secret Key:
   ```env
   CHAPA_SECRET_KEY=your_chapa_secret_key_here
   PORT=3001
   FRONTEND_URL=http://localhost:3000
   VITE_API_URL=http://localhost:3001
   ```

   Replace `your_chapa_secret_key_here` with the Secret Key you copied from Chapa.

## Step 3: Install Dependencies

```bash
pnpm install
# or
npm install
```

## Step 4: Run the Application

```bash
pnpm dev
```

This command starts both:
- **Frontend** (React + Vite) on `http://localhost:3000`
- **Backend** (Express.js) on `http://localhost:3001`

## Step 5: Access the Dashboard

Open your browser and go to:
```
http://localhost:3000
```

## Demo Credentials

The dashboard includes three roles to explore:

### 1. **User Dashboard**
- View wallet balance
- Check transaction history
- Make payments
- Select payment method from supported banks

### 2. **Admin Dashboard**
- Manage users
- View payment summaries
- Monitor active users
- Track total payments and transactions

### 3. **Super Admin Dashboard**
- Full system access
- Manage admins
- View system overview and analytics
- Process bank transfers
- Complete system control

## Features Included

✅ Role-based authentication (User, Admin, Super Admin)  
✅ Responsive design (mobile, tablet, desktop)  
✅ Real-time data visualization with charts  
✅ Payment method selection  
✅ Bank listing integration  
✅ Transaction history  
✅ User management  
✅ System analytics dashboard  

## Project Files

```
chapa-payment-dashboard/
├── src/
│   ├── pages/              # Dashboard pages
│   ├── components/         # Reusable components
│   ├── styles/            # CSS stylesheets
│   ├── App.tsx            # Main app
│   ├── main.tsx           # Entry point
│   └── server.js          # Express API server
├── public/                # Static assets
├── index.html             # HTML template
├── vite.config.ts         # Vite configuration
├── package.json           # Dependencies
├── .env                   # Environment variables
├── .env.example           # Example env file
├── README.md              # Full documentation
└── SETUP.md              # This file
```

## Next Steps

### To Customize:

1. **Change Colors**: Update CSS variables in `src/styles/Dashboard.css`
2. **Modify Data**: Update mock data in dashboard components
3. **Add Authentication**: Implement login/registration system
4. **Connect Database**: Replace mock data with real database queries
5. **Deploy**: Use Vercel, Netlify, or any hosting platform

### To Test Payments:

1. Log in as User role
2. Go to "Make a Payment"
3. Select a bank from the list
4. The Chapa checkout page will appear
5. Use Chapa's test card details to complete payment

### Common Issues & Solutions:

#### "Cannot find module 'express'" or similar
```bash
pnpm install
```

#### Port 3000 or 3001 already in use
Change ports in `vite.config.ts` and `.env`

#### "CHAPA_SECRET_KEY is not set" error
- Make sure `.env` file exists
- Verify you've added your actual Chapa secret key
- Restart the dev server after updating `.env`

#### Payment API not responding
- Verify internet connection
- Check your Chapa API key is correct
- Ensure backend server is running on port 3001

## API Endpoints

The backend server provides these endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/banks` | List supported banks |
| POST | `/api/payment` | Initialize payment |
| GET | `/api/transaction/verify/:tx_ref` | Verify transaction |
| POST | `/api/transfer` | Process bank transfer |
| GET | `/api/health` | Health check |

## Folder Structure Explanation

```
src/
├── pages/
│   └── Contains main dashboard pages for each role
├── components/
│   ├── Sidebar.tsx          # Navigation menu
│   ├── Header.tsx           # Top header bar
│   ├── TransactionTable.tsx # Transactions table
│   ├── PaymentChart.tsx     # Donut chart
│   ├── SystemChart.tsx      # Line chart
│   ├── UserManagement.tsx   # Users table
│   └── PaymentModal.tsx     # Bank selection modal
├── styles/
│   └── CSS for all pages and components
└── server.js
    └── Express server with Chapa API integration
```

## Technology Stack

- **Frontend**: React 19, Vite, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Icons**: Lucide React (20+ icons)
- **API Client**: Axios
- **Payment**: Chapa Payment Gateway
- **Styling**: CSS3 + Tailwind

## Development Tips

### Hot Reload
- Changes to React components automatically reload in browser
- Changes to CSS automatically refresh
- Backend changes require manual restart

### Debugging
- Use browser DevTools (F12) for frontend debugging
- Check terminal for backend logs
- Use `console.log()` for debugging

### Testing Payments
- Chapa provides test cards for development
- Check Chapa documentation for test card details
- Transactions appear in your Chapa dashboard

## Security Checklist

Before deploying to production:

- [ ] Never commit `.env` file to git
- [ ] Use strong, unique API keys
- [ ] Implement proper user authentication
- [ ] Add input validation on backend
- [ ] Use HTTPS for all connections
- [ ] Implement rate limiting
- [ ] Add proper error handling
- [ ] Use environment-specific configurations

## Need Help?

- **Chapa Support**: [docs.chapa.co](https://docs.chapa.co)
- **React Docs**: [react.dev](https://react.dev)
- **Vite Docs**: [vitejs.dev](https://vitejs.dev)
- **Express Docs**: [expressjs.com](https://expressjs.com)

## License

This project is provided as a demonstration and educational tool for the Chapa payment system.

---

**Ready to go?** Run `pnpm dev` and open `http://localhost:3000` 🚀
