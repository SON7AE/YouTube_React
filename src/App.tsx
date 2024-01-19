import { BrowserRouter, Routes, Route } from "react-router-dom"

// 페이지 컴포넌트
import MainPage from "./components/pages/main/MainPage"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
