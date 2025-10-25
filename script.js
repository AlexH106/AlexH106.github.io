// Embedded Portfolio Data
const portfolioData = {
  "profile": {
    "name": "Aleksandr Hovsepyan",
    "university": "TU Dublin",
    "degree": "Bachelor of Science (BSc) in Digital Forensics and Cybersecurity",
    "tagline": "Cybersecurity Student & Security Researcher",
    "bio": "Final year cybersecurity student at TU Dublin with hands-on experience in penetration testing, secure software development, and digital forensics. Passionate about building secure systems and contributing to the cybersecurity community.",
    "email": "alex.hovsepyan166@gmail.com",
    "linkedin": "https://www.linkedin.com/in/aleksandr-hovsepyan-a9a379325/",
    "github": "https://github.com/AlexH106"
  },
  "currentProjects": [
    {
      "id": "c1",
      "title": "T-Pot Honeypot Deployment",
      "subtitle": "Multi-Sensor Honeynet Security Research",
      "category": "Network Security Analytics",
      "date": "In Progress - Due Nov 2025",
      "icon": "Activity",
      "color": "from-red-600 to-orange-600",
      "tags": [
        "T-Pot",
        "Honeypots",
        "Digital Ocean",
        "GCP",
        "Threat Intelligence"
      ],
      "description": "Deploying and analyzing a distributed honeypot infrastructure using T-Pot to capture and analyze real-world attack patterns over a month-long period across multiple cloud platforms.",
      "highlights": [
        "Deployed 1 T-Pot hive and 3 sensors with open ports to attract attackers",
        "Infrastructure spans Digital Ocean and Google Cloud Platform for geographic diversity",
        "Hive configured with restricted access (SSH + data collection ports only)",
        "Sensors fully exposed with all ports open to maximize attack surface visibility",
        "Collecting and analyzing attack data including patterns, sources, and techniques"
      ],
      "technologies": [
        "T-Pot",
        "Digital Ocean Droplets",
        "Google Cloud Platform",
        "Docker",
        "ELK Stack",
        "Kibana"
      ],
      "inProgress": true,
      "outcomes": [
        "Real-time threat intelligence gathering from distributed sensors",
        "Comprehensive analysis of attack vectors and malicious behavior patterns",
        "Geographic distribution of attacks across cloud platforms",
        "Technical report on honeynet effectiveness and findings"
      ],
      "pdfName": "T-Pot Honeypot Analysis",
      "downloadAvailable": false,
      "skills": [
        "Honeypot Deployment",
        "Cloud Infrastructure",
        "Threat Analysis",
        "Network Monitoring"
      ]
    },
    {
      "id": "c2",
      "title": "Secure Web Application Development",
      "subtitle": "S-SDLC Implementation & Security Hardening",
      "category": "Application Security",
      "date": "In Progress - Due Dec 2025",
      "icon": "Lock",
      "color": "from-purple-600 to-pink-600",
      "tags": [
        "S-SDLC",
        "OWASP",
        "SAST/DAST",
        "Secure Coding",
        "Vulnerability Analysis"
      ],
      "description": "Taking an open-source web application through a complete Secure Software Development Life Cycle, from security requirements through design, implementation, and testing to create a hardened version.",
      "highlights": [
        "Conducting security requirements analysis using OWASP ASVS guidelines",
        "Creating comprehensive security design documentation (use cases, DFDs)",
        "Implementing security controls across authentication, authorization, and data validation",
        "Running SAST and DAST tools to identify and remediate vulnerabilities",
        "Documenting before/after security improvements with empirical evidence"
      ],
      "technologies": [
        "OWASP Top 10",
        "OWASP ASVS",
        "SAST Tools",
        "DAST Tools",
        "Security Testing Frameworks"
      ],
      "inProgress": true,
      "outcomes": [
        "Baseline (v0) and hardened (v1) application versions in source control",
        "Security requirements mapped to implementation and test cases",
        "Comprehensive vulnerability assessment and remediation documentation",
        "Live demonstration of exploits prevented by security improvements"
      ],
      "pdfName": "Secure Application Development",
      "downloadAvailable": false,
      "skills": [
        "Secure Development",
        "Threat Modeling",
        "Security Testing",
        "OWASP Standards"
      ]
    },
    {
      "id": "c3",
      "title": "Face Recognition Biometric System",
      "subtitle": "FTE, FRR, and FAR Analysis",
      "category": "Biometrics & Forensics",
      "date": "In Progress - Due Nov 2025",
      "icon": "Eye",
      "color": "from-cyan-600 to-blue-600",
      "tags": [
        "Face Recognition",
        "Biometric Testing",
        "FTE/FRR/FAR",
        "Unit Testing",
        "Statistical Analysis"
      ],
      "description": "Comprehensive unit testing of a face recognition biometric authentication system across three critical metrics: enrollment failure, false rejection, and false acceptance rates with statistical validation.",
      "highlights": [
        "Testing face recognition system across enrolment, authentication, and circumvention scenarios",
        "Building training set of 100+ subjects for statistically valid results",
        "Calculating Failure to Enroll Rate (FTE), False Rejection Rate (FRR), and False Acceptance Rate (FAR)",
        "Testing under various thresholds and environmental conditions",
        "Developing comprehensive test plan with documented methodology"
      ],
      "technologies": [
        "Face Recognition Software",
        "Statistical Analysis",
        "Excel Data Analysis",
        "Biometric Testing Tools"
      ],
      "inProgress": true,
      "outcomes": [
        "Empirical determination of FTE, FRR, and FAR to 0.01 accuracy",
        "Organized Excel spreadsheet with all test data and calculations",
        "Written test plan documenting strategy and results analysis",
        "Informed conclusion on face recognition biometric viability"
      ],
      "pdfName": "Biometric System Testing",
      "downloadAvailable": false,
      "skills": [
        "Biometric Testing",
        "Statistical Analysis",
        "Test Plan Development",
        "Data Analysis"
      ]
    }
  ],
  "completedProjects": [
    {
      "id": 1,
      "title": "Professional Penetration Testing",
      "subtitle": "Comprehensive Security Assessment & Exploitation",
      "category": "Offensive Security",
      "date": "2025",
      "icon": "Target",
      "color": "from-red-600 to-rose-600",
      "tags": [
        "Penetration Testing",
        "Vulnerability Assessment",
        "Exploitation",
        "Security Audit"
      ],
      "description": "Complete penetration testing engagement including reconnaissance, vulnerability scanning, exploitation, privilege escalation, and comprehensive reporting. Achieved full marks in practical labs and certification exam.",
      "highlights": [
        "Completed 10 comprehensive lab exercises covering TryHackMe rooms and practical scenarios",
        "Performed reconnaissance using Nmap, Google Dorking, Shodan, and passive/active techniques",
        "Conducted vulnerability assessments with Nessus and OpenVAS on Metasploitable targets",
        "Executed exploitation using Metasploit framework on Windows and Linux systems",
        "Demonstrated password cracking with John the Ripper, Hydra, and hash cracking techniques",
        "Performed privilege escalation on Linux systems and wireless security assessments",
        "Completed web application security testing including SQL injection and Burp Suite usage"
      ],
      "technologies": [
        "Kali Linux",
        "Metasploit",
        "Nmap",
        "Burp Suite",
        "Wireshark",
        "John the Ripper",
        "Hydra",
        "Nessus",
        "OpenVAS"
      ],
      "outcomes": [
        "Achieved 100% completion on all 10 laboratory exercises",
        "Successfully completed penetration testing certification exam in 2025",
        "Demonstrated proficiency across reconnaissance, exploitation, and post-exploitation phases",
        "Gained hands-on experience with industry-standard penetration testing tools and methodologies",
        "Completed 30+ TryHackMe security rooms covering diverse attack vectors"
      ],
      "pdfName": "Penetration Testing Certification",
      "downloadAvailable": false,
      "skills": [
        "Penetration Testing",
        "Exploit Development",
        "Network Security",
        "Security Reporting",
        "Ethical Hacking"
      ]
    },
    {
      "id": 2,
      "title": "Static Code Analysis & Security Remediation",
      "subtitle": "Vulnerability Detection and Code Hardening",
      "category": "Secure Programming",
      "date": "December 2024",
      "icon": "Code",
      "color": "from-green-600 to-emerald-600",
      "tags": [
        "SAST",
        "Code Analysis",
        "Python",
        "Security Fixes"
      ],
      "description": "Comprehensive static code analysis of an open-source Python application using multiple SAST tools to identify vulnerabilities, compare tool effectiveness, and implement security fixes for critical issues.",
      "highlights": [
        "Analyzed WebHound open-source application using Snyk and Bandit SAST tools",
        "Compared detection capabilities of both tools across 11 total vulnerabilities",
        "Fixed CSV Injection vulnerability by implementing proper input sanitization (csv.QUOTE_ALL)",
        "Remediated Command Injection flaw by replacing os.system() with subprocess.run() and shlex.split()",
        "Documented tool strengths, weaknesses, and detection overlaps",
        "Verified fixes through re-scanning with both static analysis tools"
      ],
      "technologies": [
        "Snyk",
        "Bandit",
        "Python",
        "SAST Tools",
        "subprocess",
        "shlex",
        "CSV Security"
      ],
      "outcomes": [
        "Successfully identified 4 issues with Snyk and 7 with Bandit (1 High, 6 Medium severity)",
        "Fixed 2 critical vulnerabilities: CSV Injection and Command Injection",
        "Reduced total vulnerability count from 11 to 9 issues",
        "Demonstrated practical understanding of secure coding practices",
        "Produced detailed technical report with before/after code comparisons"
      ],
      "pdfName": "Static Code Analysis Report",
      "downloadAvailable": true,
      "skills": [
        "Static Analysis",
        "Secure Coding",
        "Vulnerability Remediation",
        "Python Security",
        "SAST Tools"
      ]
    },
    {
      "id": 3,
      "title": "Open-Source Firewall Analysis",
      "subtitle": "Nftables vs FreeBSD Packet Filter",
      "category": "Network Security",
      "date": "March 2025",
      "icon": "Shield",
      "color": "from-emerald-600 to-teal-600",
      "tags": [
        "Firewalls",
        "Network Security",
        "Linux",
        "FreeBSD"
      ],
      "description": "Comprehensive research comparing two open-source firewall solutions, testing their effectiveness against real-world attacks including SYN floods, SSH brute force, and reconnaissance scans.",
      "highlights": [
        "Configured and tested Nftables and FreeBSD's Packet Filter against multiple attack vectors",
        "Implemented rate limiting, packet filtering, and stateful inspection rules",
        "Successfully mitigated DDoS attacks, brute force attempts, and NMAP reconnaissance",
        "Evaluated performance, usability, and logging capabilities of both solutions"
      ],
      "technologies": [
        "Nftables",
        "FreeBSD PF",
        "Hping3",
        "Hydra",
        "Nmap",
        "tcpdump"
      ],
      "outcomes": [
        "Both firewalls effectively blocked SYN flood attacks with proper rate limiting",
        "SSH brute force protection limited attempts to 5-7 packets per minute",
        "Successfully filtered multiple NMAP scan types (ACK, FIN, SYN, NULL, XMAS)",
        "Nftables offered superior flexibility and logging; FreeBSD PF provided robust stateful filtering"
      ],
      "pdfName": "Firewall Security Research",
      "downloadAvailable": true,
      "skills": [
        "Network Security",
        "Firewall Configuration",
        "Attack Mitigation",
        "Security Testing"
      ]
    },
    {
      "id": 4,
      "title": "Steganography & Steganalysis Research",
      "subtitle": "Hidden Data Detection and Analysis",
      "category": "Digital Forensics Research",
      "date": "November 2024",
      "icon": "Eye",
      "color": "from-blue-600 to-indigo-600",
      "tags": [
        "Steganography",
        "Steganalysis",
        "Hidden Data",
        "Research"
      ],
      "description": "Comprehensive research into steganography techniques and steganalysis methodologies, investigating how data can be hidden within digital media and the forensic techniques used to detect and extract concealed information.",
      "highlights": [
        "Analyzed various steganography techniques across image, audio, video, and text formats",
        "Researched steganalysis methods for detecting hidden data in digital media",
        "Examined LSB (Least Significant Bit) embedding and detection techniques",
        "Investigated statistical analysis methods for identifying steganographic content",
        "Explored real-world applications in digital forensics and cybersecurity",
        "Documented tools and algorithms used for both data hiding and detection"
      ],
      "technologies": [
        "Steganography Tools",
        "Steganalysis Algorithms",
        "Image Processing",
        "Statistical Analysis",
        "Forensic Software"
      ],
      "outcomes": [
        "Comprehensive literature review of steganography and steganalysis techniques",
        "Analysis of detection accuracy and limitations of various steganalysis methods",
        "Documentation of practical applications in forensic investigations",
        "Comparison of steganography tools and their resistance to detection",
        "Research-based insights into evolving techniques and countermeasures"
      ],
      "pdfName": "Steganography & Steganalysis Research",
      "downloadAvailable": true,
      "skills": [
        "Research Methodology",
        "Steganography",
        "Steganalysis",
        "Digital Forensics",
        "Data Analysis"
      ]
    },
    {
      "id": 5,
      "title": "Digital Forensic Investigation",
      "subtitle": "Criminal Evidence Analysis",
      "category": "Digital Forensics",
      "date": "December 2024",
      "icon": "Database",
      "color": "from-violet-600 to-purple-600",
      "tags": [
        "Forensics",
        "Investigation",
        "Evidence Analysis",
        "Chain of Custody"
      ],
      "description": "Complete forensic investigation of a disk image in a criminal case involving drug distribution. Applied professional forensic standards to maintain evidence integrity and admissibility.",
      "highlights": [
        "Analyzed disk image using Autopsy and FTK Imager maintaining chain of custody",
        "Verified MD5 checksums to ensure evidence integrity throughout investigation",
        "Uncovered encrypted evidence and identified password through keyword analysis",
        "Documented all findings following ISO forensic standards for court admissibility"
      ],
      "technologies": [
        "Autopsy",
        "FTK Imager",
        "MD5 Verification",
        "FAT12 Analysis",
        "Metadata Extraction"
      ],
      "outcomes": [
        "Successfully identified supplier and distribution network from encrypted data",
        "Recovered scheduling information showing activities across 6 schools",
        "Maintained complete chain of custody with timestamped logs",
        "Provided court-admissible evidence following professional forensic standards"
      ],
      "pdfName": "Forensic Investigation Report",
      "downloadAvailable": true,
      "skills": [
        "Digital Forensics",
        "Evidence Handling",
        "Encryption Analysis",
        "Legal Compliance"
      ]
    },
    {
      "id": 7,
      "title": "Vulnerable Website Security Analysis",
      "subtitle": "Web Application Vulnerability Assessment & Remediation",
      "category": "Web Application Security",
      "date": "November 2024",
      "icon": "Lock",
      "color": "from-rose-600 to-pink-600",
      "tags": [
        "Web Security",
        "OWASP",
        "Vulnerability Assessment",
        "Python Flask"
      ],
      "description": "Comprehensive security assessment of a vulnerable web application, identifying 10 critical vulnerabilities across multiple categories and implementing secure coding practices to remediate each issue with before/after code examples.",
      "highlights": [
        "Identified and fixed 10 web vulnerabilities including XSS, SQL Injection, and IDOR",
        "Implemented XSS protection by removing unsafe 'safe' filters in Jinja2 templates",
        "Fixed SQL Injection by converting f-strings to parameterized queries",
        "Remediated Path Traversal with directory validation and Flask's send_from_directory",
        "Added brute force protection using Flask-Limiter (3 attempts/minute) and 2-second delays",
        "Secured session management with HTTPS, httpOnly cookies, and 30-minute timeout",
        "Implemented password hashing with bcrypt and salt for database security",
        "Fixed IDOR vulnerability with session-based access control checks",
        "Prevented open redirects using URL whitelist validation",
        "Added clickjacking protection with X-Frame-Options and CSP headers"
      ],
      "technologies": [
        "Python",
        "Flask",
        "Flask-Limiter",
        "bcrypt",
        "HTTPS/SSL",
        "Burp Suite",
        "OWASP",
        "SQL",
        "Jinja2"
      ],
      "outcomes": [
        "Successfully remediated all 10 identified vulnerabilities across 5 lab and 5 additional categories",
        "Converted insecure HTTP application to HTTPS with proper certificate management",
        "Implemented comprehensive input validation and output encoding",
        "Added rate limiting reducing brute force success rate to near zero",
        "Secured database with bcrypt hashing (replacing plaintext passwords)",
        "Produced detailed technical report with code examples for all fixes"
      ],
      "pdfName": "Vulnerable Website Security Analysis",
      "downloadAvailable": true,
      "skills": [
        "Web Security",
        "Vulnerability Remediation",
        "OWASP Top 10",
        "Secure Coding",
        "Flask Security",
        "Session Management"
      ]
    },
    {
      "id": 8,
      "title": "OSINT Discord Bot Development",
      "subtitle": "AI-Powered Intelligence Gathering",
      "category": "OSINT & Development",
      "date": "2025",
      "icon": "Search",
      "color": "from-amber-600 to-orange-600",
      "tags": [
        "OSINT",
        "AI",
        "Discord Bot",
        "GPT-4",
        "Automation"
      ],
      "description": "Research and development of an accessible OSINT tool using Discord bots and GPT-4 integration, making advanced intelligence gathering techniques available to non-technical users.",
      "highlights": [
        "Extensive literature review of OSINT tools, accessibility challenges, and AI integration",
        "Analyzed the landscape of existing OSINT frameworks and their complexity barriers",
        "Designed architecture for AI-powered Discord bot using GPT-4 for natural language queries",
        "Addressed ethical considerations including privacy, consent, and responsible use"
      ],
      "technologies": [
        "Discord API",
        "GPT-4",
        "Python",
        "OSINT Frameworks",
        "Natural Language Processing"
      ],
      "outcomes": [
        "Identified key accessibility gaps in current OSINT tools requiring technical expertise",
        "Proposed solution leveraging Discord's 600M+ user base for wider accessibility",
        "Designed AI-enhanced interface translating complex queries into conversational responses",
        "Established ethical guidelines for responsible OSINT automation"
      ],
      "pdfName": "OSINT Bot Research",
      "downloadAvailable": true,
      "skills": [
        "OSINT",
        "AI Integration",
        "Bot Development",
        "Security Research",
        "Ethical Computing"
      ]
    }
  ],
  "education": {
    "university": "TU Dublin",
    "degree": "Bachelor of Science (BSc) in Digital Forensics and Cybersecurity",
    "overallProgress": {
      "completedCredits": 180,
      "totalCredits": 240
    },
    "cumulativeGPA": "3.40",
    "coursesByYear": {
      "year4": {
        "year": "Year 4 (2024-2025)",
        "stage": "Stage 4 - Final Year",
        "gpa": "In Progress",
        "modules": [
          {
            "code": "",
            "name": "Network Security Analytics",
            "credits": 10,
            "grade": "TBD"
          },
          {
            "code": "",
            "name": "Application Security",
            "credits": 10,
            "grade": "TBD"
          },
          {
            "code": "",
            "name": "Biometrics and Forensics Applications",
            "credits": 10,
            "grade": "TBD"
          },
          {
            "code": "",
            "name": "Individual Project",
            "credits": 10,
            "grade": "TBD"
          }
        ]
      },
      "year3": {
        "year": "Year 3 (2023-2024)",
        "stage": "Stage 3",
        "gpa": "3.33",
        "modules": [
          {
            "code": "",
            "name": "Network Security",
            "credits": 10,
            "grade": "B"
          },
          {
            "code": "",
            "name": "Secure Programming",
            "credits": 10,
            "grade": "A"
          },
          {
            "code": "",
            "name": "Group Project",
            "credits": 10,
            "grade": "A"
          },
          {
            "code": "",
            "name": "Computer and Network Forensics",
            "credits": 10,
            "grade": "B+"
          },
          {
            "code": "",
            "name": "Secure Communications",
            "credits": 10,
            "grade": "B-"
          },
          {
            "code": "",
            "name": "Professional Penetration Testing",
            "credits": 10,
            "grade": "B-"
          }
        ]
      },
      "year2": {
        "year": "Year 2 (2022-2023)",
        "stage": "Stage 2",
        "gpa": "3.23",
        "modules": [
          {
            "code": "",
            "name": "Web Development Server-Side",
            "credits": 5,
            "grade": "B"
          },
          {
            "code": "",
            "name": "Advanced Programming",
            "credits": 5,
            "grade": "A"
          },
          {
            "code": "",
            "name": "WAN Technologies",
            "credits": 5,
            "grade": "B+"
          },
          {
            "code": "",
            "name": "Software Engineering and Testing",
            "credits": 5,
            "grade": "B"
          },
          {
            "code": "",
            "name": "Operating Systems",
            "credits": 5,
            "grade": "B"
          },
          {
            "code": "",
            "name": "IT Business Management",
            "credits": 5,
            "grade": "B+"
          },
          {
            "code": "",
            "name": "Database Fundamentals",
            "credits": 5,
            "grade": "B+"
          },
          {
            "code": "",
            "name": "GUI Programming",
            "credits": 5,
            "grade": "A"
          },
          {
            "code": "",
            "name": "LAN Switching and Wireless",
            "credits": 5,
            "grade": "C"
          },
          {
            "code": "",
            "name": "Information Technology Mathematics",
            "credits": 5,
            "grade": "B"
          },
          {
            "code": "",
            "name": "Object Oriented Analysis and Design",
            "credits": 5,
            "grade": "B-"
          },
          {
            "code": "",
            "name": "Interactive Multimedia",
            "credits": 5,
            "grade": "B+"
          }
        ]
      },
      "year1": {
        "year": "Year 1 (2021-2022)",
        "stage": "Stage 1",
        "gpa": "3.65",
        "modules": [
          {
            "code": "",
            "name": "Fundamentals of Programming 2",
            "credits": 10,
            "grade": "A"
          },
          {
            "code": "",
            "name": "Computer Architecture",
            "credits": 5,
            "grade": "B+"
          },
          {
            "code": "",
            "name": "Mathematics for Computing",
            "credits": 5,
            "grade": "B"
          },
          {
            "code": "",
            "name": "Routers and Routing Basics",
            "credits": 5,
            "grade": "B+"
          },
          {
            "code": "",
            "name": "Web Development Client-Side",
            "credits": 5,
            "grade": "A"
          },
          {
            "code": "",
            "name": "Computer Systems",
            "credits": 5,
            "grade": "B-"
          },
          {
            "code": "",
            "name": "Networking Basics",
            "credits": 5,
            "grade": "A"
          },
          {
            "code": "",
            "name": "Web Development Fundamentals",
            "credits": 5,
            "grade": "A"
          },
          {
            "code": "",
            "name": "Fundamentals of Programming 1",
            "credits": 5,
            "grade": "A"
          },
          {
            "code": "",
            "name": "Personal and Professional Development",
            "credits": 5,
            "grade": "B"
          },
          {
            "code": "",
            "name": "Algorithmic Problem Solving",
            "credits": 5,
            "grade": "A"
          }
        ]
      }
    }
  }
};

