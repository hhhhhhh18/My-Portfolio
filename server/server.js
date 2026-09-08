const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { Resend } = require("resend");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const resend = new Resend(process.env.RESEND_API_KEY);

// -----------------------------
// Middleware
// -----------------------------

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  }),
);

app.use(express.json());

// -----------------------------
// Health Check
// -----------------------------

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio contact API is running",
  });
});

// -----------------------------
// Contact API
// -----------------------------

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields.",
      });
    }

    if (name.length > 100) {
      return res.status(400).json({
        success: false,
        message: "Name is too long.",
      });
    }

    if (email.length > 150) {
      return res.status(400).json({
        success: false,
        message: "Email is too long.",
      });
    }

    if (message.length > 5000) {
      return res.status(400).json({
        success: false,
        message: "Message is too long.",
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    // -----------------------------
    // Send email using Resend
    // -----------------------------

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: [process.env.TO_EMAIL],

      // When you reply to the email,
      // it will go directly to the visitor.
      replyTo: email,

      subject: `Portfolio Contact: ${name}`,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 650px;
          margin: 0 auto;
          padding: 30px;
          background: #f7f7f7;
        ">

          <div style="
            background: #050505;
            padding: 25px;
            border-radius: 12px 12px 0 0;
          ">
            <h2 style="
              margin: 0;
              color: #ffffff;
            ">
              New Portfolio Message
            </h2>
          </div>

          <div style="
            background: #ffffff;
            padding: 30px;
            border-radius: 0 0 12px 12px;
          ">

            <p>
              <strong>Name:</strong>
              ${escapeHtml(name)}
            </p>

            <p>
              <strong>Email:</strong>
              ${escapeHtml(email)}
            </p>

            <hr style="
              border: none;
              border-top: 1px solid #eeeeee;
              margin: 25px 0;
            " />

            <p>
              <strong>Message:</strong>
            </p>

            <p style="
              white-space: pre-wrap;
              line-height: 1.6;
              color: #444;
            ">
              ${escapeHtml(message)}
            </p>

          </div>

        </div>
      `,

      text: `
New Portfolio Message

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        message: "Unable to send your message right now.",
      });
    }

    console.log("Email sent:", data.id);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Server error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
});

// -----------------------------
// Escape HTML
// -----------------------------

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// -----------------------------
// Start server
// -----------------------------
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Contact API running on port ${PORT}`);
});
