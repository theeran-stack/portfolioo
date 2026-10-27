import { ForgeWeekEpisode } from '@/types/portfolio';

export const forgeProgramInfo = {
  programName: 'Forge ProtoSem Fellowship (Season One: Forge Journey)',
  organization: 'Forge Innovation & Ventures / Kumaraguru College of Technology',
  subtitle: 'Industrial Microcontroller Prototyping, Real-Time Embedded Systems & IoT Engineering',
  duration: '20 Weeks (Current Cohort)',
  overview:
    'An intensive technical prototyping fellowship focused on turning engineering concepts into production-grade hardware and software solutions. The curriculum encompasses industrial ideation, FreeRTOS real-time kernel programming, high-speed sensor interfacing, hardware SPI/I2C communication, and cloud IoT telemetry integration.',
  learningObjectives: [
    'Master real-time preemptive embedded kernels (FreeRTOS) on dual-core ESP32 microcontrollers',
    'Design hardware SPI and I2C peripheral interfacing pipelines with robust error recovery',
    'Implement wireless telemetry streaming over MQTT brokers and HTTP REST endpoints',
    'Apply machine learning models (AS7265x multi-spectral sensing) to physical automation challenges',
    'Document engineering challenges, system architectures, and hardware debugging systematically'
  ],
  totalWeeks: 20,
  completedWeeks: 8,
  activeCohortYear: '2025 — 2026'
};

