"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_transition_group_1 = require("react-transition-group");
require("../styles/notification.css");
const Notifications = ({ notifications, onClose }) => {
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
    return (react_1.default.createElement(react_1.default.Fragment, null, Object.entries(groupedNotifications).map(([position, notifs]) => {
        var _a;
        return (react_1.default.createElement("div", { key: position, className: "react-notification-group", style: Object.assign(Object.assign({}, getPositionStyle(position)), { width: ((_a = notifications[0]) === null || _a === void 0 ? void 0 : _a.width) || 300 }) },
            react_1.default.createElement(react_transition_group_1.TransitionGroup, { name: "notification" }, notifs.map(notification => (react_1.default.createElement(react_transition_group_1.CSSTransition, { key: notification.id, timeout: 300, classNames: "notification" },
                react_1.default.createElement("div", { className: `react-notification ${notification.type} ${notification.classes || ''}`, style: { width: notification.width || 300 }, onClick: () => onClose(notification.id) },
                    notification.title && (react_1.default.createElement("div", { className: "notification-title" }, notification.title)),
                    react_1.default.createElement("div", { className: "notification-content" }, notification.text))))))));
    })));
};
exports.default = Notifications;
