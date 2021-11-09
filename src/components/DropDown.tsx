import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import React from "react"

interface DropdownProps {
    algosMap: {name: string, function: any}[],
    algo: {
        name: string;
        function: (array: number[]) => (number | number[] | null)[][];
    },
    handleAlgo: (event: any) => void,
    handleSort: () => void,
    completed: boolean,
    sorting: boolean
}

const Dropdown: React.FC<DropdownProps> = ({
    algosMap,
    algo,
    handleAlgo,
    handleSort,
    completed,
    sorting
}) => {
    return (
        <div className="flex gap-x-4 mt-6 lg:mt-0">
                <div className="bg-gray-200 text-black 
                flex place-items-center rounded-md cursor-pointer">
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger
                    disabled={sorting}
                    className={`${sorting && 'cursor-not-allowed'} font-semibold w-40`}>
                        <p>{algo.name} ▾</p>
                    </DropdownMenu.Trigger>
                        <DropdownMenu.Content className="bg-white w-40 mt-1 rounded-md flex flex-col">
                           {algosMap.map(element => {
                               return (
                                   <DropdownMenu.Item
                                   key={element.name}
                                   className="hover:bg-gray-300 cursor-pointer p-2 rounded-md"
                                   onClick={() => handleAlgo({name: element.name, function: element.function})}>
                                       <span>{element.name}</span>
                                    </DropdownMenu.Item>
                               )
                           })}
                        </DropdownMenu.Content>
                </DropdownMenu.Root>
                </div>
                <button 
                className={`p-2 px-6  rounded-md font-semibold
                bg-blue-400 hover:bg-blue-500 transition-colors duration-300
                ${sorting && 'cursor-not-allowed'}`}
                onClick={handleSort}
                disabled={sorting || completed}>
                    Sort
                    </button>
            </div>
    )
}

export default Dropdown