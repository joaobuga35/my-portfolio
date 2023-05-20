// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
  AboutContent,
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/my-portfolio`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">Olá, meu nome é {userData.nameUser}</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
            Eu{" "}
              <Text as="span" type="heading1" color="brand1">
                amo
              </Text>{" "}
              criar e{" "}
              <Text as="span" type="heading1" color="brand1">
                desenvolver
              </Text>{" "}
              projetos
            </Text>
            <Text type="body1" color="grey2">
              Descubra aqui neste ambiente, criado especialmente para você, 
              todos os meus projetos e tecnologias
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Projetos
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                Veja meu código
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="about">
        <Container>
          <ProjectAreaWrapperColumns>
            <AboutContent>
              <Text as="h2" type="heading4" color="brand1">
                Sobre
              </Text>
              <Text as="p" type="body1" color="grey4">
                Desenvolvedor Full-Stack, com experiência em projetos web/mobile. Iniciando no desenvolvimento em 2022, sempre fui um entusiasta das novas tecnologias do mercado e apaixonado por aprender cada dia mais e mais.
              </Text>
              <Text as="p" type="body1" color="grey4">
                Possuo foco em desenvolvimento com JavaScript, React, React Native, TypeScript, NodeJS, PostgreSQL, Python dentre outras tecnologias que uso para aplicações web/mobile. 
              </Text>
              <Text as="p" type="body1" color="grey4">
                Me considero ágil e persistente para aprender novas tecnologias/linguagens e me adaptar a qualquer mudança e superar desafios! 
              </Text>
              <Text as="p" type="body1" color="grey4">
                Três palavras que considero que me descreva bem: otimista, dedicado e persistente!
              </Text>
            </AboutContent>
          </ProjectAreaWrapperColumns>
          <ProjectAreaWrapperColumns id="projects">
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Estes são alguns{" "}
                <Text as="span" color="brand5">
                  dos meus projetos
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
