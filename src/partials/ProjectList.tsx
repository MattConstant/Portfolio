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
        name="BridgeTech"
        description="A web app called BridgeTech that enables people to donate their used phones to those in need.
         Leveraging cutting-edge technologies such as the OpenAI API, Figma, and MongoDB."
        link="https://github.com/MattConstant/Hackville2023"
        img={{
          src: '/assets/images/project-web-design.png',
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
        name="TimeSavior"
        description="An app that helps students stay organized 
        and on track by providing an easy way to manage their tasks and schedule."
        link="https://github.com/MattConstant/hackVille2022"
        img={{ src: '/assets/images/project-fire.png',
         alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.LIME}>Springboot</Tags>
            <Tags color={ColorTags.EMERALD}>SQL</Tags>
            <Tags color={ColorTags.YELLOW}>MongoDB</Tags>
          </>
        }
      />
      <Project
        name="Mongo Wheels"
        description="An app that shows crud operations on a MongoDB database using Springboot."
        link="https://github.com/SamEThibault/mongo-wheels"
        img={{ src: '/assets/images/project-maps.png',
         alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>MongoDB</Tags>
            <Tags color={ColorTags.INDIGO}>Springboot</Tags>
            <Tags color={ColorTags.ROSE}>SQL</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
