const users = [
  { id: 1, name: "Ali Hassan", email: "ali@test.com", role: "admin" },
  { id: 2, name: "Sara Khan", email: "sara@test.com", role: "user" },
  { id: 3, name: "Usman Tariq", email: "usman@test.com", role: "user" }
]

const orders = [
  { id: 101, userId: 1, product: "Laptop", amount: 85000, status: "delivered" },
  { id: 102, userId: 2, product: "Mouse", amount: 1500, status: "pending" },
  { id: 103, userId: 3, product: "Keyboard", amount: 3500, status: "cancelled" }
]

const credentials = [
  { email: "ali@test.com", password: "admin123" },
  { email: "sara@test.com", password: "sara456" }
]

module.exports = { users, orders, credentials }