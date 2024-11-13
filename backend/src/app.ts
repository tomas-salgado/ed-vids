import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { YouTubeService } from './services/youtube.service.js';

dotenv.config();

const app = express();
const port = 3001;
const youtubeService = new YouTubeService();

app.use(cors());
app.use(express.json());

const mockVideos = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'Introduction to TypeScript',
    description: 'Learn the basics of TypeScript',
    channelId: 'channel1',
    channelTitle: 'Code Academy',
    publishedAt: new Date(),
    thumbnailUrl: `https://img.youtube.com/vi/W6NZfCO5SIk/maxresdefault.jpg`,
    qualityScore: 4.5,
    topics: ['programming', 'typescript'],
    educationalValue: 4.8,
    verifiedChannel: true
  }
];

app.get('/api/videos', (_req, res) => {
  res.json(mockVideos);
});

app.get('/api/youtube/video/:id', async (req, res) => {
  try {
    const video = await youtubeService.getVideoById(req.params.id);
    res.json(video);
  } catch (error) {
    res.status(404).json({ message: 'Video not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});