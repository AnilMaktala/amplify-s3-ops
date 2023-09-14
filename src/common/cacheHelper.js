import { Cache } from "aws-amplify";
const config = {
    itemMaxSize: 3000, // 3000 bytes
    storage: window.localStorage ,// switch to sessionStorage
    keyPrefix: "aws-op2-tool",
    defaultTTL: (3600 * 2 * 1000)
  };
  export const OP2Cache = Cache.createInstance(config);
