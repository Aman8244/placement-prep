import axios from 'axios';
import React, { useState } from 'react'
import parse from 'html-react-parser';

const QuestionsCard = ({ question }) => {
    const [textBox, setTextBox] = useState(false);
    const [answer, setAnswer] = useState("");
    const [feedBack, setFeedBack] = useState();
    const [loading, setLoading] = useState();

    const PostAnswer = async (e) => {
        e.preventDefault();
        setLoading(true);
        setFeedBack();
        const response = await axios.post("/api/post/answer", {
            question,
            answer
        })
        console.log(response.data);
        setFeedBack(response.data.feedback.candidates[0].content.parts[0].text);
        setLoading(false);
    }


    return (
        <div>
            <div className='my-6 mx-[5%] md:mx-[20%]'>
                <div className="card glass md:w-[100%]">
                    <div className="card-body">
                        <h2 className="card-title">{question}</h2>
                        <div className="card-actions justify-end">
                            {textBox ?
                                <button onClick={() => {
                                    setTextBox(prev => !prev)
                                    setFeedBack()
                                    setAnswer('')
                                    setLoading(false)
                                }} className="btn btn-outline text-white">Close</button>
                                :
                                <button onClick={() => {
                                    setTextBox(prev => !prev)
                                    setFeedBack()
                                    setAnswer('')
                                    setLoading(false)
                                }} className="btn btn-outline text-white">Answer</button>
                            }
                        </div>
                        {!loading && textBox && <div>
                            <div>
                                <form onSubmit={PostAnswer}>
                                    <textarea
                                        onChange={(e) => { setAnswer(e.target.value) }}
                                        value={answer}
                                        placeholder="Bio"
                                        className="textarea text-black textarea-bordered textarea-lg w-full max-w-xs">
                                    </textarea><br />
                                    <button type='submit' className="btn btn-outline text-white">submit</button>
                                </form>
                            </div>
                        </div>}
                        {!loading ? feedBack && textBox && <div>
                            <div className='text-gray-50 bg-slate-700 rounded-md p-10 '>
                                <div>
                                    <div className='text-wrap'>
                                        {parse(feedBack)}
                                    </div>
                                </div>
                            </div>
                        </div> : <div>
                            <div className='flex justify-center items-center'>
                                <div>
                                    <div className="min-h-[200px] my-10 loading loading-spinner text-neutral"></div>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default QuestionsCard