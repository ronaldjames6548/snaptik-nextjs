// src/app/[locale]/dmca/page.tsx

import React from "react";
import type { Metadata } from "next"; // Import Metadata type
import { useTranslations } from "next-intl"; // Import useTranslations for client component
import { getTranslations } from "next-intl/server"; // Import getTranslations for server component (metadata)

// Hàm generateMetadata để tạo metadata động cho trang
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const t = await getTranslations("DmcaPage"); // Lấy hàm dịch cho namespace 'DmcaPage' trên server

  // Sử dụng WEBSITE_URL từ biến môi trường. Đảm bảo nó được set.
  const WEBSITE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

  return {
    title: t("title"), // Tiêu đề trang
    description: t("metaDescription"), // Mô tả trang cho SEO
    keywords: t("metaKeywords").split(", "), // Từ khóa cho SEO, tách bằng dấu phẩy
    metadataBase: new URL(WEBSITE_URL), // URL cơ sở cho metadata
    alternates: {
      canonical: `/${locale}/dmca`, // URL chính tắc cho trang này
      languages: {
        vi: "/vi/dmca", // Phiên bản tiếng Việt
        en: "/en/dmca", // Phiên bản tiếng Anh
      },
    },
    openGraph: {
      title: t("title"),
      description: t("metaDescription"),
      url: `${WEBSITE_URL}/${locale}/dmca`,
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

// Component Page (Client Component) - Đổi tên thành Dmca để rõ ràng hơn nếu bạn muốn
export default function Page() {
  const t = useTranslations("DmcaPage"); // Lấy hàm dịch cho namespace 'DmcaPage'

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {/* Tiêu đề chính của trang này */}
      <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mt-20">
        {t("title")}
      </h1>
      <p className="mb-2 text-sm text-center text-gray-500 dark:text-gray-400">
        {t("lastUpdated")}
      </p>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        {t("introduction")}
      </p>

      {/* --- Báo cáo Vi phạm Bản quyền (Chỉ Telegram) --- */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        {t("reportingTitle")}
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        {t("reportingContent")}{" "}
        <a
          href="https://t.me/n3tdev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          @n3tdev
        </a>
        .
      </p>

      {/* --- Hành động của chúng tôi --- */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        {t("ourActionTitle")}
      </h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        {t("ourActionContent")}
      </p>

      {/* --- Tuyên bố Miễn trừ Trách nhiệm --- */}
      <p className="italic text-gray-600 dark:text-gray-400 mt-8 text-center">
        {t("disclaimer")}
      </p>
    </div>
  );
}
