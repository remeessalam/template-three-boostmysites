import imageOne from "../assets/images/chooseus1.webp";
import imageTwo from "../assets/images/chooseus2.webp";
import imageThree from "../assets/images/chooseus3.webp";

import logo from "../assets/images/Logo/Logo.png";
export { logo };

const baseUrl = process.env.PUBLIC_URL;

export function publicUrlFor(path) {
  return baseUrl + "/assets/" + path;
}

export function loadScript(src, fromPublic) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement("script");

    script.src =
      fromPublic === undefined || fromPublic == null || fromPublic
        ? publicUrlFor(src)
        : src;

    script.addEventListener("load", function () {
      resolve();
    });
    script.addEventListener("error", function (e) {
      reject(e);
    });
    document.body.appendChild(script);
    document.body.removeChild(script);
  });
}

export const companyDetails = {
  name: "[company name]",
  number: "+00-00000000",
  address: "",
  email: "abc@xyc.com",
};

export const whyChooseUs = {
  mainHeading:
    "At [company name], we understand that choosing the right technology partner is crucial for your business's success. Here’s why we stand out in a crowded marketplace",
  details: [
    {
      image: imageOne,
      heading: "Tailored Solutions",
      description:
        "We believe that one size does not fit all. Our custom solutions are meticulously crafted to align with your specific business needs and objectives. Whether you require bespoke software, mobile applications, or comprehensive cloud services, we work closely with you to ensure our offerings are tailored to meet your unique challenges and goals. This personalized approach ensures that you receive the most effective solutions that drive meaningful results.",
    },
    {
      image: imageTwo,
      heading: "Expert Team",
      description:
        "Our interdisciplinary team comprises seasoned professionals with diverse expertise across various domains. From software developers and UX/UI designers to data scientists and cybersecurity specialists, our collective knowledge ensures that you receive the best guidance and support at every stage of your project. We are committed to leveraging our experience to help you navigate the complexities of technology and achieve your desired outcomes.",
    },
    {
      image: imageThree,
      heading: "Commitment to Innovation",
      description:
        "In today’s fast-paced digital landscape, staying ahead of the curve is essential. At [company name], we are dedicated to continual innovation. We adopt the latest technologies and industry best practices to provide you with solutions that not only meet your current needs but also anticipate future trends. Our forward-thinking approach allows your business to remain agile and responsive to market changes.",
    },
  ],
};

// client logos
export const clientLogos = [
  {
    id: 1,
    img: require("../assets/images/clients/1.png"),
  },
  {
    id: 2,
    img: require("../assets/images/clients/2.png"),
  },
  {
    id: 3,
    img: require("../assets/images/clients/3.png"),
  },
  {
    id: 4,
    img: require("../assets/images/clients/4.png"),
  },
  {
    id: 5,
    img: require("../assets/images/clients/5.png"),
  },
  {
    id: 6,
    img: require("../assets/images/clients/6.png"),
  },
  {
    id: 7,
    img: require("../assets/images/clients/7.png"),
  },
];

