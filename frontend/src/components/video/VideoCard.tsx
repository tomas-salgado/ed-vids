import Link from 'next/link';
import Image from 'next/image';
import { Video } from '../../types/video';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <Link href={`/video/${video.id}`}>
      <div className="group relative bg-[var(--card-bg)] rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="aspect-video relative">
          <Image 
            src={video.thumbnailUrl} 
            alt={video.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium truncate text-[var(--foreground)] group-hover:text-blue-400 transition-colors">
            {video.title}
          </h3>
          <p className="text-sm text-gray-400 mt-1">{video.channelTitle}</p>
          <div className="mt-3 flex items-center gap-2">
            {video.verifiedChannel && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/30 text-blue-200">
                Verified
              </span>
            )}
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/30 text-green-200">
              {video.qualityScore.toFixed(1)} ⭐
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
