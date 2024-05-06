import { useNavigate } from 'react-router-dom'
import styles from './CommonHeader.module.scss'

function CommonHeader() {
    const navigate = useNavigate()
    // 북마크 페이지로 이동
    const moveToPage = (filter: string) => {
        if (filter === 'main') {
            navigate('/')
        } else {
            navigate('/bookmark')
        }
    }
    return (
        <header className={styles.header}>
            <div className={styles.header__logoBox} onClick={() => moveToPage('main')}>
                <img src="src/assets/images/image-logo.png" alt="" className={styles.header__logoBox__logo} />
                <span className={styles.header__logoBox__title}>PhotoSplash</span>
            </div>
            <div className={styles.header__profileBox}>
                <button className={styles.header__profileBox__button}>사진제출</button>
                <button className={styles.header__profileBox__button} onClick={() => moveToPage('bookmark')}>
                    북마크
                </button>
                <span className={styles.header__profileBox__userName}>9Diin | 9Diin@Youtube.com</span>
            </div>
        </header>
    )
}

export default CommonHeader
