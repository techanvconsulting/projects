const projects = [
  "3D Little Bakery - ThreeJS",
  "3d social icons",
  "3D wave animation",
  "404 room",
  "Abstract Login Page w Background Animation",
  "Animated Button",
  "Animated Login Form - CSS",
  "Animated Number Spinner",
  "Animated SVG [no JS]",
  "Automobile Hero Slider",
  "Bokeh Background",
  "border animation on hover",
  "Borsh Recipe",
  "Button by Praashoo7",
  "Card hover effect using CSS and JS",
  "Cards (gradient border)",
  "Carousel #swiperjs #flex",
  "Circle Menu",
  "CSS LEGO Minifigure Maker",
  "CSS Only 3D Tagcloud V2",
  "CSS-only shimmering neon text",
  "CSS-Tricks Card Carousel",
  "Cycling gradient glow - no text duplication",
  "dark planet",
  "Diorama - ThreeJS",
  "Doom Scroll - Front End Conf 2024 Demo",
  "draw your own string of lights",
  "Droppy woppy input",
  "Dynamic Single Page Login + Sign Up",
  "error 404 animation_",
  "Firefly Button",
  "Flying lanterns and a Koi fish",
  "Gallery animation - GSAP & ScrollTrigger",
  "Gallery with View Transitions",
  "Glass effect Sidebar Source Code",
  "Glassmorphic Sign in Form 1.0",
  "Glassmorphic_Modern_Landing_page_with_Squircle_Buttons_Responsive",
  "Glassmorphism Credit Card",
  "Glassy buttons",
  "glmrphsm btn",
  "Gorillas - Plain JavaScript Game with HTML Canvas",
  "GSAP Draggable & Inertia Snap",
  "Happy Holidays! 2023",
  "hover glow button",
  "index",
  "Infinite Portals",
  "Inside the torus",
  "Interactive Image Gallery",
  "Interactive particles text create with three.js",
  "Interactive SVG World Map on Three.js Globe",
  "Interactive UI Cards",
  "Landing Page animation",
  "Log in  Sign up",
  "logIN",
  "Media Icons",
  "Menja",
  "Midjourney AI Gallery",
  "Mobile menu, CSS only",
  "mobile-menu",
  "music player widget",
  "music player with slider",
  "neon clock (CSS)",
  "neon hover",
  "Neu Times !",
  "Neuro Noise (GLSL Shader)",
  "NFT Store Dashboard",
  "ParticleS",
  "Personal Webpage",
  "Pixel-Grid (SVG Animations)",
  "Planet_Picker_🌍👌_TextNumber_Transitions_&_Circular_SVG_Nav_Tutorial",
  "pointer-particles Web Component",
  "Product Card Parallax Tilt",
  "Proximity Glow Cards",
  "Radio Button Animation",
  "Responsive Dashboard  Chart.js",
  "Responsive Dashboard with Sliders and Music Player",
  "Responsive GSAP Slider with Button Wave Effect",
  "Responsive Navbar & Background Video",
  "Responsive Vertical Scrolling Parallax Gallery ( Lerp )",
  "reWorked - Double Matcap",
  "Rotating 3d gallery image filters",
  "Sale banner",
  "Santa Hat Button",
  "Scroll Game Dark Run",
  "Single Keyframe Tricks",
  "SN4KE",
  "Social Card Hover",
  "Social Media Glowing",
  "Social svg icon hover concept",
  "Squidematics",
  "Stack game with Three.js and Cannon.js",
  "Star trails",
  "Starfield Animation",
  "store page",
  "Stretchable Elastic Toggle - CSS",
  "Synthwave_Motion_Day_and_Night_Responsive_Pure_HTML_and_CSS",
  "The earth... is a lamp!",
  "ThreeJS 3D Christmas Tree",
  "Timekeeping",
  "Toggled Radial Buttons",
  "Toilet Paper Roll Toggle - CSS",
  "Veggie Knight",
  "WebGL Eye Pattern",
  "WebGL liquid masking",
];

const projectList = document.getElementById("project-list");

projects.forEach((project) => {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = `./${project}/index.html`;
  link.textContent = project;
  listItem.appendChild(link);
  projectList.appendChild(listItem);
});
