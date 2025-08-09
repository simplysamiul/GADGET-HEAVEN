import { useLoaderData } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';



const Statistics = () => {

    const data = useLoaderData();
    console.log(data)
    return (
        <div className='w-11/12 mx-auto my-20'>
            <div className="flex items-center justify-center">
                <LineChart width={800} height={300} data={data}>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <XAxis dataKey="category" />
                    <YAxis dataKey="price" />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;