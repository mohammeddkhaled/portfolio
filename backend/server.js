const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { google } = require("googleapis");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for your frontend URLs (add your deployed frontend URL here)
app.use(cors({
    origin: [
        'http://127.0.0.1:5500',
        'http://localhost:5500',
        'https://mohammedkhaled-portfolio.netlify.app', // your deployed frontend URL
        // Add your Render or other deployed frontend URLs here when deployed
    ],
}));

app.use(bodyParser.json());

// Load credentials from environment variables (for Render deployment)
const credentials = {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined,
};

if (!credentials.client_email || !credentials.private_key) {
    console.error("Google API credentials are missing. Set environment variables.");
    process.exit(1);
}

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
});

const spreadsheetId = "1rBmOXiL7mhNTagnX_0tFadkKFQ1ByHkrs9VTw0IvF-A";

app.post("/submit", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Please provide name, email and message." });
    }

    try {
        const client = await auth.getClient();
        const sheets = google.sheets({ version: "v4", auth: client });

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: "Sheet1!A1", // Change if your sheet/tab name is different
            valueInputOption: "USER_ENTERED",
            resource: {
                values: [[name, email, message, new Date().toLocaleString()]],
            },
        });

        res.status(200).json({ message: "Data stored successfully in Google Sheet" });
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({ error: "Failed to save data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
