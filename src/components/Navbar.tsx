import { SetStateAction, useEffect, useState } from "react";
import { quickSort } from "./algorithms/QuickSort"
import { fillWithRandom } from "../utils/generateRandomArray";
import * as Slider from "@radix-ui/react-slider"

interface IProps {
    data: number[],
    setData: React.Dispatch<SetStateAction<number[]>>
};

const Navbar: React.FC<IProps> = ({data, setData}) => {
    const [quantity, setQuantity] = useState(210);


    useEffect(() => {
        setData(fillWithRandom(10, 730, quantity))
    }, [quantity, setData])
    return (
        <nav className="p-10 text-white bg-gray-700 
        place-items-center flex flex-col md:flex-row md:justify-between">
            <div className="flex flex-col md:flex-row gap-4">
                <button
                className="p-2 rounded-md bg-red-400 hover:bg-red-500 transition-colors duration-300" 
                onClick={() => setData(fillWithRandom(10, 730, quantity))}>
                    Generate New Array
                </button>
                
                <Slider.Root 
                defaultValue={[210]}
                min={50}
                max={300} 
                step={10}
                onValueChange={value => setQuantity(value[0])}
                className="w-72 flex relative place-items-center">
                    <Slider.Track
                    className="bg-black rounded-xl relative flex-grow h-2">
                        <Slider.Range
                        className="absolute bg-white rounded-xl h-full"/>
                    </Slider.Track>
                    <Slider.Thumb
                    className="block w-4 h-4 rounded-full bg-white shadow-2xl border-black border">
                        <div className={`my-5 -mx-2 w-8 flex 
                        place-content-center bg-white rounded-md font-semibold text-black`}>
                        <span>{quantity}</span>
                        </div>
                    </Slider.Thumb>
                </Slider.Root>
            </div>
            <div>
                <button 
                className="p-2 px-6 mt-6 md:mt-0 rounded-md bg-blue-400 hover:bg-blue-500 transition-colors duration-300"
                onClick={() => setData(quickSort(data))}>
                    Sort
                    </button>
            </div>
        </nav>
    )
}

export default Navbar