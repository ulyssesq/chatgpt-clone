const OpenAI = require("openai");

class openai {
    static configuration() {
        return new OpenAI({
          apiKey: process.env.OPENAI_API_KEY
        });
    }

    static askQuestion(prompt) {
        return {
            model: "davinci-002",
            prompt: `${prompt}`,
            temperature: 0,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }
    }

}

module.exports = openai;