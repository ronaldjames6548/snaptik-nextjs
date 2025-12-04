// src/app/[locale]/privacy/page.tsx

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
  // Get translations for the 'PrivacyPage' namespace on the server
  const t = await getTranslations("PrivacyPage");

  // Get your website base URL from environment variables
  const WEBSITE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

  return {
    title: t("title"), // Page title for SEO
    description: t("metaDescription"), // Meta description for SEO
    keywords: t("metaKeywords").split(", "), // Keywords for SEO, split by comma
    metadataBase: new URL(WEBSITE_URL), // Base URL for metadata
    alternates: {
      canonical: `/${locale}/privacy`, // Canonical URL for this page
      languages: {
        vi: "/vi/privacy", // Vietnamese version URL
        en: "/en/privacy", // English version URL
      },
    },
    openGraph: {
      title: t("title"),
      description: t("metaDescription"),
      url: `${WEBSITE_URL}/${locale}/privacy`,
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

// Your Client Component for the Privacy page
export default function Privacy() {
  const t = useTranslations("PrivacyPage"); // Get translations for the 'PrivacyPage' namespace

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {/* Page's main heading. Given your previous preference, this is h1 for the page title. */}
      <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mt-20">
        {t("title")}
      </h1>
      <p className="mb-2 text-sm text-center text-gray-500 dark:text-gray-400">
        {t("lastUpdated")}
      </p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        {t("introduction1")}
      </p>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        {t("introduction2")}
      </p>

      {/* --- 1. We Do Not Collect Personal Data --- */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        {t("noDataCollectionTitle")}
      </h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        {t("noDataCollectionContent")}
      </p>

      {/* --- 2. How Snap Tik Works (No Data Collection) --- */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        {t("howItWorksTitle")}
      </h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        {t("howItWorksContent")}
      </p>

      {/* --- 3. Third-Party Services --- */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        {t("thirdPartyServicesTitle")}
      </h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        {t("thirdPartyServicesContent")}
      </p>

      {/* --- 4. Cookies --- */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        {t("cookiesTitle")}
      </h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        {t("cookiesContent")}
      </p>

      {/* --- 5. Changes to This Privacy Policy --- */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        {t("changesTitle")}
      </h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        {t("changesContent")}
      </p>

      {/* --- 6. Contact Us --- */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        {t("contactTitle")}
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        {t("contactContent")}
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
