import React, { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import MappingAssignments from './MappingAssignments';
import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAxiosCommon from '../Hooks/useAxiosCommon';

const Assignments = () => {

    // const { loading, setLoading } = useContext(AuthContext)
    const { loading, setLoading } = useAuth()
    const axiosCommon = useAxiosCommon()

    // const datas = useLoaderData()

    // console.log(datas)
    const { data: datas = [], refetch }
        = useQuery({
            queryFn: async() => {
                const { data } =await axiosCommon.get('/createAssignments')
                return data
            },
            queryKey: ['allAssignments']
        })

    const [filter, setFilter] = useState('')

    const handleFilter = (level) => {
        setFilter(level)
    }

    const filterDatas = filter ? datas.filter(item => item.DifficultyLevel === filter) : datas

    // if (loading) {
    //     return <div className='h-screen mx-auto flex justify-center items-center'>
    //         <span className="loading loading-ring loading-xl "></span>
    //     </div>;
    // }
    return (
        <div className='min-h-screen bg-base-100 text-base-content md:mt-[13%] lg:mt-[8%]'>
            <div className="w-11/12 flex flex-col items-center mx-auto my-3 ">
                <h1 className="text-base-content font-bold text-xl md:text-3xl">Explore Assignments</h1>
                <p className="text-center text-gray-500 font-semibold text-sm w-4/5  pt-2 md:mt-1 ">Browse through all peer-created assignments. You can filter by difficulty level and easily view, update, or delete assignments. Find tasks that challenge your skills and help you grow!</p>
            </div>
            <div className='w-11/12 mx-auto text-center mt-5'>

                <button className=" text-base font-semibold btn  btn-outline " popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}>
                    Filter By
                </button>

                <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                    popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }}>
                    <li onClick={() => handleFilter('')} className='text-sm font-semibold'><a>All</a></li>
                    <li onClick={() => handleFilter('easy')} className='text-sm font-semibold'><a>Easy</a></li>
                    <li onClick={() => handleFilter('medium')} className='text-sm font-semibold'><a>Medium</a></li>
                    <li onClick={() => handleFilter('hard')} className='text-sm font-semibold'><a>Hard</a></li>
                </ul>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-5 w-11/12 mx-auto mt-14'>
                {
                    filterDatas.map(aData => <MappingAssignments
                        key={aData._id}
                        aData={aData}
                        refetch={refetch}
                    ></MappingAssignments>)
                }
            </div>
        </div>
    );
};

export default Assignments;