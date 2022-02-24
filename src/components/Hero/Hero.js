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
        Bem vindo <br />
        Ao meu Portifolio
      </SectionTitle>
      <SectionText>
        Sou um desenvolvedor que busco amadurecer pessoal e profissionalmente
        utilizando a tecnologia ao meu favor.
      </SectionText>
      <a href="/images/resume.pdf" target="_blank">
        <Button>Mais sobre mim</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
