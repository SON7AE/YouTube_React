import styles from "./CommonFooter.module.scss"

function CommonFooter() {
    const moveToPrev = () => {}
    const moveToNext = () => {}

    return (
        <div className={styles.footer}>
            <div className={styles.pagination}>
                <button className={styles.pagination__button} onClick={moveToPrev}>
                    <img src="/assets/icons/arrow-left.svg" alt="" />
                </button>
                {/* {pages} */}
                <button className={styles.pagination__button} onClick={moveToPrev}>
                    1
                </button>
                <button className={styles.pagination__button} onClick={moveToNext}>
                    <img src="/assets/icons/arrow-right.svg" alt="" />
                </button>
            </div>
        </div>
    )
}

export default CommonFooter
