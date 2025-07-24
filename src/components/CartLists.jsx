import { useCart } from "../context/CartContext";
import ThemeBtn from "./ThemeBtn";
import Logo from "../assets/images/logo.svg"
import { useEffect, useState } from "react";

const CartLists = () => {
    const {
        carts,
        allCarts,
        activeCarts,
        inactiveCarts,
        remove,
        toggleButton
    } = useCart();
    const [displayItem, setDisplayItem] = useState([]);

    useEffect(() => {
        setDisplayItem(carts)
    }, [carts]);

    const all = () => setDisplayItem(carts);
    const activeItems = () => setDisplayItem(activeCarts()); // call once 
    const inactive = () => setDisplayItem(inactiveCarts());


    const tabs = [
        { label: "All", onClick: all },
        { label: "Active", onClick: activeItems },
        { label: "Inactive", onClick: inactive },
    ];
    return (
        <>
            <div className="lg:px-28 pt-10 w-full">
                <div className="flex justify-between bg-gray-800 rounded-3xl p-5">
                    <img src={Logo} alt="logo" className="h-10" />
                    <ThemeBtn />
                </div>
            </div>
            {/* button session  */}
            <div className="px-28 pt-10">
                <div className="flex flex-col lg:justify-between lg:flex-row md:justify-center md:flex">
                    <h1 className="text-3xl font-bold mt-2">Extensions List</h1>
                    <div className="lg:space-x-5 space-x-2">
                        {tabs.map((tab) => <button key={tab.label} onClick={tab.onClick}
                            className="px-4 py-2 bg-gray-800 rounded-4xl hover:bg-gray-500 text-white cursor-pointer mt-2">
                            {tab.label}
                        </button>)}
                    </div>
                </div>
            </div>
            {/* carts  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center lg:px-28 py-10 min-h-20">
                {displayItem.map((item) => (
                    <div
                        key={item.id}
                        className="bg-gray-800 rounded-2xl w-full h-[200px] py-5 text-white px-10"
                    >
                        <img src={item.logo} alt={item.name} className="h-10" />
                        <h1 className="text-lg font-semibold">{item.name}</h1>
                        <p className="text-sm mt-2 ">{item.description}</p>
                        <div className="flex justify-between py-4">
                            <button
                                onClick={() => remove(item.id)}
                                className="px-4 py-2 bg-gray-700 rounded-3xl hover:bg-gray-600">Remove</button>
                            {/* Hidden checkbox */}
                            <label className="relative inline-block w-[60px] h-[34px]">
                                <input
                                    type="checkbox"
                                    className="opacity-0 w-0 h-0 peer hidden"
                                    checked={item.isActive}
                                    onChange={() => toggleButton(item.id)}
                                />
                                <span
                                    className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0
                                            bg-gray-300 peer-checked:bg-red-500 transition duration-300 rounded-full`}>

                                </span>

                                <span className={`absolute content-[''] h-[26px] w-[26px] left-[4px] bottom-[4px] bg-white transition duration-300 rounded-full peer-checked:translate-x-[26px]`}
                                ></span>
                            </label>

                        </div>
                    </div>
                ))}
            </div>

        </>
    );
};

export default CartLists