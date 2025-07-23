// Mock data for Data Science Portfolio
export const portfolioData = {
  personal: {
    name: "Pratik Sahu",
    title: "Data Science Graduate",
    tagline: "Transforming data into actionable insights",
    bio: "Passionate data scientist with expertise in machine learning, statistical analysis, and data visualization. Recent graduate with hands-on experience in Python, R, and advanced analytics.",
    email: "pratiksahu3009@gmail.com",
    phone: "+91 98616 59231",
    location: "Hyderabad, IN",
    linkedin: "linkedin.com/in/pratiksahu04/",
    github: "github.com/Pratiksahu04",
  },

  skills: {
    programming: [
      { name: "Python", level: 90, category: "programming" },
      { name: "R", level: 85, category: "programming" },
      { name: "SQL", level: 88, category: "programming" },
      { name: "JavaScript", level: 50, category: "programming" },
      { name: "Java", level: 45, category: "programming" }
    ],
    dataScience: [
      { name: "Machine Learning", level: 92, category: "ml" },
      { name: "Deep Learning", level: 85, category: "ml" },
      { name: "Statistical Analysis", level: 90, category: "stats" },
      { name: "Data Visualization", level: 88, category: "viz" },
      { name: "Natural Language Processing", level: 80, category: "ml" }
    ],
    tools: [
      { name: "TensorFlow", level: 85, category: "tools" },
      { name: "PyTorch", level: 80, category: "tools" },
      { name: "Pandas", level: 95, category: "tools" },
      { name: "NumPy", level: 92, category: "tools" },
      { name: "Scikit-learn", level: 90, category: "tools" },
      { name: "Tableau", level: 85, category: "tools" },
      { name: "Power BI", level: 78, category: "tools" }
    ],
  },

  projects: [
    {
      id: 1,
      title: "Facial Emotion Recognition",
      description: "Built deep learning model to classify facial expressions using CNNs and OpenCV.",
      category: "Deep Learning",
      technologies: ["Python", "TensorFlow", "OpenCV", "Keras"],
      bgColor: "Orange",
      github: "github.com/Pratiksahu04/Facial-Emotion-Recognition",
      //demo: "alexchen.dev/churn-demo",
      highlights: ["94% accuracy", "Feature engineering", "Business impact analysis"]
    }
    /*{
      id: 2,
      title: "Stock Market Sentiment Analysis",
      description: "Developed NLP model to analyze social media sentiment and predict stock price movements using LSTM networks.",
      category: "Natural Language Processing",
      technologies: ["Python", "TensorFlow", "NLTK", "Twitter API"],
      bgColor: "light-pink",
      github: "github.com/alexchen/stock-sentiment",
      demo: "alexchen.dev/sentiment-demo",
      highlights: ["Real-time analysis", "LSTM networks", "Social media integration"]
    },
    {
      id: 3,
      title: "Sales Forecasting Dashboard",
      description: "Created interactive dashboard for sales forecasting using time series analysis and deployed on cloud platform.",
      category: "Data Visualization",
      technologies: ["R", "Shiny", "Tableau", "AWS"],
      bgColor: "light-yellow",
      github: "github.com/alexchen/sales-dashboard",
      demo: "alexchen.dev/sales-dashboard",
      highlights: ["Interactive visualization", "Time series forecasting", "Cloud deployment"]
    },
    {
      id: 4,
      title: "Recommendation System",
      description: "Built collaborative filtering recommendation system for e-commerce platform using matrix factorization techniques.",
      category: "Recommendation Systems",
      technologies: ["Python", "Surprise", "Flask", "MongoDB"],
      bgColor: "mid-purple",
      github: "github.com/alexchen/recommendation-system",
      demo: "alexchen.dev/recommend-demo",
      highlights: ["Collaborative filtering", "Matrix factorization", "RESTful API"]
    }*/
  ],

  experience: [
    {
      id: 1,
      company: "Reserve Bank of India",
      position: "Data Science Intern",
      duration: "Jun 2025 - Sep 2025",
      location: "Hyderabad, IN",
      type: "Internship",
      description: "Developed a Macro-economic Financial Resiliecnce Index using machine learning techniques to analyze economic indicators and predict financial stability.",
      achievements: [
        "Implemented machine learning models to analyze economic data",
        "Developed a comprehensive dashboard for real-time data visualization",
        "Presented findings to Regional Director of RBI and senior RBI Officials"
      ]
    }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Data Science",
      school: "Roots Degree College",
      duration: "2022 - 2025",
      cgpa: "8.4",
      location: "Hyderabad, IN",
      coursework: ["Mathematics", "Statistics", "Data Science", "English","French"]
    },
    {
      id: 2,
      degree: "Senior Secondary Education (12th Grade)",
      school: "Kendriya Vidyalaya",
      duration: "2022",
      cgpa: "7.9",
      location: "Bhubaneswar, IN",
      coursework: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
    },
    {
      id: 3,
      degree: "Senior Secondary Education (10th Grade)",
      school: "Kendriya Vidyalaya",
      duration: "2020",
      cgpa: "9.2",
      location: "Bhubaneswar, IN",
      coursework: ["Mathematics", "Physics", "Chemistry", "English", "Hindi"]
    }
  ],

  certifications: [
    {
      id: 1,
      name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      date: "July 2025",
      credentialId: "321078512OCI25GAIOCP",
      description: "Certification in Oracle Cloud Infrastructure with a focus on Generative AI technologies."
    },
    {
      id: 2,
      name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      date: "July 2025",
      credentialId: "321078512OCI25AICFA",
      description: "Certification in foundational AI concepts and Oracle Cloud Infrastructure services."
    },
    {
      id: 3,
      name: "Data Visualization and Dashboards with Excel and Cognos",
      issuer: "IBM",
      date: "May 2025",
      credentialId: "Z6UZNMIJ4X6S",
      description: "Certification in data visualization techniques using Excel and IBM Cognos Analytics."
    }
  ],

  achievements: [
    {
      id: 1,
      title: "Jawaharlal Nehru National Science Exhibition in the theme of 'Mathematical Modelling'",
      organization: "NCERT",
      date: "January 2021",
      description: "Developed a Rubber Band Powered Aermodelling Aircraft and won first place in the national science exhibition."
    },
    {
      id: 2,
      title: "Boeing-IIT National Aeromodelling Competition",
      organization: "Boeing and 6 IITs",
      date: "September 2021",
      description: "Stood 3rd in the national aeromodelling competition organized by Boeing and 6 IITs, showcasing skills in aerodynamics and aircraft design."
    }
  ],

  hobbies: [
      {
        "id": 1,
        "name": "Collecting Different Countries' Currency",
        "description": "Fascinated by the art, history, and culture embedded in banknotes and coins from around the world. Enjoy researching the stories behind each piece and the economic contexts they represent.",
        "icon": "Currency"
      },
      {
        "id": 2,
        "name": "Cooking",
        "description": "Enjoy exploring diverse culinary traditions and experimenting with new recipes. Find satisfaction in the process of creating delicious meals and sharing them with others.",
        "icon": "ChefHat"
      },
      {
        "id": 3,
        "name": "Photography",
        "description": "Passionate about capturing moments and scenes, with a particular interest in landscape and street photography. Always looking for unique perspectives and compositions.",
        "icon": "Camera"
      },
      {
        "id": 4,
        "name": "Movies",
        "description": "An avid cinephile who enjoys exploring various genres, from classic films to contemporary releases. Appreciate the storytelling, cinematography, and performances that bring narratives to life.",
        "icon": "Film"
      },
      {
        "id": 5,
        "name": "Gaming",
        "description": "Engage in a variety of video games across different platforms and genres. Enjoy the challenge, strategy, and immersive storytelling that gaming offers.",
        "icon": "Gamepad"
      }
  ]
};
