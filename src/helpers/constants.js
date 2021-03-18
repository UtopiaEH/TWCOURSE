import { CloudOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";

export const HOME_PATH = '/'
export const NEWS_PATH = '/news'
export const ABOUT_PATH = '/about-us'
export const ADD_CONTENT = '/add-content'


export const MenuRoot = [
    {
        id: 0,
        name: "Home",
        icon: <UserOutlined/>,
        path: HOME_PATH
    },
    {
        id: 1,
        name: "News",
        icon: <VideoCameraOutlined/>,
        path: NEWS_PATH
    },
    {
        id: 2,
        name: "About US",
        icon: <CloudOutlined/>,
        path: ABOUT_PATH
    },
    {
        id: 3,
        name: "Add Content",
        icon: <CloudOutlined/>,
        path: ADD_CONTENT
    },

]