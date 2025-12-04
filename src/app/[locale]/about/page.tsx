// src/app/[locale]/about/page.tsx (hoặc file bạn đặt tên là Page.tsx)

import React from "react";
import { useTranslations } from "next-intl"; // Import useTranslations
import { Metadata } from "next";
import { getTranslations } from "next-intl/server"; // <-- Đây mới là nơi đúng!

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const t = await getTranslations("AboutPage"); // Lấy hàm dịch cho namespace 'AboutPage' trên server

  const WEBSITE_URL = process.env.NEXT_PUBLIC_BASE_URL || ""; // URL cơ sở của trang web

  return {
    title: t("title"), // Tiêu đề trang
    description: t("metaDescription"), // Mô tả trang cho SEO
    keywords: t("metaKeywords").split(", "), // Từ khóa cho SEO, tách bằng dấu phẩy
    metadataBase: new URL(WEBSITE_URL), // URL cơ sở cho metadata
    alternates: {
      canonical: `/${locale}/about`, // URL chính tắc cho trang này
      languages: {
        vi: "/vi/about", // Phiên bản tiếng Việt
        en: "/en/about", // Phiên bản tiếng Anh
      },
    },
    openGraph: {
      title: t("title"),
      description: t("metaDescription"),
      url: `${WEBSITE_URL}/${locale}/about`,
      siteName: "Snap Tik", // Tên website
      images: [
        {
          url: "/images/thumb-seo.png", // Thêm hình ảnh OG của bạn
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
      locale: locale === "vi" ? "vi_VN" : "en_US", // Locale cho OpenGraph
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function About() {
  const t = useTranslations("AboutPage"); // Lấy hàm dịch cho namespace 'AboutPage'

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mt-20">
        {t("title")}
      </h1>
      <p className="text-lg text-center font-medium mb-8 text-gray-700 dark:text-gray-300">
        {t("missionStatement")}
      </p>

      {/* --- Câu chuyện của tôi --- */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        {t("myStoryTitle")}
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        {t("myStoryContent1")}
      </p>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        {t("myStoryContent2")}
      </p>

      {/* --- Cách hoạt động của Snap Tik --- */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        {t("howItWorksTitle")}
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        {t("howItWorksContent1")}
      </p>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        {t("howItWorksContent2")}
      </p>

      {/* --- Tại sao chọn Snap Tik? --- */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        {t("whyChooseUsTitle")}
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>{t("whyChooseUsBullet1")}</li>
        <li>{t("whyChooseUsBullet2")}</li>
        <li>{t("whyChooseUsBullet3")}</li>
        <li>{t("whyChooseUsBullet4")}</li>
        <li>{t("whyChooseUsBullet5")}</li>
      </ul>

      {/* --- Cam kết của tôi --- */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        {t("myCommitmentTitle")}
      </h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        {t("myCommitmentContent")}
      </p>

      {/* --- Liên hệ --- */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        {t("getInTouchTitle")}
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        {t("getInTouchContent")}
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
        <li>
          <strong className="text-gray-800 dark:text-white">
            {t("contactTelegram")}
          </strong>{" "}
          <a
            href="https://t.me/n3tdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {t("n3tdevHandle")}
          </a>
        </li>
      </ul>
    </div>
  );
}
