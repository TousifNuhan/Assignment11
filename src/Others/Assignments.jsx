import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import MappingAssignments from './MappingAssignments';

const Assignments = () => {

    const datas = useLoaderData()

    console.log(datas)

    const { loading, setLoading } = useContext(AuthContext)

    if (loading) {
        return <div className='h-screen mx-auto flex justify-center items-center'>
            <span className="loading loading-ring loading-xl "></span>
        </div>;
    }
    return (
        <div className='mt-[8%]'>
            <div className="w-11/12 flex flex-col items-center mx-auto my-3">
                <h1 className="text-[#1a1d27] font-bold text-xl md:text-3xl">Explore Assignments</h1>
                <p className="text-center text-[#03071299] font-semibold text-sm w-4/5 md:w-3/5 pt-2 md:mt-1 ">Browse through all peer-created assignments. You can filter by difficulty level and easily view, update, or delete assignments. Find tasks that challenge your skills and help you grow!</p>
            </div>
            <div className='grid grid-cols-3 gap-5 w-11/12 mx-auto mt-14'>
                {
                    datas.map(aData => <MappingAssignments key={aData._id} aData={aData}></MappingAssignments>)
                }
            </div>
        </div>
    );
};

export default Assignments;