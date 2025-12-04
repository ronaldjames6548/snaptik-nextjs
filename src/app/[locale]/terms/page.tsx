// src/app/[locale]/terms/page.tsx

import React from "react";
import type { Metadata } from "next"; // Import Metadata type
import { useTranslations } from "next-intl"; // For client-side translations within the component
import { getTranslations } from "next-intl/server"; // For server-side translations in generateMetadata

// This function generates dynamic metadata for the page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  // Get translations for the 'TermsPage' namespace on the server
  const t = await getTranslations("TermsPage");

  // Get your website base URL from environment variables
  const WEBSITE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

  return {
    title: t("title"), // Page title for SEO
    description: t("metaDescription"), // Meta description for SEO
    keywords: t("metaKeywords").split(", "), // Keywords for SEO, split by comma
    metadataBase: new URL(WEBSITE_URL), // Base URL for metadata
    alternates: {
      canonical: `/${locale}/terms`, // Canonical URL for this page
      languages: {
        vi: "/vi/terms", // Vietnamese version URL
        en: "/en/terms", // English version URL
      },
    },
    openGraph: {
      title: t("title"),
      description: t("metaDescription"),
      url: `${WEBSITE_URL}/${locale}/terms`,
      siteName: "Snap Tik", // Your website name
      images: [
        {
          url: "/images/thumb-seo.png", // Path to your Open Graph image
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
      locale: locale === "vi" ? "vi_VN" : "en_US", // OpenGraph locale
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

// Your Client Component for the Terms page
export default function Page() {
  // Lấy hàm t (translate) cho namespace 'TermsPage'
  const t = useTranslations("TermsPage");
  const WEBSITE_URL = process.env.NEXT_PUBLIC_BASE_URL || ""; // Lấy URL từ biến môi trường

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {/* Page's main heading. Given your previous preference, this is h1 for the page title. */}
      <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mt-20">
        {t("title")}
      </h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        {/* Sử dụng interpolation nếu có biến trong chuỗi */}
        {t.rich("welcomeText1", {
          websiteUrl: () => (
            <a
              href={WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {WEBSITE_URL}
            </a>
          ),
        })}
      </p>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        {t("welcomeText2")}
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        {t("section1Title")}
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        {t("section1Content")}
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        {t("section2Title")}
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        {t("section2Content")}
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        {t("section3Title")}
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
        <li>
          <strong className="font-medium text-gray-800 dark:text-white">
            {t("legalUseTitle")}
          </strong>{" "}
          {t("legalUseContent")}
        </li>
        <li>
          <strong className="font-medium text-gray-800 dark:text-white">
            {t("noContentOwnershipTitle")}
          </strong>{" "}
          {t("noContentOwnershipContent")}
        </li>
        <li>
          <strong className="font-medium text-gray-800 dark:text-white">
            {t("yourResponsibilityTitle")}
          </strong>{" "}
          {t("yourResponsibilityContent")}
        </li>
        <li>
          <strong className="font-medium text-gray-800 dark:text-white">
            {t("usageRestrictionsTitle")}
          </strong>{" "}
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>{t("usageRestrictionsBullet1")}</li>
            <li>{t("usageRestrictionsBullet2")}</li>
            <li>{t("usageRestrictionsBullet3")}</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        {t("section4Title")}
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        {t("section4Content")}
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        {t("section5Title")}
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        {t("section5Content")}
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        {t("section6Title")}
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        {t("section6Content1")}
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700 dark:text-gray-300">
        <li>{t("section6Bullet1")}</li>
        <li>{t("section6Bullet2")}</li>
        <li>{t("section6Bullet3")}</li>
        <li>{t("section6Bullet4")}</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        {t("section7Title")}
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        {t("section7Content")}
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        {t("section8Title")}
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        {t("section8Content")}
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
            @n3tdev
          </a>
        </li>
      </ul>
    </div>
  );
}
