import '../utils/nextjs-check';
import React, { createContext, useContext, useState } from 'react';
import Notifications from './Notifications';

// Client-side check
const isClient = typeof window !== 'undefined';

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

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within NotificationProvider');
  }
  return context;
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  if (!isClient) {
    return <>{children}</>; // SSR için sadece children render
  }

  const notify = (options: Omit<NotificationItem, 'id'>) => {
    const id = Date.now();
    const notification = { ...options, id };
    
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

  return (
    <NotificationContext.Provider value={{ notify, clear }}>
      {children}
      <Notifications 
        notifications={notifications}
        onClose={(id) => setNotifications(prev => prev.filter(n => n.id !== id))}
      />
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
