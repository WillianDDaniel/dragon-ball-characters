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

            <div className={props.slideStyle.leftArrowDiv}>

                <img src="https://animecharacters.sirv.com/itens/left-arrow.png"
                    alt="personagem anterior, história"
                    className={props.slideStyle.leftArrow}
                    onClick={props.prev}
                />
            </div>

            {/** */}

            <div className={props.slideStyle.mainImgDiv}>

                <img src={props.src} 
                    className={props.slideStyle.mainImg}
                />
            </div>

            {/** */}

            <div className={props.slideStyle.rightArrowDiv}>
                <img src="https://animecharacters.sirv.com/itens/right-arrow.png"
                    alt="proximo personagem, história"
                    className={props.slideStyle.rightArrow}
                    onClick={props.next}
                />
            </div>
        </div>
    )
}