// all services
export const allServices = [
  {
    image: <i className="flaticon-app-development" />,
    title: "Mobile App Development",
    bannerImg: require("../assets/images/service-details/app.jpg"),
    shortDesc:
      "Powerful mobile solutions crafted to fit your business perfectly.",
    heading: "Mobile App Development: Engaging Apps for Every Platform",
    description: `<p>Mobile app development is essential for businesses to connect with their audience through smartphones and tablets. With the increasing reliance on mobile devices, it has become a key aspect of business strategy. Our team of developers specializes in building intuitive and powerful mobile applications tailored to meet your business needs. Whether you're looking for a native or cross-platform solution, we ensure your app provides a seamless user experience with high performance and functionality.</p>
        
          <h5>Platform-Specific Development:</h5>
          <p>We understand that each mobile platform, be it iOS or Android, has its own set of challenges and opportunities. Our development process ensures that your app is optimized for the specific platform it is being built for. We use the latest development tools and frameworks to deliver high-quality apps that work seamlessly on both iOS and Android devices.</p>
        
          <h5>Cross-Platform Solutions:</h5>
          <p>To maximize reach while minimizing costs, we also offer cross-platform app development. By leveraging frameworks like React Native, Flutter, and Xamarin, we build apps that perform exceptionally well across both iOS and Android. These solutions not only reduce development time but also ensure consistency in the user experience across platforms.</p>
        
          <h5>App Optimization:</h5>
          <p>Performance is a key consideration in mobile app development. Our team ensures that your app is fast, responsive, and efficient by optimizing it for speed, security, and battery usage. We test our apps thoroughly on different devices and environments to ensure they meet the highest standards of performance.</p>
        
          <h5>Post-Launch Support:</h5>
          <p>Our commitment to your app’s success does not end at launch. We offer ongoing maintenance and updates to ensure your app stays relevant and continues to perform at its best. This includes bug fixes, security updates, and new feature integration to keep your app competitive in the marketplace.</p>
          
          <h5>User-Centric Design:</h5>
          <p>Our mobile app development process prioritizes the user experience. We work closely with you to design and develop apps that are not only functional but also enjoyable to use. From clean UI/UX design to intuitive navigation, we ensure that every interaction with your app is a positive one.</p>`,
  },
  {
    image: <i className="flaticon-web-development" />,
    title: "Full Stack Web Development",
    bannerImg: require("../assets/images/service-details/web.jpg"),
    shortDesc: "End-to-end web solutions tailored to modern business needs.",
    heading: "Full Stack Web Development: End-to-End Web Solutions",
    description: `<p>Full-stack web development is the backbone of modern web solutions, encompassing both frontend and backend development. We specialize in delivering end-to-end web applications that are dynamic, scalable, and optimized for performance. Our team of experienced developers is equipped with expertise in various technologies to create solutions that meet the diverse needs of businesses.</p>
        
          <h5>Frontend Development:</h5>
          <p>The frontend of a website or application is what users interact with, and it’s crucial to make it intuitive and responsive. We use modern frontend frameworks and libraries like React.js, Angular, and Vue.js to create interactive, dynamic, and visually appealing user interfaces. Our focus is on delivering an exceptional user experience through fast load times, responsive design, and seamless navigation.</p>
        
          <h5>Backend Development:</h5>
          <p>The backend is where the magic happens. It handles data management, business logic, and integration with external services. Our team excels in building secure and scalable backend systems using technologies such as Node.js, Express.js, Django, and Ruby on Rails. We ensure that your backend can handle high traffic and large datasets efficiently while remaining secure and reliable.</p>
        
          <h5>Database Management:</h5>
          <p>Data is at the core of most modern applications, and managing it effectively is essential. We work with various databases such as MongoDB, MySQL, PostgreSQL, and NoSQL databases to ensure that your data is stored, retrieved, and managed efficiently. We also implement data security measures to ensure that sensitive information is protected.</p>
        
          <h5>API Development and Integration:</h5>
          <p>APIs are critical for modern web applications, allowing different systems to communicate with each other. We develop RESTful and GraphQL APIs that enable smooth data exchange between the frontend, backend, and third-party services. We also integrate your web application with popular APIs to extend its functionality and enhance user experience.</p>
        
          <h5>End-to-End Solutions:</h5>
          <p>Our full-stack development services provide you with a complete web solution from start to finish. We handle everything from initial design and planning to development, deployment, and ongoing support. We are committed to delivering a robust and scalable web application that helps your business grow and succeed in the digital landscape.</p>`,
  },
  {
    image: <i className="flaticon-programmer" />,
    title: "Game Development",
    bannerImg: require("../assets/images/service-details/game.jpg"),
    shortDesc:
      "Immersive games designed to entertain and captivate your audience.",
    heading: "Game Development: Immersive Games Designed to Engage",
    description: `<p>Our game development services are designed to bring your vision to life through captivating, interactive, and immersive experiences. Whether you're developing a mobile game, a PC game, or a console game, our team has the expertise to turn your ideas into reality. We work with cutting-edge technologies and game engines to create high-performance games with stunning visuals and engaging gameplay.</p>
        
          <h5>Game Design:</h5>
          <p>Game design is more than just visuals – it’s about creating an engaging experience that keeps players coming back. Our team specializes in game mechanics, level design, and storytelling. From concept to completion, we focus on every detail to ensure that your game is not only fun but also challenging and rewarding.</p>
        
          <h5>Cross-Platform Development:</h5>
          <p>In today’s competitive market, it’s essential to reach a wide audience. We build cross-platform games that can be played on multiple devices, including iOS, Android, PC, and consoles. By using popular game engines like Unity and Unreal Engine, we ensure that your game performs seamlessly across various platforms without compromising on quality.</p>
        
          <h5>Game Engine Utilization:</h5>
          <p>We leverage industry-leading game engines like Unity, Unreal Engine, and Godot to build high-performance games that deliver stunning graphics and fluid gameplay. These engines provide the flexibility and tools needed to create complex gaming environments, physics, AI, and more.</p>
        
          <h5>Post-Launch Support:</h5>
          <p>Our commitment doesn’t end when the game is launched. We offer continuous post-launch support to ensure that your game remains up-to-date, bug-free, and fully optimized. This includes regular updates, new content, bug fixes, and performance improvements.</p>
        
          <h5>Monetization and Marketing:</h5>
          <p>We also assist with monetizing your game, whether it’s through in-app purchases, ads, or premium versions. Additionally, we can help with marketing your game through digital campaigns, influencer partnerships, and social media to drive downloads and boost player engagement.</p>`,
  },
  {
    image: <i className="flaticon-web-design" />,
    title: "UI-UX Design",
    bannerImg: require("../assets/images/service-details/uiux.jpg"),
    shortDesc:
      "Intuitive and visually appealing designs for a seamless experience.",
    heading: "UI/UX Design: Crafting Exceptional User Experiences",
    description: `<p>Our UI/UX design services are focused on creating visually stunning and intuitive designs that make digital experiences enjoyable for users. We believe that a great user interface and user experience are essential to the success of any product, whether it's a mobile app, website, or software. Our design process revolves around understanding the user’s needs and translating them into a seamless design that enhances usability, accessibility, and engagement.</p>
        
          <h5>User Research:</h5>
          <p>Before diving into design, we conduct in-depth user research to understand your target audience. By analyzing user behavior, pain points, and preferences, we can create designs that resonate with your users. This research helps ensure that the design not only meets your business goals but also provides a positive user experience.</p>
        
          <h5>Wireframes and Prototypes:</h5>
          <p>We create wireframes and prototypes that serve as visual representations of the product. These low-fidelity designs allow us to test user flows, navigation, and overall usability before moving into high-fidelity design. Prototypes help identify potential issues early in the process, ensuring that the final product meets user expectations.</p>
        
          <h5>Interactive Design:</h5>
          <p>Our UI/UX designs focus on creating interactive and engaging user interfaces. We use modern design trends and tools to develop responsive and adaptive designs that provide a smooth experience across devices, whether it's a desktop, tablet, or smartphone. From animations to micro-interactions, we pay attention to every detail to enhance user engagement.</p>
        
          <h5>Usability Testing:</h5>
          <p>We believe in the importance of testing to ensure the design works as intended. We conduct usability testing with real users to gather feedback and identify any areas for improvement. This iterative process allows us to refine the design and make it more user-friendly before the final product is launched.</p>
        
          <h5>UI Design for Branding:</h5>
          <p>We understand the importance of branding and how it plays a role in the overall user experience. Our UI designs are crafted to reflect your brand identity, ensuring consistency across all touchpoints. From color schemes and typography to visual elements, we create designs that align with your brand’s values and message.</p>`,
  },
  {
    image: <i className="flaticon-web-programming" />,
    title: "Custom Software Development",
    bannerImg: require("../assets/images/service-details/custom-software.jpg"),
    shortDesc:
      "Custom software to solve unique business challenges efficiently.",
    heading:
      "Custom Software Development: Tailored Solutions for Your Business",
    description: `<p>We provide custom software development services that are tailored to meet the specific needs of your business. Whether you need an enterprise application, specialized solutions for a niche market, or integration with your existing systems, we build scalable, secure, and efficient software solutions that drive growth and innovation for your business.</p>
        
          <h5>Tailored Solutions:</h5>
          <p>Our custom software solutions are designed to meet your unique business requirements, ensuring the software fits perfectly with your operational needs. We take the time to understand your goals, challenges, and workflows to develop a solution that aligns with your vision.</p>
        
          <h5>System Integration:</h5>
          <p>We ensure seamless integration of your custom software with existing systems, improving efficiency and data consistency. Whether it’s integrating with your CRM, ERP, or other business tools, our solutions provide a unified approach to help you achieve operational excellence.</p>
        
          <h5>Scalability and Security:</h5>
          <p>Our software is built with scalability in mind to grow with your business. We use the latest security protocols to ensure that your data remains protected at all times, providing peace of mind and safeguarding sensitive information from potential threats.</p>
        
          <h5>Ongoing Support:</h5>
          <p>Our commitment doesn’t end at launch. We offer ongoing support to ensure your software stays up-to-date with the latest features, security patches, and performance optimizations. Our support team is always available to assist with any technical issues or upgrades needed to maintain your software’s performance.</p>`,
  },
  {
    image: <i className="flaticon-software-development" />,
    title: "AI Development",
    bannerImg: require("../assets/images/service-details/ai.jpg"),
    shortDesc: "Empower your business with smarter AI-driven solutions.",
    heading:
      "AI Development: Harnessing Artificial Intelligence for Business Growth",
    description: `<p>We specialize in AI development to create smart solutions that automate processes, predict trends, and enhance decision-making. By leveraging cutting-edge AI technologies such as machine learning, deep learning, and natural language processing (NLP), we enable businesses to drive innovation and optimize their operations.</p>
        
          <h5>Machine Learning:</h5>
          <p>We build machine learning models that help your business make data-driven decisions and improve automation. By analyzing large volumes of data, our models can identify patterns, predict outcomes, and provide actionable insights that can improve efficiency and profitability.</p>
        
          <h5>Predictive Analytics:</h5>
          <p>Our predictive analytics solutions use AI to forecast trends and behaviors, helping you make informed decisions for future growth. Whether it's sales forecasting, customer behavior analysis, or market trends, we provide solutions that enable proactive business strategies.</p>
        
          <h5>AI Integration:</h5>
          <p>We integrate AI technologies into your existing systems to enhance functionality and improve performance. Our AI integration services ensure that your operations are optimized with advanced AI capabilities, seamlessly working with your current infrastructure.</p>
        
          <h5>AI Optimization:</h5>
          <p>We continually optimize your AI models to ensure maximum accuracy and efficiency. Through regular training, testing, and fine-tuning, we ensure that your AI solutions are always improving, adapting to new data and evolving business needs.</p>`,
  },
  {
    image: <i className="flaticon-coding" />,
    title: "Chatbot Development",
    bannerImg: require("../assets/images/service-details/chatbot.jpg"),
    shortDesc: "AI-powered chatbots designed to engage and assist effectively.",
    heading: "Chatbot Development: Automating Customer Interactions",
    description: `<p>We develop intelligent chatbots that provide seamless communication with customers, automate repetitive tasks, and enhance user experience. Whether it's for customer support, sales, or FAQs, our chatbots deliver responsive solutions that meet the needs of your business and customers.</p>
        
          <h5>Custom Chatbot Design:</h5>
          <p>We design chatbots that are tailored to your specific business needs, ensuring they handle inquiries effectively and provide a personalized experience. From setting up conversation flows to defining responses, we create chatbots that align with your brand voice.</p>
        
          <h5>Natural Language Processing (NLP):</h5>
          <p>Our chatbots utilize NLP to understand and respond to customer queries in a natural and conversational manner. This enables the chatbot to engage in meaningful dialogues, ensuring that customers receive relevant answers in real-time.</p>
        
          <h5>Multi-Platform Integration:</h5>
          <p>We integrate chatbots across various platforms, including websites, mobile apps, and social media, to provide consistent support. Our solutions ensure that your customers have access to immediate assistance wherever they interact with your brand.</p>
        
          <h5>Continuous Improvement:</h5>
          <p>Our team continuously monitors and optimizes your chatbot to ensure it delivers high-quality interactions. By gathering user feedback and analyzing chat logs, we improve the chatbot’s functionality, making it smarter and more efficient over time.</p>`,
  },
  {
    image: <i className="flaticon-coding-1" />,
    title: "Computer Vision Solutions",
    bannerImg: require("../assets/images/service-details/computervision.jpg"),
    shortDesc:
      "Advanced image and video analysis for smarter business insights.",
    heading: "Computer Vision Solutions: Enabling Machines to See",
    description: `<p>Our computer vision solutions enable machines to process and analyze visual data, transforming industries like healthcare, retail, and security. We build systems that can detect, recognize, and track objects in images and videos, unlocking new opportunities for automation and optimization.</p>
        
          <h5>Image Recognition:</h5>
          <p>We develop algorithms that can detect and classify objects in images, enabling applications in various sectors like retail, manufacturing, and healthcare. By recognizing patterns and anomalies, our solutions help businesses enhance operations and improve decision-making.</p>
        
          <h5>Facial Recognition:</h5>
          <p>Our facial recognition solutions provide security and personalization capabilities for applications in various industries, including retail and finance. By analyzing facial features, our technology can verify identities, enable secure logins, and offer personalized experiences for users.</p>
        
          <h5>Video Analysis:</h5>
          <p>We use computer vision to analyze video feeds in real-time, offering solutions for surveillance, monitoring, and quality control. Our systems can detect specific objects, track movement, and alert users to important events, enhancing security and operational efficiency.</p>
        
          <h5>Machine Learning Integration:</h5>
          <p>We combine machine learning with computer vision to improve accuracy and efficiency in recognition tasks. By continuously training models with new data, we enhance the system’s ability to handle complex scenarios, improving its performance over time.</p>`,
  },
  {
    image: <i className="flaticon-coding" />,
    title: "Natural Language Processing (NLP)",
    bannerImg: require("../assets/images/service-details/nlp.jpg"),
    shortDesc:
      "Language solutions to interpret and respond to human communication.",
    heading:
      "Natural Language Processing: Enhancing Human-Machine Communication",
    description: `<p>Natural Language Processing (NLP) is transforming how machines understand and respond to human language. We develop NLP solutions that allow businesses to analyze and interact with large volumes of text, enabling smarter decision-making and automating communication processes.</p>
        
          <h5>Text Analysis:</h5>
          <p>We provide text mining and sentiment analysis tools to help businesses extract meaningful insights from customer feedback, reviews, and social media. By analyzing large amounts of text data, our solutions help businesses identify trends, customer sentiments, and areas for improvement.</p>
        
          <h5>Speech Recognition:</h5>
          <p>Our NLP solutions include speech-to-text systems that enable voice commands, transcription services, and more. These systems improve accessibility and enable businesses to offer voice-based interfaces for a more convenient user experience.</p>
        
          <h5>Chatbots and Virtual Assistants:</h5>
          <p>We develop NLP-driven chatbots and virtual assistants to help businesses automate customer support and increase operational efficiency. These systems are capable of understanding and responding to user inquiries with high accuracy, providing a seamless customer experience.</p>
        
          <h5>Language Translation:</h5>
          <p>Our NLP models enable automatic translation, helping businesses expand their reach to global audiences. By providing accurate and context-aware translations, we assist businesses in breaking down language barriers and accessing new markets.</p>`,
  },
];

