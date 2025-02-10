import React, { createContext, useContext, useState } from 'react';
import Notifications from './Notifications';
export const NotificationContext = createContext(undefined);
export const useNotifications = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotifications must be used within NotificationProvider');
    }
    return context;
};
export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);
    const notify = (options) => {
        const id = Date.now();
        const notification = Object.assign(Object.assign({}, options), { id });
        setNotifications(prev => [...prev, notification]);
        if (options.duration !== 0) {
            setTimeout(() => {
                setNotifications(prev => prev.filter(n => n.id !== id));
            }, options.duration || 3000);
        }
    };
    const clear = () => {
        setNotifications([]);
    };
    return (React.createElement(NotificationContext.Provider, { value: { notify, clear } },
        children,
        React.createElement(Notifications, { notifications: notifications, onClose: (id) => setNotifications(prev => prev.filter(n => n.id !== id)) })));
};
export default NotificationProvider;
