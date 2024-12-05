if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered:', registration);
      })
      .catch(err => {
        console.error('Service Worker registration failed:', err);
      });
  });
}

if ('serviceWorker' in navigator && 'PushManager' in window) {
  navigator.serviceWorker.register('/service-worker.js').then(registration => {
    console.log('Service Worker Registered');
    return registration;
  }).then(registration => {
    return Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        // Simulasikan pengiriman push notification
        registration.showNotification('Welcome!', {
          body: 'Thanks for enabling notifications!',
          icon: '/android/android-launchericon-144-144.png',
        });
      }
    });
  }).catch(error => {
    console.error('Service Worker Error', error);
  });
}


