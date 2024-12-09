# real-time-dashboard

## Prerequisites
- Node.js v20
- Yarn package manager

## Project Setup

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/real-time-dashboard.git
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
- Deploy backend code

### Frontend Deployment
1. Build for production:
   ```sh
   yarn build
   ```

2. Deploy build output

## Assumptions
- Data displayed is limited to 20 items.

## Folder Structure
- Backend endpoints are organized in a folder named endpoints to facilitate maintenance as the project scales.

## Middleware and Error Handling
- In app.ts, you can add necessary middleware or handle errors globally.

## Technologies
- Node.js
- MongoDB
- Yarn