// Simple analytics helper
export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  if (typeof window !== 'undefined') {
    // Add your analytics provider here (Google Analytics, Mixpanel, etc.)
    console.log('Event tracked:', eventName, properties);
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined') {
    // Add your analytics provider here
    console.log('Page view tracked:', url);
  }
};