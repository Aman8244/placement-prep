import axios from "axios";
import { NextResponse } from "next/server";

export async function POST (req){
    const data = await req.json();
    const {answer,question} = data;
    const geminiReq = await axios.post(`${process.env.gemini_api}`,{
        contents: [
            {
                parts: [
                    {
                        text: `Here is the question - ${question} and here is the answer submitted by user - ${answer}`,
                    },
                    {
                        text: `compare user answer with the correct answer of the questions and give correction for the user answer with example if available. `,
                    },
                    {
                        text:`stricly use html tags in results not annotation`
                    }
                ]
            }
        ]
    },{
        headers: {
            "content-type": "application/json"
        }
    })
    return NextResponse.json({
        feedback:geminiReq.data
    })
}