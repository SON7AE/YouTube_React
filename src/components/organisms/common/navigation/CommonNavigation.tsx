import { useState } from "react"
import { Link } from "react-router-dom"
import "./CommonNavigation.scss"

interface Navigation {
    index: number
    path: string
    label: string
    searchValue: string
    isActive: boolean
}

function Navigation() {
    const [navigations, setNavigations] = useState<Navigation[]>([
        {
            index: 0,
            path: "/edit",
            label: "보도/편집 전용",
            searchValue: "edit",
            isActive: false,
        },
        {
            index: 1,
            path: "/following",
            label: "팔로잉",
            searchValue: "following",
            isActive: false,
        },
        {
            index: 2,
            path: "/photoPlus",
            label: "Unsplash Photo+",
            searchValue: "photo",
            isActive: false,
        },
        {
            index: 3,
            path: "/oneColor",
            label: "단색",
            searchValue: "one color",
            isActive: false,
        },
        {
            index: 4,
            path: "/3dRender",
            label: "3D 렌더링",
            searchValue: "3d rendering",
            isActive: false,
        },
        {
            index: 5,
            path: "/nature",
            label: "자연",
            searchValue: "nature",
            isActive: false,
        },
        {
            index: 6,
            path: "/texture",
            label: "텍스처 및 패턴",
            searchValue: "texture",
            isActive: false,
        },
        {
            index: 7,
            path: "/interior",
            label: "건축 및 인테리어",
            searchValue: "interior",
            isActive: false,
        },
        {
            index: 8,
            path: "/film",
            label: "필름",
            searchValue: "film",
            isActive: false,
        },
        {
            index: 9,
            path: "/experimental",
            label: "실험적인",
            searchValue: "experimental",
            isActive: false,
        },
        {
            index: 10,
            path: "/travel",
            label: "여행",
            searchValue: "travel",
            isActive: false,
        },
        {
            index: 11,
            path: "/sports",
            label: "스포츠",
            searchValue: "sports",
            isActive: false,
        },
    ])

    const navLinks = navigations.map((item: Navigation) => {
        return (
            <Link to={item.path} className={`menu ${item.isActive ? "active" : "inactive"}`} key={item.path}>
                <span className="menu__label">{item.label}</span>
            </Link>
        )
    })

    return <div className="container">{navLinks}</div>
}

export default Navigation
