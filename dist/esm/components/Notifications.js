import '../utils/nextjs-check';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../styles/notification.css';
// Client-side check
const isClient = typeof window !== 'undefined';
const Notifications = ({ notifications, onClose }) => {
    if (!isClient) {
        return null; // SSR için boş render
    }
    const getPositionStyle = (position = 'top-right') => {
        switch (position) {
            case 'top-left':
                return { top: '16px', left: '16px' };
            case 'top-right':
                return { top: '16px', right: '16px' };
            case 'bottom-left':
                return { bottom: '16px', left: '16px' };
            case 'bottom-right':
                return { bottom: '16px', right: '16px' };
            case 'center':
                return {
                    top: '16px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                };
            default:
                return { top: '16px', right: '16px' };
        }
    };
    // Bildirimleri pozisyonlarına göre grupla
    const groupedNotifications = notifications.reduce((acc, notification) => {
        const position = notification.position || 'top-right';
        if (!acc[position]) {
            acc[position] = [];
        }
        acc[position].push(notification);
        return acc;
    }, {});
    return (React.createElement(React.Fragment, null, Object.entries(groupedNotifications).map(([position, notifs]) => {
        var _a;
        return (React.createElement("div", { key: position, className: "react-notification-group", style: Object.assign(Object.assign({}, getPositionStyle(position)), { width: ((_a = notifications[0]) === null || _a === void 0 ? void 0 : _a.width) || 300 }) },
            React.createElement(TransitionGroup, { name: "notification" }, notifs.map(notification => (React.createElement(CSSTransition, { key: notification.id, timeout: 300, classNames: "notification" },
                React.createElement("div", { className: `react-notification ${notification.type} ${notification.classes || ''}`, style: { width: notification.width || 300 }, onClick: () => onClose(notification.id) },
                    notification.title && (React.createElement("div", { className: "notification-title" }, notification.title)),
                    React.createElement("div", { className: "notification-content" }, notification.text))))))));
    })));
};
export default Notifications;
