import React from 'react';
import '../styles/notification.css';
interface NotificationProps {
    id: number;
    type: 'success' | 'warn' | 'error' | 'info';
    title?: string;
    text: string;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center';
    width?: number;
    classes?: string;
}
interface NotificationsProps {
    notifications: NotificationProps[];
    onClose: (id: number) => void;
}
declare const Notifications: React.FC<NotificationsProps>;
export default Notifications;
