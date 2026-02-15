window.addEventListener('load', function() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      for(let registration of registrations) {
        console.log('Unregistering Service Worker:', registration);
        registration.unregister();
      }
    });
  }
});
