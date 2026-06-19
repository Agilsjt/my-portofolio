import {
  Braces,
  Code2,
  Database,
  Figma,
  GitBranch,
  Globe2,
  Layers3,
  Server,
  TerminalSquare,
  Wrench,
  ShieldCheck,
  BarChart3
} from 'lucide-react';
import alatkuptkImage from '../assets/alatkuptk.png';

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

export const stats = [
  { value: 'Major', label: 'Information Systems' },
  { value: 'School', label: 'Universitas Tanjungpura' },
  { value: 'Branding', label: 'Tech Enthusiast' }
];

export const skills = [
  {
    title: 'IT Governance & Risk',
    icon: ShieldCheck,
    items: [
      'COBIT 2019',
      'Capability Level Assessment',
      'IT Risk Assessment',
      'Information Security Assessment',
      'Gap Analysis',
      'IT Control Evaluation',
      'SPBE Assessment',
      'Policy & Procedure Review'
    ]
  },
  {
    title: 'Business & Process Analysis',
    icon: BarChart3,
    items: [
      'Business Process Analysis',
      'Business Process Modeling (BPMN)',
      'Requirements Analysis',
      'Enterprise Architecture',
      'TOGAF ADM',
      'Process Improvement',
      'Stakeholder Analysis',
      'Documentation'
    ]
  },
  {
    title: 'Data Management & Reporting',
    icon: Database,
    items: [
      'Data Validation',
      'Data Quality Assurance',
      'Data Visualization',
      'Microsoft Excel',
      'Microsoft Word',
      'Microsoft PowerPoint',
      'Data Cleaning',
      'Statistical Reporting'
    ]
  },
  {
    title: 'Database Systems',
    icon: Server,
    items: [
      'MySQL',
      'PostgreSQL',
      'Database Design',
      'Data Modeling',
      'Query Design',
      'Relational Database',
      'ERD Design'
    ]
  },
  {
    title: 'Web Development',
    icon: Code2,
    items: [
      'Laravel',
      'PHP',
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Laravel Blade',
      'REST API'
    ]
  },
  {
    title: 'Digital & Web Concepts',
    icon: Globe2,
    items: [
      'SEO Basics',
      'Accessibility',
      'Web Performance',
      'Responsive Design',
      'CMS Management',
      'Digital Transformation',
      'User Experience Fundamentals'
    ]
  }
];

export const projects = [
  {
    title: 'Alatkuptk',
    category: 'Website Penjualan',
    description:
      'Platform e-commerce untuk penjualan alat berat dengan fitur katalog produk dan checkout yang mudah digunakan melalui api whatsapp.',
    image:
      alatkuptkImage,
    tags: ['Laravel', 'Tailwind CSS', 'MySQL'],
    link: 'https://alatkuptk.com'
  }
];

export const floatingIcons = [Braces, Layers3, TerminalSquare, GitBranch];
