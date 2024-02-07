import { useState } from "react"
import { ImageData } from "@/types/image"
import styles from "./DetailDialog.module.scss"

interface Props {
    data: ImageData
}

function DetailDialog({ data }: Props) {
    const [bookmark, setBookmark] = useState(false)
    const addBookmark = () => {
        setBookmark(!bookmark)
    }

    return (
        <div className={styles.container}>
            <div className={styles.container__dialog}>
                <div className={styles.container__dialog__header}>
                    <div className={styles.close}>
                        <button className={styles.close__button}>
                            <span className="material-symbols-outlined" style={{ fontSize: 28 + "px" }}>
                                close
                            </span>
                        </button>
                        <img src={data.user.profile_image.small} alt="사진작가 프로필 사진" className={styles.close__authorImage} />
                        <span className={styles.close__authorName}>{data.user.name}</span>
                    </div>
                    <div className={styles.bookmark}>
                        <button className={styles.bookmark__button} onClick={addBookmark}>
                            {bookmark === false ? (
                                <span className="material-symbols-outlined" style={{ fontSize: 16 + "px" }}>
                                    favorite
                                </span>
                            ) : (
                                <span className="material-symbols-outlined added" style={{ fontSize: 16 + "px", color: "red" }}>
                                    favorite
                                </span>
                            )}
                            북마크
                        </button>
                        <button className={styles.bookmark__button}>다운로드</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailDialog
