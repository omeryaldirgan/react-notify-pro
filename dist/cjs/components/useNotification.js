"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../utils/nextjs-check");
const react_1 = require("react");
const NotificationsProvider_1 = require("./NotificationsProvider");
const useNotification = () => {
    const context = (0, react_1.useContext)(NotificationsProvider_1.NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};
exports.default = useNotification;
