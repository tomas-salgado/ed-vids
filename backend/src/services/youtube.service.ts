import { google } from 'googleapis';
import { Video } from '../types/video.types.js';

export class YouTubeService {
  private youtube;

  constructor() {
    this.youtube = google.youtube({
      version: 'v3',
      auth: process.env.YOUTUBE_API_KEY
    });
  }

  async getVideoById(videoId: string): Promise<Video> {
    try {
      const response = await this.youtube.videos.list({
        part: ['snippet', 'statistics'],
        id: [videoId]
      });

      const video = response.data.items?.[0];
      if (!video) throw new Error('Video not found');

      return {
        id: videoId,
        title: video.snippet?.title || '',
        description: video.snippet?.description || '',
        channelId: video.snippet?.channelId || '',
        channelTitle: video.snippet?.channelTitle || '',
        publishedAt: new Date(video.snippet?.publishedAt || ''),
        thumbnailUrl: video.snippet?.thumbnails?.maxres?.url || 
                      video.snippet?.thumbnails?.high?.url ||
                      video.snippet?.thumbnails?.medium?.url ||
                      video.snippet?.thumbnails?.default?.url || '',
        qualityScore: 4.5,
        topics: ['education'],
        educationalValue: 4.5,
        verifiedChannel: true
      };
    } catch (error) {
      throw new Error('Failed to fetch video from YouTube');
    }
  }
} 