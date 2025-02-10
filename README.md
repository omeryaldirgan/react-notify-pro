# React Notification Pro

![Logo](https://raw.githubusercontent.com/omeryaldirgan/react-notify-pro/main/logo.png)
A lightweight, customizable, and animated notification system for React applications.

## Features

- 🎨 Multiple notification types (success, warning, error, info)
- 📍 5 positioning options (top-right, top-left, bottom-right, bottom-left, center)
- ⚡️ Smooth animations with customizable transitions
- ⏱️ Configurable duration with permanent notification support
- 🎯 Custom styling with CSS classes
- 📐 Adjustable width for notifications
- 🔄 Group notifications by position
- 🗑️ Clear all notifications at once
- 📱 Responsive design
- 🔧 TypeScript support

## Installation

```bash:README.md
npm install react-notification-pro
# or
yarn add react-notification-pro
```

## Quick Start

```jsx:README.md
import { NotificationProvider, useNotification } from 'react-notification-pro';

// Wrap your app with NotificationProvider
function App() {
  return (
    <NotificationProvider>
      <YourApp />
    </NotificationProvider>
  );
}

// Use in any component
function YourComponent() {
  const { notify } = useNotification();

  const showNotification = () => {
    notify({
      type: 'success',
      title: 'Success',
      text: 'Operation completed successfully!',
      position: 'top-right',
      duration: 3000
    });
  };

  return <button onClick={showNotification}>Show Notification</button>;
}
```

## API Reference

### NotificationOptions

```typescript:README.md
interface NotificationOptions {
  type: 'success' | 'warn' | 'error' | 'info';
  title?: string;
  text: string;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center';
  duration?: number;  // milliseconds (0 for permanent)
  width?: number;     // pixels
  classes?: string;   // custom CSS classes
}
```

### useNotification Hook

```typescript
const { notify, clear } = useNotification();

// Show notification
notify({
  type: 'success',
  title: 'Title',
  text: 'Message'
});

// Clear all notifications
clear();
```

## Examples

### Different Types

```jsx
// Success notification
notify({
  type: 'success',
  title: 'Success',
  text: 'Operation completed'
});

// Warning notification
notify({
  type: 'warn',
  title: 'Warning',
  text: 'Please check your input'
});

// Error notification
notify({
  type: 'error',
  title: 'Error',
  text: 'Something went wrong'
});

// Info notification
notify({
  type: 'info',
  title: 'Info',
  text: 'New updates available'
});
```

### Position Control

```jsx
notify({
  type: 'success',
  text: 'Positioned notification',
  position: 'top-right' // 'top-left', 'bottom-right', 'bottom-left', 'center'
});
```

### Duration Control

```jsx
// Auto-dismiss after 5 seconds
notify({
  type: 'info',
  text: 'Will disappear in 5 seconds',
  duration: 5000
});

// Permanent notification (click to dismiss)
notify({
  type: 'info',
  text: 'Click to dismiss',
  duration: 0
});
```

### Custom Styling

```jsx
// Using custom CSS class
notify({
  type: 'success',
  text: 'Custom styled notification',
  classes: 'my-custom-notification'
});

// Custom width
notify({
  type: 'success',
  text: 'Wide notification',
  width: 400
});
```

### CSS Customization

You can override the default styles:

```css:README.md
.react-notification {
  /* Base notification styles */
}

.react-notification.success {
  background: #68CD86;
  border-left-color: #42A85F;
}

.react-notification.warn {
  background: #ffb648;
  border-left-color: #f48a06;
}

.react-notification.error {
  background: #E54D42;
  border-left-color: #B82E24;
}

.react-notification.info {
  background: #44A4FC;
  border-left-color: #187FE7;
}
```

## Browser Support

- Chrome
- Firefox
- Safari
- Edge
- IE11 (with appropriate polyfills)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Ömer YALDIRGAN](https://github.com/omeryaldirgan)

## Support

- Star the repo ⭐️
- Create pull requests
- Follow updates
- Report bugs
- Suggest new features

For detailed examples and documentation, visit our [GitHub repository](https://github.com/omeryaldirgan/react-notify-pro).
