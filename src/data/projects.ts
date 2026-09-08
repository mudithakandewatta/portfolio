export interface Project {
  title: string
  description: string
  /** Filename (no extension) of an image in src/assets/projects/ — .png, .jpg, .jpeg, .webp, or .svg all work. */
  image: string
  tags: string[]
  github?: string
  demo?: string
  featured?: boolean
}

// Add your real GitHub/demo links once available — left blank rather than guessed.
export const projects: Project[] = [
  {
    title: 'HealthLink – Smart Healthcare Platform',
    description:
      'A healthcare management platform built for a real-world client on the MERN stack, with patient management, appointment scheduling, and doctor record handling. Integrated a machine learning-based doctor recommendation feature. Role: Team Leader.',
    image: 'healthlink',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Python (ML API)', 'JWT'],
    github: '',
    demo: '',
    featured: true,
  },
  {
    title: 'Regression & ANOVA Engine with Agentic AI Layer',
    description:
      'A statistical analysis tool that runs regression and ANOVA on uploaded datasets, with an AI agent layer that explains the results in plain language.',
    image: 'anova-engine',
    tags: ['Python', 'AI Agents', 'Data Analysis'],
    github: '',
    demo: '',
    featured: true,
  },
  {
    title: 'UniFind – Campus Lost & Found',
    description:
      'A moderated lost-and-found platform for the University of Colombo, replacing scattered social media posts and notice boards with a single verified, auditable system. Set up Git Flow branching, GitHub Actions CI, and the shared component library used across the app.',
    image: 'campus-lost-and-found',
    tags: ['Node.js', 'Express.js', 'MongoDB Atlas', 'React 18', 'Vite', 'JWT'],
    github: '',
    demo: '',
    featured: true,
  },
  {
    title: 'Event Management System',
    description:
      'A web-based event management system handling event creation and schedule management, with user authentication, event CRUD operations, and an admin dashboard for managing events and attendees. Role: Team Leader.',
    image: 'event-management',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    github: '',
    demo: '',
  },
  {
    title: 'Personal Finance Tracker Mobile App',
    description:
      'A mobile app for tracking income, expenses, budget limits, and category-wise spending with persistent local storage, JSON export/import, and a fragment-based architecture with bottom navigation.',
    image: 'personal-finance-tracker',
    tags: ['Kotlin', 'Android Studio', 'XML', 'SharedPreferences'],
    github: '',
    demo: '',
  },
  {
    title: 'Online Computer Spare Parts Management System',
    description:
      'A group project web system for managing computer spare parts inventory, orders, and stock updates, with secure admin/user roles, product listing, and real-time order processing.',
    image: 'computer-spare-parts',
    tags: ['Java Servlets', 'JSP', 'Apache Tomcat', 'MySQL'],
    github: '',
    demo: '',
  },
  {
    title: 'Routify – Cycling Web App',
    description:
      'A full-stack cycling platform supporting route sharing, ride tracking, and community engagement among cyclists, with authentication, an interactive UI, and dynamic route/activity data. Role: Team Leader.',
    image: 'routify',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
    github: '',
    demo: '',
  },
  {
    title: 'Personal Bookshelf Manager',
    description:
      'A personal library app to catalog, search, and track books you own or want to read, with an AI-assisted version that scans book spines to add them automatically.',
    image: 'bookshelf-manager',
    tags: ['React', 'TypeScript', 'Computer Vision'],
    github: '',
    demo: '',
  },
  {
    title: 'Crop Disease Detection',
    description:
      'An image-based tool that identifies common crop diseases from leaf photos, helping farmers act early and reduce yield loss.',
    image: 'crop-disease-detection',
    tags: ['Python', 'Machine Learning', 'Computer Vision'],
    github: '',
    demo: '',
  },
]
