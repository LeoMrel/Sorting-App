import { useEffect, useState } from "react";
import Sliders from "./Sliders";
import Dropdown from "./DropDown";
import { algorithmsMap } from "./algorithms/AlgorithmsMap";



interface IProps {
    generateRandomArray: any,
	handleLength: (event: any) => void,
    handleSpeed: (event: any) => void,
	handleAlgo: (event: any) => void,
    handleSort: () => void,
	sorting: boolean,
	completed: boolean,
	len: number,
	speed: number,
	algo: {
        name: string;
        function: (array: number[]) => (number | number[] | null)[][];
    }
};

const Navbar: React.FC<IProps> = ({
    generateRandomArray,
    handleLength,
    handleSpeed,
    handleAlgo,
    handleSort,
    sorting,
    completed,
    len,
    speed,
    algo
}) => {
    const [quantity, setQuantity] = useState<number>(50)

    useEffect(() => {
        handleLength(quantity)
    }, [quantity, handleLength])

    const handleQuantity = (x:number) => {
        setQuantity(x)
    }

    return (
        <nav className="p-10 text-white bg-gray-700 
        place-items-center flex flex-col lg:flex-row md:justify-between">
            <Sliders 
                generateRandomArray={generateRandomArray}
                handleSpeed={handleSpeed}
                handleQuantity={handleQuantity}
                quantity={quantity}
                sorting={sorting}
                speed={speed}
            />
            <Dropdown 
                algosMap={algorithmsMap}
                algo={algo}
                handleAlgo={handleAlgo}
                handleSort={handleSort}
                completed={completed}
                sorting={sorting}
            />
        </nav>
    )
}

export default Navbar