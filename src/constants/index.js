import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    django,
    starbucks,
    vivyacorp,
    iLink,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "App Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "VivyaCorp",
      icon: vivyacorp,
      iconBg: "#383E56",
      date: "July 2023 - September 2024",
      points: [
        "Developing and maintaining web applications using Django and Python related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },{
      title: "Software Engineer",
      company_name: "iLink Systems Inc",
      icon: iLink,
      iconBg: "#383E56",
      date: "November 2024 - Present ",
      points: [
        "Designed and developed custom Canvas and Model-Driven Power Apps to streamline business processes, enhance user experience, and reduce manual workloads.",
        "Built dynamic forms with conditional visibility, real-time validations using Power Fx, and seamless integrations with SharePoint, Microsoft 365, SQL Server, and third-party APIs.",
        "Created and maintained Power Automate flows to automate workflows such as Aadhaar verification, vendor onboarding, document handling, and approval processes, ensuring efficient and reliable operations.",
        "Utilized custom connectors to securely integrate with external REST APIs and extend Power Platform functionality beyond standard connectors.",
        "Implemented Dataverse as a centralized and secure data layer, managing relationships, business rules, and role-based access for scalable enterprise applications.",
        "Developed interactive Power BI dashboards connected to Dataverse and SharePoint to visualize key metrics and support real-time decision-making (if applicable).",
        "Followed Power Platform best practices including naming conventions, error handling, performance optimization, accessibility standards, and responsive design principles.",
        "Managed Power Platform environments, including configuring security roles, permissions, and data loss prevention (DLP) policies.",
        "Customized Power Pages forms using JavaScript for enhanced UX and integrated them with Power Automate to process and store form submissions.",  
        "Built and maintained reusable custom UI components using PowerApps Component Framework (PCF) to meet advanced interface requirements.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Mukesh proved me wrong.",
      name: "Kiruthika",
      designation: "Software Developer",
      company: "Vivya Corp",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Mukesh does.",
      name: "Jagannath",
      designation: "Software Developer",
      company: "Vivya Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Mukesh optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Pooja",
      designation: "Software Developer",
      company: "Vivya Corp",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to search for book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