// Initialize page
document.addEventListener('DOMContentLoaded', initializePage);

function initializePage() {
    loadProfile();
    loadProjects();
    loadEducation();
    initNavigation();
    initTabs();
    initModal();
}

// Load profile
function loadProfile() {
    const p = portfolioData.profile;
    document.getElementById('profileName').textContent = p.name;
    document.getElementById('profileTagline').textContent = p.tagline;
    document.getElementById('profileBio').textContent = p.bio;
    document.getElementById('emailBtn').href = `mailto:${p.email}`;
    document.getElementById('linkedinBtn').href = p.linkedin;
    document.getElementById('footerText').textContent = `© 2025 ${p.name} • ${p.university}`;
}

// Load projects  
function loadProjects() {
    document.getElementById('completedProjects').innerHTML = 
        portfolioData.completedProjects.map(p => createProjectCard(p)).join('');
    document.getElementById('currentProjects').innerHTML = 
        portfolioData.currentProjects.map(p => createProjectCard(p)).join('');
}

function createProjectCard(project) {
    const badge = project.inProgress ? '<div class="in-progress-badge">IN PROGRESS</div>' : '';
    return `
        <div class="project-card" onclick="openProjectModal('${project.id}', ${project.inProgress})">
            ${badge}
            <div class="project-color-bar" style="background: linear-gradient(to right, #dc2626, #ea580c);"></div>
            <div class="project-body">
                <div class="project-header">
                    <div class="project-icon">
                        ${getIcon(project.icon)}
                    </div>
                    <span class="project-date">${project.date}</span>
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-subtitle">${project.subtitle}</p>
                <div class="project-tags">
                    ${project.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}
                    ${project.tags.length > 3 ? `<span class="tag">+${project.tags.length - 3}</span>` : ''}
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-footer">
                    <span class="project-category">${project.category}</span>
                    <span class="project-arrow">Click to view details →</span>
                </div>
            </div>
        </div>
    `;
}

