export const env = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  apiTimeout: import.meta.env.VITE_API_TIMEOUT || 30000,
  authTokenKey: import.meta.env.VITE_AUTH_TOKEN_KEY || 'qfit_auth_token',
  refreshTokenKey: import.meta.env.VITE_REFRESH_TOKEN_KEY || 'qfit_refresh_token',
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  enableChatSupport: import.meta.env.VITE_ENABLE_CHAT_SUPPORT === 'true',
  environment: import.meta.env.VITE_ENV || 'development',
  appName: import.meta.env.VITE_APP_NAME || 'QFit',
  appVersion: import.meta.env.VITE_APP_VERSION || '1.0.0',
  medibuddyapiBaseUrl: import.meta.env.VITE_MEDIBUDDY_API_BASE_URL || 'https://bifrost-prod.medibuddy.in/sdk',
  corporateid: import.meta.env.VITE_CORPORATE_ID || '11335464',
  apiToken: import.meta.env.VITE_API_TOKEN || 'a7364668f439affbae4218d1f83c23159368ee97cb9bda93763380585d5ab749',

  plansApiBaseUrl: import.meta.env.VITE_PLANS_API_URL || 'https://plans-api.qfit.ai',

}
