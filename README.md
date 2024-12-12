# real-time-dashboard

## Prerequisites
- Node.js v20
- Yarn package manager

## Project Setup

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/rayhanmhd123/real-time-dashboard.git
   cd real-time-dashboard/backend
   ```

2. Configure environment:
   ```sh
   cp .env.example .env
   # Edit .env to include your MongoDB URL
   ```

3. Install dependencies:
   ```sh
   yarn
   ```

4. Start development server:
   ```sh
   yarn dev
   ```

### Frontend Setup
1. Navigate to frontend folder:
   ```sh
   cd ../frontend
   ```

2. Install dependencies:
   ```sh
   yarn
   ```

3. Start development server:
   ```sh
   yarn dev
   ```

## Deployment

### Backend Deployment
- Ensure cloud provider supports Node.js v20
- Configure environment variables
- Install PM2 globally:
   ```sh
   npm install -g pm2
   ```
- Start the backend using PM2:
   ```
   pm2 start ecosystem.config.js
   ```

### Frontend Deployment
1. Build for production:
   ```sh
   yarn build
   ```

2. Start the frontend using PM2:
   ```
   pm2 start ecosystem.config.js
   ```

## Assumptions
- Data displayed is limited to 20 items.
- Minimum temperature is 0°C
- Maximum temperature is 40°C

## Folder Structure
- Backend endpoints are organized in a folder named endpoints to facilitate maintenance as the project scales.

## Middleware and Error Handling
- In app.ts, you can add necessary middleware or handle errors globally.

## Technologies
- Node.js
- MongoDB
- Yarn

## Development Challenges
- Forgot to set the endpoint for the server in the environment configuration, causing issues during deployment.

## Production server
- FE : http://103.129.148.170:3011/dashboard
- BE : http://103.129.148.170:3010/dashboard