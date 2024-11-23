import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from "react-hook-form";
import './dashboard.css'

const Dashboard = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // const { data: categories, isLoading } = useQuery({
    //     queryKey: ['category'],
    //     queryFn: () => fetch('http://localhost:5000/category')
    //         .then(res => res.json())
    // })
    // if (isLoading) {
    //     return <h2>Loading....</h2>
    // }

    const onSubmit = data => {
        const technologyArray = data.technologyName.split(',')
        const bulletArray = data.bulletPoint.split(',')
        const projectInfo = {
            projectName: data.projectName,
            projectImg: data.picture,
            category: data.category,
            usesTechnology: technologyArray,
            liveLink: data.liveLink,
            clientLink: data.clientLink,
            serverLink: data.serverLink,
            projectDescription: data.description,
            projectBullet: bulletArray
        }
        fetch('http://localhost:5000/myProject', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(projectInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Your project is added website. Thank you!')
                }
            })
        console.log(projectInfo)
    }

    return (
        <div className='mt-16 max-w-[1440px] mx-auto'>
            <h2 className='text-3xl font-semibold text-white mt-20 mb-8'>Add Your Projects</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-between gap-10'>
                    {/* Project Name */}
                    <div className="form-control mb-5 w-full">
                        <label className="label  font-semibold">
                            <span className="label-text text-white text-xl mb-2">Project Name</span>
                        </label>
                        <input {...register("projectName", { required: true })} placeholder="project-name" className="input input-bordered text-white italic border-white focus:border-primary text-xl" />
                    </div>
                    {/* Project Image URL */}
                    <div className="form-control mb-5 w-full">
                        <label className="label  font-semibold">
                            <span className="label-text text-white text-xl mb-2">Picture URL:</span>
                        </label>
                        <input {...register("picture", { required: true })} placeholder="https://i.ibb.co/HYXH8kY/YOURIMAGE" className="input input-bordered text-white italic border-white focus:border-primary text-xl" />
                    </div>
                    {/* Category */}
                    <div className="form-control mb-5 w-full">
                        <label className="label  font-semibold">
                            <span className="label-text text-white text-xl mb-2">Select Category</span>
                        </label>

                        <select {...register("category")} className="select w-full text-white italic border-white focus:border-primary">
                            {/* {
                                categories.map(cat => <option key={cat._id} value={cat.category}>{cat.category}</option>)
                            } */}
                        </select>
                    </div>
                </div>
                {/* Uses Technology */}
                <div className="form-control mb-5">
                    <label className="label  font-semibold">
                        <span className="label-text text-white text-xl mb-2">Technology Name</span>
                    </label>
                    <input {...register("technologyName", { required: true })} placeholder="use-comma-after-one-technology" className="input input-bordered text-white italic border-white focus:border-primary text-xl" />
                </div>
                <div className='flex justify-between gap-5'>
                    {/* Website live link */}
                    <div className="form-control mb-5 w-full">
                        <label className="label  font-semibold">
                            <span className="label-text text-white text-xl mb-2">Live Link</span>
                        </label>
                        <input {...register("liveLink", { required: true })} placeholder="live-link" className="input input-bordered text-white italic border-white focus:border-primary text-xl" />
                    </div>
                    {/* Website Github Client */}
                    <div className="form-control mb-5 w-full">
                        <label className="label  font-semibold">
                            <span className="label-text text-white text-xl mb-2">Github Client Link</span>
                        </label>
                        <input {...register("clientLink", { required: true })} placeholder="client-link" className="input input-bordered text-white italic border-white focus:border-primary text-xl" />
                    </div>
                    {/* Website github Server */}
                    <div className="form-control mb-5 w-full">
                        <label className="label  font-semibold">
                            <span className="label-text text-white text-xl mb-2">Github Server Link</span>
                        </label>
                        <input {...register("serverLink", { required: true })} placeholder="server-link" className="input input-bordered text-white italic border-white focus:border-primary text-xl" />
                    </div>
                </div>
                {/* Project Description */}
                <div className="form-control mb-5">
                    <label className="label  font-semibold">
                        <span className="label-text text-white text-xl mb-2">Project Description</span>
                    </label>
                    <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-24 text-white italic border-white focus:border-primary text-xl" placeholder="description"></textarea>
                </div>
                {/* Project Bullet Point */}
                <div className="form-control mb-5">
                    <label className="label  font-semibold">
                        <span className="label-text text-white text-xl mb-2">Project Bullet Point</span>
                    </label>
                    <input {...register("bulletPoint", { required: true })} placeholder="use-comma-after-one-bullet" className="input input-bordered text-white italic border-white focus:border-primary text-xl" />
                </div>


                {errors.projectName && <span>This field is required</span>}

                <button>
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                            </svg>
                        </div>
                    </div>
                    <span>Submit</span>
                </button>
            </form>
        </div>
    );
};

export default Dashboard;