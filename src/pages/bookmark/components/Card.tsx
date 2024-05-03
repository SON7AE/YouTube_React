import styles from './Card.module.scss'

function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.card__imageBox}>
                <img src="" alt="" className={styles.card__imageBox__image} />{' '}
            </div>
            <div className={styles.card__infoBox}>
                <div className={styles.card__infoBox__row}>
                    <span className={styles.label}>작성자</span>
                    <span className={styles.value}>값</span>
                </div>
                <div className={styles.card__infoBox__row}>
                    <span className={styles.label}>이미지 크기</span>
                    <span className={styles.value}>값</span>
                </div>
                <div className={styles.card__infoBox__row}>
                    <span className={styles.label}>업로드 날짜</span>
                    <span className={styles.value}>값</span>
                </div>
                <div className={styles.card__infoBox__row}>
                    <span className={styles.label}>마지막 업데이트</span>
                    <span className={styles.value}>값</span>
                </div>
                <div className={styles.card__infoBox__row}>
                    <span className={styles.label}>다운로드 수</span>
                    <span className={styles.value}>값</span>
                </div>
            </div>
        </div>
    )
}

export default Card
