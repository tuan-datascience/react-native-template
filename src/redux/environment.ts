const ENV = {
  dev: {
    API_BASE_URL: '',
  },
  prod: {
    API_BASE_URL: '',
  },
};

const getEnvVars = () => {
  if (__DEV__) {
    return ENV.dev;
  } else {
    return ENV.prod;
  }
};

export default getEnvVars;
