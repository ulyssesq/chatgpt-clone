const OpenAIAPI = require('../config/openai');
const InputPrompt = require('../models/input-prompt');

module.exports = {
    async sendText(req, res) {
       console.log("ok")
        const inputModel = new InputPrompt(req.body);
        try {
            const openAIAPI = new OpenAIAPI();    
            const answer = await openAIAPI.askQuestion(inputModel.prompt);
            return res.status(200).json({
                success: true,
                data: answer
            })
        }
        catch (error) {
            return res.status(400).json({
                success: false,
                error: error.response ? error.reponse.data : "there was an issue on the server"
            });
        }
    }
}