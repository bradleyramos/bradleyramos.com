import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Bradley Ramos', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: `Brad's portfolio`, // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Bradley',
  subtitle: '',
  cta: 'learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'boston_profile.png',
  paragraphOne: `I’m an AI specialist and technology consultant, focusing on GenAI architecture and rapid experimentation.`,
  paragraphTwo: `Throughout my career, I have actively pursued additional opportunities to practice iteration, 
                  refinement, and innovation to seek out and solve problems. `,
  paragraphThree: `I am an engineer; I write code; but mostly, I fix problems.`,
  // resume: 'https://drive.google.com/file/d/1ilV5jCHH9_TBadLGpWsU5ZlHovp7Iwty/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'robot.png',
    title: 'Agentic AI & Robotics',
    info: `Inspired by the opportunity of "when LLMs get their bodies," I partnered with a few of my colleagues to better understand what that looks like in practice.`,
    info2: 'Stick around until the end of the video to see how it interprets some dance moves!',
    url: 'https://www.youtube.com/watch?v=yM-F6DTd6og',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'opendatacampus.png',
    title: 'Open Data Campus',
    info: `Open data is data that anyone can use, access, and share. The concept of open data is predicated on the belief that openness fosters desirable outcomes.`,
    info2:
      'To facilitate responsible data governance practices and encourage universities to open up their data resources, we partnered with Stanford’s open data team to construct an open data handbook and data governance protocol for college students.',
    url: 'https://opendatacampus.com/overview.html',
    repo: 'https://github.com/StanfordOpenData/open-data-handbook', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'FreedomLink.png',
    title: 'Freedom Link',
    info: `The COVID-19 pandemic created unsafe conditions for at-risk incarcerated individuals. I was working with the Illinois Department of Corrections to connect those in custody, and their loved ones, with access to information about options available through the Illinois Home Detention Program.`,
    info2: '',
    url: 'http://freedom-generator.s3-website-us-east-1.amazonaws.com',
    repo: 'https://github.com/cs394-s20/freedom-generator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Jampackers.png',
    title: 'Jampack',
    info: `Born out of a passion for social music, I cofounded Jampack. This music stylist service recommends your new favorite songs, handpicked by experts and tailored to your individual taste. `,
    info2: `Looking for your own music makeover? Take a look at my stylist profile!`,
    url:
      'https://docs.google.com/document/d/1MULqtkLXRsvE6I9H9c20Pjw6rtAKEH5MxmWEpOkFnuY/edit?usp=sharing',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tagalongApp.png',
    title: 'Tagalong',
    info:
      'During my first year on campus, several instances of assault were reported on the Northwestern campus. Tagalong was our response to enhance safety and unity on campus amidst the fear. This award-winning app utilizes temporary location sharing technology to provide additional safety measures for friends, families, and loved ones.',
    info2: '',
    url:
      'https://docs.google.com/presentation/d/1D-HSyiHXLehmH0bztF0n6qnSt9edA44f1-h6EQNfWGU/edit?usp=sharing',
    repo: 'https://github.com/ahkaneti/AppDev', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: `Want to learn more about my current projects?`,
  btn: 'let me know',
  email: 'bradleymramos@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/bradley_ramos/',
    },
    {
      id: nanoid(),
      name: 'spotify',
      url: 'https://open.spotify.com/user/hbvoowztzkmimb9or45a81uq1?si=XosoWZakRsWfPfCyVuKxjA',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/bradleymramos',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/bradleyramos',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
