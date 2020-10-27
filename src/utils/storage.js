export const saveStorage = (state, key = 'token') => {
  try {
    const storage = JSON.stringify(state);
    window.localStorage.setItem(key, storage);
  } catch (error) {
    throw new Error(`fail save storage ${error}`);
  }
};

export const loadStorage = (key = 'token') => {
  try {
    const storage = window.localStorage.getItem(key);
    return storage === null ? undefined : JSON.parse(storage);
  } catch (error) {
    return undefined;
  }
};

export const removeStorage = (key = 'token') => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    throw new Error(`fail remove storage ${error}`);
  }
};

export const clearStorage = () => {
  try {
    window.localStorage.clear();
  } catch (error) {
    throw new Error(`fail clear storage ${error}`);
  }
};

export const saveSession = (state, key = 'token') => {
  try {
    const storage = JSON.stringify(state);
    window.sessionStorage.setItem(key, storage);
  } catch (error) {
    throw new Error(`fail save storage ${error}`);
  }
};

export const loadSession = (key = 'token') => {
  try {
    const storage = window.sessionStorage.getItem(key);
    return storage === null ? undefined : JSON.parse(storage);
  } catch (error) {
    return undefined;
  }
};

export const removeSession = (key = 'token') => {
  try {
    window.sessionStorage.removeItem(key);
  } catch (error) {
    throw new Error(`fail remove storage ${error}`);
  }
};

export const clearSession = () => {
  try {
    window.sessionStorage.clear();
  } catch (error) {
    throw new Error(`fail clear storage ${error}`);
  }
};
