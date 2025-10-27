# Foo Rum - Social Feed Application

A modern, responsive social feed application built with React and TypeScript, featuring authentication, feed management, and interactive UI components.

## 🚀 Live Demo

**GitHub Pages**: [https://foo-rum-xi.vercel.app/](https://foo-rum-xi.vercel.app/)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Authentication](#authentication)
- [Components](#components)
- [State Management](#state-management)
- [Deployment](#deployment)
- [Development Notes](#development-notes)

## ✨ Features

### 🔐 Authentication System
- **Login/Register Modal**: Seamless authentication flow with modal interface
- **Persistent Sessions**: 10-minute cookie-based sessions with "Remember Me" option
- **Form Validation**: Email validation and error handling
- **Demo Accounts**: Pre-configured test accounts for easy testing

### 📱 Feed Management
- **Rich Text Editor**: Post creation with formatting options (bold, italic, underline, lists, quotes)
- **Real-time Updates**: New posts appear instantly in the feed
- **Interactive Elements**: Like, comment, and share buttons (with "function not implemented" alerts)
- **Responsive Design**: Optimized for both desktop and mobile devices

### 🎨 UI/UX Features
- **Skeleton Loading**: Smooth loading states for better user experience
- **Tooltips**: Contextual help and information tooltips
- **Modern Header**: Clean navigation with logo and user actions
- **Smooth Animations**: Tailwind CSS transitions and hover effects
- **Modal System**: Reusable modal component for various interactions

### 🛠️ Technical Features
- **TypeScript**: Full type safety and better development experience
- **Redux State Management**: Centralized state with ducks pattern
- **IndexedDB Storage**: Client-side data persistence using Dexie
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Architecture**: Atomic design pattern with reusable components

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **TypeScript 4.9.5** - Type safety and better DX
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **React Router DOM 7.9.4** - Client-side routing

### State Management
- **Redux 5.0.1** - Predictable state container
- **React Redux 9.2.0** - React bindings for Redux
- **Redux Thunk 3.1.0** - Async action handling

### Data Storage
- **Dexie 4.2.1** - IndexedDB wrapper for client-side storage

### Development Tools
- **React Scripts 5.0.1** - Build and development tools
- **vercel** - for deployments



## 📁 Project Structure

```
src/
├── Auth/                    # Authentication context and provider
│   ├── AuthProvider.tsx
│   └── auth-context.tsx
├── components/              # Reusable UI components
│   ├── atoms/              # Basic building blocks
│   │   ├── Feed/
│   │   ├── Header/
│   │   ├── LoginRegister/
│   │   ├── Modal/
│   │   ├── Skeletons/
│   │   ├── Social/
│   │   └── Tooltip/
│   ├── molecules/          # Component combinations
│   │   ├── AddFeed/
│   │   └── FeedContainer/
│   ├── pages/              # Page components
│   │   └── Homepage/
│   └── Templates/          # Layout templates
│       └── PageLayout/
├── Data/                   # Static data and content
├── state/                  # Redux state management
│   ├── ducks/
│   │   ├── auth/          # Authentication state
│   │   └── feed/          # Feed state
│   └── store.js
├── Storage/                # Database and storage
│   └── dexie.js
├── Utils/                  # Utility functions
│   └── helpers/
└── App.tsx                 # Main application component
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/adityarao04/foo-rum.git
   cd foo-rum
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production

## 🔐 Authentication

### Demo Accounts
The application includes pre-configured demo accounts for testing:

```
Email: demo@example.com
Password: password123


### Authentication Flow
1. **Unauthenticated users** see the feed but cannot interact with it
2. **Any interaction** triggers the login/register modal
3. **After authentication**, users can fully interact with the feed
4. **Sessions persist** for 10 minutes (30 minutes with "Remember Me")

### Features
- Email validation
- Password requirements
- Error handling and user feedback
- Cookie-based session management
- Automatic logout on session expiry

## 🧩 Components

### Atomic Design Pattern
The project follows atomic design principles:

- **Atoms**: Basic UI elements (buttons, inputs, tooltips)
- **Molecules**: Component combinations (forms, cards)
- **Templates**: Page layouts and structures
- **Pages**: Complete page implementations

### Key Components

#### Modal Component
- Reusable modal with backdrop
- Keyboard navigation (ESC to close)
- Customizable content and styling
- Click outside to close

#### Tooltip Component
- Hover-activated tooltips
- Customizable positioning
- Tailwind CSS styling
- Accessible with ARIA labels

#### Skeleton Loading
- Smooth loading animations
- Placeholder content during data fetching
- Improved perceived performance

## 🔄 State Management

### Redux Architecture
The application uses Redux with the ducks pattern:

- **Actions**: Define what can happen in the app
- **Reducers**: Specify how state changes in response to actions
- **Selectors**: Extract specific pieces of state
- **Thunks**: Handle async operations

### State Structure
```typescript
{
  auth: {
    isAuthenticated: boolean;
    user: User | null;
    loading: boolean;
    error: string | null;
  },
  feed: {
    posts: Post[];
    loading: boolean;
    error: string | null;
  }
}
```

## 🗄️ Data Storage

### IndexedDB with Dexie
- **Client-side storage** for user data and posts
- **Offline capability** for better user experience
- **Automatic initialization** with demo user
- **CRUD operations** for user management

### Database Schema
```typescript
users: {
  email: string (primary key);
  password: string;
  name: string;
  createdAt: Date;
}
```

### **Cursor AI Integration**
- **Code Autocompletion**: Intelligent suggestions for React, TypeScript, and Tailwind CSS


*Note: While AI tool like cursor was used, all architectural decisions, design choices, and final implementations were made by me, using AI to some level shows I have the knowlege and ability to adapt according to the changing model*

## 💡 Development Notes

### What Was Fun
- **Component Architecture**: Building reusable, modular components
- **State Management**: Implementing Redux(Ducks) with TypeScript
- **UI/UX Design**: Was not comfortable with Tailwind as I don't use it at my origanisation but with changes was getting better got in flow
- **IndexedDB Integration**: Learning client-side database management

### Challenges
- **TypeScript Integration**: Ensuring type safety across the application
- **Responsive Design**: Making the app work seamlessly on all devices
- **State Persistence**: Implementing cookie-based authentication

### Future Enhancements
- [ ] passwords will be stored SHA256 hashed
- [ ] Custom server for security and API masking when API's will be integrated
- [ ] Image upload functionality
- [ ] User profiles and settings
- [ ] Progressive Web App features


## 👨‍💻 Author

**Aditya Rao**
- GitHub: [@adityarao04](https://github.com/adityarao04)
- Project: [Foo Rum](https://foo-rum-xi.vercel.app/)

---

*Built with ❤️ using React, TypeScript, and Tailwind CSS*
