// import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
// import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
// import { socialDribbbleOutline } from 'react-icons-kit/ionicons/socialDribbbleOutline';
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub';
// import { socialGoogleplusOutline } from 'react-icons-kit/ionicons/socialGoogleplusOutline';
import { chatbox } from 'react-icons-kit/ionicons/chatbox';
import { socialLinkedin } from 'react-icons-kit/ionicons/socialLinkedin';

// import Awardee1 from '../../assets/image/portfolio/awardee-1.png';
// import Awardee2 from '../../assets/image/portfolio/awardee-2.png';
// import Awardee3 from '../../assets/image/portfolio/awardee-3.png';
// import Awardee4 from '../../assets/image/portfolio/awardee-4.png';
// import AwardImage1 from '../../assets/image/portfolio/award-1.png';
// import AwardImage2 from '../../assets/image/portfolio/award-2.png';
// import AwardImage3 from '../../assets/image/portfolio/award-3.png';
// import AwardImage4 from '../../assets/image/portfolio/award-4.png';

import PortfolioImage1 from '../../assets/image/portfolio/chatwithceline.gif';
import PortfolioImage2 from '../../assets/image/portfolio/310project.gif';
import PortfolioImage3 from '../../assets/image/portfolio/vanezy.gif';
import PortfolioImage4 from '../../assets/image/portfolio/quadTree.gif';
import PortfolioImage5 from '../../assets/image/portfolio/foodielab.png';
import PortfolioImage6 from '../../assets/image/portfolio/javavisuals.gif';

// import Step1 from '../../assets/image/portfolio/step-1.png';
// import Step2 from '../../assets/image/portfolio/step-2.png';
// import Step3 from '../../assets/image/portfolio/step-3.png';

import SkillIcon1 from '../../assets/image/portfolio/skill-1.svg';
import SkillIcon2 from '../../assets/image/portfolio/skill-2.svg';
import SkillIcon3 from '../../assets/image/portfolio/skill-3.svg';
// import SkillIcon4 from '../../assets/image/portfolio/skill-4.svg';

import Client1 from '../../assets/image/portfolio/pwc.png';
import Client2 from '../../assets/image/portfolio/client-2.png';
import Client3 from '../../assets/image/portfolio/UNDP.png';
import Client4 from '../../assets/image/portfolio/TFL.png';
import Client5 from '../../assets/image/portfolio/yourco.png';
// import Client6 from '../../assets/image/portfolio/tanyu.png';

import Reviewer1 from '../../assets/image/portfolio/client1.jpeg';
import Reviewer2 from '../../assets/image/portfolio/review2.jpeg';
import Reviewer3 from '../../assets/image/portfolio/review3.jpeg';

export const SOCIAL_PROFILES = [
  // {
  //   icon: socialTwitter,
  //   url: '#',
  // },
  // {
  //   icon: socialFacebook,
  //   url: '#',
  // },
  // {
  //   icon: socialDribbbleOutline,
  //   url: '#',
  // },
  {
    icon: socialLinkedin,
    url: 'https://www.linkedin.com/in/celine-liew/',
  },
  {
    icon: socialGithub,
    url: 'https://github.com/fisharwoman',
  },
  {
    icon: chatbox,
    url: 'https://chat.celineliew.com',
  },
  // {
  //   icon: socialGoogleplusOutline,
  //   url: '#',
  // },
];

export const MENU_ITEMS = [
  {
    label: 'ABOUT ME',
    path: '#banner_section',
    offset: '0',
  },
  {
    label: 'PROJECTS',
    path: '#portfolio_section',
    offset: '0',
  },
  {
    label: 'WHY ME?',
    path: '#process_section',
    offset: '0',
  },
  {
    label: `CONTACT`,
    path: '#contact_section',
    offset: '0',
  },
];

