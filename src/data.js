export const NAV = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "work", label: "work" },
  { id: "contact", label: "contact" },
];

export const PROFILE = {
  name: "Dinesh",
  role: "Frontend Developer",
  intro:
    "I build responsive React interfaces and practical business tools, and I use n8n and Google Sheets to automate the workflows behind them.",
  photo: "dinesh.jpg", // put your photo in /public/dinesh.jpg
  resume: "Dinesh-Resume.pdf", // put your resume in /public/Dinesh-Resume.pdf
};

export const SKILL_GROUPS = [
  {
    title: "core",
    items: ["JavaScript", "React", "HTML5 & CSS3", "Tailwind CSS", "Responsive Design"],
  },
  { title: "tools", items: ["Git & GitHub", "n8n", "Google Sheets"] },
  { title: "learning", items: ["Python", "SQL"] },
];

export const PROJECTS = [
  {
    title: "Libi Dairy Farm Management",
    tagline: "Business management web app for a small dairy",
    status: "Live · in development",
    problem:
      "Daily milk deliveries, customer bills, and payments for a small dairy business lived in separate places, which made billing slow and easy to get wrong.",
    built: [
      "Customer management",
      "Daily milk delivery tracking",
      "Customer billing with automatic calculations",
      "Payment tracking",
      "Dashboard and reporting screens",
    ],
    statusNote:
      "Live and still being tested. I'm refining the billing calculations, data handling, and interface.",
    // Add images to /public/screens/ and list them here (max 2-4 works best)
    screenshots: [
      { src: "screens/dashboard.png", alt: "Libi dashboard showing daily delivery summary" },
      { src: "screens/billing.png", alt: "Libi customer billing screen" },
    ],
    stack: ["React", "JavaScript", "HTML & CSS", "Responsive UI"],
    liveUrl: "https://sdinesh9676.github.io/libi-dairy-farm/",
    codeUrl: "https://github.com/sdinesh9676/libi-dairy-farm",
  },
  // Add a second project by copying the object above.
];

export const CONTACT = {
  email: "sdinesh9876@gmail.com",
  github: "https://github.com/sdinesh9676",
  linkedin: "https://www.linkedin.com/in/dinesh-s-794484146/",
  whatsapp: "https://wa.me/919676509831",
};