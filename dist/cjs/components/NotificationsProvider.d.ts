import React from 'react';
interface NotificationItem {
    id: number;
    type: 'success' | 'warn' | 'error' | 'info';
    title?: string;
    text: string;
    duration?: number;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center';
    width?: number;
    classes?: string;
}
export interface NotificationContextType {
    notify: (options: Omit<NotificationItem, 'id'>) => void;
    clear: () => void;
}
export declare const NotificationContext: React.Context<NotificationContextType | undefined>;
export declare const useNotifications: () => NotificationContextType;
export declare const NotificationProvider: React.FC<{
    children: React.ReactNode;
}>;
export default NotificationProvider;
