import axios from 'axios';
import { Video, VideoSearchParams } from '../types/video';

const API_BASE_URL = 'http://localhost:3001/api';

export const videoService = {
  async getVideos(params?: VideoSearchParams): Promise<Video[]> {
    const response = await axios.get(`${API_BASE_URL}/videos`, { params });
    return response.data;
  },

  async getVideo(id: string): Promise<Video> {
    const response = await axios.get(`${API_BASE_URL}/videos/${id}`);
    return response.data;
  },

  async searchYouTubeVideo(id: string): Promise<Video> {
    const response = await axios.get(`${API_BASE_URL}/youtube/video/${id}`);
    return response.data;
  }
};
