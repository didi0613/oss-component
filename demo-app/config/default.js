"use strict";

const defaultListenPort = 3000;

const portFromEnv = () => {
  const x = parseInt(process.env.PORT, 10);
  /* istanbul ignore next */
  return (x !== null && !isNaN(x)) ? x : defaultListenPort;
};

module.exports = {
  "plugins": {
    "inert": {
      "enable": true
    },
    "electrodeStaticPaths": {
      "enable": true,
      "options": {
        "pathPrefix": "dist"
      }
    },
    "webapp": {
      "module": "../demo-app/src/server/webapp",
      "options": {
        "pageTitle": "Electrode Explorer",
        "devServer": {
          "port": "2992"
        },
        "paths": {
          "/{args*}": {
            "view": "index",
            "content": () => {
              return "";
            }
          }
        },
        "serverSideRendering": false
      }
    }
  },
  "connections": {
    "default": {
      "host": process.env.HOST,
      "address": process.env.HOST_IP || "0.0.0.0",
      "port": portFromEnv(),
      "routes": {
        "cors": true
      },
      "state": {
        "ignoreErrors":true
      }
    }
  }
};
