import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <svg
              className="mr-1 h-10 w-10 stroke-cyan-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none"></path>
              <rect x="3" y="12" width="6" height="8" rx="1"></rect>
              <rect x="9" y="8" width="6" height="12" rx="1"></rect>
              <rect x="15" y="4" width="6" height="16" rx="1"></rect>
              <path d="M4 20h14"></path>
            </svg>
          }
          name="Matthieu Constant"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="https://www.linkedin.com/in/matthieu-constant-b9a171221/">
          Linkedin
        </NavMenuItem>
        <NavMenuItem href="https://github.com/MattConstant">GitHub</NavMenuItem>
        <NavMenuItem href="https://devpost.com/matthieu-constant7792?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">
          Devpost
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
