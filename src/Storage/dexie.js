import Dexie from 'dexie';
import { setUserCookie, clearUserCookie } from '../Utils/cookieUtils';

// Initialize Dexie database
const db = new Dexie('UserDatabaseV2');

// Define the database schema
db.version(1).stores({
    users: '&email, password, name, createdAt'
});

// Function to initialize demo user
export const initializeDemoUser = async() => {
    try {
        // Check if demo user already exists
        const existingDemoUser = await db.users.where('email').equals('demo@example.com').first();

        if (!existingDemoUser) {
            // Add demo user if it doesn't exist
            await db.users.add({
                email: 'demo@example.com',
                password: 'password123',
                name: 'Demo User',
                createdAt: new Date()
            });
            console.log('Demo user created successfully');
        } else {
            console.log('Demo user already exists, skipping creation');
        }
    } catch (error) {
        console.error('Error initializing demo user:', error);
        throw error;
    }
};

// User data model
export class User {
    constructor(email, password, name) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.createdAt = new Date();
    }
}

// Function to populate user data
export const populateUserData = async(email, password, name) => {
    try {
        // Validate input
        if (!email || !password || !name) {
            throw new Error('Email and password are required');
        }

        // Check if user already exists
        const existingUser = await db.users.where('email').equals(email).first();
        if (existingUser) {
            throw new Error('User with this email already exists');
        }

        // Create new user
        const user = new User(email, password, name);

        // Add user to database
        const userId = await db.users.add(user);

        console.log('User added successfully with ID:', userId);
        return { success: true, userId, user };
    } catch (error) {
        console.error('Error populating user data:', error);
        throw error;
    }
};

// Function to get user by email
export const getUserByEmail = async(email) => {
    try {
        const user = await db.users.where('email').equals(email).first();
        return user;
    } catch (error) {
        console.error('Error getting user by email:', error);
        throw error;
    }
};

// Function to get all users
export const getAllUsers = async() => {
    try {
        const users = await db.users.toArray();
        return users;
    } catch (error) {
        console.error('Error getting all users:', error);
        throw error;
    }
};





// Function to authenticate user
export const authenticateUser = async(email, password, rememberMe = false) => {
    try {
        const user = await db.users.where('email').equals(email).first();
        if (!user) {
            throw new Error('User not found');
        }

        if (user.password !== password) {
            throw new Error('Invalid password');
        }

        // Set cookie with user data - 10 minutes by default, 30 minutes if remember me
        const cookieExpiryMinutes = rememberMe ? 30 : 10;
        setUserCookie(user, cookieExpiryMinutes);

        return { success: true, user };
    } catch (error) {
        console.error('Authentication error:', error);
        throw error;
    }
};

// Function to logout user
export const logoutUser = () => {
    try {
        clearUserCookie();
        return { success: true };
    } catch (error) {
        console.error('Logout error:', error);
        throw error;
    }
};

// Export the database instance for direct access if needed
export default db;