// services for web development
export const webDevelopmentServices = [
  {
    image: <i className="flaticon-web-development" />,
    heading: "E-commerce Solutions",
    description: "Boost your sales with custom-designed online stores.",
  },
  {
    image: <i className="flaticon-coding" />,
    heading: "Website Maintenance",
    description: "Keeping your site updated and running smoothly.",
  },
  {
    image: <i className="flaticon-web-programming" />,
    heading: "SEO Optimization",
    description:
      "Ensuring your site is easily found with on-page SEO best practices.",
  },
  {
    image: <i className="flaticon-web-design" />,
    heading: "Custom Web Design",
    description:
      "Tailored websites that reflect your brand and engage your target audience",
  },
  {
    image: <i className="flaticon-responsive" />,
    heading: "Responsive Design",
    description:
      "Seamless user experience across all devices—desktop, tablet, and mobile.",
  },
];

// services for mobile development
export const appDevelopmentServices = [
  {
    image: <i className="flaticon-app-development" />,
    heading: "Custom App Development",
    description: "Tailored apps designed for your unique business needs.",
  },
  {
    image: <i className="flaticon-software-development" />,
    heading: "Cross-Platform Solutions",
    description:
      "Apps that perform seamlessly across iOS, Android, and web platforms.",
  },
  {
    image: <i className="flaticon-web-design" />,
    heading: "UX/UI Design",
    description:
      "Intuitive and attractive designs for an outstanding user experience.",
  },
  {
    image: <i className="flaticon-web-programming" />,
    heading: "Backend Development",
    description: "Secure and scalable backend services to support your app.",
  },
  {
    image: <i className="flaticon-coding" />,
    heading: "App Maintenance and Updates",
    description: "Ensuring your app stays up-to-date and fully functional.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("../assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("../assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("../assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("../assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("../assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("../assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("../assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("../assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("../assets/images/app_projects/3.webp"),
    title: "Glowsy",
  },
  {
    id: 4,
    img: require("../assets/images/app_projects/4.webp"),
    title: "Artisan Express",
  },
  {
    id: 5,
    img: require("../assets/images/app_projects/5.webp"),
    title: "House of Deliverance",
  },
];