function getIcon(name) {
    const icons = {
        'Shield': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
        'Lock': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg>',
        'Eye': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
        'Target': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
        'Code': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
        'Database': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
        'Search': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>',
        'Activity': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>'
    };
    return icons[name] || icons['Shield'];
}

// Load education
function loadEducation() {
    const edu = portfolioData.education;
    document.getElementById('educationInfo').textContent = `${edu.university} - ${edu.degree}`;
    document.getElementById('creditsProgress').textContent = 
        `${edu.overallProgress.completedCredits}/${edu.overallProgress.totalCredits} Credits`;
    document.getElementById('cumulativeGPA').textContent = edu.cumulativeGPA;
    
    const years = Object.keys(edu.coursesByYear).reverse();
    document.getElementById('yearTabs').innerHTML = years.map((key, i) => {
        const y = edu.coursesByYear[key];
        return `
            <button class="year-tab ${i === 0 ? 'active' : ''}" onclick="loadCourses('${key}')">
                <div class="year-tab-year">${y.year}</div>
                <div class="year-tab-gpa">GPA: ${y.gpa}</div>
            </button>
        `;
    }).join('');
    
    loadCourses(years[0]);
}

function loadCourses(yearKey) {
    const year = portfolioData.education.coursesByYear[yearKey];
    document.querySelectorAll('.year-tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`[onclick="loadCourses('${yearKey}')"]`).classList.add('active');
    
    document.getElementById('coursesGrid').innerHTML = year.modules.map(m => {
        const gradeClass = m.grade === 'TBD' ? 'grade-tbd' : 
                          m.grade === 'A' ? 'grade-a' :
                          m.grade.includes('B') ? 'grade-b' : 'grade-c';
        return `
            <div class="course-card">
                <div class="course-header">
                    <div class="course-credits">${m.credits} Credits</div>
                    <div class="grade-badge ${gradeClass}">${m.grade}</div>
                </div>
                <div class="course-name">${m.name}</div>
            </div>
        `;
    }).join('');
    
    document.getElementById('stageSummary').innerHTML = `
        <div class="summary-item">
            <div class="stat-label">Stage</div>
            <div class="stat-value">${year.stage}</div>
        </div>
        <div class="summary-item">
            <div class="stat-label">Modules Completed</div>
            <div class="stat-value">${year.modules.length}</div>
        </div>
        <div class="summary-item">
            <div class="stat-label">Stage GPA</div>
            <div class="stat-value highlight">${year.gpa}</div>
        </div>
    `;
}

// Navigation
function initNavigation() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            document.getElementById('navMenu').classList.remove('active');
        });
    });
    
    document.getElementById('navToggle').addEventListener('click', () => {
        document.getElementById('navMenu').classList.toggle('active');
    });
}

