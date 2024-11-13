'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Video } from '../types/video';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import VideoCard from '@/components/video/VideoCard';

export default function Home() {
  const { data: videos, isLoading, error } = useQuery<Video[]>({
    queryKey: ['videos'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3001/api/videos');
      if (!Array.isArray(response.data)) {
        throw new Error('Invalid response format');
      }
      return response.data;
    }
  });

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <header className="bg-[var(--nav-bg)] border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-[var(--foreground)]">EduTube</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search videos..."
                  className="w-64 pl-10 pr-4 py-2 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[var(--foreground)] placeholder-gray-400"
                />
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div className="text-center">Loading videos...</div>
        ) : error ? (
          <div className="text-center text-red-600">
            {error instanceof Error ? error.message : 'Error loading videos'}
          </div>
        ) : !videos?.length ? (
          <div className="text-center">No videos found</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
