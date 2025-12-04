/* eslint-disable @typescript-eslint/no-unused-vars */
import FAQSection from "@/components/client/faq-section";
import FeaturesSection from "@/components/client/feature-section";
import GuideSection from "@/components/client/guid-section";
import InputController from "@/components/client/input-controller";
import HeroSection from "@/components/client/input-controller";
import { Badge } from "@/components/ui/badge";
import axios from "axios";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

const Home = () => {
  const t = useTranslations("home");
  return (
    <main>
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge
            variant="secondary"
            className="mb-6 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 border-pink-200 dark:from-pink-900 dark:to-purple-900 dark:text-pink-100"
          >
            <Star className="w-3 h-3 mr-1" />
            {t("number1Downloader")}
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {t("heroTitle")
              .split(" ")
              .map((word, index) =>
                word === "TikTok" ? (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
                  >
                    {word}{" "}
                  </span>
                ) : (
                  <span key={index}>{word} </span>
                )
              )}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {t("heroDescription")}
          </p>
          {/* Input */}
          <InputController />
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500 mb-2">10M+</div>
              <div className="text-sm text-muted-foreground">
                {t("videosDownloaded")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">
                500K+
              </div>
              <div className="text-sm text-muted-foreground">{t("users")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground">{t("uptime")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">{t("rating")}</div>
            </div>
          </div>
        </div>
      </section>
      <FeaturesSection />
      <GuideSection />
      <FAQSection />
    </main>
  );
};

export default Home;
