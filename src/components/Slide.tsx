interface slideProps {
    slideStyle: {
        mainDiv: string;
        leftArrow: string;
        rightArrow: string;
        leftArrowDiv: string;
        rightArrowDiv: string;
        mainImgDiv: string;
        mainImg: string;
    }
    src?: string
    next: () => void 
    prev: () => void 
}

export default function Slide(props: slideProps) {

    return (
        <div className={props.slideStyle.mainDiv}>

            {/** here i'm using a img as button to turn back to the previous character */}
            <div className={props.slideStyle.leftArrowDiv}>
                <img src="https://animecharacters.sirv.com/itens/left-arrow.png"
                    alt="personagem anterior, história"
                    className={props.slideStyle.leftArrow}
                    onClick={props.prev} aria-label="previous image"
                />
            </div>

            <div className={props.slideStyle.mainImgDiv}>
                <img src={props.src} 
                    className={props.slideStyle.mainImg}
                />
            </div>

            {/** here i'm using a img as button to advance to the next character */}
            <div className={props.slideStyle.rightArrowDiv}>
                <img src="https://animecharacters.sirv.com/itens/right-arrow.png"
                    alt="proximo personagem, história"
                    className={props.slideStyle.rightArrow}
                    onClick={props.next} aria-label="next image"
                />
            </div>
        </div>
    )
}