// export const AWARDS = [
//   {
//     awardLogo: AwardImage1,
//     awardName: 'Free Software Advice',
//     awardDetails: 'Top Rated App Development Companies USA',
//     awardeeLogo: Awardee1,
//     awardeeName: 'Awardee',
//     date: 'The Jury 2018',
//   },
//   {
//     awardLogo: AwardImage2,
//     awardName: 'Free Software Advice',
//     awardDetails: 'Top Rated App Development Companies USA',
//     awardeeLogo: Awardee2,
//     awardeeName: 'Awardee',
//     date: 'The Jury 2018',
//   },
//   {
//     awardLogo: AwardImage3,
//     awardName: 'Free Software Advice',
//     awardDetails: 'Top Rated App Development Companies USA',
//     awardeeLogo: Awardee3,
//     awardeeName: 'Awardee',
//     date: 'The Jury 2018',
//   },
//   {
//     awardLogo: AwardImage4,
//     awardName: 'Free Software Advice',
//     awardDetails: 'Top Rated App Development Companies USA',
//     awardeeLogo: Awardee4,
//     awardeeName: 'Awardee',
//     date: 'The Jury 2018',
//   },
// ];

export const PORTFOLIO_SHOWCASE = [
  {
    title: 'SERVERLESS',
    portfolioItem: [
      {
        title: 'Chat with Celine',
        description:
          'One-to-one instant chat app built to easily contact website owners. Implemented user authentication, real-time chat synchronization, message storage, and serverless functions using Google Firebase platform.',
        image: PortfolioImage1,
        link: 'https://chat.celineliew.com',
        link2: 'https://chat.celineliew.com',
        buildWith: [
          {
            content: 'JavaScript',
          },
          {
            content: 'Serverless',
          },
          {
            content: 'NoSQL',
          },
        ],
      },
    ],
  },
  {
    title: 'FULL STACK',
    portfolioItem: [
      {
        title: 'InsightUBC - Campus Explorer',
        description:
          'Full stack web development project for a software engineering course at UBC. The application enables search of text based information using a context-free grammar (EBNF).',
        image: PortfolioImage2,
        link: 'https://github.com/fisharwoman/UBCCampusExplorer',
        buildWith: [
          {
            content: 'JavaScript',
          },
          {
            content: 'REST API',
          },
          {
            content: 'TDD',
          },
        ],
      },
    ],
  },
  {
    title: 'HACKATHON',
    portfolioItem: [
      {
        title: 'Van-Ezy',
        description:
          'A web app that allowed city residents to submit photos of neighbourhood issues in a single portal. Image classification AI will classify problem and route the request to relevant agencies. Implemented frontend and API calls to Azure, Twitter, and Google Maps.',
        image: PortfolioImage3,
        link: 'https://github.com/fisharwoman/BCSHack2019',
        // featuredLink: '#',
        // view: '4.5K',
        // love: '1.5K',
        // feedback: '1.2K',
        buildWith: [
          {
            content: 'HTML/CSS',
          },
          {
            content: 'JavaScript',
          },
          {
            content: 'Java',
          },
        ],
      },
    ],
  },
  {
    title: 'JAVA',
    portfolioItem: [
      {
        title: 'Job Appplication Tracker',
        description: 'Personal job tracking desktop app built with Java.',
        image: PortfolioImage6,
        link: 'https://github.com/fisharwoman/job-application-database',
        buildWith: [
          {
            content: 'Java',
          },
          {
            content: 'JavaFx',
          },
          {
            content: 'JUnit',
          },
        ],
      },
    ],
  },
  {
    title: 'C++',
    portfolioItem: [
      {
        title: 'Quadtree Pruning',
        description:
          'Image compression assignment for data structure & algorithms course at UBC. Blocky compression of images using quad tree pruning technique.',
        image: PortfolioImage4,
        link: 'https://github.com/fisharwoman/quadtree',
        // featuredIn: 'AWWWARDS',
        // featuredLink: '#',
        // view: '4.5K',
        // love: '1.5K',
        // feedback: '1.2K',
        buildWith: [
          {
            content: 'C++',
          },
          {
            content: 'Data Structure',
          },
          // {
          //   content: 'Styled Component',
          // },
        ],
      },
    ],
  },
  {
    title: 'PROJECT MANAGMENT',
    portfolioItem: [
      {
        title: 'The Foodie Lab',
        description:
          'Co-founded in 2017, Foodie Lab designed paperless operation worksflows for restaurants. We reduced book keeping tasks by 300 manhours per restaurant.',
        image: PortfolioImage5,
        link: 'http://thefoodielab.com',
        // featuredIn: 'AWWWARDS',
        // featuredLink: '#',
        // view: '4.5K',
        // love: '1.5K',
        // feedback: '1.2K',
        buildWith: [
          {
            content: 'Project Management',
          },
          {
            content: 'Entrepreneurship',
          },
        ],
      },
    ],
  },
];

