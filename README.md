
# JP Vocabulary

**JP Vocabulary** is an interactive Japanese vocabulary learning application aimed at helping users expand their vocabulary and improve their communication skills in Japanese. The application is built using React.js (Vite), Tailwind CSS, and other essential libraries to provide a smooth learning experience for both users and administrators.

## Project Theme (~日本~ Learn)

The application is designed to facilitate Japanese language learning through an intuitive and engaging interface. It aims to make the process easier, ensuring users can start learning Japanese with just a simple click.

## Key Features

### For Admin:
- **User Management**: Admins can manage user roles by promoting or demoting users to Admin or Normal User status.
- **Content Management**: Admins can add new lessons and corresponding vocabulary for each lesson.
- **Tutorial Management**: Admins can embed and manage YouTube tutorial links for supplementary learning.
- **Lesson Management**: Admins can view, edit, create, and delete lessons.
- **Vocabulary Management**: Admins can add, edit, and delete vocabulary entries for each lesson.
  
### For Users:
- **Lesson Access**: Users can view and engage with the lessons made available by the Admin.
- **Vocabulary Learning**: Users can access vocabulary sets for each lesson, hear the pronunciation of each vocabulary word, and learn at their own pace.
- **Lesson Completion**: After completing a lesson, users will see a celebratory animation and be redirected back to the lessons page.
- **Tutorials**: Users can access YouTube tutorials embedded by the Admin.

## Technologies Used
- **React.js** (Vite)
- **Tailwind CSS** (for styling)
- **React Router** (for navigation)
- **React Hook Form** (for handling forms)
- **Sonner** (for displaying toast notifications)
- **react-confei** (for interactive completion animations)
- **YouTube API** (for embedding tutorials)

## Authentication System
The system implements a custom authentication mechanism:
- **Registration**: Users provide their full name, email, photo, and a secure password.
- **Login**: Users log in with their email and password.
- **Role-based Access Control**: Routes are protected, ensuring only authenticated users can access specific pages.

## Layout Structure

### For Users:
- **Navbar**: A navigation bar with links for easy access to different pages of the app.
- **Footer**: A footer section providing additional links and information.
- **Pages**:
  - **Lessons**: A protected page displaying available lessons.
  - **Tutorials**: A page showcasing embedded YouTube tutorials.
  - **Login/Register**: Pages for user authentication.

### For Admin:
- **Dashboard**: A central hub for managing the system and overseeing various activities.
- **Pages**:
  - **Manage Lessons**: Admins can create, update, and delete lessons.
  - **Manage Vocabulary**: Admins can create, edit, and delete vocabulary entries.
  - **Manage Users**: Admins can view and manage user roles.

## Main Requirements

### User Management
- **View All Users**: Admins can see a list of all users, displaying their names, emails, and roles.
- **Update User Role**: Admins can promote users to Admin or demote them to Normal User.

### Lesson and Vocabulary Management
- **Create, Update, and Delete Lessons/Vocabulary**: Admins can manage lessons and vocabulary entries, including filtering vocabulary by lesson number.
- **Pagination**: Implement pagination for vocabulary display on the user side.

### User Learning System
- **Lesson Access**: Users can view lessons and vocabulary, and navigate through them.
- **Vocabulary Display**: Vocabulary words show their details (word, pronunciation, when to say, etc.), and users can click "Next" and "Previous" to navigate through them.
- **Pronunciation**: Clicking on a vocabulary word will play its pronunciation aloud.
- **Completion**: After completing a lesson, users will see an interactive confetti animation before being redirected back to the lessons page.

## Installation

Follow these steps to get started with the project:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project folder:
   ```bash
   cd jp-vocabulary
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

### Configuration
**Server URL**:  
To configure your backend server URL, modify the `src/config/envConfig.js` file and add your server URL.

---

> Enjoy your journey to mastering Japanese! 🎌
