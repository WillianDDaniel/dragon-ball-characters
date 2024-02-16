'use client'
import { useState } from "react"
import Slide from "./Slide"

interface MoreInfoProps {
    data: any
}

export default function MoreInfo(props: MoreInfoProps) {

    // Object to style the slide component in the More Info Section
    const slideStyle = {
        mainDiv: 'flex w-full justify-center p-1 items-center',
        leftArrow: '',
        rightArrow: '',
        leftArrowDiv: 'w-1/6',
        rightArrowDiv: 'w-1/6',
        mainImgDiv: 'lg:w-4/6 w-4/6 flex md:px-5 pt-3 sm-2:w-5/5 sm-2:flex sm-2:justify-center sm-2:p-0',
        mainImg: 'rounded-md w-5/5'
    }

    /****************************************************************************/
    const [currentIndex, setIndex] = useState(0)

    function next() {
        if (currentIndex === props.data.extras.length - 1) {
            setIndex(0)
        } else {
            setIndex(currentIndex + 1);
        }
    }

    function previous() {
        if (currentIndex === 0) {
            setIndex(props.data.extras.length - 1);
        } else {
            setIndex(currentIndex - 1);
        }
    }

    const extras = props.data.extras[currentIndex]


    return (
        <section className="flex flex-col items-center w-full overflow-hidden lg:w-[59%]">

            <h2 className={`
                flex w-full justify-center text-orange-500 font-semibold text-2xl mt-3
                sm-2:text-md sm-2:text-center
            `}>
                Mais informações...
            </h2>

            <Slide
                slideStyle={slideStyle}
                src={extras ? extras.image : props.data.extras[0].image}
                next={next}
                prev={previous}
            />

            <h3 className="pt-3">{extras? extras.name : props.data.extras[0].name }</h3>
            <p className={`
                py-2.5 px-3 text-sm text-center bg-zinc-600 ml-6 mx-3 mt-3 mb-4 rounded-md
                sm-1:p-3 sm-1:m-4
            `}>
                {extras? extras.text : props.data.extras[0].text }
            </p>

        </section>
    )
}
