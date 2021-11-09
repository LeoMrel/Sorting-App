import React, { useState, useEffect } from "react"
import Bar from "./Bar";
import Layout from "./Layout"
import Navbar from "./Navbar"
import { algorithmsMap } from "./algorithms/AlgorithmsMap";
document.title = "Sorting Visualizer";


const SortingApp: React.FC = (): JSX.Element => {
    // Generate random array of len elements with values from max to min
	const generateRandomArray = (len: number = 100, max:number, min:number) => {
		setCompleted(false)
		setSorting(false)
		setSortedIndex([])
		
		const results:number[] = [];
        for(let i = 0; i < len; i ++) {
            let candidate = Math.floor(Math.random() * (max - min + 1) + min)
            if(results.indexOf(candidate) === -1) results.push(candidate)
        }
        setData(results)
    }

	// States
	const [algo, setAlgo] = useState(algorithmsMap[0])
	const [len, setLength] = useState(50)
	const [data, setData] = useState<any>([])
	const [sorting, setSorting] = useState(false)
	const [completed, setCompleted] = useState(true)
	const [speed, setSpeed] = useState(10)
	const [compare, setCompare] = useState<(number | number[] | null)[] | null>([])
	const [swap, setSwap] = useState<never[] | (number | number[] | null)[]>([])
	const [sortedIndex, setSortedIndex] = useState<(number | number[] | null)[]>([])

	// Generating random array every time the length is changed by th user
	useEffect(() => {
		generateRandomArray(len, 10, 670)
	}, [len])

	// setting the selected algorithm
	const handleAlgo = (event: {name: string; complexity: string; function: (array: number[]) => (number | number[] | null)[][];}) => {
		setAlgo(event)
	}

	// handling the length of the array
	const handleLength = (x: number) => {
		setLength(x)
	}

	// handling the speed of sorting
	const handleSpeed = (event: number) => {
		setSpeed(100 / event)
	}

	// Sorting according to the algorithm
	const handleSort = async () => {
		
		const sortAccOrder = (order:(number | number[] | null)[][]) => {
			(function loop(i) {
			    setTimeout(function () {
					const [j, k, arr, index] = order[i]
					setCompare([j, k])
					setSwap([])

					if(index !== null){
						setSortedIndex((prevState) => (
							[...prevState, index]
						))
					}
		
					if(arr){
						setData(arr)
						if(j !== null || k != null)
							setSwap([j, k])

					}

					if (++i < order.length){
						loop(i)
					} else {
						setSorting(false)
						setCompleted(true)
					}   
				}, 0.5 * speed )
			})(0)
			
		}

		setSorting(true)

		algo ? sortAccOrder(algo.function(data)) : 
        (() => {
			setSorting(false)
			setCompleted(true)
		})()
	}



    return (
        <>
        <Layout>
        <Navbar 
			generateRandomArray={() => generateRandomArray(len, 10, 670)}
			handleLength={handleLength}
			handleSpeed={handleSpeed}
			handleAlgo={handleAlgo}
			handleSort={handleSort} 
			sorting={sorting}
			completed={completed}
			len={len}
			speed={speed}
			algo={algo}
			/>
        <div className="flex gap-x-0.5 place-content-center">
        <Bar 
			data={data} 
			compare={sorting ? compare : null}
			swap={sorting ? swap : null}
			sorted={sortedIndex} 
			/>
        </div>
        </Layout>
        </>
    )
}

export default SortingApp
