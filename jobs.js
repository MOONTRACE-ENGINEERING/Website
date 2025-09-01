// This file contains all the job data for the careers page.
// To add, remove, or edit a job, you only need to modify this file.

const jobData = [
    {
        id: "frontend-engineer-details",
        title: "Frontend Engineer",
        location: "Remote | Global",
        category: "engineering",
        shortDescription: "Craft intuitive user interfaces for our cryptographic dashboards (VANTAGE/APX). Own UI/UX from concept to deployment. React/Vue and Tailwind experience preferred.",
        details: `
            <p class="mb-3">We are seeking a talented Frontend Engineer to design and implement intuitive and responsive user interfaces for our suite of cybersecurity products, including our cryptographic posture visibility platform (VANTAGE) and crypto-agility solution (APX).</p>
            <p class="mb-3">You will be responsible for the entire UI/UX lifecycle, from wireframing and prototyping to development, testing, and deployment. This role requires a strong eye for design, a deep understanding of modern web technologies, and a passion for creating seamless user experiences in a highly technical domain.</p>
            <h4 class="font-bold mt-4 mb-2">Responsibilities:</h4>
            <ul class="list-disc list-inside mb-3">
                <li>Develop and maintain scalable, high-performance web applications using modern JavaScript frameworks (React, Vue, or Angular).</li>
                <li>Collaborate with product managers, backend engineers, and cryptography experts to translate complex security concepts into user-friendly interfaces.</li>
                <li>Ensure cross-browser compatibility, accessibility (WCAG), and optimal performance across various devices.</li>
                <li>Implement responsive designs using Tailwind CSS and other modern styling techniques.</li>
                <li>Participate in code reviews, contribute to architectural discussions, and mentor junior developers.</li>
            </ul>
            <h4 class="font-bold mt-4 mb-2">Requirements:</h4>
            <ul class="list-disc list-inside">
                <li>2+ years of experience in frontend web development.</li>
                <li>Proficiency in HTML5, CSS3, and JavaScript (ES6+).</li>
                <li>Extensive experience with at least one modern JavaScript framework (React, Vue, or Angular).</li>
                <li>Strong understanding of RESTful APIs and asynchronous programming.</li>
                <li>Experience with version control systems (Git).</li>
                <li>Excellent problem-solving skills and attention to detail.</li>
            </ul>
        `
    },
    {
        id: "backend-engineer-details",
        title: "Backend / Systems Engineer",
        location: "Remote | Global",
        category: "engineering",
        shortDescription: "Architect APIs and scanning engines for PQC posture, migration, and key management. Experience with Golang, Rust, or Python is a plus.",
        details: `
            <p class="mb-3">We are looking for a skilled Backend / Systems Engineer to build robust, scalable, and secure backend services for our cryptographic solutions. You will be instrumental in designing and implementing APIs, data processing pipelines, and core system components that power our platforms.</p>
            <p class="mb-3">This role involves working closely with our cryptography and frontend teams to ensure seamless integration and high performance. A strong understanding of system architecture, data integrity, and security best practices is crucial.</p>
            <h4 class="font-bold mt-4 mb-2">Responsibilities:</h4>
            <ul class="list-disc list-inside mb-3">
                <li>Design, develop, and maintain high-performance backend services and APIs.</li>
                <li>Implement data storage solutions and ensure data security and integrity.</li>
                <li>Collaborate on system architecture and design decisions.</li>
                <li>Optimize applications for maximum speed and scalability.</li>
                <li>Write comprehensive unit and integration tests.</li>
                <li>Participate in code reviews and contribute to improving engineering standards.</li>
            </ul>
            <h4 class="font-bold mt-4 mb-2">Requirements:</h4>
            <ul class="list-disc list-inside">
                <li>3+ years of experience in backend development.</li>
                <li>Proficiency in Golang, Rust, Python, or Java.</li>
                <li>Experience with database systems (SQL, NoSQL).</li>
                <li>Familiarity with cloud platforms (AWS, GCP, Azure).</li>
                <li>Understanding of microservices architecture and distributed systems.</li>
                <li>Strong problem-solving and debugging skills.</li>
            </ul>
        `
    },
    {
        id: "devops-engineer-details",
        title: "DevOps / Infrastructure Engineer",
        location: "Remote | Global",
        category: "engineering",
        shortDescription: "Build secure CI/CD pipelines, automate crypto testing workflows, and deploy VMs for cryptographic services. Familiarity with AWS/GCP and container security essential.",
        details: `
            <p class="mb-3">We are seeking a proactive DevOps / Infrastructure Engineer to build, maintain, and scale our secure development and deployment environments. You will be responsible for automating our CI/CD pipelines, managing cloud infrastructure, and ensuring the security and reliability of our systems.</p>
            <p class="mb-3">This role requires expertise in cloud services, containerization, and infrastructure as code, with a strong focus on cybersecurity best practices.</p>
            <h4 class="font-bold mt-4 mb-2">Responsibilities:</h4>
            <ul class="list-disc list-inside mb-3">
                <li>Design and implement secure, automated CI/CD pipelines.</li>
                <li>Manage and optimize cloud infrastructure (AWS, GCP, Azure).</li>
                <li>Implement and maintain containerization (Docker, Kubernetes) and orchestration solutions.</li>
                <li>Automate infrastructure provisioning and configuration using tools like Terraform or Ansible.</li>
                <li>Monitor system performance, troubleshoot issues, and ensure high availability.</li>
                <li>Implement security best practices across infrastructure and development workflows.</li>
            </ul>
            <h4 class="font-bold mt-4 mb-2">Requirements:</h4>
            <ul class="list-disc list-inside">
                <li>3+ years of experience in DevOps or SRE roles.</li>
                <li>Strong experience with cloud platforms (AWS, GCP, or Azure).</li>
                <li>Proficiency with Docker and Kubernetes.</li>
                <li>Experience with CI/CD tools (Jenkins, GitLab CI, GitHub Actions).</li>
                <li>Familiarity with scripting languages (Bash, Python).</li>
                <li>Understanding of network security, firewalls, and access control.</li>
            </ul>
        `
    },
    {
        id: "cryptography-engineer-details",
        title: "Cryptography / Security Engineer",
        location: "Remote | Global",
        category: "security",
        shortDescription: "Implement and audit PQC schemes. Experience with CRYSTALS-Kyber, Dilithium, NTRU, or BIKE is ideal. Contribute to protocol design and security models for QUBEx.",
        details: `
            <p class="mb-3">We are looking for an experienced Cryptography / Security Engineer to join our core R&D team. You will be involved in the research, design, implementation, and auditing of post-quantum cryptographic schemes and secure protocols for our cutting-edge products.</p>
            <p class="mb-3">This role requires deep expertise in cryptographic primitives, a strong understanding of security models, and the ability to translate complex theoretical concepts into practical, secure solutions.</p>
            <h4 class="font-bold mt-4 mb-2">Responsibilities:</h4>
            <ul class="list-disc list-inside mb-3">
                <li>Research, evaluate, and implement post-quantum cryptographic algorithms (e.g., CRYSTALS-Kyber, Dilithium, NTRU, Falcon).</li>
                <li>Design and analyze secure communication protocols and key management systems.</li>
                <li>Conduct security audits and vulnerability assessments of cryptographic implementations.</li>
                <li>Contribute to the development of secure hardware and software components.</li>
                <li>Stay up-to-date with the latest advancements in cryptography and quantum computing.</li>
            </ul>
            <h4 class="font-bold mt-4 mb-2">Requirements:</h4>
            <ul class="list-disc list-inside">
                <li>3+ years of experience in cryptography engineering or a related security role.</li>
                <li>Strong background in theoretical and applied cryptography.</li>
                <li>Proficiency in C/C++, Rust, or Go for cryptographic implementations.</li>
                <li>Familiarity with NIST PQC standardization process and finalists.</li>
                <li>Experience with cryptographic libraries and tools.</li>
                <li>Master's or Ph.D. in Computer Science, Mathematics, or a related field (preferred).</li>
            </ul>
        `
    },
    {
        id: "ai-ml-engineer-details",
        title: "AI/ML Engineer",
        location: "Remote | Global",
        category: "engineering",
        shortDescription: "Develop and optimize machine learning models for cybersecurity and cryptographic applications. Experience with model training, data pipelines, and Python ML frameworks required.",
        details: `
            <p class="mb-3">We are seeking an AI/ML Engineer to join our team and work on projects focused on model training for cybersecurity and cryptographic analytics. You will design, implement, and optimize machine learning models to enhance our products' capabilities in threat detection, anomaly analysis, and cryptographic posture assessment.</p>
            <h4 class="font-bold mt-4 mb-2">Responsibilities:</h4>
            <ul class="list-disc list-inside mb-3">
                <li>Build and train machine learning models for cybersecurity and cryptographic data analysis.</li>
                <li>Develop data pipelines for preprocessing, feature engineering, and model evaluation.</li>
                <li>Collaborate with engineering and research teams to integrate ML solutions into production systems.</li>
                <li>Optimize model performance and scalability for real-world deployment.</li>
                <li>Stay current with advances in AI/ML and apply best practices to our projects.</li>
            </ul>
            <h4 class="font-bold mt-4 mb-2">Requirements:</h4>
            <ul class="list-disc list-inside">
                <li>2+ years of experience in machine learning or data science roles.</li>
                <li>Proficiency in Python and ML frameworks (TensorFlow, PyTorch, scikit-learn).</li>
                <li>Experience with model training, validation, and deployment.</li>
                <li>Strong understanding of data preprocessing and feature engineering.</li>
                <li>Ability to work with large datasets and cloud-based ML infrastructure.</li>
                <li>Excellent problem-solving and communication skills.</li>
            </ul>
        `
    },
    {
        id: "cybersecurity-analyst-details",
        title: "Cybersecurity Analyst",
        location: "Remote | Global",
        category: "analyst",
        shortDescription: "Support cryptographic posture assessments, threat modeling, and compliance monitoring. Familiarity with NIST, FIPS, and CBOM generation required.",
        details: `
            <p class="mb-3">We are seeking a diligent Cybersecurity Analyst to support our efforts in cryptographic posture assessment, threat modeling, and compliance monitoring. You will play a crucial role in identifying cryptographic weaknesses and ensuring our clients' systems meet stringent security standards.</p>
            <p class="mb-3">This position requires a keen eye for detail, strong analytical skills, and familiarity with various cybersecurity frameworks and tools.</p>
            <h4 class="font-bold mt-4 mb-2">Responsibilities:</h4>
            <ul class="list-disc list-inside mb-3">
                <li>Perform cryptographic posture assessments across client infrastructures.</li>
                <li>Conduct threat modeling and risk analysis for new and existing systems.</li>
                <li>Monitor for cryptographic vulnerabilities and emerging quantum threats.</li>
                <li>Assist in generating Cryptographic Bill of Materials (CBOMs).</li>
                <li>Ensure compliance with industry standards and regulations (e.g., NIST, FIPS, GDPR, HIPAA).</li>
                <li>Prepare detailed reports and recommendations for security improvements.</li>
            </ul>
            <h4 class="font-bold mt-4 mb-2">Requirements:</h4>
            <ul class="list-disc list-inside">
                <li>2+ years of experience in cybersecurity analysis or a related field.</li>
                <li>Understanding of cryptographic principles and common algorithms.</li>
                <li>Familiarity with cybersecurity frameworks (NIST Cybersecurity Framework, ISO 27001).</li>
                <li>Experience with vulnerability scanning and penetration testing tools.</li>
                <li>Strong analytical and problem-solving skills.</li>
                <li>Excellent written and verbal communication.</li>
            </ul>
        `
    },
    {
        id: "technical-writer-details",
        title: "Technical Writer (PQC)",
        location: "Remote | Global",
        category: "writing",
        shortDescription: "Write clear documentation for cryptographic tools and APIs. Experience with Markdown, Git, and technical blog writing preferred.",
        details: `
            <p class="mb-3">We are looking for a talented Technical Writer to create clear, concise, and comprehensive documentation for our post-quantum cryptography products and APIs. You will translate complex technical concepts into user-friendly guides, API references, and blog posts.</p>
            <p class="mb-3">This role requires strong writing skills, attention to detail, and the ability to understand and explain highly technical cybersecurity topics to diverse audiences, from developers to business leaders.</p>
            <h4 class="font-bold mt-4 mb-2">Responsibilities:</h4>
            <ul class="list-disc list-inside mb-3">
                <li>Develop and maintain high-quality technical documentation, including user manuals, API documentation, and integration guides.</li>
                <li>Collaborate with engineers and product managers to understand complex technical concepts.</li>
                <li>Write engaging blog posts and articles on post-quantum cryptography and cybersecurity trends.</li>
                <li>Ensure documentation is accurate, up-to-date, and adheres to brand guidelines.</li>
                <li>Manage documentation versions using Git and other content management tools.</li>
            </ul>
            <h4 class="font-bold mt-4 mb-2">Requirements:</h4>
            <ul class="list-disc list-inside">
                <li>2+ years of experience in technical writing, preferably in cybersecurity or a related tech field.</li>
                <li>Excellent written and verbal communication skills.</li>
                <li>Ability to understand and explain complex technical concepts clearly.</li>
                <li>Experience with Markdown, reStructuredText, or similar documentation formats.</li>
                <li>Familiarity with version control systems (Git).</li>
                <li>Portfolio of technical writing samples required.</li>
            </ul>
        `
    },
    {
        id: "student-researcher-details",
        title: "Student Researcher (MTLabs)",
        location: "Remote | Open to Students",
        category: "research",
        shortDescription: "Contribute to PQC algorithm research, benchmarking, and applications for embedded/IoT systems. Great for thesis projects.",
        details: `
            <p class="mb-3">MTLabs is offering a unique opportunity for a Student Researcher to contribute to cutting-edge research in post-quantum cryptography. This role is ideal for graduate students looking to apply theoretical knowledge to practical problems in cybersecurity.</p>
            <p class="mb-3">You will work alongside our senior researchers on projects related to algorithm benchmarking, side-channel analysis, and the application of PQC to embedded and IoT systems. This can be an excellent opportunity for a thesis project or independent study.</p>
            <h4 class="font-bold mt-4 mb-2">Responsibilities:</h4>
            <ul class="list-disc list-inside mb-3">
                <li>Conduct literature reviews and analyze existing research in PQC.</li>
                <li>Implement and benchmark PQC algorithms on various platforms.</li>
                <li>Contribute to the design and analysis of new cryptographic protocols.</li>
                <li>Assist in preparing research papers and presentations.</li>
                <li>Collaborate with the MTLabs team on ongoing projects.</li>
            </ul>
            <h4 class="font-bold mt-4 mb-2">Requirements:</h4>
            <ul class="list-disc list-inside">
                <li>Currently enrolled in a Master's or Ph.D. program in Computer Science, Electrical Engineering, Mathematics, or a related field.</li>
                <li>Strong academic record in cryptography, algorithms, or cybersecurity.</li>
                <li>Proficiency in at least one programming language (e.g., Python, C/C++).</li>
                <li>Ability to work independently and as part of a research team.</li>
                <li>Prior research experience or coursework in cryptography is a plus.</li>
            </ul>
        `
    },
    {
        id: "hardware-research-intern-details",
        title: "Hardware Research Intern (Embedded PQC)",
        location: "Remote | Internship",
        category: "research",
        shortDescription: "Design PQC-ready logic blocks for secure key management. Background in VHDL/Verilog, microcontrollers, and side-channel protections a plus.",
        details: `
            <p class="mb-3">We are looking for a motivated Hardware Research Intern to explore and develop PQC-ready logic blocks for secure key management in embedded systems. This internship offers hands-on experience in hardware design for cybersecurity.</p>
            <p class="mb-3">You will work closely with our hardware and cryptography teams, focusing on designing efficient and secure cryptographic accelerators, investigating side-channel attack countermeasures, and integrating quantum random number generators.</p>
            <h4 class="font-bold mt-4 mb-2">Responsibilities:</h4>
            <ul class="list-disc list-inside mb-3">
                <li>Assist in the design and simulation of hardware modules for cryptographic operations.</li>
                <li>Research and evaluate hardware implementations of PQC algorithms.</li>
                <li>Investigate techniques for side-channel attack protection.</li>
                <li>Contribute to the integration of quantum random number generators (QRNGs).</li>
                <li>Document design choices and experimental results.</li>
            </ul>
            <h4 class="font-bold mt-4 mb-2">Requirements:</h4>
            <ul class="list-disc list-inside">
                <li>Currently enrolled in an Electrical Engineering, Computer Engineering, or related undergraduate/graduate program.</li>
                <li>Familiarity with digital logic design and FPGA/ASIC development flows.</li>
                <li>Knowledge of VHDL or Verilog.</li>
                <li>Basic understanding of cryptographic concepts.</li>
                <li>Strong problem-solving and analytical skills.</li>
            </ul>
        `
    },
    {
        id: "software-research-intern-details",
        title: "Software Research Intern (VANTAGE/APX)",
        location: "Remote | Internship",
        category: "research",
        shortDescription: "Prototype cryptographic scanners and PQC migration agents. Ideal for students interested in applied cryptography and automation tools.",
        details: `
            <p class="mb-3">Moontrace Engineering is offering a Software Research Internship focused on prototyping cryptographic scanners and PQC migration agents for our VANTAGE and APX platforms. This is an ideal opportunity for students passionate about applied cryptography and automation tools.</p>
            <p class="mb-3">You will gain practical experience in developing tools that analyze cryptographic postures, identify vulnerabilities, and automate the transition to quantum-safe algorithms in real-world applications.</p>
            <h4 class="font-bold mt-4 mb-2">Responsibilities:</h4>
            <ul class="list-disc list-inside mb-3">
                <li>Develop proof-of-concept tools for scanning cryptographic assets in software.</li>
                <li>Prototype agents for automated cryptographic migration and agility.</li>
                <li>Research and integrate new PQC algorithms into existing software frameworks.</li>
                <li>Conduct experiments and analyze performance data of cryptographic operations.</li>
                <li>Collaborate with senior engineers on project design and implementation.</li>
            </ul>
            <h4 class="font-bold mt-4 mb-2">Requirements:</h4>
            <ul class="list-disc list-inside">
                <li>Currently enrolled in a Computer Science, Software Engineering, or related undergraduate/graduate program.</li>
                <li>Proficiency in Python, Java, or Go.</li>
                <li>Basic understanding of cybersecurity and cryptographic concepts.</li>
                <li>Familiarity with API design and software development principles.</li>
                <li>Strong analytical and problem-solving skills.</li>
            </ul>
        `
    },
    {
        id: "hardware-systems-engineer-details",
        title: "Hardware Systems Engineer (QUBEx)",
        location: "Remote | Hybrid | Preferred: India",
        category: "hardware",
        shortDescription: "Lead embedded development for QUBEx: a quantum-safe key management appliance. Experience with secure hardware design, HSMs, and embedded cryptography essential.",
        details: `
            <p class="mb-3">We are seeking a lead Hardware Systems Engineer to drive the embedded development for QUBEx, our quantum-safe key management appliance. This is a critical role for someone with deep expertise in secure hardware design and embedded cryptography.</p>
            <p class="mb-3">You will be responsible for the full lifecycle of hardware development, from architectural design and component selection to firmware development, testing, and manufacturing support. Experience with Hardware Security Modules (HSMs) and side-channel attack countermeasures is essential.</p>
            <h4 class="font-bold mt-4 mb-2">Responsibilities:</h4>
            <ul class="list-disc list-inside mb-3">
                <li>Lead the design and development of secure embedded systems for QUBEx.</li>
                <li>Architect and implement secure boot, firmware updates, and trusted execution environments.</li>
                <li>Integrate cryptographic modules and ensure their secure operation.</li>
                <li>Conduct hardware security reviews and penetration testing.</li>
                <li>Collaborate with software and cryptography teams to ensure seamless hardware-software interaction.</li>
                <li>Manage relationships with hardware vendors and manufacturers.</li>
            </ul>
            <h4 class="font-bold mt-4 mb-2">Requirements:</h4>
            <ul class="list-disc list-inside">
                <li>5+ years of experience in embedded systems development with a strong focus on hardware security.</li>
                <li>Expertise in microcontroller programming (e.g., ARM Cortex-M/R), RTOS, and low-level drivers.</li>
                <li>Strong understanding of cryptographic hardware accelerators and secure element integration.</li>
                <li>Experience with secure hardware design principles and attack vectors.</li>
                <li>Proficiency in C/C++ for embedded systems.</li>
                <li>Familiarity with industry security certifications (e.g., FIPS 140-2).</li>
            </ul>
        `
    },
    {
        id: "fpga-qrng-engineer-details",
        title: "FPGA / QRNG Integration Engineer",
        location: "Remote | Contract or Full-time",
        category: "hardware",
        shortDescription: "Develop and integrate FPGA logic for true quantum random number generation. Prior experience with PCIe, entropy extraction, and signal integrity required.",
        details: `
            <p class="mb-3">We are looking for an FPGA / QRNG Integration Engineer to develop and integrate FPGA logic for true quantum random number generation (QRNG) within our QUBEx appliance. This role is crucial for ensuring the highest level of entropy and randomness for cryptographic keys.</p>
            <p class="mb-3">You will work on the cutting edge of hardware security, focusing on high-speed data acquisition, entropy extraction techniques, and secure integration of QRNGs into our hardware platform. Experience with high-speed interfaces like PCIe and ensuring signal integrity is highly valued.</p>
            <h4 class="font-bold mt-4 mb-2">Responsibilities:</h4>
            <ul class="list-disc list-inside">
                <li>Design, develop, and verify FPGA logic for QRNG and cryptographic acceleration.</li>
                <li>Implement high-speed interfaces (e.g., PCIe, Ethernet) for data transfer.</li>
                <li>Develop and optimize entropy extraction and conditioning algorithms.</li>
                <li>Conduct rigorous testing and validation of QRNG output for randomness and bias.</li>
                <li>Collaborate with hardware and software teams for seamless integration into QUBEx.</li>
                <li>Ensure compliance with relevant industry standards for randomness (e.g., NIST SP 800-90A/B/C).</li>
            </ul>
            <h4 class="font-bold mt-4 mb-2">Requirements:</h4>
            <ul class="list-disc list-inside">
                <li>3+ years of experience in FPGA design and verification.</li>
                <li>Proficiency in VHDL/Verilog.</li>
                <li>Experience with high-speed digital design and signal integrity.</li>
                <li>Understanding of random number generation principles, especially quantum entropy sources.</li>
                <li>Familiarity with PCIe or other high-speed serial interfaces.</li>
                <li>Strong debugging and troubleshooting skills for hardware.</li>
            </ul>
        `
    },
    
];
