import { Configuration, OpenAIApi } from "openai";
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const port = 3080;

const configuration = new Configuration({
    organization: "org-OPlHlzf67454hA5tlpfFphEk",
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);

//creating a fn that provides an api for the client to talk to OpenAI.

app.post('/',async (req,resp) =>{
    console.log("servwrrrrr");
    const {message}= req.body;
    console.log(" Server : ",message);
    const beforePrompt = ``;
    const afterPrompt = ``;
    const breakPoint = `\n\n'''\n\n`;
    let prompt = `${beforePrompt} ${breakPoint} ${message} ${breakPoint} ${afterPrompt}`;
    console.log(prompt);
    
    const openAiApiResponse = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt}`,
        max_tokens: 100,
        temperature: 0.5,
      });

    console.log("Response from API : ",openAiApiResponse.data.choices[0].text);

    resp.json({message:openAiApiResponse.data.choices[0].text});
})

app.listen(port,()=>{
    console.log("Listening to port : ",port);
})



