# Chapa Payment Dashboard - Quick Start (2 Minutes)

## 🚀 Start Here!

### Step 1️⃣: Get API Key (1 minute)

1. Go to https://chapa.co and sign up (free)
2. Log in → Settings → API Keys
3. Copy your **Secret Key** (keep it private!)

### Step 2️⃣: Setup (30 seconds)

```bash
# Copy env template
cp .env.example .env

# Edit .env and paste your Secret Key:
# CHAPA_SECRET_KEY=your_key_here
```

### Step 3️⃣: Run (30 seconds)

```bash
pnpm install
pnpm dev
```

### Done! 🎉

Open: **http://localhost:3000**

---

## 🎯 What You'll See

1. **Landing Page** - Choose a role:
   - User 👤
   - Admin 👨‍💼
   - Super Admin 👑

2. **Dashboards**:
   - **User**: Check balance, make payments
   - **Admin**: Manage users, view payments
   - **Super Admin**: Full system control

---

## 🆘 Common Issues

### Port already in use?
```bash
# Use different port in vite.config.ts
```

### "CHAPA_SECRET_KEY not set"?
- Make sure `.env` file exists in root
- Verify it has your actual API key
- Restart dev server

### API calls failing?
- Check backend is running (port 3001)
- Verify API key is correct
- Check internet connection

---

## 📚 Full Docs

- **Setup Guide**: See `SETUP.md`
- **Full Docs**: See `README.md`
- **Project Summary**: See `PROJECT_SUMMARY.md`

---

## 🎨 What's Included

✅ 3 Dashboard Views  
✅ Bank Integration  
✅ Payment Forms  
✅ Analytics Charts  
✅ User Management  
✅ Responsive Design  
✅ Chapa API Ready  

---

## ⚡ Tech Stack

- React 19
- Vite
- Tailwind CSS
- Express.js
- Chapa Payment API

---

## 💡 Tips

- Click "Continue" to enter dashboard
- Try different roles to see all features
- Make Payment button opens bank selector
- All data is mock data (for demo)

---

**Ready?** → Run `pnpm dev` and enjoy! 🚀

Need help? Read `SETUP.md` for detailed instructions.
