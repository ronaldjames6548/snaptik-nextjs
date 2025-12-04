// src/app/[locale]/guide/page.tsx

import React from "react";
import type { Metadata } from "next"; // Import Metadata type
import { useTranslations } from "next-intl"; // For client-side translations within the component
import { getTranslations } from "next-intl/server"; // For server-side translations in generateMetadata
import GuideSection from "@/components/client/guid-section";

// This function generates dynamic metadata for the page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  // Get translations for the 'GuidePage' namespace on the server
  const t = await getTranslations("GuidePage");

  // Get your website base URL from environment variables
  const WEBSITE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

  return {
    title: t("title"), // Page title for SEO
    description: t("metaDescription"), // Meta description for SEO
    keywords: t("metaKeywords").split(", "), // Keywords for SEO, split by comma
    metadataBase: new URL(WEBSITE_URL), // Base URL for metadata
    alternates: {
      canonical: `/${locale}/guide`, // Canonical URL for this page
      languages: {
        vi: "/vi/guide", // Vietnamese version URL
        en: "/en/guide", // English version URL
      },
    },
    openGraph: {
      title: t("title"),
      description: t("metaDescription"),
      url: `${WEBSITE_URL}/${locale}/guide`,
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

// Your Client Component for the Guide page
export default function Guide() {
  const t = useTranslations("GuidePage"); // Get translations for the 'GuidePage' namespace

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {/* Page's main heading. Given your previous preference, this is h1 for the page title. */}
      <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mt-20">
        {t("title")}
      </h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300 text-center">
        {t("introText")}
      </p>

      <GuideSection />
    </div>
  );
}
