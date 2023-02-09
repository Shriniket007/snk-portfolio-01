import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Hi! I'm shriniket <br />
      Welcome To <br />
      My Porfolio
    </SectionTitle>
    <SectionText>
      Myself shriniket Kulkarni, studying in Dr Dy Patil College Of Enginnering.
      I'm a frontend developer and DSA enthusiast. Exploring life.
    </SectionText>
    <Button onclick={ () => window.location = 'https://google.com'}>Learn More</Button>
  </LeftSection>

 </Section>
);

export default Hero;