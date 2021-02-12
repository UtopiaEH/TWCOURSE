import { CloudOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";

export const MenuRoot = [
    {
        id: 0,
        name: "Home",
        icon: <UserOutlined/>,
        path: '/'
    },
    {
        id: 1,
        name: "News",
        icon: <VideoCameraOutlined/>,
        path: '/news'
    },
    {
        id: 2,
        name: "About US",
        icon: <CloudOutlined/>,
        path: '/about-us'
    },

]