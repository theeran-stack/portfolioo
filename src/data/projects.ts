import { ProjectItem } from '@/types/portfolio';

export const projectsData: ProjectItem[] = [
  {
    id: 'homepulse-iot',
    slug: 'homepulse-iot',
    title: 'HomePulse — IoT Smart Home Telemetry System',
    subtitle: 'Microcontroller hardware node streaming environmental telemetry to a live Firebase cloud dashboard',
    description:
      'An end-to-end IoT monitoring solution integrating ESP8266/ESP32 microcontrollers, DHT sensors, OLED display, and Firebase Realtime Database with an interactive web dashboard.',
    fullDescription:
      'HomePulse connects physical environment sensing with real-time cloud data infrastructure. Built using ESP8266/ESP32 microcontrollers running custom C++ firmware, the device continuously samples temperature, humidity, and atmospheric metrics via DHT sensors, renders local diagnostics on an I2C SSD1306 OLED screen, and streams structured JSON payloads over secure Wi-Fi to Firebase Realtime Database. The accompanying responsive web dashboard visualizes live graphs, alerts on environmental threshold violations, and supports remote device configuration.',
    category: 'Embedded & IoT',
    status: 'Completed',
    date: '2026-09',
    technologies: ['ESP8266', 'ESP32', 'C++', 'Firebase Realtime DB', 'JavaScript', 'HTML5/CSS3', 'I2C OLED', 'DHT Sensor'],
    githubUrl: 'https://github.com/theeran-stack/HomePulse',
    featuredImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop'
    ],
    problemStatement:
      'Home automation setups often rely on proprietary closed-source hubs that lack real-time transparent data logging, require subscription fees, and fail to provide local OLED hardware diagnostics when Wi-Fi is temporarily interrupted.',
    solutionArchitecture:
      'Architected a resilient edge-to-cloud pipeline where local microcontroller logic drives an I2C OLED display independently of cloud connectivity. A state machine manages non-blocking Wi-Fi retries while queuing critical readings, pushing data to Firebase Realtime Database with low latency.',
    keyFeatures: [
      'Real-time cloud synchronization using Firebase Realtime Database WebSockets',
      'Onboard local diagnostic telemetry rendering on 0.96" I2C SSD1306 OLED screen',
      'Fault-tolerant Wi-Fi reconnection state machine preventing microcontroller lockups',
      'Interactive responsive web dashboard with live gauge animations and historical logs',
      'Configurable warning thresholds for temperature and humidity anomalies'
    ],
    challenges: [
      {
        challenge: 'Intermittent Wi-Fi signal drops causing blocking network calls to freeze OLED display updates.',
        solution:
          'Refactored firmware to separate the sensor sampling loop from network transmission using non-blocking timer intervals, allowing the OLED to refresh smoothly even offline.'
      },
      {
        challenge: 'Firebase JSON parsing overhead on resource-constrained ESP8266 memory.',
        solution:
          'Streamlined payload schemas and optimized buffer allocations using ArduinoJson fixed memory pools.'
      }
    ],
    lessonsLearned: [
      'Mastered edge-device asynchronous network handling and memory-safe C++ buffering.',
      'Gained deep experience with Firebase REST/WebSocket client synchronization patterns.',
      'Learned industrial enclosure and wiring stability best practices for hardware prototypes.'
    ],
    outcomes:
      'Achieved stable 24/7 continuous sensor logging with sub-500ms cloud synchronization latency across tested environments.',
    isFeatured: true
  },
  {
    id: 'laptop-intelligence',
    slug: 'laptop-intelligence',
    title: 'Laptop Intelligence — Personal Workspace Analytics',
    subtitle: 'Modern React & Vite dashboard for workspace application telemetry and productivity insights',
    description:
      'A sleek desktop-class analytics platform tracking developer application usage, focus scores, work sessions, and automated report exports.',
    fullDescription:
      'Laptop Intelligence is a high-performance productivity analytics web application built with React, Vite, and Lucide icons. Designed with a luxury dark aesthetic, it tracks active developer work sessions across tools like Visual Studio Code, Adobe Premiere Pro, and Chrome. The system computes focus ratios, categorizes time into Development vs Creative buckets, and provides JSON report export functionality alongside an interactive AI assistant module.',
    category: 'Full Stack',
    status: 'Completed',
    date: '2026-10',
    technologies: ['React 19', 'Vite', 'JavaScript', 'CSS3 Tokens', 'Lucide Icons', 'HTML5 Web APIs'],
    githubUrl: 'https://github.com/theeran-stack/Laptop-Intelligence',
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop'
    ],
    problemStatement:
      'Developers and video editors frequently lose track of how their working hours are distributed between coding, debugging, rendering, and research, leading to burnout and inefficient project scheduling.',
    solutionArchitecture:
      'Designed a modular component architecture with memoized search filtering, reactive state management for workspace time tracking, and client-side Blob generation for instant JSON report downloads without requiring a slow backend.',
    keyFeatures: [
      'Categorized application breakdown (Development, Creative, Browser, System)',
      'Real-time focus score algorithm balancing productive windows vs distractions',
      'Interactive AI insight query assistant with conversation history state',
      'Instant client-side JSON analytics report generation and automated download',
      'Fast responsive search filter across active background tasks and events'
    ],
    challenges: [
      {
        challenge: 'Maintaining high rendering performance during fast real-time search across hundreds of log events.',
        solution:
          'Utilized React useMemo hooks and optimized filter predicates to ensure 60fps responsiveness during keystrokes.'
      },
      {
        challenge: 'Designing a dense analytics layout that remains legible and uncluttered on smaller laptop displays.',
        solution:
          'Constructed a collapsible sidebar design with disciplined CSS custom property color tokens.'
      }
    ],
    lessonsLearned: [
      'Deepened skills in modern React hook state lifecycle patterns (useMemo, useState).',
      'Learned client-side data serialization and memory cleanup with URL.revokeObjectURL.',
      'Refined visual design instincts for data-dense dashboards.'
    ],
    outcomes:
      'Delivered a polished, zero-lag personal analytics dashboard capable of categorizing multiple workflow types instantly.',
    isFeatured: true
  },
  {
    id: 'sonora-music-app',
    slug: 'sonora-music-app',
    title: 'Sonora — Full-Stack Django Audio Platform',
    subtitle: 'Django web application featuring HTML5 audio streaming, dynamic queue management, and playlist curation',
    description:
      'A full-stack web application built on Django providing seamless audio playback, track filtering, session queue manipulation, and responsive UI controls.',
    fullDescription:
      'Sonora is a music streaming web application developed with Python and the Django framework. It provides full HTML5 audio stream management, including seek bar scrub controls, volume attenuation, shuffle, repeat, track search filtering, and session-only playlist creation. Built with Django MTV (Model-Template-View) architecture and clean vanilla JavaScript for low-latency media playback.',
    category: 'Full Stack',
    status: 'Completed',
    date: '2026-08',
    technologies: ['Python', 'Django', 'JavaScript', 'HTML5 Audio API', 'CSS3', 'SQLite'],
    githubUrl: 'https://github.com/theeran-stack/Sonora-Music-App',
    featuredImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop'
    ],
    problemStatement:
      'Building robust audio streaming web interfaces requires synchronizing asynchronous audio buffer states with DOM playback controls without stuttering or desynchronization.',
    solutionArchitecture:
      'Engineered an event-driven JavaScript media controller integrated with Django template views. Audio events (timeupdate, ended, loadedmetadata) bind directly to stateful UI widgets, allowing uninterrupted playback during page navigation.',
    keyFeatures: [
      'Custom HTML5 audio engine with real-time scrub bar and time formatting',
      'Dynamic track search and filter engine matching titles, artists, and genres',
      'Queue management supporting shuffle algorithm, continuous repeat, and next/prev',
      'Session playlist creation and interactive track liking mechanisms',
      'Django backend routing, static asset distribution, and extensible model schemas'
    ],
    challenges: [
      {
        challenge: 'Smooth scrub bar synchronization without triggering repeated audio re-buffering loops.',
        solution:
          'Decoupled scrub input drag events from audio.currentTime updates, committing seek timestamps only upon mouseup/touchend.'
      }
    ],
    lessonsLearned: [
      'Gained deep proficiency with the HTML5 Audio API and media element event handling.',
      'Strengthened backend fundamentals in Django URL dispatching, context processors, and templates.'
    ],
    outcomes:
      'Created a fluid audio player capable of streaming tracks with instant search responsiveness and zero playback jitter.',
    isFeatured: true
  },
  {
    id: 'textile-ml-classifier',
    slug: 'textile-ml-classifier',
    title: 'Textile ML — Multi-Spectral Fabric Classifier',
    subtitle: 'Machine learning classification and blend percentage regression using AS7265x optical sensor data',
    description:
      'A specialized machine learning pipeline utilizing multi-spectral optical reflectance data for automated textile material classification and fiber blend regression.',
    fullDescription:
      'Developed as part of industrial automation research at Forge, Textile ML explores automated fabric identification. By analyzing optical signature reflectance across 18 distinct spectral channels (from UV through visible to Near-Infrared via AS7265x sensors), the pipeline trains classifier models to identify material categories (Cotton, Polyester, Wool, Blends) and predicts fiber ratio percentages using Scikit-Learn regressors serialized with Joblib.',
    category: 'Machine Learning',
    status: 'Completed',
    date: '2026-10',
    technologies: ['Python', 'Scikit-Learn', 'Joblib', 'Pandas', 'NumPy', 'AS7265x Sensor Protocol'],
    githubUrl: 'https://github.com/theeran-stack/Textile_ML',
    featuredImage: 'https://images.unsplash.com/photo-1528458876885-5b6eac83d32b?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1528458876885-5b6eac83d32b?q=80&w=1200&auto=format&fit=crop'
    ],
    problemStatement:
      'Textile recycling and industrial sorting currently depend on manual touch inspections or expensive lab spectrometry, leading to inaccurate fabric blend sorting and recycling waste.',
    solutionArchitecture:
      'Constructed a multi-stage Python ML pipeline: spectral data preprocessing, standard scaling, Random Forest classification for primary material identity, and Ridge/Gradient Boosting regression for multi-fiber percentage estimation.',
    keyFeatures: [
      '18-channel multi-spectral feature normalization and outlier filtering',
      'Dual-stage ML architecture: fabric type classification + blend ratio regression',
      'Joblib model artifact serialization for standalone inference testing',
      'Comprehensive validation metrics (Confusion Matrix, F1-Score, RMSE)',
      'Documented software pipeline architecture ready for hardware edge translation'
    ],
    challenges: [
      {
        challenge: 'High feature correlation across neighboring NIR wavelengths leading to model overfitting.',
        solution:
          'Applied Principal Component Analysis (PCA) and feature importance analysis to extract the most discriminative optical bands.'
      }
    ],
    lessonsLearned: [
      'Understood end-to-end applied machine learning workflows from dataset generation to evaluation.',
      'Gained practical insight into spectral optical physics and material reflectance characteristics.'
    ],
    outcomes:
      'Successfully verified the software inference pipeline with reproducible cross-validation scores across synthetic spectral datasets.',
    isFeatured: true
  },
  {
    id: 'camera-rig-telemetry',
    slug: 'camera-rig-telemetry',
    title: 'Camera Rig Telemetry — Arduino Motion Logger',
    subtitle: 'Hardware sensor rig capturing live gimbal roll, pitch, and camera motion telemetry during cinematic shoots',
    description:
      'An embedded logging module mounted on camera stabilizers to record IMU angular acceleration, gimbal roll/pitch angles, and shot duration to MicroSD cards.',
    fullDescription:
      'Combining my passion for cinematography and embedded systems, I engineered a hardware telemetry module mounted directly onto cinema camera rigs. Built with an Arduino microcontroller, 6-axis MPU6050 IMU, and SPI MicroSD datalogger, the unit samples high-frequency tilt/roll angles at 100Hz. This telemetry allows post-production video editors to precisely analyze camera stabilization quality and synchronize VFX camera moves.',
    category: 'Creative Tech',
    status: 'Completed',
    date: '2025-11',
    technologies: ['C++', 'Arduino IDE', 'MPU6050 6-Axis IMU', 'SPI Bus', 'MicroSD Logger', 'Cinematography'],
    githubUrl: 'https://github.com/theeran-stack/camera-rig-telemetry',
    featuredImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop'
    ],
    problemStatement:
      'During high-speed action camera moves, judging whether a gimbal stabilizer maintained level horizon requires tedious manual frame inspection in post-production.',
    solutionArchitecture:
      'Wrote optimized C++ firmware reading gyroscope and accelerometer registers via I2C, running a complementary sensor fusion filter, and writing comma-separated telemetry records to SPI SD flash memory with minimal latency.',
    keyFeatures: [
      '100Hz real-time sensor sampling with low-drift complementary filter',
      'Hardware SPI MicroSD logging with safe file flush routines preventing data corruption',
      'Compact, lightweight battery-powered enclosure mountable on camera cages',
      'LED status diagnostics for instant sensor calibration and SD write status'
    ],
    challenges: [
      {
        challenge: 'MicroSD card write latency causing dropped IMU sensor frames during high-speed sampling.',
        solution:
          'Implemented a circular ring buffer in C++ memory that decoupled high-speed interrupt sampling from batch SD block writes.'
      }
    ],
    lessonsLearned: [
      'Mastered I2C protocol timing, SPI bus configuration, and hardware interrupt routines.',
      'Gained first-hand understanding of how hardware telemetry directly empowers cinematic workflows.'
    ],
    outcomes:
      'Deployed on multiple Nigal Club camera shoots, logging over 10 hours of synchronized camera telemetry without a single dropped packet.',
    isFeatured: true
  },
  {
    id: 'portfolio-ecosystem',
    slug: 'portfolio-ecosystem',
    title: 'Theeran Digital Portfolio Ecosystem',
    subtitle: 'Production Next.js 16 App Router personal digital identity platform with cinematic design',
    description:
      'A handcrafted, production-grade portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion featuring a Forge documentary journal and case study dialogs.',
    fullDescription:
      'This website is engineered as a permanent digital identity platform for the next decade. Architected with Next.js App Router, strict TypeScript models, and a luxury dark/light design system, it showcases my dual expertise in systems engineering and cinematic storytelling. It includes a dedicated Forge Journal 6-week technical sprint log, live LeetCode coding profile integration, project case study modals, and an ambient particle canvas.',
    category: 'Full Stack',
    status: 'Completed',
    date: '2026-10',
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'Framer Motion', 'Lucide Icons', 'Vercel'],
    githubUrl: 'https://github.com/theeran-stack/portfolio',
    liveUrl: 'https://theeran.dev',
    featuredImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop'
    ],
    problemStatement:
      'Generic portfolio templates look identical, lack architectural integrity, and fail to capture the authentic depth of both deep hardware engineering and high-end video production.',
    solutionArchitecture:
      'Created strongly typed TypeScript data stores ensuring zero duplicate content and easy single-file updates. Implemented GPU-accelerated Framer Motion transitions, responsive modal dialogs with focus trapping, and accessible semantic HTML.',
    keyFeatures: [
      'Documentary-style Season One: Forge Journey weekly milestone navigator',
      'Comprehensive project case study dialogs with problem, architecture, and learnings',
      'Persistent dark/light theme toggle with CSS variable design tokens',
      'Interactive LeetCode coding activity card with topic breakdowns',
      'Fully responsive, keyboard-navigable, reduced-motion accessible design'
    ],
    challenges: [
      {
        challenge: 'Delivering rich cinematic animations while preserving instant page loads and zero layout shift.',
        solution:
          'Utilized Next.js Server Component shells with client-side animation islands and CSS containment.'
      }
    ],
    lessonsLearned: [
      'Mastered Next.js App Router component boundary optimization.',
      'Refined design token discipline for editorial luxury interfaces.'
    ],
    outcomes:
      'Built a fast, scalable personal portfolio that represents the complete breadth of my technical and creative work.',
    isFeatured: true
  }
];
