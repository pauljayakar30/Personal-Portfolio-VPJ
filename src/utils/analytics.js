// Google Analytics utility functions
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-116KVGTWPW';
export const IS_ANALYTICS_ENABLED = import.meta.env.VITE_ENABLE_ANALYTICS !== 'false'; // Default to true
export const IS_DEBUG_MODE = import.meta.env.VITE_DEBUG_MODE === 'true';

// Initialize Google Analytics
export const initGA = () => {
  if (IS_DEBUG_MODE) {
    console.log('Analytics Config:', {
      GA_MEASUREMENT_ID,
      IS_ANALYTICS_ENABLED,
      IS_DEBUG_MODE,
      gtag_available: typeof window.gtag !== 'undefined'
    });
  }
  
  if (!IS_ANALYTICS_ENABLED) {
    console.log('Google Analytics disabled');
    return;
  }
  
  if (IS_DEBUG_MODE) {
    console.log(`Google Analytics initialized with ID: ${GA_MEASUREMENT_ID}`);
  }
};

// Track page views
export const trackPageView = (page_title, page_location) => {
  if (!IS_ANALYTICS_ENABLED || typeof window.gtag === 'undefined') {
    if (IS_DEBUG_MODE) {
      console.log('GA: Cannot track page view - gtag not available or analytics disabled');
    }
    return;
  }
  
  window.gtag('event', 'page_view', {
    page_title,
    page_location,
  });
  
  if (IS_DEBUG_MODE) {
    console.log('GA: Page view tracked', { page_title, page_location });
  }
};

// Track custom events
export const trackEvent = (action, category = 'engagement', label = '', value = 1) => {
  if (!IS_ANALYTICS_ENABLED || typeof window.gtag === 'undefined') {
    if (IS_DEBUG_MODE) {
      console.log('GA: Cannot track event - gtag not available or analytics disabled');
    }
    return;
  }
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
  
  if (IS_DEBUG_MODE) {
    console.log('GA: Event tracked', { action, category, label, value });
  }
};

// Track specific portfolio events
export const trackPortfolioEvent = {
  // Track resume downloads
  resumeDownload: () => {
    trackEvent('resume_download', 'engagement', 'Resume PDF', 1);
  },
  
  // Track social link clicks
  socialLinkClick: (platform) => {
    trackEvent('social_link_click', 'engagement', platform, 1);
  },
  
  // Track project link clicks
  projectLinkClick: (project_name, link_type) => {
    trackEvent('project_link_click', 'engagement', `${project_name} - ${link_type}`, 1);
  },
  
  // Track contact form submissions
  contactFormSubmit: () => {
    trackEvent('contact_form_submit', 'conversion', 'Contact Form', 1);
  },
  
  // Track section views
  sectionView: (section_name) => {
    trackEvent('section_view', 'engagement', section_name, 1);
  },
  
  // Track certificate views
  certificateView: (certificate_name) => {
    trackEvent('certificate_view', 'engagement', certificate_name, 1);
  }
};

// Track user engagement time
let startTime = Date.now();

export const trackEngagementTime = () => {
  const engagementTime = Math.round((Date.now() - startTime) / 1000);
  
  if (engagementTime > 10) { // Only track if user stayed more than 10 seconds
    trackEvent('engagement_time', 'engagement', 'Time on site', engagementTime);
  }
};

// Track engagement time when user leaves
window.addEventListener('beforeunload', trackEngagementTime);
