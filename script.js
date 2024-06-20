// List of projects with their names and thumbnail paths
const projects = [
  { name: "3dLittleBakeryThreejs", thumbnail: "assets/ghost-img.gif" },
  { name: "3dSocialIcons", thumbnail: "assets/ghost-img.gif" },
  { name: "3dWaveAnimation", thumbnail: "assets/ghost-img.gif" },
  { name: "404Room", thumbnail: "assets/ghost-img.gif" },
  {
    name: "abstractLoginPageWBackgroundAnimation",
    thumbnail: "assets/ghost-img.gif",
  },
  { name: "animatedButton", thumbnail: "assets/ghost-img.gif" },
  { name: "animatedLoginFormCss", thumbnail: "assets/ghost-img.gif" },
  { name: "animatedNumberSpinner", thumbnail: "assets/ghost-img.gif" },
  { name: "animatedSvgnoJs", thumbnail: "assets/ghost-img.gif" },
  { name: "automobileHeroSlider", thumbnail: "assets/ghost-img.gif" },
  { name: "bokehBackground", thumbnail: "assets/ghost-img.gif" },
  { name: "borderAnimationOnHover", thumbnail: "assets/ghost-img.gif" },
  { name: "borshRecipe", thumbnail: "assets/ghost-img.gif" },
  { name: "buttonByPraashoo7", thumbnail: "assets/ghost-img.gif" },
  { name: "cardHoverEffectUsingCssAndJs", thumbnail: "assets/ghost-img.gif" },
  { name: "cardsgradientBorder", thumbnail: "assets/ghost-img.gif" },
  { name: "carouselswiperjsflex", thumbnail: "assets/ghost-img.gif" },
  { name: "circleMenu", thumbnail: "assets/ghost-img.gif" },
  { name: "cssLegoMinifigureMaker", thumbnail: "assets/ghost-img.gif" },
  { name: "cssOnly3dTagcloudV2", thumbnail: "assets/ghost-img.gif" },
  { name: "cssOnlyShimmeringNeonText", thumbnail: "assets/ghost-img.gif" },
  { name: "cssTricksCardCarousel", thumbnail: "assets/ghost-img.gif" },
  {
    name: "cyclingGradientGlowNoTextDuplication",
    thumbnail: "assets/ghost-img.gif",
  },
  { name: "darkPlanet", thumbnail: "assets/ghost-img.gif" },
  { name: "dioramaThreejs", thumbnail: "assets/ghost-img.gif" },
  { name: "doomScrollFrontEndConf2024Demo", thumbnail: "assets/ghost-img.gif" },
  { name: "drawYourOwnStringOfLights", thumbnail: "assets/ghost-img.gif" },
  { name: "droppyWoppyInput", thumbnail: "assets/ghost-img.gif" },
  { name: "dynamicSinglePageLoginSignUp", thumbnail: "assets/ghost-img.gif" },
  { name: "error404Animation", thumbnail: "assets/ghost-img.gif" },
  { name: "fireflyButton", thumbnail: "assets/ghost-img.gif" },
  { name: "flyingLanternsAndAKoiFish", thumbnail: "assets/ghost-img.gif" },
  {
    name: "galleryAnimationGsapScrolltrigger",
    thumbnail: "assets/ghost-img.gif",
  },
  { name: "galleryWithViewTransitions", thumbnail: "assets/ghost-img.gif" },
  { name: "glassEffectSidebarSourceCode", thumbnail: "assets/ghost-img.gif" },
  {
    name: "GlassmorphicModernLandingpagewithSquircleButtonsResponsive",
    thumbnail: "assets/ghost-img.gif",
  },
  { name: "glassmorphicSignInForm10", thumbnail: "assets/ghost-img.gif" },
  { name: "glassmorphismCreditCard", thumbnail: "assets/ghost-img.gif" },
  { name: "glassyButtons", thumbnail: "assets/ghost-img.gif" },
  { name: "glmrphsmBtn", thumbnail: "assets/ghost-img.gif" },
  {
    name: "gorillasPlainJavascriptGameWithHtmlCanvas",
    thumbnail: "assets/ghost-img.gif",
  },
  { name: "gsapDraggableInertiaSnap", thumbnail: "assets/ghost-img.gif" },
  { name: "happyHolidays2023", thumbnail: "assets/ghost-img.gif" },
  { name: "hoverGlowButton", thumbnail: "assets/ghost-img.gif" },
  { name: "index", thumbnail: "assets/ghost-img.gif" },
  { name: "infinitePortals", thumbnail: "assets/ghost-img.gif" },
  { name: "insideTheTorus", thumbnail: "assets/ghost-img.gif" },
  { name: "interactiveImageGallery", thumbnail: "assets/ghost-img.gif" },
  {
    name: "interactiveParticlesTextCreateWithThreejs",
    thumbnail: "assets/ghost-img.gif",
  },
  {
    name: "interactiveSvgWorldMapOnThreejsGlobe",
    thumbnail: "assets/ghost-img.gif",
  },
  { name: "interactiveUiCards", thumbnail: "assets/ghost-img.gif" },
  { name: "landingPageAnimation", thumbnail: "assets/ghost-img.gif" },
  { name: "logIN", thumbnail: "assets/ghost-img.gif" },
  { name: "logInSignUp", thumbnail: "assets/ghost-img.gif" },
  { name: "mediaIcons", thumbnail: "assets/ghost-img.gif" },
  { name: "Menja", thumbnail: "assets/ghost-img.gif" },
  { name: "midjourneyAiGallery", thumbnail: "assets/ghost-img.gif" },
  { name: "mobileMenu", thumbnail: "assets/ghost-img.gif" },
  { name: "mobileMenuCssOnly", thumbnail: "assets/ghost-img.gif" },
  { name: "musicPlayerWidget", thumbnail: "assets/ghost-img.gif" },
  { name: "musicPlayerWithSlider", thumbnail: "assets/ghost-img.gif" },
  { name: "neonClockcss", thumbnail: "assets/ghost-img.gif" },
  { name: "neonHover", thumbnail: "assets/ghost-img.gif" },
  { name: "neuroNoiseglslShader", thumbnail: "assets/ghost-img.gif" },
  { name: "neuTimes", thumbnail: "assets/ghost-img.gif" },
  { name: "nftStoreDashboard", thumbnail: "assets/ghost-img.gif" },
  { name: "ParticleS", thumbnail: "assets/ghost-img.gif" },
  { name: "personalWebpage", thumbnail: "assets/ghost-img.gif" },
  { name: "pixelGridsvgAnimations", thumbnail: "assets/ghost-img.gif" },
  {
    name: "PlanetPickerTextNumberTransitionsCircularSVGNavTutorial",
    thumbnail: "assets/ghost-img.gif",
  },
  { name: "pointerParticlesWebComponent", thumbnail: "assets/ghost-img.gif" },
  { name: "productCardParallaxTilt", thumbnail: "assets/ghost-img.gif" },
  { name: "proximityGlowCards", thumbnail: "assets/ghost-img.gif" },
  { name: "radioButtonAnimation", thumbnail: "assets/ghost-img.gif" },
  { name: "responsiveDashboardChartjs", thumbnail: "assets/ghost-img.gif" },
  {
    name: "responsiveDashboardWithSlidersAndMusicPlayer",
    thumbnail: "assets/ghost-img.gif",
  },
  {
    name: "responsiveGsapSliderWithButtonWaveEffect",
    thumbnail: "assets/ghost-img.gif",
  },
  {
    name: "responsiveNavbarBackgroundVideo",
    thumbnail: "assets/ghost-img.gif",
  },
  {
    name: "responsiveVerticalScrollingParallaxGalleryLerp",
    thumbnail: "assets/ghost-img.gif",
  },
  { name: "reworkedDoubleMatcap", thumbnail: "assets/ghost-img.gif" },
  { name: "rotating3dGalleryImageFilters", thumbnail: "assets/ghost-img.gif" },
  { name: "saleBanner", thumbnail: "assets/ghost-img.gif" },
  { name: "santaHatButton", thumbnail: "assets/ghost-img.gif" },
  { name: "scrollGameDarkRun", thumbnail: "assets/ghost-img.gif" },
  { name: "singleKeyframeTricks", thumbnail: "assets/ghost-img.gif" },
  { name: "SN4KE", thumbnail: "assets/ghost-img.gif" },
  { name: "socialCardHover", thumbnail: "assets/ghost-img.gif" },
  { name: "socialMediaGlowing", thumbnail: "assets/ghost-img.gif" },
  { name: "socialSvgIconHoverConcept", thumbnail: "assets/ghost-img.gif" },
  { name: "Squidematics", thumbnail: "assets/ghost-img.gif" },
  {
    name: "stackGameWithThreejsAndCannonjs",
    thumbnail: "assets/ghost-img.gif",
  },
  { name: "starfieldAnimation", thumbnail: "assets/ghost-img.gif" },
  { name: "starTrails", thumbnail: "assets/ghost-img.gif" },
  { name: "storePage", thumbnail: "assets/ghost-img.gif" },
  { name: "stretchableElasticToggleCss", thumbnail: "assets/ghost-img.gif" },
  {
    name: "SynthwaveMotionDayandNightResponsivePureHTMLandCSS",
    thumbnail: "assets/ghost-img.gif",
  },
  { name: "theEarthIsALamp", thumbnail: "assets/ghost-img.gif" },
  { name: "threejs3dChristmasTree", thumbnail: "assets/ghost-img.gif" },
  { name: "Timekeeping", thumbnail: "assets/ghost-img.gif" },
  { name: "toggledRadialButtons", thumbnail: "assets/ghost-img.gif" },
  { name: "toiletPaperRollToggleCss", thumbnail: "assets/ghost-img.gif" },
  { name: "veggieKnight", thumbnail: "assets/ghost-img.gif" },
  { name: "webglEyePattern", thumbnail: "assets/ghost-img.gif" },
  { name: "webglLiquidMasking", thumbnail: "assets/ghost-img.gif" },
];

// Function to generate project thumbnails
function generateProjectThumbnails() {
  const container = document.getElementById("project-thumbnails");
  container.innerHTML = ""; // Clear existing content

  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const img = document.createElement("img");
    img.src = project.thumbnail;
    img.alt = project.name;
    projectDiv.appendChild(img);

    const projectName = document.createElement("p");
    projectName.textContent = project.name;
    projectDiv.appendChild(projectName);

    // Open the project on click
    projectDiv.addEventListener("click", () => {
      openProject(project.name);
    });

    container.appendChild(projectDiv);
  });
}

// Function to open project folder and view index.html
function openProject(projectName) {
  // Replace any spaces in project name with dashes
  const folderName = projectName.replace(/\s+/g, "-");

  // Assuming projects are in the same directory as this script
  const path = `./${folderName}/index.html`;

  // Open the file in a new tab
  window.open(path, "_blank");
}

// Call the function to generate thumbnails on page load
generateProjectThumbnails();
