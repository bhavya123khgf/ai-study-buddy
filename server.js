import { ControlReferenceImage } from "@google/genai";
import { access } from "fs";
import http from "http";


import { GoogleGenAI } from "@google/genai";
const ai= new GoogleGenAI({});


const server = http.createServer((req,res)=>{


    //cors headers
    res.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:5500");//|all of this is
    res.setHeader("Access-Control-Allow-Methods","GET,POST,OPTIONS");//    |to remove the CORS
    res.setHeader("Access-Control-Allow-Headers","Content-Type");//        |error that comes bcoz
    if(req.method ==="OPTIONS"){res.writeHead(204);res.end();return;}//    |of front->back error


    if(req.url === "/api/hello" && req.method ==="GET")
    {
        res.writeHead(200,{"content-type":"application/json"});
        res.end(JSON.stringify({message: "hello from my api"}));
        return;
    }


    if(req.url === "/api/ask" && req.method ==="POST")
    {
        let body = "";
        req.on("data",chunk =>{body += chunk;});//collects the incoming data
        req.on("end", async () => {
            try
            {
                 const data = JSON.parse(body);//json string into a js object
                 const response = await ai.interactions.create({
                    model: "gemini-3.8-flash",
                    input: data.question
                 });
                 res.writeHead(200, {"content-type":"application/json"});
                 res.end(JSON.stringify({answer: response.output_text}));//json.stringify(js obj -> json)
            }
            catch(error){
                console.error(error);
                res.writeHead(500,{"content-type":"appliction/json"});
                res.end(JSON.stringify({error:"something went wrong"}));
            }
        });
        return;
    }


    res.writeHead(404,{"content-type":"text/plain"});
    res.end("page not found")//server only excepts /api/hello all other get 404 i.e page not found


});


server.listen(3000,()=>{
    console.log("server running on http://localhost:3000");
});
