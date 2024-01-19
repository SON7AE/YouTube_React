import styles from "./Card.module.scss"

interface Props {
    data: any
}

function Card({ data }: Props) {
    return (
        <div className={styles.card}>
            <img src={data.urls.small} alt={data.alt_description} className={styles.card__image} />
        </div>
    )
}

export default Card
