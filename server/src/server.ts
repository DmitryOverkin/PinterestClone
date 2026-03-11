import express from "express";
import cors from "cors";

import path from "path";

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

const clientPath = path.join(__dirname, "../../client/dist");

app.use(express.static(clientPath));

app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
