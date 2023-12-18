const express = require("express");
const OpenAI = require("openai");
require('dotenv').config();
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors())

const port = process.env.PORT || 6969;
apiKey: process.env.OPENAI_API_KEY
const openai = new OpenAI();
// POST request endpoint

app.post("/ask", async (req, res) => {
    const prompt = req.body.prompt;
    console.log(prompt);
    try {
      if (prompt == null) {
        throw new Error("Uh oh, no prompt was provided");
      }
      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": prompt}],
        max_tokens: 60,
      });
      const completion = chatCompletion.choices[0].message;
      return res.status(200).json({
        success: true,
        message: completion,
      });
    } catch (error) {
      console.log(error.message);
    }
});

app.listen(port, () => console.log(`Server is running on port ${port}!!`));
