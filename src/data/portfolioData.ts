import profileImage from '../assets/images/profle.jpeg';
import resumePdf from '../assets/resume.pdf';

export interface PortfolioData {
  hero: {
    name: string;
    headline: string;
    about: string;
    location: string;
    resumeLink: string;
    profileImage: string;
  };
  education: {
    degree: string;
    institution: string;
    period: string;
    details: string[];
  }[];
  experience: {
    role: string;
    company: string;
    location: string;
    period: string;
    overview: string;
    domains: {
      title: string;
      highlights: string[];
    }[];
    tech: string[];
  }[];
  projects: {
    name: string;
    description: string;
    stack: string[];
    link?: string;
  }[];
  // certifications now dynamically loaded from /src/assets/certificates/
  achievements: {
    title: string;
    description: string;
    date: string;
    file?: string;
  }[];
  hobbies: string[];
  contacts: {
    label: string;
    value: string;
    href: string;
    icon: 'phone' | 'email' | 'linkedin' | 'github';
  }[];
  aiTooling: {
    description: string;
    methodologies: string[];
  };
}

export const data: PortfolioData = {
  hero: {
    name: 'Pawan Kumar',
    headline: 'Software Engineer (Backend | Cloud | AI) @ Samsung R&D Institute, Delhi',
    about:
      'Backend-focused Software Engineer with experience building high-performance APIs, scalable AWS infrastructure, and AI-powered agentic systems in production environments. Skilled in Golang, cloud-native architectures, and LLM-based workflows including RAG, LangChain, and LangGraph.',
    location: 'Delhi, India',
    resumeLink: resumePdf,
    profileImage,
  },
  education: [
    {
      degree: 'B.Tech',
      institution: 'Indian Institute of Technology (BHU), Varanasi',
      period: 'Nov 2020 – May 2024',
      details: ['Electronics Engineering', "ECE '24", 'GPA: 8.70 / 10'],
    },
    {
      degree: 'Intermediate (Class XII)',
      institution: 'A.S. Patna Central School, Patna',
      period: 'Apr 2017 – Apr 2019',
      details: ['CBSE Board', 'Percentage: 92%'],
    },
    {
      degree: 'Matriculation (Class X)',
      institution: 'A.S. Patna Central School, Patna',
      period: 'Apr 2016 – Apr 2017',
      details: ['CBSE Board', 'CGPA: 10 / 10'],
    },
  ],
  experience: [
    {
      role: 'Software Engineer',
      company: 'Samsung R&D Institute, Delhi',
      location: 'Delhi, India',
      period: 'Jul 2024 – Present',
      overview:
        'Backend-focused engineer building high-performance APIs, scalable AWS infrastructure, and AI-powered agentic systems in production.',
      domains: [
        {
          title: 'Backend Engineering',
          highlights: [
            'Accelerated API performance by 98% (500ms to 10ms) via query optimization and connection pooling.',
            'Productionized 8+ REST APIs serving 50K+ daily requests.',
            'Architected a centralized authentication and request validation service securing 6+ microservices.',
          ],
        },
        {
          title: 'AI & Agentic Systems',
          highlights: [
            'Conceived and launched ServiceHub, an AI-driven platform leveraging RAG to resolve queries across 10GB+ of internal data.',
            'Engineered an autonomous CloudWatch log-analysis agent that reduced manual debugging by 80%.',
            'Built a secure Natural Language-to-SQL workflow with human approval gates.',
          ],
        },
        {
          title: 'AWS & Infrastructure',
          highlights: [
            'Directed an AWS account migration via Terraform, reducing migration time by 2–3 weeks.',
            'Orchestrated zero-downtime PostgreSQL blue-green upgrades.',
            'Optimized ECS, Lambda, and RDS workloads and streamlined Jenkins CI/CD to cut deployment cycles by 80%.',
          ],
        },
      ],
      tech: ['Golang', 'Python', 'Java', 'Spring Boot', 'LangChain', 'LangGraph', 'Vector DB', 'SQL', 'AWS', 'Terraform', 'Jenkins'],
    },
    {
      role: 'Software Engineer Intern',
      company: 'Samsung R&D Institute, Delhi',
      location: 'Delhi, India',
      period: 'May 2023 – Jul 2023',
      overview: 'Developed ML-powered features for content discovery and media asset management.',
      domains: [
        {
          title: 'Recommendation Engine',
          highlights: [
            'Engineered a movie recommendation system leveraging graph-based algorithms using PyTorch Geometric and NetworkX to improve content discoverability.',
          ],
        },
        {
          title: 'Computer Vision',
          highlights: [
            'Developed a robust thumbnail similarity detection pipeline utilizing OpenCV and Scikit-learn to identify duplicate media assets.',
          ],
        },
      ],
      tech: ['PyTorch Geometric', 'NetworkX', 'OpenCV', 'Scikit-learn'],
    },
  ],
  projects: [
    {
      name: 'Intelligent Data & Jewellery Analytics Platform',
      description:
        'Comprehensive platform integrating real-time analytics dashboards with automated billing and inventory tracking, reducing manual operations by 70%+.',
      stack: ['Python', 'FastAPI', 'React', 'SQL', 'AWS'],
      link: 'https://github.com/Dukandaar/SHOP_PORTAL_BACKEND',
    },
    {
      name: 'AI-Driven SQL Generator & Executor',
      description:
        'Multi-step reasoning workflow combining AI-driven SQL generation with an approval-based execution pipeline. Improved internal query productivity by 75% by enabling secure, automated data retrieval across 10+ database tables.',
      stack: ['Python', 'LangGraph', 'SQL', 'LLMs'],
      link: 'https://github.com/faithful-dragon/SQL_QUERY_GEN-EXC',
    },
  ],

  achievements: [
    {
      title: 'Best Performance Award',
      description: 'Received for contributions to scalable infrastructure and AI tooling at Samsung.',
      date: 'Aug 2025',
      file: '/achievements/best%20project%20growth%20award.png',
    },
    {
      title: 'Best Growth Project Award',
      description: 'Awarded for impactful project delivery and technical growth at Samsung.',
      date: '2025',
      file: '/achievements/best%20project%20growth%20award.png',
    },
    {
      title: 'Player of the Match — Cricket Tournament',
      description: 'Won Player of the Match award in the Samsung internal cricket tournament.',
      date: '2025',
      file: '/achievements/player-of-the-match.png',
    },
    {
      title: 'Captain, Volleyball Team',
      description: 'Led the institute volleyball team at the INTER IIT Sports Fest 2024.',
      date: '2024',
    },
  ],
  hobbies: ['🏐 Volleyball', '📚 Lifelong learning', '💻 Competitive programming', '🔧 Real-world problem solving'],
  contacts: [
    { label: 'Phone', value: '9110142092', href: 'tel:+919110142092', icon: 'phone' },
    { label: 'Email', value: 'kpwn0996@gmail.com', href: 'mailto:kpwn0996@gmail.com', icon: 'email' },
    { label: 'LinkedIn', value: 'LinkedIn', href: 'https://www.linkedin.com/in/pawan-kumar-147073223/', icon: 'linkedin' },
    { label: 'GitHub', value: 'GitHub', href: 'https://github.com/faithful-dragon', icon: 'github' },
  ],
  aiTooling: {
    description:
      'Practical prompt and agent workflows focused on reliable outputs, verification, and developer productivity.',
    methodologies: [
      'Use structured prompts with explicit role, context, and success criteria.',
      'Prefer iterative refinement with small verification loops instead of one-shot prompting.',
      'Keep agent outputs bounded with clear constraints, examples, and fallback rules.',
      'Validate important AI-driven actions through human review or deterministic checks.',
    ],
  },
};
