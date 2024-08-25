"use client"
import Navbar from '@/components/Navbar'
import QuestionsCard from '@/components/QuestionsCard'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Questions = () => {
  const searchparams = useSearchParams();
  const role = searchparams.get("role");
  const [questions, setQuestions] = useState();

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.post("/api/generatecontent", {
        role: role
      });
      setQuestions(response.data.content)
    }
    fetchQuestions();
  }, []);

  return (
    <main>
      <Navbar />
      <div>
        <div className='flex justify-center items-center my-8'>
          <div className='font-bold md:text-2xl text-gray-500'>
            Important question on {role}
          </div>
        </div>
        {questions ?
          <div className='p-0'>
            <div className='p-0 m-0'>
              {questions.map((el, key) => {
                return <div key={key}>
                  <div>
                    <QuestionsCard question={el} />
                  </div>
                </div>
              })}
            </div>
          </div>
          :
          <div>
            <div className='flex justify-center items-center'>
              <div>
                <div className="min-h-[200px] my-10 loading loading-spinner text-neutral"></div>
              </div>
            </div>
          </div>}
      </div>
    </main>
  )
}

export default Questions