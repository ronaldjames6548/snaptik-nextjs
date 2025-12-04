declare module "btch-downloader" {
  export function ttdl(url: string): Promise<{
    status?: boolean;
    video?: string;
    audio?: string;
    thumbnail?: string;
  }>;
}
