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
  
  export interface Channel {
    id: string;
    title: string;
    description: string;
    verified: boolean;
    qualityScore: number;
    topics: string[];
  }
