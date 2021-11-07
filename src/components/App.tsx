import { useState } from "react"
import { fillWithRandom } from "../utils/generateRandomArray"
import Layout from "./Layout"
import Navbar from "./Navbar"

const initialData = fillWithRandom(10, 730)

const SortingApp: React.FC = (): JSX.Element => {
    const [data, setData] = useState(initialData);
    document.title = "Sorting Visualizer";

    return (
        <>
        <Layout>
        <Navbar data={data} setData={setData} />
        <div className="flex place-content-center gap-x-0.5">
            {data.map((value, idx) => (
                <div
                    key={idx}
                    className="w-0.5 text-white bg-gray-300"
                    style={{height: `${value}px`}} />
            ))}
        </div>
        </Layout>
        </>
    )
}

export default SortingApp
