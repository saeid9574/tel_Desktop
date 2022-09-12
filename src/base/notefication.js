import {notification} from "antd";

export const Notefication = ({children}) => {
    const openNotification = () => {
        notification.open({
            message: ' در دست ساخته',
            description:
                'از همراهی و صبوری شما ممنونیم ، چون اصلا قرار نیست همچین صفحه ای بسازیم',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };
    return (
        <span onClick={openNotification}>
            {children}
        </span>
    )
}
