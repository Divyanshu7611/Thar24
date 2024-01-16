export const PaymentQRURI = (amount: number, tharID: string) =>
  `upi://pay?pa=9982252205m@pnb&pn=RTU THAR&am=${amount}&cu=INR&tn=THAR-Payment-of-${tharID}&`
