const Sync = {
  registers: [], // 记录已注册的字段
  cache: {}
};

const PREFIX = '__YA_WXAPP_GROUP_SYNC__';

function prefix(key) {
  return PREFIX + key;
}

function getter(key, isJson) {
  return function() {
    if (!Sync.cache[key]) {
      // 这里可以用其他的存储器
      let theCache = wx.getStorageSync(prefix(key));
      if (isJson) {
        try {
          theCache = JSON.parse(theCache);
        } catch (_e) {
          theCache = null;
        }
      }
      Sync.cache[key] = theCache;
    }
    return Sync.cache[key];
  };
}

function setter(key, isJson) {
  return function(val) {
    Sync.cache[key] = val;
    if (isJson) val = JSON.stringify(val);
    wx.setStorageSync(prefix(key), val);
  };
}

function prop(key, isJson) {
  return {
    get: getter(key, isJson),
    set: setter(key, isJson)
  };
}

export function register(key, isJson = false) {
  Sync.registers.push(key);
  Object.defineProperty(Sync, key, prop(key, isJson));
}

export function remove(key) {
  delete Sync.registers[key];
  return wx.removeStorageSync(prefix(key));
}

export function clear() {
  Sync.registers.forEach(register => remove(register));
}

export default Sync;
