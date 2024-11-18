
# Trade Data Dashboard

This is a Trade Data Dashboard application built with Next.js 13, Auth0, React, Chart.js, and Tailwind CSS. It provides user authentication and an interactive dashboard to analyze trade data insights with metrics and visualizations.

## Features
- **User Authentication**: Secure login using Auth0.
- **Dashboard**: Displays trade data metrics and line charts for annual trade values.
- **Dynamic Data Handling**: Fetches and aggregates data from a JSON file.
- **Responsive Design**: Optimized for both desktop and mobile using Tailwind CSS.
- **Interactive Visualizations**: Line chart powered by Chart.js.

## Folder Structure

```
├── app
│   ├── components
│   │   ├── Chart.tsx          # Line chart for trade data visualization
│   │   ├── Dashboard.tsx      # Dashboard displaying metrics and charts
│   │   ├── Home.tsx           # Home page content for authenticated users
│   │   ├── Login.tsx          # Login page with Auth0 integration
│   │   ├── Logout.tsx         # Logout button for user sign-out
│   │   ├── Metrics.tsx        # Component for displaying trade metrics
│   │   ├── NavBar.tsx         # Navigation bar with links and logout button
│   ├── dashboard
│   │   └── page.tsx           # Dashboard route entry point
│   ├── home
│   │   └── page.tsx           # Home route entry point
│   ├── page.tsx               # Main entry point for root route (`/`)
│   └── layout.tsx             # Application layout with global styling and NavBar
├── public
│   ├── images
│   │   └── trade-data-analytics.jpg  # Image for home page display
│   └── combined.json          # Trade data in JSON format
├── styles
│   └── globals.css            # Global Tailwind CSS styling
├── .env.local                 # Environment variables for Auth0
├── README.md                  # Project documentation
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
```

## Setup Instructions

### 1. Clone the Repository
Clone the repository to your local machine:
```bash
git clone https://github.com/Sanyam2909/MTS-1-Frontend-Assignment.git
cd trade-data-dashboard
```

### 2. Install Dependencies
Install the required dependencies:
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory and configure your Auth0 credentials:
```env
NEXT_PUBLIC_AUTH0_DOMAIN=<your-auth0-domain>
NEXT_PUBLIC_AUTH0_CLIENT_ID=<your-auth0-client-id>
NEXT_PUBLIC_AUTH0_REDIRECT_URI=http://localhost:3000
```

### 4. Start the Development Server
Start the application in development mode:
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Application Overview

### 1. Authentication
- Managed via **Auth0**.
- Login and logout functionality implemented in `Login.tsx` and `Logout.tsx`.

### 2. Dashboard
- Displays aggregated trade data metrics using the `Metrics` component.
- Visualizes data trends with a responsive line chart using **Chart.js**.

### 3. Routing
- Main routes:
  - `/`: Entry point (`app/page.tsx`) redirects based on authentication status.
  - `/home`: Home page for authenticated users.
  - `/dashboard`: Interactive dashboard for data insights.

### 4. Styling
- **Tailwind CSS** is used for responsive design and styling consistency.

### 5. Data Handling
- The `combined.json` file in the `public` folder contains the trade data.
- Data is fetched and processed in the `Dashboard` component using **Axios**.

---

## Key Scripts

- **Run Development Server**: Starts the application in development mode. Visit [http://localhost:3000](http://localhost:3000).
  ```bash
  npm run dev
  ```

- **Build for Production**: Generates the production build of the application.
  ```bash
  npm run build
  ```

- **Start Production Server**: Starts the production server after the application has been built.
  ```bash
  npm start
  ```

- **Lint Code**: Runs ESLint to analyze the codebase for issues and enforce coding standards.
  ```bash
  npm run lint
  ```

---

## Technologies Used

- **Framework**: Next.js 13
- **Authentication**: Auth0
- **Data Visualization**: Chart.js
- **Styling**: Tailwind CSS
- **Language**: TypeScript

---

## Deployment

### Build the Application
Generate the production-ready build:
```bash
npm run build
```

### Start the Production Server Locally
Run the application locally in production mode:
```bash
npm start
```

### Deploy to a Hosting Platform
- After building the production version, deploy the application to a hosting platform like **Netlify**, **Heroku**, or any Node.js-supported platform.
- Follow the specific hosting platform’s documentation for deployment steps.

---

## Notes

- The project is built using Next.js 13 with authentication handled by Auth0.
- Ensure that you replace the placeholder Auth0 credentials in `.env.local` with your own to enable authentication.
