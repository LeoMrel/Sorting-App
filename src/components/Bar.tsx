import { useEffect, useState } from "react"

interface IProps {
    data: any,
	compare: (number | number[] | null)[] | null,
	swap: (number | number[] | null)[] | null,
	sorted: (number | number[] | null)[]
}

const Bar: React.FC<IProps> = ({
    data,
    compare,
    swap,
    sorted
}): JSX.Element => {
    const [width, setWidth] = useState(Math.min(20, Math.ceil(window.innerWidth / data.length) - 5))
    const color = data.length <= 50 && width > 14 ? 'black' : 'transparent'

    useEffect(() => {
        const handleResize = () => {
            setWidth(Math.min(20, Math.ceil(window.innerWidth / data.length) - 8))
        }

        window.addEventListener('resize', handleResize)

        setWidth(Math.min(20, Math.ceil(window.innerWidth / data.length) - 8))
    }, [data.length])




    return( 
        data.map((element: number, index: number) => {
            const height = element;
            let bg = 'turquoise'

            // i th element is being compared with some other element
            if(compare && (index === compare[0] || index === compare[1])){
                bg = '#ffff50'
            }

            if(swap && (index === swap[0] || index === swap[1])){
                bg='red'
            }

            // i th element is in its correct position
            if(sorted && sorted.includes(index)){
                bg = '#4bc52e'
            }

            const style = {
                'backgroundColor': bg,
                'color': color, 
                'height': height,
                'width': width
            }

            return (
                <div key={index} style={style} />
            )

        })
    )
}

export default Bar