// Tabs
function initTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            document.getElementById(tab === 'completed' ? 'completedProjects' : 'currentProjects').classList.add('active');
        });
    });
}

// Modal
function initModal() {
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.querySelector('.modal-overlay').addEventListener('click', closeModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function openProjectModal(id, isCurrent) {
    const projects = isCurrent ? portfolioData.currentProjects : portfolioData.completedProjects;
    const project = projects.find(p => p.id == id);
    if (!project) return;
    
    document.getElementById('modalBody').innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${project.title}</h2>
            <p class="modal-subtitle">${project.subtitle}</p>
            <span class="project-date">${project.date}</span>
            <div class="project-tags" style="margin-top: 1rem;">
                ${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
        </div>
        <div class="modal-section">
            <h4>Overview</h4>
            <p style="color: var(--text-secondary);">${project.description}</p>
        </div>
        <div class="modal-section">
            <h4>Key Highlights</h4>
            <ul>
                ${project.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
        </div>
        <div class="modal-section">
            <h4>Technologies & Tools</h4>
            <div class="project-tags">
                ${project.technologies.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
        </div>
        <div class="modal-section">
            <h4>Outcomes & Results</h4>
            <ul>
                ${project.outcomes.map(o => `<li>${o}</li>`).join('')}
            </ul>
        </div>
        <div class="modal-section">
            <h4>Skills Demonstrated</h4>
            <div class="project-tags">
                ${project.skills.map(s => `<span class="tag" style="background: rgba(6, 182, 212, 0.2); color: #06b6d4;">${s}</span>`).join('')}
            </div>
        </div>
    `;
    
    document.getElementById('projectModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = '';
}
