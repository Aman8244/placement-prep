"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Roles = () => {
    const [role,setRole] = useState("frontend developer");
    const router = useRouter();

    const handleChange = (e)=>{
        console.log(e.target.value);
        setRole(e.target.value);
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        router.push(`/questions?role=${role}`)
    }
    return (
        <div>
            <div>
                <div className='flex justify-center items-center'>
                    <div className='text-3xl text-center font-bold my-10  sm:w-[40%]'>
                        One Stop Solution For Your Interview Preparation
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="role" className='text-gray-500'>
                            Select Role
                        </label>
                        <select defaultValue={role} id='role' onChange={handleChange} required className="select select-bordered w-full max-w-xs">
                            <option  disabled >Select a role</option>
                            <option>Frontend Developer</option>
                            <option>Backend Developer</option>
                            <option>Full Stack Developer</option>
                        </select>
                        <button type='submit' className='btn btn-outline w-full my-10'>
                                Start 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Roles