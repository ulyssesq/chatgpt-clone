const app = require("./app");
const OpenAIAPI = require('./config/openai');
const port = process.env.PORT || 3000;

app.listen(port, async () => {
    console.log(`Server listening on port ${port}`);
})