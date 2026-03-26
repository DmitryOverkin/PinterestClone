import express from "express";
import cors from "cors";
const jwt = require("jsonwebtoken");

import path from "path";

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

const SECRET = "SUPER_SECRET_KEY";

const users = [
  {
    id: 1,
    email: "test@mail.com",
    password: "123456",
  },
];

const clientPath = path.join(__dirname, "../../client/dist");

app.use(express.static(clientPath));

app.post("/api/auth", (req, res) => {
  const {email, password} = req.body;

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign({id: user.id, email: user.email}, SECRET, {
    expiresIn: "1h",
  });

  res.json({
    user: {
      id: user.id,
      email: user.email,
    },
    token,
  });
});

app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
