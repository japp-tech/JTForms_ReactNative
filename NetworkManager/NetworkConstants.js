//production and dev URLs should be added here
const Environment = {
    PRODUCTION: 'https://your-api-prod-url.com',
    // DEV: 'https://your-api-dev-url.com',
    // DEV:'https://ab42-183-82-105-227.ngrok-free.app'
    DEV:'https://a2ef-183-82-105-227.ngrok-free.app'
    
  };
  
  const BaseURL = Environment.DEV;

  //add the keys with url end-points here
  const APIRequests={
    login:"your-api-login-url",
    login: '/api/auth',
    getEmployees:"/admin/getEmployees"

  }
  const SERVER = {
    key: 'SAMPLE_KEY',
  };


  export {BaseURL,APIRequests}