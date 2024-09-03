const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3010;
const cors=require("cors")
app.use(cors("*"))
// Middleware to parse JSON bodies
app.use(express.json());

// Route to get all prepaid vouchers
app.get('/vouchers', async (req, res) => {
  try {
    const vouchers = await prisma.prepaidVouchers.findMany();
    res.status(200).json(vouchers);
  } catch (error) {
    console.error('Error fetching vouchers:', error);
    res.status(500).json({ error: 'An error occurred while fetching vouchers' });
  }
});

// Route to create a new prepaid voucher
app.post('/vouchers', async (req, res) => {
  const { voucherCode, amount, expirationDate, status } = req.body;

  try {
    const newVoucher = await prisma.prepaidVouchers.create({
      data: {
        voucherCode,
        amount,
        expirationDate: new Date(expirationDate),
        status,
      },
    });
    res.status(201).json(newVoucher);
  } catch (error) {
    console.error('Error creating voucher:', error);
    res.status(500).json({ error: 'An error occurred while creating the voucher' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
