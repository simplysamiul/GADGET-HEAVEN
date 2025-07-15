import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";


const Gadgets = () => {
    const [gadgets, setGadegets] = useState([]);
    useEffect(() => {
        fetch("/gadget.json")
        .then(res => res.json())
        .then(data => setGadegets(data))
    },[]);
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="font-bold text-3xl md:text-4xl text-center mt-12 mb-6">Explore Cutting-Edge Gadgets</h1>
            <div>

            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {
                    gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget} />)
                }
            </div>
        </div>
    );
};

export default Gadgets;