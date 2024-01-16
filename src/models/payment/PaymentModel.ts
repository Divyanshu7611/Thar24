import mongoose from 'mongoose'

const paymentSchema = new mongoose.Schema({
  tharID: String,
  txnID: String,
  paymentAmount: String,
  file: String,
})

const PaymentModel = mongoose.models.payments || mongoose.model('payments', paymentSchema)
export default PaymentModel
