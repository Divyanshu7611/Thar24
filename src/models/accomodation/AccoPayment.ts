// import mongoose from 'mongoose'

// const accopaymentSchema = new mongoose.Schema({
//   tharID: String,
//   txnID: String,
//   paymentAmount: String,
//   file: String,
// })

// const AccoPayment = mongoose.models.payments || mongoose.model('accopayments', accopaymentSchema)
// export default AccoPayment
import mongoose from 'mongoose'

const accopaymentSchema = new mongoose.Schema({
  tharID: String,
  txnID: String,
  paymentAmount: String,
  file: String,
})

let AccoPayment

try {
  AccoPayment = mongoose.model('accopayments')
} catch {
  AccoPayment = mongoose.model('accopayments', accopaymentSchema)
}

export default AccoPayment
