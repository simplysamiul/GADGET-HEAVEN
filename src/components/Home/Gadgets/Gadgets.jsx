import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";
import './Gadgets.css';
import Button from "../../../shared/Button/Button";


const Gadgets = () => {
    const [gadgets, setGadegets] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        fetch("/gadget.json")
            .then(res => res.json())
            .then(data => {
                setGadegets(data)
                setFilteredData(data)
            })
    }, []);
    // filter option
    const buttons = ["All Products", "Bluetooth", "Headphone", "Smartphone", "Console", "Power Bank", "Earbuds"];
    // handel fitler section
    const handelFilterBtn = (filter) => {
        if (filter === "All Products") {
            setFilteredData(gadgets)
        } else {
            const filteredItem = gadgets.filter(item => item.product_title.includes(filter));
            setFilteredData(filteredItem)
        }
    }
    return (
        <div className="">
            <h1 className="font-bold text-3xl md:text-4xl text-center mt-12 mb-6">Explore Cutting-Edge Gadgets</h1>
            <div className="md:sticky md:top-0 md:z-10 md:bg-white/30 md:backdrop-blur-sm pb-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 lg:grid-cols-6 w-11/12 mx-auto">
                    {
                        buttons.map((button, idx) => <Button
                            onClick={() => handelFilterBtn(button)}
                            key={idx}>
                            {button}
                        </Button>)
                    }
                </div>
            </div>
            <div className="w-11/12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                    {
                        filteredData.map(gadget => <Gadget key={gadget.product_id} gadget={gadget} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gadgets;