const ms = require('ms');
const commonUtils = require('../utils/common.js');

const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_ENV_DEVELOPMENT = NODE_ENV === 'development';
const IS_ENV_PRODUCTION = NODE_ENV === 'production';
const IS_ENV_TEST = NODE_ENV === 'test';

const PORT = commonUtils.toInt(process.env.PORT, 3000);

const AUTH0_MANAGEMENT_API_AUDIENCE = process.env.AUTH0_MANAGEMENT_API_AUDIENCE;
const AUTH0_MANAGEMENT_API_CLIENT_ID = process.env.AUTH0_MANAGEMENT_API_CLIENT_ID;
const AUTH0_MANAGEMENT_API_CLIENT_SECRET = process.env.AUTH0_MANAGEMENT_API_CLIENT_SECRET;
const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE;
const AUTH0_ISSUER = process.env.AUTH0_ISSUER;
const AUTH0_JWKS_URI = process.env.AUTH0_JWKS_URI;
const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;

const REDIS_URL = process.env.REDIS_URL;

const STRIPE_PUBLIC_KEY = process.env.STRIPE_PUBLIC_KEY;
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const STRIPE_FREE_PLAN_ID = process.env.STRIPE_FREE_PLAN_ID;
const STRIPE_PRO_PLAN_ID = process.env.STRIPE_PRO_PLAN_ID;

const REDIS_CACHE_EXPIRY_IN_MS = commonUtils.toInt(process.env.REDIS_CACHE_EXPIRY_IN_MS, ms('1d'));

const MAX_API_TOKENS_PER_USER = commonUtils.toInt(process.env.MAX_API_TOKENS_PER_USER, 5);
const RATE_LIMIT_WINDOW_IN_MS = commonUtils.toInt(process.env.RATE_LIMIT_WINDOW_IN_MS || ms('1d'));
const RATE_LIMIT_FOR_UNAUTHENTICATED_REQUESTS = commonUtils.toInt(
  process.env.RATE_LIMIT_FOR_UNAUTHENTICATED_REQUESTS,
  100
);
const RATE_LIMIT_FOR_FREE_USER_REQUESTS = commonUtils.toInt(
  process.env.RATE_LIMIT_FOR_FREE_USER_REQUESTS,
  1000
);
const RATE_LIMIT_FOR_PRO_USER_REQUESTS = commonUtils.toInt(
  process.env.RATE_LIMIT_FOR_PRO_USER_REQUESTS,
  10000
);

const SENTRY_DSN = process.env.SENTRY_DSN;

const EXECUTION_ENV = process.env.EXECUTION_ENV || 'development';

const PAPERTRAIL_HOST = process.env.PAPERTRAIL_HOST;
const PAPERTRAIL_PORT = commonUtils.toInt(process.env.PAPERTRAIL_PORT, 9000);

module.exports = {
  AUTH0_MANAGEMENT_API_AUDIENCE,
  IS_ENV_DEVELOPMENT,
  IS_ENV_PRODUCTION,
  IS_ENV_TEST,
  PORT,
  AUTH0_AUDIENCE,
  AUTH0_ISSUER,
  AUTH0_JWKS_URI,
  AUTH0_DOMAIN,
  AUTH0_MANAGEMENT_API_CLIENT_ID,
  AUTH0_MANAGEMENT_API_CLIENT_SECRET,
  REDIS_URL,
  STRIPE_PUBLIC_KEY,
  STRIPE_SECRET_KEY,
  STRIPE_FREE_PLAN_ID,
  STRIPE_PRO_PLAN_ID,
  REDIS_CACHE_EXPIRY_IN_MS,
  MAX_API_TOKENS_PER_USER,
  RATE_LIMIT_WINDOW_IN_MS,
  RATE_LIMIT_FOR_UNAUTHENTICATED_REQUESTS,
  RATE_LIMIT_FOR_FREE_USER_REQUESTS,
  RATE_LIMIT_FOR_PRO_USER_REQUESTS,
  SENTRY_DSN,
  EXECUTION_ENV,
  PAPERTRAIL_HOST,
  PAPERTRAIL_PORT,
};
