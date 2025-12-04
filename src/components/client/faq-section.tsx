"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

const FAQSection = () => {
  const t = useTranslations("faq-section");

  const faqs = t.raw("items") as Array<{ q: string; a: string }>;

  return (
    <section id="faq" className="py-20 px-4 bg-muted/30 rounded-sm">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("frequentlyAsked")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("frequentlyAskedDesc")}
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-pink-600">
                  {/* Trực tiếp sử dụng item.q và item.a vì đã lấy được object */}
                  {item.q}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {/* Trực tiếp sử dụng item.q và item.a vì đã lấy được object */}
                  {item.a}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
