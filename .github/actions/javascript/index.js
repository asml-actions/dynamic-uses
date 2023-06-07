Object.entries(process.env).forEach(([key, value]) => {
  if (key.startsWith("env_test")) console.log(`${key}=${value}`);
});
