"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { CheckCircle, Globe, Menu, Moon, Sun, X } from "lucide-react";
import { Badge } from "../ui/badge";
import { useTheme } from "next-themes";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./logo";
import { Link } from "@/i18n/navigation";

const Header = () => {
  const t = useTranslations("home");
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleLanguage = () => {
    const newLocale = currentLocale === "vi" ? "en" : "vi";
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className=" px-4 py-4 bg-background">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground hover:text-pink-500 transition-colors font-medium"
            >
              {t("home")}
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-pink-500 transition-colors font-medium"
            >
              {t("about")}
            </Link>
            <Link
              href="/guide"
              className="text-foreground hover:text-pink-500 transition-colors font-medium"
            >
              {t("guide")}
            </Link>
            <Link
              href="#contact"
              className="text-foreground hover:text-pink-500 transition-colors font-medium"
            >
              {t("contact")}
            </Link>
          </nav>

          {/* Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hover:bg-pink-50 dark:hover:bg-pink-950"
            >
              <Globe className="w-4 h-4 mr-2" />
              {currentLocale.toUpperCase()}
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="hover:bg-pink-50 dark:hover:bg-pink-950"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </Button>

            <Badge
              variant="secondary"
              className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-100"
            >
              <CheckCircle className="w-3 h-3 mr-1" />
              {t("free")}
            </Badge>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hover:bg-pink-50 dark:hover:bg-pink-950"
            >
              <Globe className="w-4 h-4" />
              {currentLocale.toUpperCase()}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="hover:bg-pink-50 dark:hover:bg-pink-950"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </Button>
            <Button variant="ghost" size="sm" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link
                href="/"
                className="text-foreground hover:text-pink-500 transition-colors font-medium"
                onClick={toggleMobileMenu}
              >
                {t("home")}
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-pink-500 transition-colors font-medium"
                onClick={toggleMobileMenu}
              >
                {t("about")}
              </Link>
              <Link
                href="/guide"
                className="text-foreground hover:text-pink-500 transition-colors font-medium"
                onClick={toggleMobileMenu}
              >
                {t("guide")}
              </Link>
              <Link
                href="#contact"
                className="text-foreground hover:text-pink-500 transition-colors font-medium"
                onClick={toggleMobileMenu}
              >
                {t("contact")}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
