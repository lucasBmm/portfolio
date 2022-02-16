import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row noppading>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portifolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum my text that I'll say something about me.
      </SectionText>
      <Button onClick={() => (window.location = 'https://google.com')}>
        More about me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
