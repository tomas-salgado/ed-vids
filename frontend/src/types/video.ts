export interface Video {
    id: string;
    title: string;
    description: string;
    channelId: string;
    channelTitle: string;
    publishedAt: Date;
    thumbnailUrl: string;
    qualityScore: number;
    topics: string[];
    educationalValue: number;
    verifiedChannel: boolean;
  }
  
  export interface VideoSearchParams {
    query?: string;
    topic?: string;
    minQualityScore?: number;
    verifiedOnly?: boolean;
  }