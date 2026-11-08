/* Editable portfolio content. */
window.portfolioContent = {
  "projects": [
    {
      "id": "neuroassist",
      "name": "NeuroAssist",
      "title": "Brain tumor analysis & prediction",
      "category": "AUD SENIOR PROJECT / ACCEPTED FOR CAISAIS",
      "color": "blue",
      "tags": [
        "Computer vision",
        "Deep learning",
        "Web application"
      ],
      "summary": "Making complex medical imaging easier to explore.",
      "description": "NeuroAssist was my Computer Engineering Senior Project at the American University in Dubai. It brings brain tumor segmentation, volumetric analysis, and research-based survival estimation into a single interactive web application. The research paper was accepted for CAISAIS, taking the project beyond the classroom and into a research setting.",
      "details": [
        "The project addresses a practical challenge: MRI segmentation is most useful when its outputs can be measured and explored. Using the BraTS dataset, NeuroAssist processes four MRI modalities—T1, T1CE, T2, and FLAIR—through a 2.5D U-Net. Adjacent slices provide spatial context while keeping GPU memory requirements manageable, allowing the model to distinguish necrotic core, peritumoral edema, and enhancing tumor.",
        "Predicted masks are reconstructed into three-dimensional volumes while preserving NIfTI geometry and voxel spacing. This enables tumor volume measurements, which are combined with patient age in a regression model to estimate survival time in days. A Flask REST backend connects MRI upload and GPU inference to interactive axial, coronal, sagittal, and 3D views, making the results easier to inspect.",
        "My work included model development, training, and the generation of analysis outputs. The conference paper reports a peak validation Dice score of 0.7559 and mean IoU of 0.6457 at epoch 36. These are segmentation-overlap results on the project’s validation data. NeuroAssist remains an academic decision-support prototype: survival estimation was constrained by the available annotations, and external multi-center validation was not performed."
      ],
      "video": "assets/video/NeuroAssist.mp4"
    },
    {
      "id": "cardio",
      "name": "CardioAI",
      "title": "From patient data to heart disease prediction",
      "category": "AUD MACHINE LEARNING PROJECT / FALL 2025",
      "color": "coral",
      "tags": [
        "Python",
        "Scikit-learn",
        "Optuna",
        "Flask"
      ],
      "summary": "Exploring the role of AI in heart health.",
      "description": "CardioAI was developed for EECE454, the Machine Learning course at the American University in Dubai. It explores how routinely collected clinical indicators can become a complete heart disease prediction workflow, from validating the data to presenting an estimated risk through a web interface.",
      "details": [
        "The project used 1,200 anonymized patient records supplied by a licensed cardiologist, including heart rate, oxygen saturation, troponin, BNP, ECG changes, and echocardiography findings. Data checks and comparisons with public heart disease datasets helped establish the context for the analysis. Cleaning, categorical encoding, numerical scaling, correlation analysis, and model-based feature importance prepared the data for training.",
        "Six model families were compared: Logistic Regression, KNN, Random Forest, XGBoost, LightGBM, and SVM. Cross-validation and Optuna supported tuning, while accuracy, precision, recall, F1, and ROC AUC provided different views of performance. KNN delivered the strongest overall held-out test results in the report, with approximately 80.4% accuracy and a ROC AUC of 0.79. Troponin, heart rate, and oxygen saturation emerged as influential predictors.",
        "A Flask application allows users to enter patient indicators and view an estimated risk and probability. The project demonstrates the full path from structured data to an accessible application, while keeping the results in their research context. Broader validation across patient populations and more detailed explanation methods remain future work; the prototype does not replace clinical judgment."
      ]
    },
    {
      "id": "smartpantry",
      "name": "SmartPantry / ZeroBite",
      "title": "Less waste, more value",
      "category": "FOOD SUSTAINABILITY / PRODUCT CONCEPT",
      "color": "amber",
      "tags": [
        "Receipt OCR",
        "Digital pantry",
        "Food sustainability"
      ],
      "summary": "Turning everyday pantry information into useful action.",
      "description": "SmartPantry, presented through the ZeroBite concept, is an AI-powered food sustainability application designed to help households understand what they have, use groceries before they expire, and reduce avoidable waste. Its purpose is to turn everyday purchase information into small, useful decisions at home.",
      "details": [
        "The proposed experience begins with receipt scanning through OCR or digital receipt integrations. AI identifies and categorizes groceries, estimates shelf life, and organizes them in a digital pantry. Expiry notifications, weekly inventory updates, and recipe recommendations then help users decide what to use next, reducing the effort involved in tracking food manually.",
        "The proposed minimum viable product brings together receipt scanning, grocery identification, inventory tracking, expiry reminders, recipes, and gardening recommendations. A Plant Corner suggests easy-to-grow herbs, fruits, and vegetables, extending the idea from managing food to growing some of it at home.",
        "The concept also considers the wider food lifecycle, including flagging expired items for proposed compost collection through Ehfaaz. This is a proposed integration rather than an established partnership. Future directions include improved AI models, smart-fridge integration, sustainability rewards, cloud synchronization, retailer partnerships, and home composting tutorials."
      ]
    },
    {
      "id": "rci",
      "name": "RCI",
      "title": "Translating business into digital",
      "category": "DIGITAL DELIVERY / 2025",
      "color": "cream",
      "tags": [
        "Rally of Lebanon",
        "Web development",
        "Stakeholder collaboration"
      ],
      "summary": "Connecting business needs with useful digital experiences.",
      "description": "During my technology consulting internship at Relational Computer International (RCI) in Lebanon, I developed software for the Rally of Lebanon and helped recreate the company’s corporate website. The work connected technical implementation with the needs of real stakeholders and client-facing delivery.",
      "details": [
        "The Rally of Lebanon software gave me experience contributing to a real event-related system. Alongside that work, I helped rebuild RCI’s website using HTML, CSS, and JavaScript, bringing its history, services, partners, mission, vision, and contact information into a responsive digital experience.",
        "Meetings with stakeholders every two to three days helped turn requirements and feedback into practical software decisions. Moving between requirements gathering, solution design, implementation, and review strengthened my ability to understand the business purpose behind a technical task and carry it through to a useful result."
      ]
    }
  ],
  "roles": [
    [
      "SEP 2023 — PRESENT",
      "Operations Assistant",
      "PBI Academy, Dubai",
      "Coordinate player and coach schedules, support tournament operations, manage academy inventory, and handle racket restringing, while keeping the day-to-day experience running smoothly for clients and staff."
    ],
    [
      "JAN 2023 — PRESENT",
      "Peer Tutor",
      "American University in Dubai",
      "Support fellow students through clear, structured academic guidance across quantitative and technical coursework."
    ],
    [
      "MAY 2025 — SEP 2025",
      "Technology Consulting Intern",
      "RCI, Lebanon",
      "Developed software for the Rally of Lebanon, helped recreate RCI’s corporate website, and contributed to client-facing digital solutions. Met stakeholders regularly to translate business requirements into practical software and web experiences."
    ],
    [
      "JAN 2023 — MAY 2025",
      "Math Tutor",
      "AUD Tutoring Center",
      "Provided one-to-one mathematics tutoring, helping students develop confidence, problem-solving discipline, and stronger foundations."
    ],
    [
      "JAN 2023 — NOV 2023",
      "Library Assistant",
      "AUD Library",
      "Helped other peers in finding books, printing, scanning, and using the library."
    ]
  ],
  "certificates": [
    [
      "Artificial Intelligence Fundamentals",
      "IBM SkillsBuild",
      "AI",
      "ai_fund_ibm.jpg"
    ],
    [
      "Introduction to Artificial Intelligence (AI)",
      "IBM · Coursera",
      "AI",
      "introtoai_ibm.jpg"
    ],
    [
      "Machine Learning with Python",
      "IBM · Coursera",
      "AI",
      "ML_with_python_ibm.jpg"
    ],
    [
      "Generative AI: Introduction and Applications",
      "IBM · Coursera",
      "AI",
      "genai_intro.jpg"
    ],
    [
      "Generative AI: Prompt Engineering Basics",
      "IBM · Coursera",
      "AI",
      "genai_prompt.jpg"
    ],
    [
      "AI Infrastructure and Operations Fundamentals",
      "NVIDIA · Coursera",
      "AI",
      "infra_nvidia.jpg"
    ],
    [
      "Introduction to Modern AI",
      "Cisco Networking Academy",
      "AI",
      "intro_modernAI.jpg"
    ],
    [
      "Introduction to Data Science",
      "Cisco Networking Academy",
      "Technology",
      "intro_datascience.jpg"
    ],
    [
      "Introduction to Cybersecurity",
      "Cisco Networking Academy",
      "Technology",
      "intro_cybersecurity.jpg"
    ],
    [
      "Introduction to IoT",
      "Cisco Networking Academy",
      "Technology",
      "intro_iot.jpg"
    ],
    [
      "Networking Basics",
      "Cisco Networking Academy",
      "Technology",
      "networking_basics.jpg"
    ],
    [
      "Ultimate Microsoft Office: Excel, Word, PowerPoint & Access",
      "Udemy",
      "Productivity",
      "udemy_microsoft.jpg"
    ]
  ]
};
