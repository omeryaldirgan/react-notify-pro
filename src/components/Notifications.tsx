import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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

const Notifications: React.FC<NotificationsProps> = ({
  notifications,
  onClose
}) => {
  const getPositionStyle = (position: string = 'top-right') => {
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
  }, {} as Record<string, NotificationProps[]>);

  return (
    <>
      {Object.entries(groupedNotifications).map(([position, notifs]) => (
        <div
          key={position}
          className="react-notification-group"
          style={{
            ...getPositionStyle(position),
            width: notifications[0]?.width || 300
          }}
        >
          <TransitionGroup name="notification">
            {notifs.map(notification => (
              <CSSTransition
                key={notification.id}
                timeout={300}
                classNames="notification"
              >
                <div
                  className={`react-notification ${notification.type} ${notification.classes || ''}`}
                  style={{ width: notification.width || 300 }}
                  onClick={() => onClose(notification.id)}
                >
                  {notification.title && (
                    <div className="notification-title">{notification.title}</div>
                  )}
                  <div className="notification-content">{notification.text}</div>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      ))}
    </>
  );
};

export default Notifications;
