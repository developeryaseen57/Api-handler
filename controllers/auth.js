const { credentials } = require('../helper/data');



async function login(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }
        const user = credentials.find(cred => cred.email === email && cred.password === password);
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        return res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
       return res.status(500).json({ error: error.message });
    }
}
module.exports = { login }