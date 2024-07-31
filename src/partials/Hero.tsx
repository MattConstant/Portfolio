import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Matthieu</GradientText> 👋
        </>
      }
      description={
        <>
          As a software developer who has graduated from Sheridan College, I am
          passionate about building innovative software applications that can
          make a positive impact on people's lives. I am a front-end developer,
          primarily using{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            TypeScript
          </a>
          , and I enjoy dabbling in DevOps on the side. I have gained hands-on
          experience in programming languages such as{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Java and JavaScript
          </a>
          , as well as in using popular development frameworks and tools such as{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            React and Git
          </a>
          .
        </>
      }
      avatar={
        <img
          className="w-70 h-80 rounded"
          src="/assets/images/me.jpg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.facebook.com/purely.memes?mibextid=LQQJ4d">
            <HeroSocial src="/assets/images/facebook.png" alt="Facebook icon" />
          </a>
          <a href="https://www.linkedin.com/in/matthieu-constant-b9a171221/">
            <HeroSocial src="/assets/images/linkedin.png" alt="Linkedin icon" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
