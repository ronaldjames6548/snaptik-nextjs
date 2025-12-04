import { CheckCircle, Clock, Heart, Share2, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { useTranslations } from "next-intl";

const FeaturesSection = () => {
  const t = useTranslations("home");
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: t("noWatermark"),
      description: t("noWatermarkDesc"),
      gradient: "from-pink-500 to-purple-600",
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: t("highSpeed"),
      description: t("highSpeedDesc"),
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      title: t("freeService"),
      description: t("freeServiceDesc"),
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: t("hdQuality"),
      description: t("hdQualityDesc"),
      gradient: "from-red-500 to-pink-600",
    },
    {
      icon: <Share2 className="w-8 h-8 text-white" />,
      title: t("multiPlatform"),
      description: t("multiPlatformDesc"),
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: t("available247"),
      description: t("available247Desc"),
      gradient: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-muted/30 rounded-sm">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("whyChoose")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("whyChooseDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
