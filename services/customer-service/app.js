const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.json({
        service: "customer-service",
        status: "running"
    });
});

app.listen(PORT, () => {
    console.log(`Customer Service running on port ${PORT}`);
});