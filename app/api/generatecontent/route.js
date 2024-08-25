import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
    const data = await req.json();
    console.log(process.env.gemini_api.toString());
    const contentResult = await axios.post(`${process.env.gemini_api}`, {
        contents: [
            {
                parts: [
                    {
                        text: `You are an expert in creating interview questions. Generate a list of interview questions for the role of ${data.role}. without any headings and markdowns`,
                    },
                    {
                        text: `Please provide a list of interview questions for the role of ${data.role}. without any headings and markdowns`,
                    },
                ]
            }
        ]
    }, {
        headers: {
            "content-type": "application/json"
        }
    })
    const questions = contentResult.data.candidates[0].content.parts[0].text
      .split("\n")
      .filter((q) => q.trim() !== "");
    //   console.log("\n\n",questions,"\n\n")

    return NextResponse.json({
        content: questions
    })
}