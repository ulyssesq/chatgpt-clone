const OpenAI = require('openai');

class OpenAIAPI {
    constructor() {
        this.openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }

    async askQuestion(question) {
        const chatCompletion = await this.openai.chat.completions.create({
            messages: [{ role: 'user', content: `${question}` }],
            model: 'gpt-3.5-turbo',
        });

        return chatCompletion.choices[0].message.content;
    }
}

module.exports = OpenAIAPI;