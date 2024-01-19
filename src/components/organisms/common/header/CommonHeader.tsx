import styles from "./CommonHeader.module.scss"

function CommonHeader() {
    return (
        <div className={styles.header}>
            <div className={styles.header__logoBox}>
                <img src="/assets/images/image-logo.png" alt="Unsplash-Logo-Image" className={styles.header__logoBox__logo} />
                <span className={styles.header__logoBox__title}>PhotoSplash</span>
            </div>
            <div className={styles.header__profileBox}>
                <button className={styles.header__profileBox__button}>사진 제출</button>
                <button className={styles.header__profileBox__button}>
                    북마크
                    <span className="material-symbols-outlined" style={{ fontSize: 18 + "px", marginTop: 2 + "px", marginRight: -6 + "px", marginLeft: 2 + "px" }}>
                        favorite
                    </span>
                </button>
                <span className={styles.header__profileBox__userName}>9Diin | 9Diin@YouTube.com</span>
            </div>
        </div>
    )
}

export default CommonHeader