export const forgeEpisodes: ForgeWeekEpisode[] = [
  {
    weekNumber: 1,
    id: 'forge-w1',
    title: 'Episode 01 — Innovation Frameworks & Design Thinking',
    subtitle: 'Problem Discovery, Customer Empathy Mapping, and Hardware Opportunity Framing',
    dateRange: 'Week 1',
    category: 'Innovation & Strategy',
    status: 'Completed',
    summary:
      'Initiated Season One of the Forge ProtoSem fellowship. Focused on systematic problem discovery, identifying friction points in industrial automation and consumer tech, and applying design thinking frameworks to prioritize feasibility and impact.',
    objectives: [
      'Deconstruct complex problems into validated customer pain points',
      'Conduct stakeholder interview simulations and market landscape analysis',
      'Frame actionable design questions for embedded hardware and IoT intervention',
      'Synthesize initial requirements for semester prototyping deliverables'
    ],
    activitiesCompleted: [
      'Participated in intensive design thinking workshops led by Forge incubation mentors',
      'Conducted peer problem-validation sessions analyzing industrial sensor failures',
      'Formulated problem statements focusing on real-time hardware telemetry needs',
      'Structured collaborative team documentation and milestone tracking'
    ],
    challengesFaced:
      'Avoiding the trap of proposing solutions before thoroughly understanding the operational failure modes experienced by end users.',
    challengesFixesList: [
      {
        challenge: 'Premature solution bias during problem discovery brainstorms.',
        fix: 'Applied the 5-Whys root cause analysis technique to trace surface complaints back to foundational engineering bottlenecks.'
      }
    ],
    skillsGained: [
      'Design Thinking',
      'Problem Discovery',
      'Stakeholder Empathy',
      'Requirement Specification',
      'Team Collaboration'
    ],
    conceptsLearned: [
      'Customer Value Proposition Canvas',
      'Root Cause Analysis (5-Whys)',
      'Feasibility vs Desirability vs Viability Matrix'
    ],
    keyLearnings:
      'A technically sophisticated device is worthless if it solves the wrong problem. Rigorous problem scoping saves hundreds of hours of wasted prototyping later.',
    reflection:
      'Week 1 established the discipline of questioning assumptions. Approaching engineering through the lens of human experience immediately made technical decisions clearer.',
    highlights: [
      'Defined initial telemetry logging hypothesis',
      'Completed comprehensive market landscape evaluation',
      'Synthesized core ProtoSem milestone roadmaps'
    ],
    galleryImages: [
      {
        url: '/img/week-1/IMG20260727113755.jpg.jpeg',
        caption: 'Cohort Problem Discovery & Ideation Session at Forge Studio',
        type: 'image'
      },
      {
        url: '/img/week-1/IMG20260728123255_20260810161452.jpg.jpeg',
        caption: 'Team Stakeholder Requirement Mapping & Discussion',
        type: 'image'
      },
      {
        url: '/img/week-1/IMG20260728160259_20260810161452.jpg.jpeg',
        caption: 'System Architecture Whiteboarding & Design Constraints',
        type: 'image'
      },
      {
        url: '/img/week-1/IMG20260729122235_20260810161452.jpg.jpeg',
        caption: 'Prototyping Framework Syntheses & Feedback Review',
        type: 'image'
      }
    ],
    tags: ['Design Thinking', 'Problem Discovery', 'ProtoSem', 'Innovation', 'Engineering Strategy'],
    teamCredits: [
      { role: 'Student Fellow', name: 'Theeran P.' },
      { role: 'Incubation Mentors', name: 'Forge ProtoSem Innovation Team' }
    ]
  },
  {
    weekNumber: 2,
    id: 'forge-w2',
    title: 'Episode 02 — Embedded Architectures & App Prototyping',
    subtitle: 'Microcontroller Fundamentals, Mobile Companion Apps, and Data Pipelines',
    dateRange: 'Week 2',
    category: 'Embedded Systems',
    status: 'Completed',
    summary:
      'Explored microcontroller hardware architecture, GPIO register fundamentals, serial communications, and companion mobile interface prototyping using MIT App Inventor to validate wireless command dispatch.',
    objectives: [
      'Analyze microcontroller architecture (CPU, RAM, flash memory, and peripheral buses)',
      'Configure UART serial communication channels for diagnostic logging',
      'Develop rapid mobile companion apps with MIT App Inventor for hardware controls',
      'Understand synchronous vs asynchronous data transfer across microcontroller interfaces'
    ],
    activitiesCompleted: [
      'Engineered an Android companion prototype (Konnecet Bot / Location Nodes) with MIT App Inventor',
      'Programmed Python scripts to parse serial data streams and generate visual diagnostic logs',
      'Tested UART command parsing with various baud rates and buffer sizes',
      'Documented mobile-to-hardware packet schemas'
    ],
    challengesFaced:
      'Handling packet loss and malformed command strings when transmitting fast telemetry over Bluetooth/Serial.',
    challengesFixesList: [
      {
        challenge: 'Malformed command strings causing buffer overflows in simple serial parsers.',
        fix: 'Introduced start/end delimiter framing with checksum validation to reject corrupted transmissions.'
      }
    ],
    skillsGained: [
      'UART Serial Protocols',
      'MIT App Inventor',
      'Mobile Rapid Prototyping',
      'Python Data Parsing',
      'Buffer Management'
    ],
    conceptsLearned: [
      'Microcontroller Clock Cycles & Baud Rate Clock Divisors',
      'Packet Delimiting & Framing Protocols',
      'Client-Server Interaction over Wireless Serial'
    ],
    keyLearnings:
      'Early visual interfaces accelerate hardware testing dramatically by allowing immediate inspection of internal microcontroller state variables.',
    reflection:
      'Pairing mobile apps with embedded controllers demonstrated how modern hardware products must be engineered as cohesive ecosystems rather than isolated circuits.',
    highlights: [
      'Built working Android control prototype with MIT App Inventor',
      'Established stable bidirectional serial communication pipeline',
      'Validated Python automated serial data monitor'
    ],
    galleryImages: [
      {
        url: '/img/week-2/MIT/Konnecet Bot.jpeg',
        caption: 'Konnecet Bot Mobile Companion Application Interface',
        type: 'image'
      },
      {
        url: '/img/week-2/MIT/User Dashboard.jpeg',
        caption: 'Mobile Telemetry & Device Control Dashboard Prototype',
        type: 'image'
      },
      {
        url: '/img/week-2/MIT/My Events.jpeg',
        caption: 'Event Dispatcher & Command Queue Screen',
        type: 'image'
      },
      {
        url: '/img/week-2/Python/Python learning.jpg',
        caption: 'Python Data Extraction & Serial Logging Verification',
        type: 'image'
      }
    ],
    tags: ['Embedded Systems', 'MIT App Inventor', 'Python', 'UART', 'Mobile Prototyping'],
    teamCredits: [
      { role: 'Hardware & App Prototyper', name: 'Theeran P.' },
      { role: 'Cohort Review Lead', name: 'Forge ProtoSem Technical Faculty' }
    ]
  },
  {
    weekNumber: 3,
    id: 'forge-w3',
    title: 'Episode 03 — Sensor Interfacing & Mechanical Enclosures',
    subtitle: 'Electronics Circuit Design, Analog-to-Digital Conversion, and 3D CAD Modeling',
    dateRange: 'Week 3',
    category: 'Hardware & CAD',
    status: 'Completed',
    summary:
      'Transitioned into physical hardware assembly and enclosure design. Implemented multi-sensor analog/digital sampling, designed custom 3D mechanical enclosures for PCB protection, and evaluated thermal dissipation for embedded controllers.',
    objectives: [
      'Interface digital and analog sensors using ADC calibration',
      'Design modular mechanical 3D enclosures in CAD with mounting bosses and port cutouts',
      'Minimize signal noise on analog sensor lines using hardware decoupling capacitors',
      'Verify physical mechanical tolerances for field testing durability'
    ],
    activitiesCompleted: [
      'Assembled breadboard prototypes combining environmental and optical sensors',
      'Created 3D CAD models of protective enclosures (Base Body, Base Sketch, Decay view)',
      'Calibrated ADC reading curves against digital reference instruments',
      'Conducted stress tests on sensor wiring harnesses under vibration'
    ],
    challengesFaced:
      'Analog ADC noise caused by power rail voltage fluctuations when peripheral displays refreshed.',
    challengesFixesList: [
      {
        challenge: 'Fluctuating analog sensor readings during display refresh cycles.',
        fix: 'Added 100nF ceramic decoupling capacitors across sensor VCC/GND rails and implemented an exponential moving average filter in code.'
      }
    ],
    skillsGained: [
      '3D CAD Design',
      'Sensor Calibration',
      'Analog Noise Reduction',
      'Circuit Breadboarding',
      'Mechanical Tolerancing'
    ],
    conceptsLearned: [
      'ADC Non-Linearity & Voltage Attenuation',
      'Enclosure Thermal Convection & Stress Analysis',
      'Decoupling & Ground Plane Stability'
    ],
    keyLearnings:
      'Good hardware engineering requires equal attention to the physical chassis: loose connections and unshielded noise can invalidate the most sophisticated software algorithms.',
    reflection:
      'Designing custom 3D CAD bodies made our prototypes feel like real commercial products. It bridged the gap between raw PCB breadboards and customer-ready devices.',
    highlights: [
      'Engineered custom CAD enclosure with precision port cutouts',
      'Reduced analog measurement noise by over 70% with filtering',
      'Completed comprehensive physical sensor testing bench'
    ],
    galleryImages: [
      {
        url: '/img/week-3/Electronics/DSC_9930.jpg',
        caption: 'Physical Circuit Bench Testing & Sensor Breadboard Setup',
        type: 'image'
      },
      {
        url: '/img/week-3/Mecahnical/Base Body.png',
        caption: '3D CAD Mechanical Model: Base Body with Sensor Mounts',
        type: 'image'
      },
      {
        url: '/img/week-3/Mecahnical/Base Sketch.png',
        caption: 'Parametric CAD Sketch Dimensions and Tolerance Geometry',
        type: 'image'
      },
      {
        url: '/img/week-3/Mecahnical/Home view body.png',
        caption: 'Assembled CAD Enclosure: Component Fit & Connector Clearances',
        type: 'image'
      }
    ],
    tags: ['Sensor Interfacing', 'CAD Design', 'Electronics', 'Mechanical Prototyping', 'Noise Reduction'],
    teamCredits: [
      { role: 'Hardware & CAD Engineer', name: 'Theeran P.' },
      { role: 'Mechanical Mentor', name: 'Forge Product Design Team' }
    ]
  },
  {
    weekNumber: 7,
    id: 'forge-w7',
    title: 'Episode 07 — ESP32 FreeRTOS Kernel & SPI MicroSD Logger',
    subtitle: 'Preemptive Multi-Task Scheduling, Hardware SPI SD Datalogger, and Watchdog Timer Protection',
    dateRange: 'Week 7',
    category: 'Real-Time Embedded Systems',
    status: 'Completed',
    summary:
      'Achieved a major technical milestone by architecting a high-performance FreeRTOS telemetry node on the dual-core ESP32 DevKit V1. Designed non-blocking preemptive tasks for sensor sampling, UART monitoring, and dedicated high-speed MicroSD card SPI telemetry logging.',
    objectives: [
      'Configure FreeRTOS preemptive scheduler with distinct task priorities on ESP32 cores',
      'Implement custom SPI bus driver (SCK 18, MISO 19, MOSI 23, CS 5) for MicroSD logging',
      'Prevent Watchdog Timer (WDT) kernel resets through non-blocking task yielding',
      'Ensure atomic data records and zero-loss telemetry writes during high-frequency sampling'
    ],
    activitiesCompleted: [
      'Wrote modular C++ FreeRTOS tasks: SensorTask, LoggingTask, and TelemetryTask',
      'Connected MicroSD SPI adapter module with 5V/GND level routing and decoupling',
      'Created non-blocking circular buffers to decouple sensor interrupts from flash writes',
      'Validated continuous multi-hour telemetry logging to SD card without kernel crashes'
    ],
    challengesFaced:
      'SD initialization failures due to default SPI bus conflicts with ESP32 internal flash, followed by Watchdog Timer (WDT) resets when low-priority tasks executed continuous loops.',
    challengesFixesList: [
      {
        challenge: "SD Card Initialization Failure ('SD initialization failed!') during initial boot on ESP32.",
        fix: 'Discovered default SPI bus pins conflicted with internal flash lines. Explicitly defined custom SPI pins (SCK: 18, MISO: 19, MOSI: 23, CS: 5) and initialized SPI.begin(18, 19, 23, 5) prior to calling SD.begin(5, SPI).'
      },
      {
        challenge: 'ESP32 Watchdog Timer (WDT) reset crash when low-priority tasks executed continuous loops.',
        fix: 'Replaced all blocking loop delays with vTaskDelay(pdMS_TO_TICKS(ms)) to yield execution back to the FreeRTOS kernel and allow the IDLE task to service the WDT timer.'
      }
    ],
    skillsGained: [
      'FreeRTOS Kernel',
      'Preemptive Multi-Tasking',
      'SPI Protocol',
      'MicroSD Flash Datalogging',
      'Watchdog Timer Handling',
      'Embedded C++'
    ],
    conceptsLearned: [
      'RTOS Task States (Running, Ready, Blocked, Suspended)',
      'Mutual Exclusion & Concurrency Control',
      'Hardware SPI Bus Clock Timing & Chip Select Assertions',
      'Embedded Circular Buffers'
    ],
    keyLearnings:
      'In a real-time system, no task can monopolize the CPU. True deterministic embedded reliability requires disciplined cooperative yielding with vTaskDelay and event-driven interrupts.',
    reflection:
      'Watching the ESP32 log thousands of sensor telemetry frames onto the physical MicroSD card without a single missed interrupt was one of the most satisfying engineering breakthroughs of the fellowship.',
    highlights: [
      'Engineered multi-task FreeRTOS architecture with prioritized scheduling',
      'Resolved tricky hardware SPI pin conflict and WDT reset anomalies',
      'Achieved stable 100Hz telemetry recording with zero dropped data records'
    ],
    galleryImages: [
      {
        url: '/img/week-7/freertos-esp32-node.jpeg',
        caption: 'Operational ESP32 Hardware Node Running FreeRTOS Preemptive Kernel',
        type: 'image'
      },
      {
        url: '/img/week-7/hardware-setup-sd.jpeg',
        caption: 'Hardware Wiring Assembly: ESP32 to MicroSD Card Adapter via SPI',
        type: 'image'
      },
      {
        url: '/img/week-7/week7-photo1.png',
        caption: 'Serial Monitor Verification: FreeRTOS Task Scheduler & SD Write Logs',
        type: 'image'
      }
    ],
    tags: ['FreeRTOS', 'ESP32', 'SPI Protocol', 'SD Datalogger', 'Real-Time Systems', 'Embedded C++'],
    teamCredits: [
      { role: 'Systems & Firmware Engineer', name: 'Theeran P.' },
      { role: 'Protosem Lead', name: 'Forge Embedded Systems Cohort' }
    ],
    repoLink: 'https://github.com/theeran-stack/HomePulse'
  },
  {
    weekNumber: 8,
    id: 'forge-w8',
    title: 'Episode 08 — IoT Wireless Telemetry & MQTT Cloud Dashboard',
    subtitle: 'ESP32 Wi-Fi Station Mode, MQTT Telemetry Broker, HTTP REST Endpoints, and Live Web Visualizer',
    dateRange: 'Week 8',
    category: 'IoT & Cloud Systems',
    status: 'Completed',
    summary:
      'Expanded the embedded telemetry node into a wireless IoT powerhouse. Configured ESP32 Wi-Fi networking, established an MQTT publish/subscribe telemetry broker pipeline streaming JSON payloads, and developed a real-time browser dashboard for live data visualization.',
    objectives: [
      'Configure ESP32 Wi-Fi Station and Access Point modes with automated reconnect states',
      'Implement MQTT pub/sub messaging protocols with structured JSON payloads',
      'Build HTTP REST API endpoints for remote device configuration and GPIO triggers',
      'Develop a responsive real-time web dashboard for telemetry visualization and alerts'
    ],
    activitiesCompleted: [
      'Integrated WiFiClient and PubSubClient C++ libraries into the ESP32 firmware',
      'Configured MQTT telemetry topics (nodes/esp32/telemetry and nodes/esp32/commands)',
      'Engineered an asynchronous network reconnection state machine in a dedicated FreeRTOS task',
      'Built a live web dashboard graphing telemetry curves and displaying network latency metrics'
    ],
    challengesFaced:
      'Wi-Fi signal dropouts causing blocking reconnect calls that starved the FreeRTOS sensor sampling loop.',
    challengesFixesList: [
      {
        challenge: 'Wi-Fi dropouts freezing real-time sensor sampling during network reconnects.',
        fix:
          'Isolated network management into an independent background FreeRTOS task running on Core 0, leaving Core 1 exclusively dedicated to deterministic sensor sampling and SD logging.'
      }
    ],
    skillsGained: [
      'ESP32 Wi-Fi Networking',
      'MQTT Protocol',
      'JSON Telemetry Serialization',
      'IoT Cloud Dashboards',
      'Dual-Core Task Pinning',
      'Fault-Tolerant IoT'
    ],
    conceptsLearned: [
      'MQTT QoS Levels (0, 1, 2) & Keep-Alive Heartbeats',
      'Dual-Core Asymmetric Task Allocation on ESP32 (xTaskCreatePinnedToCore)',
      'Decoupled Edge-to-Cloud Architectural Patterns'
    ],
    keyLearnings:
      'Pinning critical hardware sampling tasks to Core 1 and network communications to Core 0 guarantees deterministic real-time responsiveness even during catastrophic network outages.',
    reflection:
      'Connecting physical hardware sensors through FreeRTOS, local SD storage, wireless MQTT, and cloud dashboards created an end-to-end industrial-grade pipeline that feels truly production-ready.',
    highlights: [
      'Built complete end-to-end pipeline: Sensor → FreeRTOS → SD Logger → Wi-Fi MQTT → Cloud Dashboard',
      'Engineered dual-core ESP32 task isolation preventing network blocking',
      'Developed live responsive web dashboard for remote monitoring and relay toggles'
    ],
    tags: ['IoT', 'ESP32', 'MQTT', 'Wi-Fi', 'JSON Telemetry', 'Web Dashboard', 'Cloud Integration'],
    teamCredits: [
      { role: 'IoT Systems Engineer', name: 'Theeran P.' },
      { role: 'Domain Lead', name: 'Forge Wireless & IoT Systems Team' }
    ],
    repoLink: 'https://github.com/theeran-stack/HomePulse'
  },
  // Upcoming Milestones (Weeks 9-20)
  ...Array.from({ length: 12 }, (_, i) => {
    const weekNum = i + 9;
    return {
      weekNumber: weekNum,
      id: `forge-w${weekNum}`,
      title: `Episode ${weekNum < 10 ? '0' + weekNum : weekNum} — Advanced Milestone Integration`,
      subtitle: `ProtoSem Week ${weekNum} project sprint, hardware refinement, and industrial testing.`,
      dateRange: `Week ${weekNum}`,
      category: 'Prototyping Sprint',
      status: 'In Progress' as const,
      summary: `Week ${weekNum} is actively underway. Milestones involve scaling hardware durability, optimizing real-time FreeRTOS throughput, conducting field sensor calibration, and preparing prototype demonstrations.`,
      objectives: [
        `Execute Week ${weekNum} technical deliverables and benchmark tests`,
        'Perform stress testing on embedded firmware under extended operational cycles',
        'Document hardware iterations, power profiling, and telemetry accuracy'
      ],
      activitiesCompleted: [
        `Active firmware iteration and hardware test bench experiments for Week ${weekNum}`
      ],
      skillsGained: ['Industrial Hardware Prototyping', 'System Testing', 'Iterative Design'],
      keyLearnings: 'Continuous empirical testing in real environments reveals edge cases that laboratory simulations miss.',
      reflection: `Building iteratively week by week transforms complex engineering challenges into achievable milestones.`,
      highlights: [`Week ${weekNum} documentation and prototype validation in active progress.`],
      tags: [`Week ${weekNum}`, 'ProtoSem', 'In Progress', 'Hardware Prototyping'],
      teamCredits: [{ role: 'Student Fellow', name: 'Theeran P.' }]
    };
  })
];
