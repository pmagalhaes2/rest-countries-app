global.importMetaEnv = {
  VITE_REST_COUNTRIES_API: 'https://restcountries.com/v3.1'
};

Object.defineProperty(global, 'import.meta', {
  value: {
    env: global.importMetaEnv
  }
});
