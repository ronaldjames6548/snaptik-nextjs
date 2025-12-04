import React from "react";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "@/themes/theme-provider";
import Header from "@/components/client/header";
import Footer from "@/components/client/footer";
import { Toaster } from "@/components/ui/sonner";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  return {
    title: "Snap Tik - Tải Video TikTok Không Watermark Miễn Phí",
    description:
      "Tải xuống video TikTok không logo watermark chất lượng cao miễn phí. Hỗ trợ tải video TikTok HD, MP4, MP3 nhanh chóng và an toàn. Không cần đăng ký.",
    keywords: [
      "tải video tiktok",
      "download tiktok video",
      "tiktok downloader",
      "tải tiktok không watermark",
      "tiktok no watermark",
      "tải video tiktok HD",
      "tiktok to mp4",
      "tiktok to mp3",
      "snap tik",
      "tiktok video downloader",
      "tải video tiktok miễn phí",
      "download tiktok without watermark",
    ],
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`), // Thay đổi URL của bạn
    alternates: {
      canonical: `/${locale}`,
      languages: {
        vi: "/vi",
        en: "/en",
      },
    },
    openGraph: {
      title: "Snap Tik - Tải Video TikTok Không Watermark Miễn Phí",
      description:
        "Tải xuống video TikTok không logo watermark chất lượng cao miễn phí. Hỗ trợ tải video TikTok HD, MP4, MP3 nhanh chóng và an toàn.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}`,
      siteName: "Snap Tik",
      images: [
        {
          url: "/og-image.jpg", // Thêm hình ảnh OG của bạn
          width: 1200,
          height: 630,
          alt: "Snap Tik - Tải Video TikTok Không Watermark",
        },
      ],
      locale: locale === "vi" ? "vi_VN" : "en_US",
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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Lấy messages cho locale hiện tại
  const messages = await getMessages();
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        {/* Favicon và icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Snap Tik",
              description:
                "Tải xuống video TikTok không logo watermark chất lượng cao miễn phí",
              url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}`,
              applicationCategory: "MultimediaApplication",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Organization",
                name: "Snap Tik Team",
              },
              provider: {
                "@type": "Organization",
                name: "Snap Tik",
              },
              inLanguage: locale,
            }),
          }}
        />
      </head>
      <body className={`${quicksand.className} antialiased dark:bg-gray-900`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <Header />
            <div className="max-w-[1280px] mx-auto">{children}</div>
            <Footer />
            <Toaster richColors />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
