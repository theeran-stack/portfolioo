import { SkillItem } from '@/types/portfolio';

export const skillsData: SkillItem[] = [
  // Languages & Core
  {
    id: 'cpp',
    name: 'C++ & OOP',
    category: 'Languages & Core',
    levelLabel: 'Advanced',
    icon: 'Code2',
    description: 'Object-oriented programming, memory management, data structures, and algorithmic problem-solving.',
    tags: ['Algorithms', 'Data Structures', 'Embedded Firmware', 'Memory Management'],
    isFeatured: true
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Languages & Core',
    levelLabel: 'Advanced',
    icon: 'FileCode2',
    description: 'Data processing, machine learning pipelines with scikit-learn/joblib, Django backends, and scripting.',
    tags: ['ML Pipelines', 'Django', 'Automation', 'NumPy'],
    isFeatured: true
  },
  {
    id: 'typescript',
    name: 'TypeScript & JavaScript',
    category: 'Languages & Core',
    levelLabel: 'Advanced',
    icon: 'FileCode',
    description: 'Strongly typed modern web applications, async event loops, component interfaces, and scalable architectures.',
    tags: ['ES6+', 'Strict Types', 'Async/Await', 'DOM APIs'],
    isFeatured: true
  },
  {
    id: 'html-css',
    name: 'Modern HTML5 & CSS3',
    category: 'Languages & Core',
    levelLabel: 'Expert',
    icon: 'Layout',
    description: 'Semantic markup, accessible structures, responsive CSS grid/flexbox, custom animations, and CSS variables.',
    tags: ['Semantic HTML', 'CSS Grid', 'Flexbox', 'Accessibility (a11y)'],
    isFeatured: true
  },

  // Web & Frameworks
  {
    id: 'nextjs',
    name: 'Next.js App Router',
    category: 'Web & Frameworks',
    levelLabel: 'Advanced',
    icon: 'Globe',
    description: 'Server Components, dynamic routing, metadata optimization, fast edge delivery, and production deployments.',
    tags: ['Next.js 15/16', 'App Router', 'RSC', 'Vercel Deployment'],
    isFeatured: true
  },
  {
    id: 'react',
    name: 'React',
    category: 'Web & Frameworks',
    levelLabel: 'Advanced',
    icon: 'Atom',
    description: 'State management, custom hooks, reusable design systems, Framer Motion animations, and reactive interfaces.',
    tags: ['Hooks', 'Context API', 'State Modeling', 'Component Architecture'],
    isFeatured: true
  },
  {
    id: 'django',
    name: 'Django Web Framework',
    category: 'Web & Frameworks',
    levelLabel: 'Proficient',
    icon: 'Server',
    description: 'Backend web apps with MTV architecture, ORM querysets, URL routing, authentication, and media serving.',
    tags: ['MTV Architecture', 'ORM', 'Audio Streaming', 'SQLite'],
    isFeatured: true
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Web & Frameworks',
    levelLabel: 'Advanced',
    icon: 'Palette',
    description: 'Utility-first modern styling, design token systems, dark/light theme switching, and responsive layouts.',
    tags: ['Design Tokens', 'Dark Theme', 'Responsive Grids', 'Micro-interactions']
  },

  // Embedded & IoT
  {
    id: 'esp32',
    name: 'ESP32 & ESP8266 Architecture',
    category: 'Embedded & IoT',
    levelLabel: 'Advanced',
    icon: 'Cpu',
    description: 'Dual-core microcontroller programming, Wi-Fi station/AP modes, GPIO interrupts, and SPI/I2C peripheral interfacing.',
    tags: ['FreeRTOS', 'SPI Bus', 'I2C', 'Hardware Interrupts'],
    isFeatured: true
  },
  {
    id: 'freertos',
    name: 'FreeRTOS Real-Time Kernel',
    category: 'Embedded & IoT',
    levelLabel: 'Advanced',
    icon: 'Clock',
    description: 'Preemptive task scheduling, inter-task queues, semaphores, mutexes, watchdog timer servicing, and real-time telemetry.',
    tags: ['Task Scheduling', 'Queues', 'Watchdog Timer', 'Concurrency'],
    isFeatured: true
  },
  {
    id: 'iot-protocols',
    name: 'MQTT & Wireless Telemetry',
    category: 'Embedded & IoT',
    levelLabel: 'Proficient',
    icon: 'Radio',
    description: 'Publish/subscribe message brokers, structured JSON telemetry streaming, HTTP REST endpoints, and cloud sync.',
    tags: ['MQTT Broker', 'PubSubClient', 'JSON Serialization', 'Cloud Dashboards'],
    isFeatured: true
  },
  {
    id: 'sensors-hardware',
    name: 'Sensor Fusion & Hardware Interfacing',
    category: 'Embedded & IoT',
    levelLabel: 'Advanced',
    icon: 'Gauge',
    description: 'Interfacing DHT22 sensors, SSD1306 OLED displays, 6-axis IMUs, AS7265x multi-spectral sensors, and MicroSD card SPI loggers.',
    tags: ['MicroSD Logging', 'DHT22', 'SSD1306 OLED', 'AS7265x Multi-Spectral']
  },

  // Creative & Media
  {
    id: 'premiere-pro',
    name: 'Adobe Premiere Pro',
    category: 'Creative & Media',
    levelLabel: 'Expert',
    icon: 'Film',
    description: 'Primary workstation for multi-camera video timelines, proxy editing workflows, dynamic pacing, and commercial delivery.',
    tags: ['Multi-Cam', 'Proxy Workflows', 'Dynamic Pacing', 'Timeline Editing'],
    isFeatured: true
  },
  {
    id: 'davinci-resolve',
    name: 'DaVinci Resolve',
    category: 'Creative & Media',
    levelLabel: 'Advanced',
    icon: 'Sliders',
    description: 'Node-based color grading, color space transforms, shot-to-shot balance matching, and cinema export pipelines.',
    tags: ['Color Grading', 'Node Pipelines', 'LUT Management', 'Master Exports'],
    isFeatured: true
  },
  {
    id: 'cinematography',
    name: 'Cinematography & Visual Direction',
    category: 'Creative & Media',
    levelLabel: 'Expert',
    icon: 'Camera',
    description: 'Camera framing, dynamic 3-point lighting setups, lens selection, gimbal motion coordination, and live event coverage.',
    tags: ['Framing', 'Lighting Geometry', 'Gimbal Stabilization', 'Event Direction'],
    isFeatured: true
  },
  {
    id: 'sound-design',
    name: 'Sound Design & Audio Mastering',
    category: 'Creative & Media',
    levelLabel: 'Advanced',
    icon: 'Volume2',
    description: 'Audio restoration, EQ cleaning, ambient soundscape design, impact Foley synchronization, and broadcast loudness mastering.',
    tags: ['Foley', 'Audio Cleanup', 'Loudness Standards', 'Ambient Mix']
  },

  // Tools & DevOps
  {
    id: 'git-github',
    name: 'Git & GitHub',
    category: 'Tools & DevOps',
    levelLabel: 'Advanced',
    icon: 'GitBranch',
    description: 'Version control workflows, feature branching, release management, merge conflict resolution, and open-source contribution.',
    tags: ['Branching', 'PR Reviews', 'CI/CD Basics', 'Tags'],
    isFeatured: true
  },
  {
    id: 'firebase',
    name: 'Firebase & Cloud Services',
    category: 'Tools & DevOps',
    levelLabel: 'Proficient',
    icon: 'Flame',
    description: 'Realtime Database sync, user authentication, static web hosting, and real-time sensor cloud bridging.',
    tags: ['Realtime DB', 'Firebase Auth', 'Hosting', 'Cloud Sync']
  },
  {
    id: 'arduino-ide-platformio',
    name: 'Arduino IDE & PlatformIO',
    category: 'Tools & DevOps',
    levelLabel: 'Advanced',
    icon: 'Terminal',
    description: 'Firmware compilation, board manager configuration, library dependency management, and hardware serial debugging.',
    tags: ['PlatformIO', 'Serial Monitor', 'Firmware Flashing', 'Board Config']
  },
  {
    id: 'cisco-uipath',
    name: 'Networking & Automation',
    category: 'Tools & DevOps',
    levelLabel: 'Proficient',
    icon: 'Workflow',
    description: 'Network topology simulation with Cisco Packet Tracer and robotic process automation with UiPath Studio.',
    tags: ['Cisco Packet Tracer', 'UiPath Studio', 'RPA', 'Subnetting']
  }
];
