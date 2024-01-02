const app = require("./app");
const OpenAIAPI = require('./config/openai');
//const openai = require('./config/openai');
const port = process.env.PORT || 3000;

app.listen(port, async () => {
    console.log(`Server listening on port ${port}`);

    
    const question = 'qual é o nome do primeiro presidente dos estados unidos?';

    const openAIAPI = new OpenAIAPI();
    //const answer = await askQuestion(question);
    //const openaiAPI = openai.configuration();
    //const openAiQuestion = openai.askQuestion(question);
    //const answer = await openaiAPI.completions.create(openAiQuestion);
    const answer = await openAIAPI.askQuestion(question);
    console.log(answer);
    //const answer = askQuestion(question);
    //console.log(answer.choices[0].text);
     
})