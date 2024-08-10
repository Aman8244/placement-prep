import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req){
    const data = await req.json();
    console.log(process.env.gemini_api.toString());
    const contentResult = await axios.post(`${process.env.gemini_api}`,{
          contents:[
            {
                parts:[
                    {
                        text:`generate most important question for interview as ${data.role}`
                    }
                ]
            }
          ]
    },{
        headers:{
            "content-type":"application/json"
        }
    })

    return NextResponse.json({
        content:contentResult.data
    })
}