import { Heart, MapPin, Package, ShieldCheck, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import logoSplash from "@/assets/logo-splash.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="animate-float">
              <img 
                src={logoSplash} 
                alt="기특 로고" 
                className="w-32 h-auto"
              />
            </div>
            
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                투명한 기부의 시작
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl">
                QR 코드 하나로 만나는 새로운 기부 문화
              </p>
            </div>

            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-soft max-w-2xl animate-fade-in" style={{ animationDelay: "400ms" }}>
              <p className="text-foreground leading-relaxed text-lg">
                기특은 QR 코드가 인쇄된 특별한 박스를 통해<br />
                기부의 전 과정을 투명하게 추적할 수 있는 서비스입니다.<br />
                <span className="text-primary font-semibold mt-2 block">
                  앱을 다운로드하고 더 자세한 기부 여정을 시작하세요!
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md animate-fade-in" style={{ animationDelay: "600ms" }}>
              <Button 
                size="lg" 
                className="flex-1 bg-card text-primary hover:bg-card/90 border-2 border-card shadow-soft text-lg py-6"
                onClick={() => window.open('https://apps.apple.com', '_blank')}
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                App Store
              </Button>
              <Button 
                size="lg"
                className="flex-1 bg-card text-primary hover:bg-card/90 border-2 border-card shadow-soft text-lg py-6"
                onClick={() => window.open('https://play.google.com', '_blank')}
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Google Play
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              기특이 특별한 이유
            </h2>
            <p className="text-muted-foreground text-lg">
              투명하고 신뢰할 수 있는 기부 플랫폼
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Eye />}
              title="투명한 추적"
              description="QR 코드로 기부금의 전달 과정을 실시간으로 확인할 수 있습니다."
              delay={0}
            />
            <FeatureCard
              icon={<Package />}
              title="특별한 박스"
              description="기부 전용 박스에 담아 정성스럽게 전달되는 따뜻한 마음"
              delay={100}
            />
            <FeatureCard
              icon={<ShieldCheck />}
              title="믿을 수 있는 기부"
              description="검증된 단체와 투명한 프로세스로 안심하고 기부하세요."
              delay={200}
            />
            <FeatureCard
              icon={<Heart />}
              title="다양한 캠페인"
              description="동물, 아동/청소년, 장애인 등 다양한 분야의 기부 캠페인"
              delay={300}
            />
            <FeatureCard
              icon={<MapPin />}
              title="위치 기반 서비스"
              description="내 주변의 기부처를 쉽게 찾고 직접 참여할 수 있습니다."
              delay={400}
            />
            <FeatureCard
              icon={
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M7 7h10v10H7z"/>
                </svg>
              }
              title="QR 코드 스캔"
              description="앱 내 카메라로 QR 코드를 스캔하여 기부 흐름을 확인하세요."
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full">
              <Heart className="w-10 h-10 text-primary animate-float" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              지금 시작하세요
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              기특 앱을 다운로드하고<br />
              투명한 기부의 새로운 경험을 만나보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto pt-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-accent shadow-soft text-lg py-6"
                onClick={() => window.open('https://apps.apple.com', '_blank')}
              >
                App Store에서 다운로드
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-soft text-lg py-6"
                onClick={() => window.open('https://play.google.com', '_blank')}
              >
                Google Play에서 다운로드
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 기특 GITEUK. 투명한 기부 문화를 만들어갑니다.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
