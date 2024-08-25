"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Roles = () => {
    const [role, setRole] = useState("Web Developer (MERN)");
    const router = useRouter();
    const rolesNames = [
        "Web Developer (MERN)",
        "Web Developer (MEAN)",
        "Web Developer (LAMP)",
        "Frontend Developer (React.js)",
        "Frontend Developer (Vue.js)",
        "Frontend Developer (Angular)",
        "Backend Developer (Node.js)",
        "Backend Developer (Django)",
        "Backend Developer (Ruby on Rails)",
        "Full Stack Developer (MERN)",
        "Full Stack Developer (MEAN)",
        "Mobile Developer (React Native)",
        "Mobile Developer (Flutter)",
        "Mobile Developer (Kotlin/Android)",
        "Mobile Developer (Swift/iOS)",
        "DevOps Engineer (AWS)",
        "DevOps Engineer (Azure)",
        "Data Scientist (Python)",
        "Data Engineer (Spark)",
        "AI Engineer (TensorFlow)",
        "Cloud Engineer (Google Cloud)",
        "Cybersecurity Specialist",
        "System Administrator (Linux)",
        "Database Administrator (MySQL)",
        "Network Engineer",
        "UI/UX Designer",
        "Game Developer (Unity)"
    ];
    const handleChange = (e) => {
        console.log(e.target.value);
        setRole(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/questions?role=${role}`)
    }
    return (
        <div>
            <div>
                <div className='flex justify-center items-center'>
                    <div className='text-3xl text-[#EEEEEE] text-center font-bold my-10  sm:w-[40%]'>
                        One Stop Solution For Your Interview Preparation

                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="role" className='text-gray-500'>
                            Select Role
                        </label><br />
                        <select defaultValue={role} id='role' onChange={handleChange} required className="select text-black select-bordered w-full max-w-xs">
                            <option disabled >Select a role</option>
                            {rolesNames.map((el,key)=><option key={key}>{el}</option>)}
                        </select>
                        <button type='submit' className='btn text-white btn-outline w-full my-10'>
                            Start
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Roles