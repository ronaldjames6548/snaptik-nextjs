import { ArrowRight, CheckCircle, Download, ExternalLink } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { useTranslations } from "next-intl";

const GuideSection = () => {
  const t = useTranslations("home");

  const steps = [
    {
      step: "01",
      title: t("step1"),
      description: t("step1Desc"),
      icon: <ExternalLink className="w-6 h-6" />,
    },
    {
      step: "02",
      title: t("step2"),
      description: t("step2Desc"),
      icon: <Download className="w-6 h-6" />,
    },
    {
      step: "03",
      title: t("step3"),
      description: t("step3Desc"),
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ];

  return (
    <section id="guide" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("howToUse")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("howToUseDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((item, index) => (
            <Card
              key={index}
              className="relative hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-pink-500 mb-4">
                  {item.step}
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-pink-500">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default GuideSection;
