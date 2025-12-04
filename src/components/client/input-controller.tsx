"use client";
import { Download, Music, Video, Loader2, X } from "lucide-react"; // Import X icon
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { useTranslations } from "next-intl";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

const InputController = () => {
  const t = useTranslations("home");
  const [videoUrl, setVideoUrl] = useState("");
  const [result, setResult] = useState<{
    status: string;
    video: string;
    audio: string;
    thumbnail: string;
  } | null>(null);

  const [isPending, setIsPending] = useState(false);
  const [downloading, setDownloading] = useState<"video" | "audio" | null>(
    null
  );

  const handleDownload = async () => {
    if (!videoUrl) return toast.warning("Paste TikTok video URL first");
    setIsPending(true);
    setResult(null); // 👈 reset trước khi tải mới
    try {
      const res = await axios.get("/api/fetch-video", {
        params: { url: videoUrl },
      });

      if (res.data.status) {
        setResult(res.data);
        setVideoUrl("");
      } else {
        setResult(null);
        setVideoUrl("");
        toast.error("Không tìm thấy video. Vui lòng kiểm tra lại URL.", {
          position: "top-center",
        }); // Thông báo rõ ràng hơn
      }
    } catch (err) {
      console.log(err);
      toast.error("Không tìm thấy video. Vui lòng kiểm tra lại URL.", {
        position: "top-center",
      }); // Thông báo rõ ràng hơn
    }
    setIsPending(false);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(e.target.value);
  };

  const handleClearInput = () => {
    setVideoUrl("");
  };

  const handleFileDownload = async (
    url: string,
    filename: string,
    type: "video" | "audio"
  ) => {
    setDownloading(type);
    try {
      const res = await fetch(
        `/api/download?videoUrl=${encodeURIComponent(url)}&filename=${filename}`
      );
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      a.click();

      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Download failed", err);
      toast.error("Tải về thất bại");
    } finally {
      setDownloading(null);
    }
  };

  return (
    <div>
      <Card className="max-w-4xl mx-auto mb-12 shadow-xl dark:bg-gray-800">
        <CardContent className="p-6">
          <div className="md:flex md:gap-4 ">
            <div className="relative flex-1">
              {" "}
              {/* Thêm relative cho container của Input */}
              <Input
                onChange={handleChangeInput}
                type="url"
                placeholder={t("placeholder")}
                className="flex-1 h-12 text-base pr-10" // Thêm pr-10 để tạo khoảng trống cho nút X
                value={videoUrl}
              />
              {videoUrl && ( // Hiển thị nút X chỉ khi có giá trị trong input
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 text-muted-foreground hover:bg-transparent hover:text-foreground"
                  onClick={handleClearInput}
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
            <Button
              size="lg"
              disabled={!videoUrl || isPending}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white h-12 px-8 md:w-fit w-full mt-4 md:mt-0"
              onClick={handleDownload}
            >
              <Download className="w-5 h-5 mr-2" />
              {!isPending ? t("download") : t("downloading")}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            {t("supportAllLinks")}
          </p>
        </CardContent>

        {isPending ? (
          <div className="flex flex-col space-y-3 mx-auto">
            <Skeleton className="h-[125px] w-[250px] rounded-xl bg-gray-900" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px] bg-gray-900" />
              <Skeleton className="h-4 w-[250px] bg-gray-900" />
            </div>
          </div>
        ) : (
          <div>
            {result && (
              <CardContent>
                <h2 className="text-xl font-semibold text-white mb-4">
                  {t("chooseDownload")}
                </h2>
                {result.thumbnail && (
                  <Image
                    src={result?.thumbnail}
                    alt="Thumbnail"
                    width={200}
                    height={100}
                    className="rounded-sm mx-auto"
                  />
                )}
                <div className="mx-auto flex w-fit flex-col gap-2 mt-6">
                  <Button
                    onClick={() =>
                      handleFileDownload(
                        result?.video,
                        "tiktok_video.mp4",
                        "video"
                      )
                    }
                    disabled={downloading === "video"}
                    className="cursor-pointer bg-blue-700 text-white hover:bg-blue-700/70 w-full"
                  >
                    {downloading === "video" ? (
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    ) : (
                      <Video className="w-5 h-5 mr-2" />
                    )}
                    {downloading === "video"
                      ? t("downloading")
                      : t("downloadVideo")}
                  </Button>

                  <Button
                    onClick={() =>
                      handleFileDownload(
                        result?.audio,
                        "tiktok_audio.mp3",
                        "audio"
                      )
                    }
                    disabled={downloading === "audio"}
                    className="cursor-pointer bg-green-700 text-white hover:bg-green-700/70 w-full"
                  >
                    {downloading === "audio" ? (
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    ) : (
                      <Music className="w-5 h-5 mr-2" />
                    )}
                    {downloading === "audio"
                      ? t("downloading")
                      : t("downloadAudio")}
                  </Button>
                </div>
              </CardContent>
            )}
          </div>
        )}
      </Card>
    </div>
  );
};

export default InputController;
