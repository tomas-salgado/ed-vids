# Educational Video Platform

A modern web application for discovering and watching educational content, built with Next.js and Express.

## Features

- 🎥 YouTube video integration
- 🎨 Modern, responsive dark theme UI with Tailwind CSS
- ✨ Real-time video quality scoring
- 🔍 Educational content verification
- 🚀 Fast and efficient data fetching with TanStack Query

## Tech Stack

### Frontend
- Next.js 15.0.3
- React 18
- TypeScript
- TanStack Query
- Tailwind CSS
- React YouTube Player

### Backend
- Express.js
- TypeScript
- YouTube Data API v3
- CORS enabled

## Getting Started

### Prerequisites
- Node.js 18+ installed
- YouTube API key

### Backend Setup

1. Install dependencies:

```bash
cd backend
npm install
```

2. Create a `.env` file in the backend directory:
```bash
YOUTUBE_API_KEY=your_youtube_api_key_here
PORT=3001
```

3. Start the development server:
```bash
npm run dev
```

The backend API will be available at http://localhost:3001

### Frontend Setup

1. Install dependencies:

```bash
cd frontend
npm install
```

2. Create a `.env.local` file in the frontend directory:
```bash
NEXT_PUBLIC_API_URL=http://localhost:3001
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at http://localhost:3000

## Project Structure

### Frontend
- `/src/app` - Next.js app router pages
- `/src/components` - Reusable React components
- `/src/services` - API service layer
- `/src/types` - TypeScript type definitions

### Backend
- `/src/services` - Business logic and external API integration
- `/src/types` - Shared type definitions