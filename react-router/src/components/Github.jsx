import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState(null); 

    // useEffect(() => {
    //     fetch("https://api.github.com/users/gufran0")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setData(data);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching data:", error);
    //         });
    // }, []);

    return (
        <>
            {data ? (
                <>
                    <div className='text-center m-4 bg-gray-600 text-white text-3xl'>{data.followers}</div>
                    <img src={data.avatar_url} width={300} alt='hehe' />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};


export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
