import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Locus Point"
        description="An app that allows movie location scouts to find the perfect location for their next film, with a current waitlist of 100+ users!"
        link="https://github.com/LocafyORG"
        img={{ src: '/assets/images/camera.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>React.js</Tags>
            <Tags color={ColorTags.INDIGO}>Springboot</Tags>
            <Tags color={ColorTags.ROSE}>PostgreSQL</Tags>
          </>
        }
      />
      <Project
        name="BridgeTech"
        description="A web app called BridgeTech that enables people to donate their used phones to those in need.
         Leveraging cutting-edge technologies such as the OpenAI API, Figma, and MongoDB."
        link="https://hackathon2023-frontend.vercel.app/"
        img={{
          src: '/assets/images/Dashboard.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.SKY}>React.js</Tags>
            <Tags color={ColorTags.LIME}>Springboot</Tags>
            <Tags color={ColorTags.ORANGE}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>Javascript</Tags>
          </>
        }
      />
      <Project
        name="Penguino"
        description="A small desk robot that helps you stay productive by answering your voice commands and questions using AI"
        link="https://github.com/MattConstant/Capstone2023"
        img={{ src: '/assets/images/penguin.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.LIME}>Kotlin</Tags>
            <Tags color={ColorTags.EMERALD}>C++</Tags>
            <Tags color={ColorTags.YELLOW}>MongoDB</Tags>
          </>
        }
      />
      <Project
        name="Focus Logistics"
        description="A logistics company site made for a client"
        link="https://logistics-site-henna.vercel.app/"
        img={{ src: '/assets/images/delivery.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>MongoDB</Tags>
            <Tags color={ColorTags.INDIGO}>Springboot</Tags>
            <Tags color={ColorTags.ROSE}>SQL</Tags>
          </>
        }
      />
      <Project
        name="TrackBuddy"
        description="A web app that allows users to track their driving on the track and improve their driving skills using AI"
        link="https://trackbuddy-frontend-l9wl.vercel.app/"
        img={{ src: '/assets/images/car.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>SQL</Tags>
            <Tags color={ColorTags.INDIGO}>Django</Tags>
            <Tags color={ColorTags.ROSE}>React.js</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
