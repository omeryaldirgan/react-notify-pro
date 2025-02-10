import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../styles/notification.css';
const Notifications = ({ notifications, onClose }) => {
    const getPositionStyle = (position = 'top-right') => {
        switch (position) {
            case 'top-left':
                return { top: '20px', left: '20px' };
            case 'top-right':
                return { top: '20px', right: '20px' };
            case 'bottom-left':
                return { bottom: '20px', left: '20px' };
            case 'bottom-right':
                return { bottom: '20px', right: '20px' };
            case 'center':
                return {
                    top: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                };
            default:
                return { top: '20px', right: '20px' };
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
