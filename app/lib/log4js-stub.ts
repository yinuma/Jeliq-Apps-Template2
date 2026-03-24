// Browser stub for log4js (Node.js-only logging library)
// @jeliq/app-sdk-core imports log4js internally but it's not needed in browser

const noopLogger = {
  trace: () => {},
  debug: () => {},
  info: () => {},
  warn: () => {},
  error: () => {},
  fatal: () => {},
  isTraceEnabled: () => false,
  isDebugEnabled: () => false,
  isInfoEnabled: () => false,
  isWarnEnabled: () => false,
  isErrorEnabled: () => false,
  isFatalEnabled: () => false,
  level: "OFF",
  category: "",
};

export function getLogger() {
  return noopLogger;
}

export function configure() {
  return { getLogger };
}

export default { getLogger, configure };
