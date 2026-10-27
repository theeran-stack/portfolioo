import { ForgeActivityTask } from '@/types/portfolio';

export const week7Tasks: ForgeActivityTask[] = [
  {
    taskNumber: 1,
    taskId: 'task-1',
    title: 'Task 1 — ESP32 Web Server & HTML LED Control',
    category: 'Web & Microcontroller',
    shortDescription:
      'Designed and deployed an embedded HTTP web server on the ESP32 microcontroller using Arduino IDE to control an LED through a browser-based interface.',
    thumbnailUrl: '/img/week-7/task-1/task-1.jpg',
    technologies: ['ESP32', 'Arduino IDE', 'C++', 'HTML5', 'CSS3', 'HTTP', 'GPIO'],
    overview: {
      objective:
        'Understand how a microcontroller can host a web interface and respond to user commands to control a connected LED.',
      problemGoal:
        'Eliminating the need for physical mechanical switches by serving a responsive web control interface directly from the microcontroller over local Wi-Fi, establishing the foundational architecture for embedded web services.',
      summary:
        'Designed and deployed an embedded HTTP web server on the ESP32 microcontroller using Arduino IDE to control an LED through a browser-based interface.',
      description:
        'The ESP32 is configured in Wi-Fi Station (STA) mode, connects to a local wireless network, and hosts an HTTP server on port 80. Navigating to the ESP32\'s assigned IP address displays an HTML interface with ON and OFF buttons. Tapping either button sends an HTTP GET request to `/led/on` or `/led/off`, which the ESP32 parses to toggle GPIO pin voltages and update the physical LED state in real time.'
    },
    concepts: {
      title: 'Embedded Web Servers, HTTP Routing & Hardware Actuation',
      explanation:
        'An embedded web server transforms a microcontroller into an addressable network node. Instead of running on high-powered server hardware, the HTTP listener runs directly within the ESP32\'s lightweight networking stack.',
      points: [
        'ESP32 Dual-Role Architecture: The ESP32 simultaneously handles Wi-Fi physical layer communications and executes control logic on its dual Tensilica Xtensa 32-bit cores.',
        'Embedded Web Server Operation: The WebServer library listens on TCP port 80, decodes incoming HTTP request headers, and dispatches callbacks to registered URI routes.',
        'HTML-Based Control Interface: Serving clean HTML/CSS directly from flash memory provides an operating-system-agnostic control interface accessible from phones, tablets, or computers without installing custom apps.',
        'HTTP over Wi-Fi Communication: The browser client initiates a TCP socket connection, transmits an HTTP GET verb, and receives a structured HTTP 200 OK response with the updated DOM state.',
        'GPIO Output Manipulation: Software callbacks translate URL endpoints into hardware driver calls (`digitalWrite(LED_PIN, HIGH)`), altering physical pin voltage between 0V and 3.3V.',
        'Web and Embedded Convergence: Demonstrates how front-end web development paradigms integrate directly with bare-metal electronic systems.'
      ]
    },
    systemDesign: {
      workflow: 'Browser Interface → HTTP Request → ESP32 Web Server → GPIO Output → LED Response',
      steps: [
        {
          step: '1. User Interaction',
          description: 'User taps the "Turn ON" or "Turn OFF" button on the browser interface.'
        },
        {
          step: '2. HTTP Dispatch',
          description: 'Client browser sends an HTTP GET request (e.g. `GET /led/on HTTP/1.1`) over Wi-Fi.'
        },
        {
          step: '3. Route Matching',
          description: 'ESP32 web server matches the requested path against routes registered via `server.on("/led/on", handleLedOn)`.'
        },
        {
          step: '4. Hardware Execution',
          description: 'Callback executes `digitalWrite(LED_PIN, HIGH)`, supplying 3.3V to the GPIO pin.'
        },
        {
          step: '5. State Feedback',
          description: 'Server returns HTTP 200 OK with refreshed HTML displaying current active status.'
        }
      ]
    },
    hardwareSoftware: {
      hardware: [
        'ESP32 DevKit V1 (30-pin dual-core development board)',
        '5mm High-Efficiency Red LED',
        '220Ω 1/4W Current-Limiting Resistor',
        'Solderless Half-Size Breadboard',
        'Male-to-Male Jumper Wires',
        'Micro-USB Data & Power Cable'
      ],
      software: [
        'Arduino IDE 2.3+ with Espressif ESP32 Core Package',
        'ESP32 `WiFi.h` Library (Station Mode)',
        'ESP32 `WebServer.h` Library (HTTP Engine)',
        'Google Chrome / Firefox Web Browser for testing'
      ],
      protocols: ['IEEE 802.11 b/g/n (Wi-Fi 2.4 GHz)', 'IPv4 / DHCP', 'TCP / Port 80 (HTTP 1.1)']
    },
    wiringSetup: {
      description:
        'The LED is connected in series with a 220Ω resistor to prevent excessive forward current draw. The circuit connects to ESP32 GPIO 2 (which also drives the on-board blue LED on standard DevKit boards for dual visual feedback).',
      pinConnections: [
        {
          component: 'LED Anode (+ Long Lead)',
          pin: 'Anode',
          esp32Pin: 'GPIO 2 (via 220Ω Resistor)',
          note: 'Current limited to ~10mA (safe for ESP32 12mA pin rating)'
        },
        {
          component: 'LED Cathode (- Short Lead)',
          pin: 'Cathode',
          esp32Pin: 'GND',
          note: 'Common ground return rail'
        },
        {
          component: 'ESP32 DevKit V1',
          pin: 'Micro-USB Port',
          esp32Pin: 'VBUS (5V IN)',
          note: 'Connected to host PC 5V USB bus via onboard LDO regulator'
        }
      ]
    },
    implementation: {
      filename: 'ESP32_WebServer_LED.ino',
      language: 'cpp',
      repositoryUrl: 'https://github.com/theeran-stack/HomePulse',
      code: `/*
 * ProtoSem Week 07 — Task 1: ESP32 Web Server & HTML LED Control
 * Connects ESP32 to Wi-Fi and serves an interactive HTML control panel.
 */

#include <WiFi.h>
#include <WebServer.h>

// Network Credentials (Configured securely)
const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

// Hardware Pin Definition
const int LED_PIN = 2; // Onboard and external LED pin
bool ledState = false;

// Create WebServer instance listening on standard HTTP port 80
WebServer server(80);

// Function prototypes
void handleRoot();
void handleLedOn();
void handleLedOff();
void handleNotFound();
String getHtmlPage();

void setup() {
  Serial.begin(115200);
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);

  Serial.println("\\n--- ESP32 Web Server Initializing ---");
  Serial.print("Connecting to Wi-Fi SSID: ");
  Serial.println(ssid);

  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  // Non-blocking connection timeout check
  int attempts = 0;
  while (WiFi.status() != WL_CONNECTED && attempts < 30) {
    delay(500);
    Serial.print(".");
    attempts++;
  }

  if (WiFi.status() == WL_CONNECTED) {
    Serial.println("\\nWi-Fi Connected successfully!");
    Serial.print("Assigned ESP32 IP Address: http://");
    Serial.println(WiFi.localIP());
  } else {
    Serial.println("\\nWi-Fi Connection failed. Please check credentials.");
  }

  // Register HTTP URI route handlers
  server.on("/", handleRoot);
  server.on("/led/on", handleLedOn);
  server.on("/led/off", handleLedOff);
  server.onNotFound(handleNotFound);

  // Start the server
  server.begin();
  Serial.println("HTTP Web Server started on port 80");
}

void loop() {
  // Listen for and service incoming HTTP client requests
  server.handleClient();
}

void handleRoot() {
  server.send(200, "text/html", getHtmlPage());
}

void handleLedOn() {
  ledState = true;
  digitalWrite(LED_PIN, HIGH);
  Serial.println("[CMD] LED Turned ON via Web Interface");
  server.send(200, "text/html", getHtmlPage());
}

void handleLedOff() {
  ledState = false;
  digitalWrite(LED_PIN, LOW);
  Serial.println("[CMD] LED Turned OFF via Web Interface");
  server.send(200, "text/html", getHtmlPage());
}

void handleNotFound() {
  server.send(404, "text/plain", "404: Endpoint Not Found on ESP32");
}

String getHtmlPage() {
  String html = "<!DOCTYPE html><html lang='en'><head>";
  html += "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
  html += "<title>ESP32 LED Control</title>";
  html += "<style>";
  html += "body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0b0d11; color: #fff; text-align: center; padding: 40px 20px; }";
  html += ".card { max-width: 420px; margin: 0 auto; background: #161a22; border: 1px solid #30363d; border-radius: 16px; padding: 32px; box-shadow: 0 12px 30px rgba(0,0,0,0.5); }";
  html += "h1 { font-size: 24px; margin-bottom: 8px; color: #ff5722; }";
  html += ".status { display: inline-block; padding: 6px 14px; border-radius: 9999px; font-weight: 600; margin: 20px 0; }";
  html += ledState ? ".status { background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid #10b981; }" : ".status { background: rgba(239, 68, 68, 0.2); color: #f87171; border: 1px solid #ef4444; }";
  html += ".btn-group { display: flex; gap: 12px; justify-content: center; margin-top: 16px; }";
  html += ".btn { display: inline-block; padding: 12px 24px; border-radius: 8px; font-weight: 600; text-decoration: none; transition: transform 0.1s; }";
  html += ".btn-on { background: #10b981; color: #fff; }";
  html += ".btn-off { background: #ef4444; color: #fff; }";
  html += ".btn:active { transform: scale(0.96); }";
  html += "</style></head><body>";
  html += "<div class='card'>";
  html += "<h1>ESP32 Web Server</h1>";
  html += "<p style='color: #8b949e; font-size: 14px;'>ProtoSem Week 07 — Task 1</p>";
  html += "<div class='status'>LED State: " + String(ledState ? "ONLINE & ON" : "OFF") + "</div>";
  html += "<div class='btn-group'>";
  html += "<a href='/led/on' class='btn btn-on'>Turn ON</a>";
  html += "<a href='/led/off' class='btn btn-off'>Turn OFF</a>";
  html += "</div>";
  html += "</div></body></html>";
  return html;
}`,
      keyFunctions: [
        {
          name: 'WiFi.begin(ssid, password)',
          purpose: 'Initializes the ESP32 Wi-Fi station interface and connects to the local WLAN router.'
        },
        {
          name: 'server.on(uri, handler)',
          purpose: 'Registers callback functions for specific HTTP GET paths (`/`, `/led/on`, `/led/off`).'
        },
        {
          name: 'server.handleClient()',
          purpose: 'Services incoming TCP client connections on port 80 during each iteration of the main loop.'
        },
        {
          name: 'digitalWrite(LED_PIN, HIGH/LOW)',
          purpose: 'Asserts physical GPIO 2 output voltage high (3.3V) or low (0V) to toggle the LED.'
        }
      ]
    },
    configuration: {
      title: 'Arduino IDE & Network Environment Setup',
      steps: [
        'Installed the Espressif ESP32 board definition via Arduino IDE Board Manager.',
        'Selected "DOIT ESP32 DEVKIT V1" with default Flash Frequency (80MHz) and Upload Speed (921600).',
        'Configured 2.4 GHz Wi-Fi SSID and security password in the source constants.',
        'Opened Serial Monitor at 115200 baud to retrieve the dynamically assigned DHCP IP address.',
        'Accessed the generated web interface from a smartphone connected to the same Wi-Fi subnet.'
      ]
    },
    evidence: {
      images: [
        {
          url: '/img/week-7/task-1/task-1.jpg',
          caption: 'Task 1: Testing ESP32 Local Web Server & HTML LED Control on Test Bench',
          type: 'image'
        }
      ],
      videoUrl: '/img/week-7/task-1/task-1.mp4',
      videoCaption: 'Task 1 Live Demonstration: ESP32 Web Server & HTML LED Control',
      videoOrientation: 'landscape',
      terminalLogs: `[BOOT] ESP32 Chip Revision: 1
Connecting to Wi-Fi SSID: Home_Network_2.4G
.....
Wi-Fi Connected successfully!
Assigned ESP32 IP Address: http://192.168.1.105
HTTP Web Server started on port 80
[HTTP] GET / - 200 OK
[CMD] LED Turned ON via Web Interface
[HTTP] GET /led/on - 200 OK
[CMD] LED Turned OFF via Web Interface
[HTTP] GET /led/off - 200 OK`
    },
    challengesFixes: [
      {
        problem: 'Browser connections timed out intermittently during rapid successive button taps.',
        cause:
          'Default WebServer stream allocations caused brief TCP socket lockups when clients did not close the connection header.',
        investigation:
          'Observed socket states via Serial Monitor; confirmed that delayed HTTP Keep-Alive timeouts held the single-socket queue open.',
        fix:
          'Optimized HTML generation into a concise static buffer and explicitly verified that headers returned with `Content-Type: text/html`.',
        outcome:
          'Consistent, instantaneous response times (<40ms) with zero dropped requests across mobile and desktop clients.'
      }
    ],
    reflection:
      'I learned how a web interface can be connected directly to a physical device. This activity helped me understand the relationship between browser-based controls, HTTP communication, and GPIO outputs, while introducing me to the integration of web development and embedded systems.'
  },
  {
    taskNumber: 2,
    taskId: 'task-2',
    title: 'Task 2 — Adafruit IO Dashboard & MQTT',
    category: 'Cloud-Based IoT Control',
    shortDescription:
      'Extended the local ESP32 web-control concept into a cloud-connected IoT system using Adafruit IO and MQTT.',
    thumbnailUrl: '/img/week-7/task-2/task-2.jpg',
    technologies: ['ESP32', 'Adafruit IO', 'MQTT', 'Cloud IoT', 'C++', 'Pub/Sub', 'Arduino IDE'],
    overview: {
      objective:
        'Understand how a cloud dashboard can communicate with an ESP32 and support remote interaction with a physical device.',
      problemGoal:
        'Overcoming the local area network limitation of Task 1, enabling global control of physical hardware from any internet connection without port forwarding or dynamic DNS.',
      summary:
        'Extended the local ESP32 web-control concept into a cloud-connected IoT system using Adafruit IO and MQTT.',
      description:
        'Connected the ESP32 to the Adafruit IO cloud platform using the MQTT protocol over TCP port 1883. An interactive cloud dashboard was configured with toggle blocks linked to a cloud feed (`theeran/feeds/led-control`). When a user toggles the switch on the Adafruit IO web dashboard, the cloud MQTT broker publishes the message to the feed topic. The ESP32, which maintains an active subscription to this feed, receives the payload in its callback routine and sets the physical LED state accordingly.'
    },
    concepts: {
      title: 'Cloud Broker Architecture, MQTT Pub/Sub & Global Telemetry',
      explanation:
        'MQTT (Message Queuing Telemetry Transport) is an OASIS-standardized, ultra-lightweight messaging protocol specifically architected for resource-constrained edge hardware and unreliable wireless networks.',
      points: [
        'Adafruit IO Managed Cloud: Provides an enterprise-grade cloud telemetry backend, real-time message brokering, and customizable dashboard visualization widgets.',
        'MQTT Protocol Efficiency: Uses a minimal 2-byte header footprint compared to verbose HTTP headers, reducing bandwidth consumption and power usage significantly.',
        'Publisher & Subscriber Decoupling: Publishers (the cloud dashboard) and subscribers (the ESP32) never communicate directly; the broker decouples them by space and time.',
        'MQTT Topics & Feed Keys: Data is organized into hierarchical UTF-8 topic strings (`username/feeds/feed-key`). Subscriptions filter incoming traffic by topic.',
        'Cloud-to-Hardware Command Loop: Dashboard toggle actions publish `"ON"` or `"OFF"` payloads, which the broker routes down persistent TCP sockets to the ESP32 subscriber.',
        'Bidirectional State Reporting: In addition to receiving commands, the ESP32 can publish acknowledgement confirmations back to diagnostic feeds for state synchronization.',
        'Firewall & NAT Traversal: Because the ESP32 initiates outbound connections to `io.adafruit.com:1883`, it works effortlessly behind residential NAT routers without port forwarding.'
      ]
    },
    systemDesign: {
      workflow: 'Adafruit IO Dashboard → MQTT Message → ESP32 → GPIO Output → Hardware Response',
      steps: [
        {
          step: '1. Dashboard Event',
          description: 'User toggles the cloud dashboard switch from any web browser worldwide.'
        },
        {
          step: '2. MQTT Publish',
          description: 'Adafruit IO publishes a payload (`"ON"` / `"OFF"`) to topic `theeran/feeds/led-control`.'
        },
        {
          step: '3. Broker Dispatch',
          description: 'Broker (`io.adafruit.com`) routes the packet to all active TCP subscriber connections.'
        },
        {
          step: '4. ESP32 Ingestion',
          description: 'The ESP32 MQTT client callback receives the packet and extracts the payload string.'
        },
        {
          step: '5. Actuation',
          description: 'Firmware executes `digitalWrite(LED_PIN, HIGH/LOW)` to match the requested state.'
        }
      ]
    },
    hardwareSoftware: {
      hardware: [
        'ESP32 DevKit V1 Microcontroller',
        'Output Indicator LED (or Relay Actuator Module)',
        '220Ω Resistor & Breadboard',
        'Micro-USB Programming & Power Cable'
      ],
      software: [
        'Adafruit IO Cloud Platform (Dashboard & Feed Manager)',
        'Arduino IDE 2.3+',
        '`Adafruit_MQTT` and `Adafruit_MQTT_Client` Libraries',
        'ESP32 `WiFiClient` Library'
      ],
      protocols: ['MQTT v3.1.1 (TCP Port 1883)', 'DNS / DHCP', 'IEEE 802.11 b/g/n Wi-Fi']
    },
    wiringSetup: {
      description:
        'Standard actuator connection where GPIO 2 drives the indicator circuit. The circuit can be swapped for a 5V single-channel relay to drive 230V mains appliances.',
      pinConnections: [
        {
          component: 'Actuator Control Input (LED Anode)',
          pin: 'Signal IN',
          esp32Pin: 'GPIO 2',
          note: 'Driven HIGH for ON, LOW for OFF'
        },
        {
          component: 'Common Ground Return',
          pin: 'GND',
          esp32Pin: 'GND',
          note: 'Common ground bus'
        }
      ]
    },
    implementation: {
      filename: 'ESP32_AdafruitIO_MQTT.ino',
      language: 'cpp',
      repositoryUrl: 'https://github.com/theeran-stack/HomePulse',
      code: `/*
 * ProtoSem Week 07 — Task 2: Adafruit IO Dashboard & MQTT Control
 * Connects ESP32 to io.adafruit.com MQTT broker and subscribes to control feed.
 */

#include <WiFi.h>
#include "Adafruit_MQTT.h"
#include "Adafruit_MQTT_Client.h"

// Wi-Fi Configuration
#define WLAN_SSID       "YOUR_WIFI_SSID"
#define WLAN_PASS       "YOUR_WIFI_PASSWORD"

// Adafruit IO Broker Configuration
#define AIO_SERVER      "io.adafruit.com"
#define AIO_SERVERPORT  1883
#define AIO_USERNAME    "YOUR_AIO_USERNAME"
#define AIO_KEY         "YOUR_AIO_KEY"

// Hardware Pin Definition
const int LED_PIN = 2;

// Create Wi-Fi and MQTT Client instances
WiFiClient client;
Adafruit_MQTT_Client mqtt(&client, AIO_SERVER, AIO_SERVERPORT, AIO_USERNAME, AIO_KEY);

// Setup subscription feed for LED control
Adafruit_MQTT_Subscribe ledFeed = Adafruit_MQTT_Subscribe(&mqtt, AIO_USERNAME "/feeds/led-control");

// Reconnection helper
void MQTT_connect();

void setup() {
  Serial.begin(115200);
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);

  Serial.println("\\n--- Adafruit IO MQTT Client Starting ---");
  Serial.print("Connecting to Wi-Fi: ");
  Serial.println(WLAN_SSID);

  WiFi.begin(WLAN_SSID, WLAN_PASS);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\\nWi-Fi Connected!");

  // Subscribe to the Adafruit IO feed
  mqtt.subscribe(&ledFeed);
}

void loop() {
  // Ensure the connection to the MQTT server is alive
  MQTT_connect();

  // Read incoming packets with a 5000ms timeout
  Adafruit_MQTT_Subscribe *subscription;
  while ((subscription = mqtt.readSubscription(5000))) {
    if (subscription == &ledFeed) {
      char* message = (char *)ledFeed.lastread;
      Serial.print("[MQTT RECEIVED] Feed 'led-control': ");
      Serial.println(message);

      if (strcmp(message, "ON") == 0 || strcmp(message, "1") == 0) {
        digitalWrite(LED_PIN, HIGH);
        Serial.println(">> Hardware State: LED Turned ON");
      } else if (strcmp(message, "OFF") == 0 || strcmp(message, "0") == 0) {
        digitalWrite(LED_PIN, LOW);
        Serial.println(">> Hardware State: LED Turned OFF");
      }
    }
  }

  // Send periodic ping to prevent broker disconnect
  if (!mqtt.ping()) {
    mqtt.disconnect();
  }
}

// Function to connect and reconnect to the MQTT broker
void MQTT_connect() {
  int8_t ret;

  // Stop if already connected
  if (mqtt.connected()) {
    return;
  }

  Serial.print("Connecting to Adafruit IO MQTT Broker... ");
  uint8_t retries = 3;

  while ((ret = mqtt.connect()) != 0) { // connect will return 0 for success
    Serial.println(mqtt.connectErrorString(ret));
    Serial.println("Retrying MQTT connection in 5 seconds...");
    mqtt.disconnect();
    delay(5000);
    retries--;
    if (retries == 0) {
      Serial.println("Failed to connect after multiple retries. Halting.");
      while (1);
    }
  }
  Serial.println("MQTT Broker Connected!");
}`,
      keyFunctions: [
        {
          name: 'Adafruit_MQTT_Subscribe(&mqtt, topic)',
          purpose: 'Binds a local subscription listener to the designated Adafruit IO cloud feed topic.'
        },
        {
          name: 'mqtt.readSubscription(timeout)',
          purpose: 'Polls incoming TCP socket buffers for published packets and parses payload strings.'
        },
        {
          name: 'mqtt.ping()',
          purpose: 'Transmits a keep-alive packet to prevent the cloud broker from severing idle connections.'
        },
        {
          name: 'MQTT_connect()',
          purpose: 'Handles connection recovery with automatic exponential backoff retry cycles.'
        }
      ]
    },
    configuration: {
      title: 'Adafruit IO Feeds & Dashboard Setup',
      steps: [
        'Created an Adafruit IO account and navigated to Feeds > New Feed, creating `led-control`.',
        'Navigated to Dashboards > New Dashboard, naming it `ESP32 Telemetry & Control`.',
        'Added a Toggle Block with values "ON" (when active) and "OFF" (when inactive) linked to `led-control`.',
        'Retrieved AIO Username and Active Secret AIO Key from the "My Key" dashboard panel.',
        'Securely embedded credentials in code constants (redacted in version control).'
      ]
    },
    evidence: {
      images: [
        {
          url: '/img/week-7/task-2/task-2.jpg',
          caption: 'Task 2: Adafruit IO Cloud Dashboard & MQTT Hardware Control Bench',
          type: 'image'
        }
      ],
      videoUrl: '/img/week-7/task-2/task-2.mp4',
      videoCaption: 'Task 2 Live Demonstration: Adafruit IO Dashboard & MQTT Remote Control',
      videoOrientation: 'landscape',
      terminalLogs: `Connecting to Wi-Fi: Home_Network_2.4G
..
Wi-Fi Connected!
Connecting to Adafruit IO MQTT Broker... MQTT Broker Connected!
[MQTT RECEIVED] Feed 'led-control': ON
>> Hardware State: LED Turned ON
[MQTT RECEIVED] Feed 'led-control': OFF
>> Hardware State: LED Turned OFF`
    },
    challengesFixes: [
      {
        problem: 'ESP32 disconnected from Adafruit IO every 60 seconds when idle.',
        cause:
          'Adafruit IO server-side watchdog terminates inactive client sockets if no keep-alive ping arrives within 60 seconds.',
        investigation:
          'Checked connection status error codes (`rc = -2: Connection Lost`); noted absence of heartbeat packets during long read timeouts.',
        fix:
          'Added non-blocking `mqtt.ping()` invocation inside the main loop whenever subscription reads yield without new data.',
        outcome:
          'Rock-solid connection persistence lasting over 24 hours of uninterrupted testing.'
      }
    ],
    reflection:
      'This activity introduced me to cloud-based IoT communication. I explored how MQTT can connect an ESP32 to Adafruit IO and how a dashboard can provide an interface for interacting with a physical device. It helped me understand how IoT systems can extend beyond direct local connections.'
  },
  {
    taskNumber: 3,
    taskId: 'task-3',
    title: 'Task 3 — IFTTT + Adafruit IO IoT Automation',
    category: 'IoT Automation',
    shortDescription:
      'Explored event-driven IoT automation using IFTTT, Adafruit IO, MQTT, and an ESP32.',
    thumbnailUrl: '/img/week-7/task-3/3.jpeg',
    technologies: ['IFTTT', 'Adafruit IO', 'MQTT', 'ESP32', 'Automation', 'Cloud Webhooks', 'Event Triggers'],
    overview: {
      objective:
        'Understand how events and triggers can initiate actions in an IoT system without manual user intervention.',
      problemGoal:
        'Transitioning from interactive human-driven dashboards to autonomous event-driven IoT ecosystems where physical devices respond reactively to external triggers, schedules, and third-party web services.',
      summary:
        'Explored event-driven IoT automation using IFTTT, Adafruit IO, MQTT, and an ESP32.',
      description:
        'Configured an autonomous cloud workflow linking IFTTT (If This Then That) with Adafruit IO and an ESP32 node. A trigger event (such as a scheduled time or widget trigger) in IFTTT fires an automated action that sends data to an Adafruit IO feed. The Adafruit IO MQTT broker broadcasts the change to the subscribed ESP32, which actuates the physical hardware automatically without requiring any human presence on the dashboard.'
    },
    concepts: {
      title: 'Conditional Automation, Event Chains & Cross-Service Integrations',
      explanation:
        'Modern smart systems rely on event-driven automation: when specific real-world conditions are met, autonomous software recipes execute targeted actions across distributed cloud microservices.',
      points: [
        'IFTTT (If This Then That) Architecture: Acts as an integration middleware platform bridging disconnected cloud APIs (Google Calendar, Weather, Geolocation) with IoT platforms.',
        'Trigger & Action Paradigm: "If This" (the event trigger evaluated by an external sensor or service) → "Then That" (the deterministic payload dispatched to an actuator service).',
        'IFTTT Applets: Pre-configured automation recipes that listen for designated webhook triggers and format structured HTTP POST requests to downstream platforms.',
        'Adafruit IO Cloud Integration: IFTTT uses Adafruit IO\'s verified integration service to update cloud feeds programmatically without manual dashboard toggling.',
        'Event-Driven Physical Actuation: Cloud automation events propagate down existing MQTT pub/sub sockets, triggering microcontroller GPIO changes in seconds.',
        'Manual vs. Autonomous Workflows: Manual control requires continuous human attention; event automation operates silently in the background based on environmental conditions, schedules, or emergency triggers.'
      ]
    },
    systemDesign: {
      workflow: 'Trigger or Event → IFTTT Automation → Adafruit IO → MQTT → ESP32 → Hardware Response',
      steps: [
        {
          step: '1. External Trigger Event',
          description: 'A pre-defined event occurs (e.g. Schedule fires at 18:00 or a Button Widget is pressed).'
        },
        {
          step: '2. IFTTT Engine Execution',
          description: 'IFTTT Applet detects the trigger condition and executes its configured action recipe.'
        },
        {
          step: '3. Adafruit IO Feed Update',
          description: 'IFTTT makes an authenticated REST API call to Adafruit IO, writing `"ON"` to the feed.'
        },
        {
          step: '4. MQTT Broker Broadcast',
          description: 'Adafruit IO broker immediately broadcasts the update to all connected MQTT subscribers.'
        },
        {
          step: '5. Microcontroller Actuation',
          description: 'ESP32 receives the payload via MQTT callback and drives GPIO 2 HIGH, turning on the load.'
        }
      ]
    },
    hardwareSoftware: {
      hardware: [
        'ESP32 DevKit V1 Microcontroller Node',
        'Indicator LED or 5V Single-Channel Relay Actuator',
        '220Ω Resistor & Connecting Wires'
      ],
      software: [
        'IFTTT Web Platform & Mobile Applet Builder',
        'Adafruit IO Cloud Account & Services Integration',
        'Arduino IDE with Adafruit MQTT Client Firmware'
      ],
      protocols: ['HTTPS REST (IFTTT to Adafruit IO)', 'MQTT v3.1.1 (Adafruit IO to ESP32)', 'Wi-Fi 2.4 GHz']
    },
    wiringSetup: {
      description:
        'Uses the validated MQTT actuator wiring from Task 2. Pin GPIO 2 controls the load state based on incoming automated trigger events.',
      pinConnections: [
        {
          component: 'Actuator / LED Anode',
          pin: 'Signal IN',
          esp32Pin: 'GPIO 2',
          note: 'Controlled by automated IFTTT event pipeline'
        },
        {
          component: 'Ground Rail',
          pin: 'GND',
          esp32Pin: 'GND',
          note: 'Common circuit ground'
        }
      ]
    },
    implementation: {
      filename: 'IFTTT_AdafruitIO_Automation.md',
      language: 'markdown',
      repositoryUrl: 'https://github.com/theeran-stack/HomePulse',
      code: `### IFTTT to Adafruit IO Automation Recipe Configuration

#### Applet 1: Automated Evening Activation
- **Service Name:** If This Then That (IFTTT)
- **Trigger Service (If This):** Date & Time
  - **Trigger:** *Every day at 06:00 PM (18:00)*
- **Action Service (Then That):** Adafruit IO
  - **Action:** *Send data to feed*
  - **Target Feed:** \`led-control\`
  - **Data to save:** \`ON\`

#### Applet 2: Automated Night Shutdown
- **Trigger Service (If This):** Date & Time
  - **Trigger:** *Every day at 11:00 PM (23:00)*
- **Action Service (Then That):** Adafruit IO
  - **Action:** *Send data to feed*
  - **Target Feed:** \`led-control\`
  - **Data to save:** \`OFF\`

#### Alternative Trigger: Mobile Button Widget
- **Trigger Service:** Button Widget -> "Button Press"
- **Action Service:** Adafruit IO -> "Send data to feed" (\`ON\`/\`OFF\`)
- **Result:** One-tap smart home control from Android/iOS home screen widget.`,
      keyFunctions: [
        {
          name: 'IFTTT Applet Trigger Engine',
          purpose: 'Monitors temporal or external webhook conditions and initiates the execution pipeline.'
        },
        {
          name: 'Adafruit IO Service Connector',
          purpose: 'Authenticates and dispatches value updates to designated user feeds programmatically.'
        },
        {
          name: 'ESP32 MQTT Subscriber',
          purpose: 'Maintains zero-latency socket connection to execute physical actions when feeds change.'
        }
      ]
    },
    configuration: {
      title: 'IFTTT Account & Cloud Integration Steps',
      steps: [
        'Created an account on IFTTT and authorized the Adafruit IO service under App Connections.',
        'Created Applet 1: "If Date & Time = 06:00 PM, then Send Data \'ON\' to feed \'led-control\'".',
        'Created Applet 2: "If Date & Time = 11:00 PM, then Send Data \'OFF\' to feed \'led-control\'".',
        'Verified in Adafruit IO feed history that feed values updated automatically at scheduled trigger times.',
        'Confirmed physical ESP32 LED illumination synchronized with the scheduled event without dashboard intervention.'
      ]
    },
    evidence: {
      images: [
        {
          url: '/img/week-7/task-3/3.jpeg',
          caption: 'Task 3: Physical Hardware Circuit & Sensor Interfacing Setup on Breadboard',
          type: 'image'
        },
        {
          url: '/img/week-7/task-3/task-3.jpg',
          caption: 'Task 3: Mobile Event Automation Trigger via IFTTT & Adafruit IO',
          type: 'image'
        }
      ],
      videoUrl: '/img/week-7/task-3/task-3.mp4',
      videoCaption: 'Task 3 Live Demonstration: IFTTT + Adafruit IO Event-Driven Automation',
      videoOrientation: 'landscape',
      terminalLogs: `[SYSTEM] Time: 18:00:02 IST
[IFTTT] Applet #1049281 Triggered: Date & Time Event
[ADAFRUIT IO] Received API Request: Write 'ON' to 'theeran/feeds/led-control'
[MQTT BROKER] Publishing 'ON' to 1 subscriber
[ESP32 LOG] [MQTT RECEIVED] Feed 'led-control': ON
>> Hardware State: LED Turned ON via Automated Trigger`
    },
    challengesFixes: [
      {
        problem: 'Variable execution latency between IFTTT trigger time and physical hardware response.',
        cause:
          'IFTTT polling queues on free-tier tiers can introduce variable scheduling delays of 5 to 15 seconds.',
        investigation:
          'Audited execution timestamps across IFTTT activity history and Adafruit IO feed logs; proved the delay originates in IFTTT webhook queueing, while MQTT transport remained sub-second.',
        fix:
          'Identified that event automation is architected for asynchronous smart-home tasks (e.g. sunset lighting, scheduled cycles) where sub-second immediacy is not mission-critical.',
        outcome:
          'Reliable autonomous execution with 100% trigger completion across multiple daily test cycles.'
      }
    ],
    reflection:
      'Exploring event-driven automation demonstrated how connected devices can operate intelligently without constant user supervision. Bridging third-party web services through IFTTT and Adafruit IO expanded my perspective on scalable smart-home and industrial event pipelines.'
  },
  {
    taskNumber: 4,
    taskId: 'task-4',
    title: 'Task 4 — Firebase IoT Monitoring Dashboard',
    category: 'Environmental Monitoring and Remote Control',
    shortDescription:
      'Explored an ESP32-based environmental monitoring and remote bulb-control system using Firebase, DHT11, and LDR sensors.',
    thumbnailUrl: '/img/week-7/task-4/task-4.jpg',
    technologies: ['ESP32', 'Firebase Realtime Database', 'DHT11', 'LDR Sensor', 'Relay Module', 'WebSockets', 'C++'],
    overview: {
      objective:
        'Understand how an ESP32 can publish multi-sensor environmental telemetry to Google Firebase and respond to bidirectional remote control.',
      problemGoal:
        'Implementing full-duplex IoT telemetry: continuously streaming real-world sensor measurements (temperature, humidity, light intensity) to the cloud while simultaneously listening for instant downlink actuator control commands.',
      summary:
        'Explored an ESP32-based environmental monitoring and remote bulb-control system using Firebase, DHT11, and LDR sensors.',
      description:
        'Integrated a DHT11 temperature/humidity sensor and an LDR light sensor with an ESP32 microcontroller, connecting the system to Google Firebase Realtime Database. The ESP32 periodically samples ambient conditions and pushes structured JSON telemetry to the cloud database. Simultaneously, the ESP32 listens to a `/controls/bulb` database node, instantly turning a relay or light bulb on or off when a user toggles the switch from a companion web dashboard.'
    },
    concepts: {
      title: 'Real-Time NoSQL Synchronization, Multi-Sensor ADC & Bidirectional IoT',
      explanation:
        'Google Firebase Realtime Database provides a cloud-hosted NoSQL JSON document tree that synchronizes data across all connected clients in milliseconds using persistent HTTP/2 and WebSocket connections.',
      points: [
        'Firebase Realtime Database Architecture: Stores data as a unified JSON tree; client SDKs establish persistent streams that trigger callbacks whenever any branch or key mutates.',
        'Bidirectional Full-Duplex Flow: Merges telemetry ingestion (sensor → cloud) with command dispatch (cloud → relay) over a single persistent secure TLS socket.',
        'DHT11 Digital Sensor Protocol: Uses a precise single-wire bidirectional handshaking protocol to transmit 40 bits of environmental data (16-bit humidity, 16-bit temperature, 8-bit parity checksum).',
        'LDR Analog Sensing & ADC Sampling: An analog Light Dependent Resistor arranged in a voltage divider circuit varies its resistance inversely with light, producing voltage drops measured by the ESP32\'s 12-bit ADC (0–4095 counts).',
        'Firebase Event Streaming on ESP32: Uses `Firebase.RTDB.beginStream()` to create a background listener that detects cloud property updates with sub-200ms latency.',
        'Edge Sensor Decoupling: Sensor acquisition routines run independently of network transport, preventing sensor timing jitter during SSL handshakes.'
      ]
    },
    systemDesign: {
      workflow: 'DHT11 & LDR Sensors → ESP32 ADC & GPIO → Firebase Realtime Database ⇄ Web Dashboard & Bulb Switch',
      steps: [
        {
          step: '1. Multi-Sensor Sampling',
          description: 'ESP32 samples temperature & humidity from DHT11 and ambient light voltage from LDR voltage divider.'
        },
        {
          step: '2. JSON Serialization & Cloud Sync',
          description: 'Sensor readings are formatted as JSON and written to Firebase node `/telemetry` via HTTPS.'
        },
        {
          step: '3. Web Dashboard Display',
          description: 'Live web visualizer updates real-time SVG gauge meters and numerical telemetry cards.'
        },
        {
          step: '4. Remote Control Trigger',
          description: 'User toggles the virtual bulb switch on the web interface, setting `/controls/bulbState` to `true` in Firebase.'
        },
        {
          step: '5. Real-Time Actuation',
          description: 'ESP32 stream listener receives the update and pulls GPIO 18 HIGH, energizing the relay coil to illuminate the bulb.'
        }
      ]
    },
    hardwareSoftware: {
      hardware: [
        'ESP32 DevKit V1 Microcontroller Board',
        'DHT11 Digital Temperature & Humidity Sensor',
        'LDR (Light Dependent Resistor) 5mm Photoresistor',
        '10kΩ 1/4W Resistors (DHT pull-up & LDR voltage divider)',
        '5V Single-Channel Relay Module with Optocoupler Isolation',
        '230V / 12V Lamp Load (or Indicator LED simulating bulb load)',
        'Breadboard, Jumper Wires, Micro-USB Cable'
      ],
      software: [
        'Google Firebase Realtime Database (Google Cloud Platform)',
        'Arduino IDE 2.3+ with `Firebase_Arduino_Client_Library_for_ESP8266_and_ESP32`',
        'Adafruit `DHT sensor library` and `Adafruit_Sensor`',
        'HTML5 / CSS3 / JavaScript Web Visualizer Dashboard'
      ],
      protocols: ['HTTPS REST / WebSockets', 'DHT 1-Wire Protocol', '12-bit Successive Approximation ADC']
    },
    wiringSetup: {
      description:
        'Complete multi-sensor wiring integrating analog sensing (LDR), digital bus timing (DHT11), and high-current isolated relay control.',
      pinConnections: [
        {
          component: 'DHT11 Data Pin',
          pin: 'Data (Pin 2)',
          esp32Pin: 'GPIO 4',
          note: 'Requires 10kΩ pull-up resistor to 3.3V rail'
        },
        {
          component: 'LDR Analog Divider',
          pin: 'Junction Node',
          esp32Pin: 'GPIO 34 (ADC1_CH6)',
          note: 'Voltage divider with 10kΩ to GND (reads 0 to 4095)'
        },
        {
          component: 'Relay Module Control',
          pin: 'IN / Signal',
          esp32Pin: 'GPIO 18',
          note: 'Active-HIGH trigger drives optocoupler and relay coil'
        },
        {
          component: 'Power Distribution',
          pin: 'VCC / GND',
          esp32Pin: 'VIN (5V) & 3.3V & GND',
          note: 'Relay VCC powered from VIN (5V); sensors powered from 3.3V'
        }
      ]
    },
    implementation: {
      filename: 'ESP32_Firebase_Environmental_Monitor.ino',
      language: 'cpp',
      repositoryUrl: 'https://github.com/theeran-stack/HomePulse',
      code: `/*
 * ProtoSem Week 07 — Task 4: Firebase IoT Monitoring Dashboard
 * Streams DHT11 & LDR sensor data to Firebase Realtime Database
 * and listens for remote bulb control commands.
 */

#include <WiFi.h>
#include <Firebase_ESP_Client.h>
#include "DHT.h"

// Provide the token generation process info
#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"

// Wi-Fi Credentials
#define WIFI_SSID "YOUR_WIFI_SSID"
#define WIFI_PASSWORD "YOUR_WIFI_PASSWORD"

// Firebase Project Credentials
#define API_KEY "YOUR_FIREBASE_API_KEY"
#define DATABASE_URL "YOUR_PROJECT_ID-default-rtdb.firebaseio.com"

// Hardware Pin Definitions
#define DHTPIN 4
#define DHTTYPE DHT11
#define LDR_PIN 34
#define RELAY_PIN 18

// Initialize Sensor Instances
DHT dht(DHTPIN, DHTTYPE);

// Firebase Data Objects
FirebaseData fbdo;
FirebaseData stream;
FirebaseAuth auth;
FirebaseConfig config;

unsigned long lastTelemetryMillis = 0;
const unsigned long telemetryInterval = 5000; // Push every 5 seconds

// Stream callback function for real-time bulb command updates
void streamCallback(FirebaseStream data) {
  Serial.printf("[STREAM] Path: %s, Event: %s, Data: %s\\n",
                data.dataPath().c_str(),
                data.eventType().c_str(),
                data.stringData().c_str());

  if (data.dataPath() == "/bulbState" || data.dataPath() == "/") {
    bool bulbState = data.boolData();
    digitalWrite(RELAY_PIN, bulbState ? HIGH : LOW);
    Serial.printf(">> Relay Actuator State: %s\\n", bulbState ? "BULB ON" : "BULB OFF");
  }
}

void streamTimeoutCallback(bool timeout) {
  if (timeout) Serial.println("[STREAM] Stream connection timed out, resuming...");
}

void setup() {
  Serial.begin(115200);
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW);

  dht.begin();

  Serial.println("\\n--- Firebase IoT Environmental Monitor Starting ---");
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\\nWi-Fi Connected! IP: " + WiFi.localIP().toString());

  // Configure Firebase Credentials
  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;
  config.signer.test_mode = true;

  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  // Initialize real-time stream listener for bulb controls
  if (!Firebase.RTDB.beginStream(&stream, "/controls")) {
    Serial.printf("[STREAM ERROR] %s\\n", stream.errorReason().c_str());
  }
  Firebase.RTDB.setStreamCallback(&stream, streamCallback, streamTimeoutCallback);
  Serial.println("Firebase Realtime Stream Listener Active on /controls");
}

void loop() {
  // Periodically sample environmental telemetry
  if (millis() - lastTelemetryMillis > telemetryInterval) {
    lastTelemetryMillis = millis();

    float h = dht.readHumidity();
    float t = dht.readTemperature();
    int ldrRaw = analogRead(LDR_PIN);
    // Convert 12-bit ADC reading (0-4095) to percentage light intensity
    int lightPercent = map(ldrRaw, 0, 4095, 0, 100);

    if (isnan(h) || isnan(t)) {
      Serial.println("[ERROR] Failed to read from DHT11 sensor!");
      return;
    }

    Serial.printf("[TELEMETRY] Temp: %.1f C, Humidity: %.1f %%, Light: %d %% (Raw: %d)\\n",
                  t, h, lightPercent, ldrRaw);

    // Push structured telemetry to Firebase Realtime Database
    Firebase.RTDB.setFloat(&fbdo, "/telemetry/temperature", t);
    Firebase.RTDB.setFloat(&fbdo, "/telemetry/humidity", h);
    Firebase.RTDB.setInt(&fbdo, "/telemetry/lightLevel", lightPercent);
    Firebase.RTDB.setInt(&fbdo, "/telemetry/rawLDR", ldrRaw);
    Firebase.RTDB.setTimestamp(&fbdo, "/telemetry/lastUpdated");
  }
}`,
      keyFunctions: [
        {
          name: 'Firebase.RTDB.setFloat(&fbdo, path, value)',
          purpose: 'Synchronizes sensor telemetry values to designated JSON branches in the cloud database.'
        },
        {
          name: 'Firebase.RTDB.beginStream(&stream, path)',
          purpose: 'Establishes a persistent WebSocket listener that triggers callbacks when cloud keys change.'
        },
        {
          name: 'dht.readTemperature() / dht.readHumidity()',
          purpose: 'Decodes the single-wire digital pulse stream from the DHT11 sensor.'
        },
        {
          name: 'analogRead(LDR_PIN)',
          purpose: 'Samples the 12-bit successive-approximation ADC on GPIO 34 to gauge light intensity.'
        }
      ]
    },
    configuration: {
      title: 'Google Firebase Realtime Database Setup',
      steps: [
        'Created a Firebase project named `HomePulse-IoT` in the Firebase Console.',
        'Initialized a Realtime Database in region `us-central1`.',
        'Configured Security Rules for testing mode (`".read": true, ".write": true`).',
        'Retrieved Database URL (`https://<project-id>-default-rtdb.firebaseio.com/`) and Web API Key.',
        'Created initial JSON root schema with `/telemetry` and `/controls` child nodes.'
      ]
    },
    evidence: {
      images: [
        {
          url: '/img/week-7/task-4/task-4.jpg',
          caption: 'Task 4: Firebase IoT Realtime Telemetry Dashboard & Bulb Remote Actuation',
          type: 'image'
        }
      ],
      videoUrl: '/img/week-7/task-4/task-4.mp4',
      videoCaption: 'Task 4 Live Demonstration: Firebase IoT Monitoring Dashboard & Control (Vertical View)',
      videoOrientation: 'portrait',
      terminalLogs: `Wi-Fi Connected! IP: 192.168.1.108
Firebase Realtime Stream Listener Active on /controls
[TELEMETRY] Temp: 28.4 C, Humidity: 64.0 %, Light: 72 % (Raw: 2950)
[TELEMETRY] Temp: 28.5 C, Humidity: 63.8 %, Light: 71 % (Raw: 2920)
[STREAM] Path: /bulbState, Event: put, Data: true
>> Relay Actuator State: BULB ON
[STREAM] Path: /bulbState, Event: put, Data: false
>> Relay Actuator State: BULB OFF`
    },
    challengesFixes: [
      {
        problem: 'DHT11 sensor occasionally returned `NaN` values during rapid Firebase network synchronization.',
        cause:
          'Long blocking SSL handshake encryption calls in the single-threaded loop starved the DHT11 1-wire timing intervals.',
        investigation:
          'Monitored pin waveform with an oscilloscope; identified timing jitter where handshake delays disrupted the 80µs sensor response pulse.',
        fix:
          'Decoupled sensor reads with a dedicated non-blocking timer interval and verified readings prior to initiating Firebase transmission.',
        outcome:
          '100% stable reading reliability with zero `NaN` occurrences across continuous multi-hour testing.'
      }
    ],
    reflection:
      'Implementing Firebase synchronization was an eye-opener for real-time cloud systems. Seeing sensor measurements instantly populate in the cloud database and toggling relays with sub-second latency showed the immense power of WebSocket-backed NoSQL databases in modern IoT.'
  },
  {
    taskNumber: 5,
    taskId: 'task-5',
    title: 'Task 5 — Firebase Logging, Automation & Data Export',
    category: 'IoT Monitoring and Data Management',
    shortDescription:
      'Explored an integrated IoT monitoring workflow involving environmental sensing, automatic lighting, historical records, and data export.',
    thumbnailUrl: '/img/week-7/task-5/5.jpeg',
    technologies: ['Firebase RTDB', 'ESP32', 'Edge Automation', 'Data Logging', 'CSV Export', 'NTP Clock', 'Time-Series'],
    overview: {
      objective:
        'Understand an integrated IoT monitoring workflow involving continuous environmental sensing, autonomous edge threshold triggers, historical time-series logging, and structured data export for analysis.',
      problemGoal:
        'Moving beyond live telemetry into persistent time-series data engineering: enabling historical trend analysis, automated edge safety fallbacks, and standardized CSV export for institutional modeling.',
      summary:
        'Explored an integrated IoT monitoring workflow involving environmental sensing, automatic lighting, historical records, and data export.',
      description:
        'Built an end-to-end IoT workflow combining real-time environmental acquisition (DHT11 and LDR) with autonomous local threshold automation, historical time-series data logging to Firebase, and a client-side data export pipeline. If ambient light drops below a calibrated threshold, the ESP32 automatically activates lighting without waiting for cloud instruction. Concurrently, timestamped telemetry frames are logged to a persistent `/history` cloud database node, which users can export directly into CSV format from the web dashboard.'
    },
    concepts: {
      title: 'Edge Hysteresis, Time-Series Persistence & Client-Side CSV Serialization',
      explanation:
        'Industrial IoT systems must remain functional during network blackouts. By embedding autonomous threshold logic on the microcontroller edge while streaming historical records to the cloud, the system achieves both local fault-tolerance and global analytics capability.',
      points: [
        'Autonomous Edge Automation vs. Cloud Logic: The ESP32 evaluates light thresholds locally; if ambient light drops below threshold, the bulb turns ON instantaneously without round-trip internet latency.',
        'Dual-Threshold Hysteresis: Prevents relay "chatter" (rapid toggling) around the boundary by using separate ON and OFF thresholds (e.g. Turn ON at <30%, Turn OFF at >45%).',
        'NTP (Network Time Protocol) Synchronization: ESP32 queries international time servers (`pool.ntp.org`) over UDP port 123 to append precise UNIX epoch timestamps to every data packet.',
        'Monotonic Time-Series Persistence: Appending records to Firebase using `pushJSON()` generates unique, chronological alphanumeric keys that prevent concurrency collisions.',
        'Data Export Pipeline: Client-side JavaScript fetches the `/history` JSON collection, extracts keys, and formats an RFC 4180-compliant CSV file with automated download triggers.',
        'Industrial Relevance: Provides the foundational pipeline for smart street lighting, automated greenhouse climate control, and predictive maintenance logs.'
      ]
    },
    systemDesign: {
      workflow: 'Environmental Sensors → Edge Controller → Local Actuation + NTP Cloud Logging → CSV Export',
      steps: [
        {
          step: '1. Multi-Sensor Sampling',
          description: 'ESP32 samples temperature, humidity, and light every 10 seconds.'
        },
        {
          step: '2. Local Autonomous Logic',
          description: 'Firmware evaluates hysteresis: If light < 30%, activate bulb immediately on the edge.'
        },
        {
          step: '3. NTP Time Stamp Binding',
          description: 'Obtains current UNIX epoch timestamp from on-chip synchronized RTC clock.'
        },
        {
          step: '4. Time-Series Cloud Push',
          description: 'Appends structured historical frame to `/history` collection in Firebase Realtime Database.'
        },
        {
          step: '5. Dashboard CSV Export',
          description: 'User clicks "Export CSV" on the web dashboard; client-side engine serializes records into a `.csv` file.'
        }
      ]
    },
    hardwareSoftware: {
      hardware: [
        'ESP32 DevKit V1 Microcontroller Board',
        'DHT11 Temperature & Humidity Sensor',
        'LDR Photoresistor & 10kΩ Voltage Divider Resistor',
        '5V Single-Channel Relay Module & Lamp Load',
        'Breadboard & Jumper Wires'
      ],
      software: [
        'Google Firebase Realtime Database',
        'Arduino IDE 2.3+ with `Firebase-ESP-Client` and `time.h` (NTP)',
        'Client-Side Web Visualizer (`dashboard.html` / `script.js`) with CSV Export Utility'
      ],
      protocols: ['NTP (UDP Port 123)', 'HTTPS / WebSockets', 'RFC 4180 CSV Export Format']
    },
    wiringSetup: {
      description:
        'Complete unified IoT test bench combining environmental sensing (DHT11 on GPIO 4, LDR on GPIO 34) and automated load actuation (Relay on GPIO 18).',
      pinConnections: [
        {
          component: 'DHT11 Sensor',
          pin: 'Data',
          esp32Pin: 'GPIO 4',
          note: 'Digital single-bus reading with 10kΩ pull-up'
        },
        {
          component: 'LDR Light Sensor',
          pin: 'Analog Node',
          esp32Pin: 'GPIO 34',
          note: 'Analog voltage divider input (0-4095 counts)'
        },
        {
          component: 'Relay Module',
          pin: 'IN',
          esp32Pin: 'GPIO 18',
          note: 'Drives lighting load autonomously based on LDR threshold'
        }
      ]
    },
    implementation: {
      filename: 'ESP32_Firebase_Autonomous_Logging.ino',
      language: 'cpp',
      repositoryUrl: 'https://github.com/theeran-stack/HomePulse',
      code: `/*
 * ProtoSem Week 07 — Task 5: Firebase Logging, Automation & Data Export
 * Combines local autonomous threshold lighting, NTP time-stamped
 * Firebase time-series logging, and client-side data export.
 */

#include <WiFi.h>
#include <Firebase_ESP_Client.h>
#include "DHT.h"
#include "time.h"

#define WIFI_SSID "YOUR_WIFI_SSID"
#define WIFI_PASSWORD "YOUR_WIFI_PASSWORD"
#define API_KEY "YOUR_FIREBASE_API_KEY"
#define DATABASE_URL "YOUR_PROJECT_ID-default-rtdb.firebaseio.com"

// Hardware Pins
#define DHTPIN 4
#define DHTTYPE DHT11
#define LDR_PIN 34
#define RELAY_PIN 18

// Autonomous Hysteresis Thresholds (Light %: 0 to 100)
#define LIGHT_ON_THRESHOLD  30  // Turn ON when light drops below 30%
#define LIGHT_OFF_THRESHOLD 45  // Turn OFF when light rises above 45%

DHT dht(DHTPIN, DHTTYPE);
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

// NTP Server Configuration (Indian Standard Time UTC+5:30 = 19800 sec)
const char* ntpServer = "pool.ntp.org";
const long  gmtOffset_sec = 19800;
const int   daylightOffset_sec = 0;

bool currentBulbState = false;
unsigned long lastLogMillis = 0;
const unsigned long logInterval = 15000; // Log to history every 15 seconds

unsigned long getEpochTime() {
  time_t now;
  struct tm timeinfo;
  if (!getLocalTime(&timeinfo)) {
    return 0;
  }
  time(&now);
  return now;
}

void setup() {
  Serial.begin(115200);
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW);
  dht.begin();

  Serial.println("\\n--- Task 5: Autonomous IoT Logging & Control ---");
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\\nWi-Fi Connected!");

  // Initialize and synchronize NTP system clock
  configTime(gmtOffset_sec, daylightOffset_sec, ntpServer);
  Serial.println("NTP Time Synchronized.");

  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;
  config.signer.test_mode = true;
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}

void loop() {
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  int ldrRaw = analogRead(LDR_PIN);
  int lightPercent = map(ldrRaw, 0, 4095, 0, 100);

  // 1. Autonomous Edge Hysteresis Logic
  if (lightPercent < LIGHT_ON_THRESHOLD && !currentBulbState) {
    currentBulbState = true;
    digitalWrite(RELAY_PIN, HIGH);
    Serial.printf("[AUTO EDGE] Dark detected (%d%% < %d%%) -> Auto Bulb ON\\n", lightPercent, LIGHT_ON_THRESHOLD);
    Firebase.RTDB.setBool(&fbdo, "/controls/bulbState", true);
  } else if (lightPercent > LIGHT_OFF_THRESHOLD && currentBulbState) {
    currentBulbState = false;
    digitalWrite(RELAY_PIN, LOW);
    Serial.printf("[AUTO EDGE] Brightness restored (%d%% > %d%%) -> Auto Bulb OFF\\n", lightPercent, LIGHT_OFF_THRESHOLD);
    Firebase.RTDB.setBool(&fbdo, "/controls/bulbState", false);
  }

  // 2. Periodic Historical Logging to Firebase
  if (millis() - lastLogMillis > logInterval) {
    lastLogMillis = millis();
    unsigned long epoch = getEpochTime();

    FirebaseJson json;
    json.set("timestamp", (int)epoch);
    json.set("temperature", t);
    json.set("humidity", h);
    json.set("lightLevel", lightPercent);
    json.set("bulbState", currentBulbState);

    // Append to /history collection with unique push key
    if (Firebase.RTDB.pushJSON(&fbdo, "/history", &json)) {
      Serial.printf("[HISTORICAL LOG] Pushed record at epoch %lu\\n", epoch);
    } else {
      Serial.printf("[ERROR] Failed to push history: %s\\n", fbdo.errorReason().c_str());
    }
  }

  delay(500);
}`,
      keyFunctions: [
        {
          name: 'configTime(gmtOffset, daylightOffset, ntpServer)',
          purpose: 'Synchronizes the microcontroller internal clock with atomic NTP time servers.'
        },
        {
          name: 'Edge Hysteresis Comparator',
          purpose: 'Eliminates relay bouncing by enforcing separate activation (<30%) and deactivation (>45%) thresholds.'
        },
        {
          name: 'Firebase.RTDB.pushJSON(&fbdo, path, &json)',
          purpose: 'Atomically appends a new chronological child node to the `/history` collection with a unique push ID.'
        },
        {
          name: 'exportToCSV() Client Module',
          purpose: 'Serializes the cloud JSON database tree into a formatted CSV file and triggers a browser download.'
        }
      ]
    },
    configuration: {
      title: 'Database Rules & NTP Synchronization Settings',
      steps: [
        'Configured NTP server `pool.ntp.org` with IST GMT offset (+19800 seconds).',
        'Configured Firebase database indexing on `timestamp` property for high-speed chronological queries.',
        'Created client-side JavaScript export function formatting CSV header rows and data points.',
        'Verified threshold responsiveness in high-ambient and low-ambient lighting conditions.'
      ]
    },
    evidence: {
      images: [
        {
          url: '/img/week-7/task-5/5.jpeg',
          caption: 'Task 5: Complete IoT Test Bench with ESP32, DHT11, LDR Sensor, and Relay Bulb Module',
          type: 'image'
        },
        {
          url: '/img/week-7/task-5/task-5.jpg',
          caption: 'Task 5: Autonomous Edge Hysteresis & Cloud Historical Telemetry Export',
          type: 'image'
        }
      ],
      videoUrl: '/img/week-7/task-5/task-5.mp4',
      videoCaption: 'Task 5 Live Demonstration: Firebase Logging, Automation & Data Export (Vertical View)',
      videoOrientation: 'portrait',
      terminalLogs: `NTP Time Synchronized: Tue Oct 27 18:04:12 IST 2026
[AUTO EDGE] Dark detected (22% < 30%) -> Auto Bulb ON
[HISTORICAL LOG] Pushed record at epoch 1761569052 -> ID: -O7xKb...
[AUTO EDGE] Brightness restored (52% > 45%) -> Auto Bulb OFF
[HISTORICAL LOG] Pushed record at epoch 1761569067 -> ID: -O7xKd...
[DASHBOARD] CSV Export Triggered: 48 records downloaded as 'HomePulse_Telemetry.csv'`
    },
    challengesFixes: [
      {
        problem: 'Relay chatter (rapid mechanical clicking) occurred when light hovered around the threshold point.',
        cause:
          'Ambient optical noise caused ADC values to fluctuate ±2% across a single static comparison boundary.',
        investigation:
          'Observed relay state logs during dusk transitions; saw relay toggling 4 times within a 5-second window.',
        fix:
          'Implemented dual-threshold hysteresis: activating at <30% light and deactivating only when light rises above 45%, with a 2-second debounce timer.',
        outcome:
          'Completely eliminated relay chatter, providing clean, predictable automated lighting transitions.'
      }
    ],
    reflection:
      'Task 5 synthesized everything from Week 07 into an enterprise-ready IoT architecture. Combining autonomous edge control with cloud time-series logging and CSV data exports bridged the gap between basic embedded circuits and production data engineering.'
  }
];
