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
