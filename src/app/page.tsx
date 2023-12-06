import { Hero } from './components/Hero/Hero';
import { CTASection } from './components/CTASection/CTASection';
import { MaxWidthWrapper } from './components/MaxWidthWrapper/MaxWidthWrapper';
import { PromoSection } from './components/PromoSection/PromoSection';
import { GridWrapper } from './components/GridWrapper/GridWrapper';
import { CardsSection } from './components/CardsSection/CardsSection';
import { FaqSection } from './components/Faq/FaqSection';
import { Footer } from './components/Footer/Footer';

export default function Home() {
  return (
    <body>
      <MaxWidthWrapper>
        <GridWrapper columns={1} gap="40px">
          <Hero />
          <CTASection />
          <PromoSection />
          <CardsSection />
          <FaqSection />
          <Footer />
        </GridWrapper>
      </MaxWidthWrapper>
    </body>
  );
}
