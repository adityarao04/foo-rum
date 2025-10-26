// Cookie utility functions for managing user authentication cookies

// Set a cookie with expiry
export const setCookie = (name, value, minutes = 10) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (minutes * 60 * 1000)); // Convert minutes to milliseconds

    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict`;
};

// Get a cookie value
export const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

// Delete a cookie
export const deleteCookie = (name) => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};

// Set user authentication cookie
export const setUserCookie = (userData, minutes = 10) => {
    try {
        const userCookieData = {
            email: userData.email,
            name: userData.name,
            loginTime: new Date().toISOString(),
            expires: new Date(Date.now() + (minutes * 60 * 1000)).toISOString()
        };

        setCookie('userAuth', JSON.stringify(userCookieData), minutes);
        console.log(`User cookie set successfully for ${minutes} minutes`);
    } catch (error) {
        console.error('Error setting user cookie:', error);
        throw error;
    }
};

// Get user from cookie
export const getUserFromCookie = () => {
    try {
        const userCookie = getCookie('userAuth');
        if (!userCookie) {
            return null;
        }

        const userData = JSON.parse(userCookie);

        // Check if cookie has expired
        const now = new Date();
        const expiryDate = new Date(userData.expires);

        if (now > expiryDate) {
            console.log('User cookie has expired');
            deleteCookie('userAuth');
            return null;
        }

        return userData;
    } catch (error) {
        console.error('Error getting user from cookie:', error);
        deleteCookie('userAuth'); // Clear invalid cookie
        return null;
    }
};

// Clear user authentication cookie
export const clearUserCookie = () => {
    deleteCookie('userAuth');
    console.log('User cookie cleared');
};

// Check if user is authenticated via cookie
export const isUserAuthenticated = () => {
    const userData = getUserFromCookie();
    return userData !== null;
};