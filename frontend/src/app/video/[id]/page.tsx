'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import YouTube from 'react-youtube';
import { videoService } from '@/services/api';

export default function VideoPage() {
  const { id } = useParams();
  const { data: video, isLoading, error } = useQuery({
    queryKey: ['video', id],
    queryFn: () => videoService.searchYouTubeVideo(id as string),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading video</div>;
  if (!video) return <div>Video not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <div className="absolute top-0 left-0 w-full h-full">
          <YouTube
            videoId={video.id}
            opts={{
              width: '100%',
              height: '100%',
              playerVars: {
                autoplay: 1,
              },
            }}
            className="w-full h-full"
          />
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
      <p className="text-gray-600 mb-4">{video.channelTitle}</p>
      <p className="whitespace-pre-wrap">{video.description}</p>
    </div>
  );
} 