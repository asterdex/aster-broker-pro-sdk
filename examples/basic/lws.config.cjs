module.exports = {
  rewrite: [
    {
      from: "/bapi/(.*)",
      to: "https://www.asterdex.com/bapi/$1",
    },
    {
      from: "/fapi/(.*)",
      to: "https://www.asterdex.com/fapi/$1",
    },
    {
      from: "/cloud-futures/(.*)",
      to: "https://static.asterdex.com/cloud-futures/$1",
    },
    {
      from: "/api/(.*)",
      to: "https://static.asterdex.com/api/$1",
    },
    {
      from: "/(.*)/futures/(.*)",
      to: "/index.html",
    },
  ],
  spa: "index.html",
  directory: "./",
  logFormat: "stats",
};
