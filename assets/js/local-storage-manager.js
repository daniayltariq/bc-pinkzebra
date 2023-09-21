export function isLocalStorageItemExpired(key) {
    const item = localStorage.getItem(key);
    if (!item) {
        return false;
    }

    const { expiration } = JSON.parse(item);
    const expirationTime = new Date(expiration);
    const currentTime = new Date();

    if (currentTime > expirationTime) {
        return true;
    }

    return false;
}

export function getLocalStorageItem(key) {
    if (isLocalStorageItemExpired(key)) return;
    return JSON.parse(localStorage.getItem(key)) || null;
}

export function setLocalStorageWithExpiration(key, value, milliseconds, optionalData) {
    if (key && value && milliseconds) {
        const expiration = new Date();
        expiration.setTime(expiration.getTime() + milliseconds);

        const storageItem = {
            value,
            expiration: expiration.toUTCString(),
            optionalData,
        };
        localStorage.setItem(key, JSON.stringify(storageItem));
    }
}

export const removeLocalStorageItem = (key) => localStorage.removeItem(key);
