import React, { useState } from 'react';
import { NotificationProvider, useNotification } from 'react-notification-pro';
import './App.css';

const Demo = () => {
  const { notify, clear } = useNotification();
  const [position, setPosition] = useState<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center'>('top-right');
  const [duration, setDuration] = useState(4000);
  const [width, setWidth] = useState(300);

  const showNotification = (type: 'success' | 'warn' | 'error' | 'info') => {
    notify({
      type,
      title: 'Title',
      text: 'This is a notification',
      duration,
      position,
      width
    });
  };

  const showCustom = () => {
    notify({
      type: 'success',
      title: 'Custom Title',
      text: 'This is a custom notification with different styles',
      duration,
      position,
      width,
      classes: 'custom-notification'
    });
  };

  return (
    <div className="demo">
      
      <div className="demo-container">
        <div className="content">
          <div className="config-section">
          <div className="header">
        <h1>React Notification Pro</h1>
        <div className="github-section">
          <a href="https://github.com/omeryaldirgan/react-notify-pro" 
             target="_blank" 
             rel="noopener noreferrer"
             className="github-link">
            View on GitHub
          </a>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=omeryaldirgan&repo=react-notify-pro&type=star&count=true&size=large"
            frameBorder="0"
            scrolling="0"
            width="170"
            height="30"
            title="GitHub Stars"
          />
        </div>
      </div>
            <h2>Configuration</h2>
            <div className="config-grid">
              <div className="config-item">
                <label>Position:</label>
                <select value={position} onChange={(e) => setPosition(e.target.value as 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center')}>
                  <option value="top-right">Top Right</option>
                  <option value="top-left">Top Left</option>
                  <option value="bottom-right">Bottom Right</option>
                  <option value="bottom-left">Bottom Left</option>
                  <option value="center">Center</option>
                </select>
              </div>
              <div className="config-item">
                <label>Duration (ms):</label>
                <input 
                  type="number" 
                  value={duration} 
                  onChange={(e) => setDuration(Number(e.target.value))}
                />
              </div>
              <div className="config-item">
                <label>Width (px):</label>
                <input 
                  type="number" 
                  value={width} 
                  onChange={(e) => setWidth(Number(e.target.value))}
                />
              </div>
            </div>
          </div>

          <h2>Types</h2>
          <div className="button-group">
            <button className="success" onClick={() => showNotification('success')}>Success</button>
            <button className="warn" onClick={() => showNotification('warn')}>Warning</button>
            <button className="error" onClick={() => showNotification('error')}>Error</button>
            <button className="info" onClick={() => showNotification('info')}>Info</button>
          </div>

          <h2>Custom Style</h2>
          <div className="button-group">
            <button className="custom" onClick={showCustom}>Custom</button>
          </div>

          <h2>Actions</h2>
          <div className="button-group">
            <button className="action" onClick={() => notify({
              type: 'info',
              text: 'This notification will stay until clicked',
              duration: 0,
              position,
            })}>
              Permanent Notification
            </button>
            <button className="action" onClick={clear}>Clear All</button>
          </div>

          <div className="code-example">
            <h2 style={{ color: '#fff' }}>Usage Example</h2>
            <pre>
              <code style={{ textAlign: 'left' }}>{`
                import { useNotification } from 'react-notification-pro';

                const { notify } = useNotification();

                notify({
                  type: 'success',
                  title: 'Success',
                  text: 'This is a notification',
                  position: '${position}',
                  duration: ${duration},
                  width: ${width}
                });
              `}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <NotificationProvider>
    <Demo />
  </NotificationProvider>
);

export default App;
