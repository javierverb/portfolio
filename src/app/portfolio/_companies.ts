export interface Company {
  name: string;
  website: string;
  description: string;
  stack: string[];
  imagePath: string;
}

export const companies: Company[] = [
  {
    name: 'Equinox',
    website: 'https://www.equinox.com/',
    description: `Equinox is a luxury fitness company with <b>more than 100
          clubs</b> in the US, Canada, and the UK.`,
    stack: [
      'Python',
      'Rundeck',
      'Bash',
      'General Scripting',
      'AWS',
      'Terraform',
      'Docker',
      'Microservices',
      'GH Actions',
    ],
    imagePath: 'assets/img/equinox.jpg',
  },
  {
    name: 'Moni',
    website: 'https://moni.com.ar/',
    description:
      'Argentinian Fintech that manages and grants more than 60,000 loans per year.',
    stack: [
      'Python',
      'Django',
      'Angular',
      'Celery',
      'Asyncio',
      'k8s',
      'Docker',
      'Microservices',
      'PostgreSQL',
      'DRF',
      'Gitlab Pipelines',
    ],
    imagePath: 'assets/img/moni.jpeg',
  },
  {
    name: 'Chekin',
    website: 'https://chekin.com/',
    description: `A comprehensive travel technology platform that provides
          <b> online check-in and guest registration management services</b>
          with <b>more than 100 check-ins per month</b> successfully handled.`,
    stack: [
      'Python',
      'Django',
      'DRF',
      'Celery',
      'RabbitMQ',
      'k8s',
      'Docker',
      'Microservices',
      'PostgreSQL',
      'GH Actions',
    ],
    imagePath: 'assets/img/chekin.jpeg',
  },
  {
    name: 'Examity',
    website: 'https://www.examity.com/',
    description: `Flexible and secure online proctoring system with
          <b>more than 500 clients</b> arround the world including universities.`,
    stack: [
      'Python',
      'Flask',
      'Angular',
      'MSSQL',
      'Go',
      'Docker',
      'Microservices',
      'GH Actions',
    ],
    imagePath: 'assets/img/examity.jpeg',
  },
  {
    name: 'Venmo',
    website: 'https://venmo.com/',
    description: `Venmo is a popular peer-to-peer mobile payment platform that allows
          users to easily transfer money to friends and family. <br />
          As of 2021, Venmo processed an average of around
          <b>40 billion in transactions per year</b>, with daily transaction
          volume estimated to be in the hundreds of millions.`,
    stack: [
      'Python',
      'Django',
      'Terraform',
      'Datadog',
      'Snowflake',
      'Kafka',
      'Microservices',
      'GH Actions',
    ],
    imagePath: 'assets/img/venmo.jpeg',
  },
  {
    name: 'Ticketek',
    website: 'https://www.ticketek.com.ar/',
    description: `Ticketek is an Argentinian company related to ticket sales. This
          company is part of <b>top 10</b> of sales ticket platform.`,
    stack: ['Python', 'Django', 'AngularJS', 'Redis', 'Celery', 'Ionic'],
    imagePath: 'assets/img/ticketek.jpeg',
  },
];
/*             Python \ Django \ AngularJS <br />
            Redis \ Celery \ Ionic /b*/
