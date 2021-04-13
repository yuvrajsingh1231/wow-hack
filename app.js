const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.json({
    login: "ok",
    status: "under construction",
    contact: {
      email: "singhyuvraj2k@gmail.com",
    },
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
