import { Separator } from "@radix-ui/react-separator";
import { useTranslations } from "next-intl";

import Logo from "./logo";
import { Link } from "@/i18n/navigation";

const Footer = () => {
  const t = useTranslations("home");

  return (
    <footer className="bg-background border-t mt-10 ">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {t("companyDesc")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#home"
                  className="text-muted-foreground hover:text-pink-500 transition-colors"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-muted-foreground hover:text-pink-500 transition-colors"
                >
                  {t("features")}
                </Link>
              </li>
              <li>
                <Link
                  href="#guide"
                  className="text-muted-foreground hover:text-pink-500 transition-colors"
                >
                  {t("guide")}
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-muted-foreground hover:text-pink-500 transition-colors"
                >
                  {t("faq")}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-pink-500 transition-colors"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">{t("support")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-pink-500 transition-colors"
                >
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-pink-500 transition-colors"
                >
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link
                  href="/dmca"
                  className="text-muted-foreground hover:text-pink-500 transition-colors"
                >
                  DMCA
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-pink-500 transition-colors"
                >
                  {t("about")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="font-semibold mb-4">{t("contact")}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-send text-blue-500"
                >
                  <path d="m22 2-7 20-4-9-9-4 20-7Z" />
                  <path d="M15 7l4 4" />
                </svg>
                <Link
                  href="https://t.me/n3tdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:underline"
                >
                  @n3tdev
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 " />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="mb-4 md:mb-0">
            <p>
              &copy; 2025 {process.env.NEXT_PUBLIC_NAME_WEBSITE}.{" "}
              {t("allRightsReserved")}
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <span>{t("tikTokVideoSaver")}</span>
            <span>•</span>
            <span>{t("tikTokDownloader")}</span>
            <span>•</span>
            <span>{t("tikTokNoWatermark")}</span>
            <span>•</span>
            <span>{t("tikTokVideoSaver")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
