export const server =
  process.env.REACT_APP_ENV === 'production'
    ? 'production environment'
    : process.env.REACT_APP_ENV === 'staging'
    ? 'staging environment'
    : 'development environment';