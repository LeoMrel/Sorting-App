import { SetStateAction, useEffect, useState } from "react";
import { quickSort } from "./algorithms/QuickSort"
import { fillWithRandom } from "../utils/generateRandomArray";
import * as Slider from "@radix-ui/react-slider"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { bubbleSort } from "./algorithms/BubbleSort";

interface IProps {
    data: number[],
    setData: React.Dispatch<SetStateAction<number[]>>
};

interface IState {
    name: string,
    function: any
}

const Navbar: React.FC<IProps> = ({data, setData}) => {
    const [quantity, setQuantity] = useState(250);
    const [algorithm, setAlgorithm] = useState<IState>({name: "Quick Sort", function: quickSort});

    const sortingAlgorithms: {name: string, function: any}[] = [
        {name: "Bubble Sort", function: bubbleSort},
        {name: "Quick Sort", function: quickSort}
    ]

    useEffect(() => {
        setData(fillWithRandom(10, 730, quantity))
    }, [quantity, setData])

    return (
        <nav className="p-10 text-white bg-gray-700 
        place-items-center flex flex-col md:flex-row md:justify-between">
            <div className="flex flex-col md:flex-row gap-4">
                <button
                className="p-2 rounded-md font-semibold bg-red-400 hover:bg-red-500 
                transition-colors duration-300" 
                onClick={() => setData(fillWithRandom(10, 730, quantity))}>
                    Generate New Array
                </button>
                
                <Slider.Root 
                defaultValue={[250]}
                min={100}
                max={350} 
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
                    </Slider.Thumb>
                </Slider.Root>
            </div>
            <div className="flex gap-x-4">
                <div className="bg-gray-200 text-black  
                flex place-items-center rounded-md cursor-pointer">
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger className="font-semibold w-40">
                        <p>{algorithm.name} </p>
                    </DropdownMenu.Trigger>
                        <DropdownMenu.Content className="bg-white w-40 mt-1 rounded-md flex flex-col">
                           {sortingAlgorithms.map(element => {
                               return (
                                   <DropdownMenu.Item
                                   key={element.name}
                                   className="hover:bg-gray-300 cursor-pointer p-2 rounded-md"
                                   onClick={() => setAlgorithm({name: element.name, function: element.function})}>
                                       <span>{element.name}</span>
                                    </DropdownMenu.Item>
                               )
                           })}
                        </DropdownMenu.Content>
                </DropdownMenu.Root>
                </div>
                <button 
                className="p-2 px-6 mt-6 md:mt-0 rounded-md font-semibold
                bg-blue-400 hover:bg-blue-500 transition-colors duration-300"
                onClick={() => setData(algorithm.function(data))}>
                    Sort
                    </button>
            </div>
        </nav>
    )
}

export default Navbar