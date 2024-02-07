import styles from "./Card.module.scss"
import { ImageData } from "@/types/image"

interface Props {
    data: ImageData
    handleDialog: (eventValue: boolean) => void
    handleEvent: (eventValue: ImageData) => void
}

function Card({ data, handleDialog, handleEvent }: Props) {
    const openDialog = () => {
        handleDialog(true)
        handleEvent(data)
    }

    return (
        <div className={styles.card} onClick={openDialog}>
            <img src={data.urls.small} alt={data.alt_description} className={styles.card__image} />
        </div>
    )
}

export default Card
