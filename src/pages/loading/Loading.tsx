import styles from "./Loading.module.scss"

function Loading() {
    return (
        <div className={styles.container}>
            <span className={styles.container__desc}>잠시만 기다려주세요.</span>
            <div className={styles.ellipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loading
