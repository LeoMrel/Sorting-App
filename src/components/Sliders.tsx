import * as Slider from "@radix-ui/react-slider"

interface SliderProps {
    generateRandomArray: any,
    handleSpeed: (event: any) => void,
    handleQuantity: (x: number) => void,
    quantity: number,
	sorting: boolean,
	speed: number,
}


const Sliders: React.FC<SliderProps> = (
    {generateRandomArray,
    handleSpeed,
    handleQuantity,
    quantity,
    sorting,
    speed
}
) => {
    return (
        <div className="flex flex-col lg:flex-row gap-4">
                <button
                className={`p-2 rounded-md font-semibold bg-red-400 hover:bg-red-500 
                transition-colors duration-300 ${sorting && 'cursor-not-allowed'}`}
                onClick={generateRandomArray}
                disabled={sorting}>
                    Generate New Array
                </button>
                <div className="flex flex-col">
                <label className="font-semibold">Length({quantity})</label>
                <Slider.Root 
                defaultValue={[quantity]}
                min={10}
                max={100} 
                step={10}
                disabled={sorting}
                onValueChange={value => handleQuantity(value[0])}
                className={`${sorting && 'cursor-not-allowed'} w-72 flex relative place-items-center`}>
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
            <div className="flex flex-col">
                <label className="font-semibold">Speed</label>
                <Slider.Root 
                onValueChange={value => handleSpeed(value[0])} 
                min={1} 
                max={10}
                step={1}
                defaultValue={[speed]}
                disabled={sorting}
                className={`${sorting && 'cursor-not-allowed'} w-72 flex relative place-items-center`}>
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
            </div>
    )
};

export default Sliders