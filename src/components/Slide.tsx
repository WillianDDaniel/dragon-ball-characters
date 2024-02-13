interface slideProps {
    imageSrc: any
    next: () => void
    prev: () => void
    slideStyle: {
        mainDiv: string;
        leftArrow: string;
        rightArrow: string;
        leftArrowDiv: string;
        rightArrowDiv: string;
        mainImgDiv: string;
        mainImg: string;
    }
}

export default function Slide(props: slideProps) {

    return (
        <div className={props.slideStyle.mainDiv}>

            <div className={props.slideStyle.leftArrowDiv}>

                <img src="https://animecharacters.sirv.com/itens/left-arrow.png"
                    alt=""
                    onClick={props.prev} className={props.slideStyle.leftArrow}
                />
            </div>

            <div className={props.slideStyle.mainImgDiv}>

                <img src={props.imageSrc} className={props.slideStyle.mainImg}
                />
            </div>

            <div className={props.slideStyle.rightArrowDiv}>

                <img src="https://animecharacters.sirv.com/itens/right-arrow.png"
                    alt=""
                    onClick={props.next} className={props.slideStyle.rightArrow}
                />
            </div>
        </div>
    )
}