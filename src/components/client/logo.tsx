import { Link } from "@/i18n/navigation";
import { Play } from "lucide-react";
import { useTranslations } from "next-intl";

import React from "react";

export default function Logo() {
  const t = useTranslations("home");
  return (
    <Link href={"/"} className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
        <Play className="w-5 h-5 text-white fill-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          {process.env.NEXT_PUBLIC_NAME_WEBSITE}
        </span>
        <span className="text-xs text-muted-foreground">
          {t("videoDownloader")}
        </span>
      </div>
    </Link>
  );
}
