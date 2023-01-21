import { Configuration, OpenAIApi } from "openai";
const express = require('express');

const app=express();
const port = 3001;

const configuration = new Configuration({
    organization: "org-OPlHlzf67454hA5tlpfFphEk",
    apiKey: "get from your openAI Acc dashboard",
});

const openai = new OpenAIApi(configuration);

//creating a fn that provides an api for the client to talk to OpenAI.

app.post('/',async (req,resp) =>{
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
      });
    
    console.log("Response from API : ",response.data.choices[0].text);
})

app.listen(port,()=>{
    console.log("Listening to port : ",port);
})



