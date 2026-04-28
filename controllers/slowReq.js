async function slowReq(req, res) {
  try {
    const delay = Math.floor(Math.random() * 4000) + 1000; 
    await new Promise(resolve => setTimeout(resolve, delay)); 
    return res.status(200).json({ message: `Slow request processed after ${delay}ms` });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
module.exports = { slowReq }