export const SERVICE_LIST = [
  {
    title: 'Stack',
    listItems: [
      {
        content: 'JavaScript',
      },
      {
        content: 'TypeScript',
      },
      {
        content: 'C++',
      },
      {
        content: 'Java',
      },
    ],
  },
  {
    title: 'Web Development',
    listItems: [
      {
        content: 'NodeJS',
      },
      {
        content: 'ReactJs',
      },
      {
        content: 'NoSQL',
      },
    ],
  },
  {
    title: 'Tools/Environment',
    listItems: [
      {
        content: 'Git',
      },
      {
        content: 'GitHub',
      },
      {
        content: 'Agile',
      },
      {
        content: 'Test-driven Environment',
      },
      {
        content: 'Project Management',
      },
    ],
  },
];

export const SKILLS = [
  {
    title: 'Web Application',
    description: 'I am excited to advance in the area of web development',
    icon: SkillIcon1,
    successRate: '80',
  },
  {
    title: 'Project Management',
    description:
      'Experience in stakeholders and project management with proven results',
    icon: SkillIcon2,
    successRate: '90',
  },
  // {
  //   title: 'Web Application',
  //   description:
  //     'Aristotle maintained the sharp distinction between science and the practical',
  //   icon: SkillIcon3,
  //   successRate: '80',
  // },
];

export const CLIENTS = [
  {
    image: Client1,
    title: 'PwC',
  },
  {
    image: Client2,
    title: 'Airbnb',
  },
  {
    image: Client3,
    title: 'UNDP',
  },
  {
    image: Client4,
    title: 'Foodie Lab',
  },
  {
    image: Client5,
    title: 'Your Company',
  },
  // {
  //   image: Client6,
  //   title: 'Google',
  // },
];

export const TESTIMONIAL = [
  {
    image: Reviewer1,
    review:
      'Celine, through her work in The Foodie Lab, has been a great advisor. Her team demonstrates driving innovation, flexibility and quick turn around time. Celine along with the team will go the extra mile, customising their solutions to cover all business aspects. Hans Im Gluck Singapore would not have been possible without you guys. I am very thankful and that you closed each gap I had within my business and highly appreciate your patience!',
    name: 'Marco Basile',
    designation: 'Regional General Manager',
    linkedinProfile: 'https://www.linkedin.com/in/marco-basile-5701805a/',
    organization: '@HANS IM GLÜCK',
    // organizationURL: 'https://www.linkedin.com/in/marco-basile-5701805a/',
  },
  {
    image: Reviewer2,
    review:
      'When I first saw you walk into our classroom, I saw the kind of person I was proud to call my trainer. Every day you came to class with a smile on your face and a kind word for all of your trainees. That means a lot. Your love of learning ignited our own curiosity and made learning much more fun! You taught us all everything on Fraud, Fraud detection and investigation. You will never know how much your guidance has helped me and my work mates, but I wanted you to know that you have made a big difference in my professional life.',
    name: 'Ahmad Masoud Atayee',
    designation: 'Finance Analyst',
    linkedinProfile:
      'https://www.linkedin.com/in/ahmad-masoud-atayee-062a02102/',
    organization: '@UNDP',
    // organizationURL: 'https://redq.io/',
  },
  {
    image: Reviewer3,
    review:
      "It’s rare that you come across standout talent like Celine. I have the pleasure of working with Celine for the past year with The Foodie Lab and it's been a great partnership. I was particularly impressed by her ability to handle even the toughest clients effortlessly. That skill often takes years to develop among customer service professionals, but it seemed to come perfectly naturally to her. Celine would be an asset to any team, just sayin'. ",
    name: 'Andrei Soen',
    designation: 'Creative Director',
    linkedinProfile: 'https://www.linkedin.com/in/andrei-soen-b660b01b/',
    organization: '@Park Bench Deli',
    // organizationURL: 'https://redq.io/',
  },
];

export const FOOTER_MENU = [
  {
    label: 'Contact',
    path: 'mailto:hello@celineliew.com?subject= Internship Opportunity',
  },
];
