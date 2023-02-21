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
          As a software developer currently studying at Sheridan College, I am passionate about building innovative software applications that can make a positive impact on people's lives.
          I have gained hands-on experience in programming languages such as{' '}
          <a className="text-cyan-400 hover:underline" href="/">
             Java and Javascript,
          </a>{' '}
          as well as in using popular development frameworks and tools such as{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            React and Git.
          </a>{' '}
        </>
      }
      avatar={
        <img
          className="h-80 w-70 rounded"
          src="/assets/images/me.jpg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/matthieu-constant-b9a171221/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
