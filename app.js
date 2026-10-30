/**
 * Visual Learning Platform - Interactive Logic
 * Class 4 & 5 Science (EVS) for Deaf Students
 * Anushruti Academy for the Deaf (IIT Roorkee)
 */

/* =====================================================
   0. CLASS + CURRICULUM CONFIGURATION
   ===================================================== */
const CLASS_CONFIG = {
  class5: {
    id: 'class5',
    name: 'Class 5',
    emoji: '🌱',
    tagline: 'Plants, Animals & Body Systems',
    chapters: [
      { id: 'ch1', title: 'Growing Plants', emoji: '🌿', status: 'available' },
      { id: 'ch2', title: 'Food and Health', emoji: '🍎', status: 'preview' },
      { id: 'ch3', title: 'Life of Animals', emoji: '🦁', status: 'preview' },
      { id: 'ch4', title: 'Skeletal & Muscular', emoji: '🦴', status: 'preview' },
      { id: 'ch5', title: 'Nervous System', emoji: '🧠', status: 'preview' }
    ]
  },
  class4: {
    id: 'class4',
    name: 'Class 4',
    emoji: '🍽️',
    tagline: 'Food, Teeth & Digestion',
    chapters: [
      { id: 'ch1', title: 'Food – Our Basic Need', emoji: '🍎', status: 'available' },
      { id: 'ch2', title: 'Teeth, Microbes & Digestion', emoji: '🦷', status: 'available' }
    ]
  }
};

let currentClass = localStorage.getItem('lwe_current_class') || 'class5';

/* =====================================================
   ISL VOCABULARY DATA
   ===================================================== */
const ISL_DATA_C5_CH1 = [
  { id: 'seed', word: 'Seed', emoji: '🌰', graphic: '🌰🌱', gestureName: 'Pinch & Sow Gesture',
    step1: 'Hold your thumb and index finger close together to show the tiny size of a seed.',
    step2: 'Gently move your hand downward towards the ground as if planting the seed in soil.',
    meaning: 'A seed is the part of a plant that contains a baby plant and stored food.' },
  { id: 'plant', word: 'Plant', emoji: '🌿', graphic: '🌱🌳', gestureName: 'Growing Branch Gesture',
    step1: 'Rest your right elbow in your left palm.',
    step2: 'Open your right hand with fingers spread wide, gently raising it upwards like a growing sprout.',
    meaning: 'Living organisms that grow in soil and make food from sunlight and water.' },
  { id: 'water', word: 'Water', emoji: '💧', graphic: '🌊💧', gestureName: 'W-Hand Chin Tap',
    step1: 'Make a "W" shape with your three middle fingers upright.',
    step2: 'Tap the index finger gently against your chin twice.',
    meaning: 'Essential liquid needed by seeds to germinate and plants to make food.' },
  { id: 'sun', word: 'Sun / Sunlight', emoji: '☀️', graphic: '☀️✨', gestureName: 'Shining Circle Gesture',
    step1: 'Draw a circle in the air above your head with your index finger.',
    step2: 'Open both palms outwards and spread fingers down to represent warm sun rays.',
    meaning: 'Provides warmth and light energy for seeds to germinate and leaves to perform photosynthesis.' },
  { id: 'root', word: 'Root', emoji: '🌳', graphic: '🪨🌱', gestureName: 'Downwards Spreading Fingers',
    step1: 'Hold your left forearm horizontally representing ground soil level.',
    step2: 'Point right fingers downwards below the left arm, wiggling fingers to show spreading roots.',
    meaning: 'The underground anchor of a plant that absorbs water and dissolved minerals.' },
  { id: 'leaf', word: 'Leaf', emoji: '🍃', graphic: '🌿🍃', gestureName: 'Fluttering Leaf Gesture',
    step1: 'Touch the base of your right palm to the left wrist.',
    step2: 'Gently sway your right hand like a leaf fluttering in a pleasant breeze.',
    meaning: 'The green food factory of the plant, containing chlorophyll.' },
  { id: 'flower', word: 'Flower', emoji: '🌸', graphic: '🌷🌸', gestureName: 'Blooming Fingers Gesture',
    step1: 'Bring all five fingertips of one hand together like a closed bud.',
    step2: 'Slowly blossom the fingers outwards like petals opening in the morning sun.',
    meaning: 'The reproductive part of flowering plants that attracts pollinators and produces seeds.' },
  { id: 'fruit', word: 'Fruit', emoji: '🍎', graphic: '🍎🥭', gestureName: 'Twist at Cheek Gesture',
    step1: 'Make an "F" or pinched handshape touching your right cheek.',
    step2: 'Twist the hand slightly back and forth with a cheerful smile.',
    meaning: 'The sweet or fleshy product of a tree or plant that contains seeds.' },
  { id: 'soil', word: 'Soil', emoji: '🏔️', graphic: '🪨🌱', gestureName: 'Crumbling Soil Gesture',
    step1: 'Rub your thumb and fingers together near ground level.',
    step2: 'Simulate feeling rich, soft garden loam between your fingertips.',
    meaning: 'The top layer of earth in which plants grow, consisting of organic matter and rock particles.' },
  { id: 'farmer', word: 'Farmer', emoji: '👨‍🌾', graphic: '🚜🌾', gestureName: 'Plough & Person Gesture',
    step1: 'Hold two hands together moving forward as if guiding a plough across a field.',
    step2: 'Drop both flat hands downward along the sides to indicate "person / worker".',
    meaning: 'A person who cultivates land and grows crops for our food.' },
  { id: 'wind', word: 'Wind', emoji: '🌬️', graphic: '💨🍃', gestureName: 'Swaying Wave Gesture',
    step1: 'Raise both open palms in front of your chest facing outwards.',
    step2: 'Wave hands gently side to side while blowing a soft visual breath.',
    meaning: 'Moving air that carries lightweight, winged, or hairy seeds far away.' },
  { id: 'animal', word: 'Animal', emoji: '🐦', graphic: '🐾🐦', gestureName: 'Curved Paws Gesture',
    step1: 'Place fingertips of both curved hands on your chest near shoulders.',
    step2: 'Move elbows in and out gently like animal breathing or paws.',
    meaning: 'Living creatures that eat fruits and help disperse seeds in nature.' }
];

const ISL_DATA_C4_CH1 = [
  { id: 'nutrients', word: 'Nutrients', emoji: '🍎', graphic: '🍎🥛🍞', gestureName: 'Tiny Parts Gesture',
    step1: 'Pinch the fingertips of both hands together like holding tiny grains.',
    step2: 'Bring both pinched hands towards your chest, showing these are inside food.',
    meaning: 'Tiny parts in food that help us grow and stay strong.' },
  { id: 'carbohydrates', word: 'Carbohydrates', emoji: '⚡', graphic: '🍚⚡', gestureName: 'Energy Bolt Gesture',
    step1: 'Make a fist and place it over your heart (energy source).',
    step2: 'Flick your fingers outward like a spark travelling down your arm.',
    meaning: 'Energy-giving nutrient found in rice, roti, potato, and sugar.' },
  { id: 'fats', word: 'Fats', emoji: '🧈', graphic: '🧈🫙', gestureName: 'Layer / Blanket Gesture',
    step1: 'Place one flat palm over the back of the other hand.',
    step2: 'Smooth both palms over your shoulders as if wrapping a warm blanket.',
    meaning: 'Nutrient that stores energy and keeps the body warm — found in ghee, oil, butter.' },
  { id: 'proteins', word: 'Proteins', emoji: '💪', graphic: '💪🥚', gestureName: 'Muscle Building Gesture',
    step1: 'Point to your upper arm with the opposite index finger.',
    step2: 'Flex your arm slightly and stack your fingers upward like building blocks.',
    meaning: 'Body-building nutrient that repairs muscles and helps us grow — dal, eggs, milk.' },
  { id: 'vitamins', word: 'Vitamins', emoji: '🛡️', graphic: '🍊🛡️', gestureName: 'Shield Gesture',
    step1: 'Cross both forearms in front of your chest like a shield.',
    step2: 'Gently push the shield outward to show protection from sickness.',
    meaning: 'Protective nutrients found in fruits and vegetables.' },
  { id: 'minerals', word: 'Minerals', emoji: '💎', graphic: '💎🦴', gestureName: 'Gem Gesture',
    step1: 'Tap your front upper teeth with your index finger.',
    step2: 'Draw a small sparkling diamond in the air with both index fingers.',
    meaning: 'Protective nutrients like calcium and iron needed for strong bones and teeth.' },
  { id: 'water', word: 'Water', emoji: '💧', graphic: '🌊💧', gestureName: 'W-Hand Chin Tap',
    step1: 'Make a "W" shape with three middle fingers upright.',
    step2: 'Tap the index finger against your chin twice.',
    meaning: 'Essential liquid that makes up most of our body — drink 6–8 glasses daily.' },
  { id: 'balanced-diet', word: 'Balanced Diet', emoji: '⚖️', graphic: '⚖️🍽️', gestureName: 'Scale Gesture',
    step1: 'Hold both palms flat like the pans of a weighing scale.',
    step2: 'Rock them gently up and down as if balancing them equally.',
    meaning: 'Eating the right amount of all nutrients every day.' },
  { id: 'roughage', word: 'Roughage / Fibre', emoji: '🧹', graphic: '🥦🧹', gestureName: 'Sweeping Gesture',
    step1: 'Hold one flat palm out and sweep the other palm across it.',
    step2: 'Point to your stomach and make a downward sweeping motion.',
    meaning: 'Parts of food that clean our stomach and push waste out — vegetables and whole grains.' },
  { id: 'preservation', word: 'Preservation', emoji: '🥫', graphic: '🥫❄️', gestureName: 'Protect & Save Gesture',
    step1: 'Cup both hands protectively around an imaginary object.',
    step2: 'Tap your wrist where a watch sits, meaning "save for later".',
    meaning: 'Ways to save food so it does not spoil — refrigeration, drying, pickling, canning.' },
  { id: 'hygiene', word: 'Hygiene', emoji: '🧼', graphic: '🧼💧', gestureName: 'Washing Gesture',
    step1: 'Rub both palms together as if lathering soap.',
    step2: 'Rinse both palms under imaginary water and shake off.',
    meaning: 'Keeping ourselves and our food clean to stay healthy.' },
  { id: 'chewing', word: 'Chewing', emoji: '😬', graphic: '🍎😬', gestureName: 'Teeth Crunch Gesture',
    step1: 'Point to your teeth with your index finger.',
    step2: 'Tap your fingers together in a quick chomping motion with your mouth closed.',
    meaning: 'Biting food into small, soft pieces with the help of teeth and saliva.' }
];

const ISL_DATA_C4_CH2 = [
  { id: 'teeth', word: 'Teeth', emoji: '🦷', graphic: '🦷😁', gestureName: 'Tap Teeth Gesture',
    step1: 'Tap your front upper teeth with your index finger.',
    step2: 'Smile broadly and point to your full row of teeth.',
    meaning: 'Hard white structures in the mouth used for biting and chewing food.' },
  { id: 'milk-teeth', word: 'Milk Teeth', emoji: '👶', graphic: '👶🦷', gestureName: 'Baby Teeth Gesture',
    step1: 'Rock your arms as if holding a baby.',
    step2: 'Tap your teeth and hold up both hands showing "20" with fingers.',
    meaning: 'The first set of 20 teeth that appear in young children around 6 months of age.' },
  { id: 'permanent-teeth', word: 'Permanent Teeth', emoji: '🧍', graphic: '🧍🦷', gestureName: 'Adult Teeth Gesture',
    step1: 'Drop both palms downward along your sides (meaning "adult / grown person").',
    step2: 'Tap your teeth and flash "32" with fingers to show the full adult count.',
    meaning: 'The second set of 32 teeth that replaces milk teeth and lasts for life if cared for.' },
  { id: 'enamel', word: 'Enamel', emoji: '💎', graphic: '💎🦷', gestureName: 'Hard Shell Gesture',
    step1: 'Knock your knuckles on your front tooth to show hardness.',
    step2: 'Trace a white sparkling diamond shape in the air.',
    meaning: 'The hardest outer white layer of the tooth.' },
  { id: 'pulp', word: 'Pulp', emoji: '🩸', graphic: '🩸🦷', gestureName: 'Inner Heart Gesture',
    step1: 'Point to the centre of your tooth with your index finger.',
    step2: 'Feel your pulse on your wrist with two fingers (meaning "nerves and blood").',
    meaning: 'The soft centre inside a tooth that contains nerves and blood vessels.' },
  { id: 'gums', word: 'Gums', emoji: '🩷', graphic: '🩷🦷', gestureName: 'Pink Frame Gesture',
    step1: 'Outline your tooth with both palms cupped around it.',
    step2: 'Point to the pink area above your upper teeth with your index finger.',
    meaning: 'The pink tissue that holds the teeth tightly in place.' },
  { id: 'plaque', word: 'Plaque', emoji: '🟡', graphic: '🟡🦷', gestureName: 'Sticky Layer Gesture',
    step1: 'Rub your index finger along your gum line slowly.',
    step2: 'Press your fingertip and thumb together and pull apart as if it is sticky.',
    meaning: 'A sticky layer of germs that builds up on dirty teeth.' },
  { id: 'cavity', word: 'Cavity', emoji: '🕳️', graphic: '🦷🕳️', gestureName: 'Hole Gesture',
    step1: 'Point to a tooth and make a small circle with your thumb and index finger.',
    step2: 'Tap the middle of the circle and frown.',
    meaning: 'A hole in the tooth caused by decay.' },
  { id: 'microbe', word: 'Microbe', emoji: '🔬', graphic: '🔬🦠', gestureName: 'Tiny Creature Gesture',
    step1: 'Pretend to look through a microscope with your hands.',
    step2: 'Pinch your fingers very close together to show something extremely tiny.',
    meaning: 'Tiny living things that can only be seen with a microscope.' },
  { id: 'bacteria', word: 'Bacteria', emoji: '🦠', graphic: '🦠🥛', gestureName: 'Rod Shape Gesture',
    step1: 'Point both index fingers forward to show a small rod shape.',
    step2: 'Wiggle them side to side while pointing to a glass of curd.',
    meaning: 'Microbes that cause diseases like typhoid, but also help turn milk into curd.' },
  { id: 'fungi', word: 'Fungi', emoji: '🍄', graphic: '🍄🍞', gestureName: 'Mushroom Shape Gesture',
    step1: 'Make a rounded fist (like a mushroom cap) with your palm down.',
    step2: 'Point to your forearm to suggest skin (meaning ringworm).',
    meaning: 'Microbes like yeast that make bread soft, but some cause skin infections like ringworm.' },
  { id: 'virus', word: 'Virus', emoji: '🤧', graphic: '🤧🦠', gestureName: 'Sneeze Gesture',
    step1: 'Cover your nose with your palm and mime a sneeze.',
    step2: 'Point to your throat and shiver slightly (fever).',
    meaning: 'Microbes that cause the flu, cold, and polio.' },
  { id: 'protozoa', word: 'Protozoa', emoji: '🦟', graphic: '🦟🩸', gestureName: 'Mosquito Bite Gesture',
    step1: 'Mime a mosquito landing on your arm.',
    step2: 'Tap the back of your hand as if swatting it.',
    meaning: 'Microbes that cause diseases like malaria, carried by mosquitoes.' },
  { id: 'digestion', word: 'Digestion', emoji: '🍎→⚡', graphic: '🍎➡️⚡', gestureName: 'Break Down Gesture',
    step1: 'Mime putting a piece of food in your mouth.',
    step2: 'Point to your stomach and let both hands spread outwards like energy flowing through the body.',
    meaning: 'The process of breaking down food into tiny parts the body can use.' },
  { id: 'saliva', word: 'Saliva', emoji: '💧', graphic: '💧👄', gestureName: 'Droplet in Mouth Gesture',
    step1: 'Point to your mouth with your index finger.',
    step2: 'Make a small droplet shape by pinching thumb and index and pulling downward.',
    meaning: 'The liquid in the mouth that softens food and helps chewing.' }
];

const ISL_REGISTRY = {
  class5: { ch1: ISL_DATA_C5_CH1 },
  class4: { ch1: ISL_DATA_C4_CH1, ch2: ISL_DATA_C4_CH2 }
};

let activeIslData = ISL_DATA_C5_CH1;

/* =====================================================
   CHAPTER PREVIEWS (Class 5 only)
   ===================================================== */
const CHAPTER_PREVIEWS = {
  class5: {
    ch2: { title: 'Chapter 2: Food and Health', emoji: '🍎',
      desc: 'Coming soon! This chapter explores how nutrition, hygiene, and exercise keep our bodies disease-free and energetic.',
      topics: ['🍎 Carbohydrates, Fats & Proteins for Energy and Growth',
               '🥗 Vitamins & Minerals — Protective Nutrients',
               '🥛 Water & Roughage for Healthy Digestion',
               '🦠 Deficiency Diseases: Night Blindness, Scurvy, Rickets & Anemia',
               '🧼 Cleanliness, Hygiene & Communicable Disease Prevention'] },
    ch3: { title: 'Chapter 3: Life of Animals', emoji: '🦁',
      desc: 'Coming soon! Learn about animal habitats, breathing mechanisms, feeding adaptations, and long-distance migration.',
      topics: ['🌍 Terrestrial, Aquatic, Amphibious & Arboreal Habitats',
               '🫁 Breathing in Animals: Gills, Spiracles, Moist Skin & Lungs',
               '🦷 Herbivores, Carnivores, Omnivores & Rodents',
               '🦅 Bird Wings, Insect Legs & Fish Fins for Movement',
               '❄️ Migration of Monarch Butterflies & Arctic Terns'] },
    ch4: { title: 'Chapter 4: Skeletal & Muscular System', emoji: '🦴',
      desc: 'Coming soon! Discover the 206 bones in our human framework, joints that allow us to bend, and muscles that give us strength.',
      topics: ['💀 Skull, Backbone (Spine), Ribcage & Limbs',
               '🦴 Bone Marrow & Red Blood Cell Production',
               '🔄 Moveable Joints: Ball & Socket, Hinge, Pivot, Gliding',
               '💪 Voluntary vs Involuntary Muscles (Heart Muscle)',
               '🧘 Correct Posture & Bone Health'] },
    ch5: { title: 'Chapter 5: Nervous System & Sense Organs', emoji: '🧠',
      desc: 'Coming soon! The master control centre of our body: Brain, Spinal Cord, Nerves, and our 5 vital sense organs.',
      topics: ['🧠 Cerebrum (Thinking), Cerebellum (Balance), Medulla (Vitals)',
               '⚡ Sensory, Motor, and Mixed Nerves',
               '🔥 Reflex Actions and the Spinal Cord',
               '👁️ Eyes, Ears, Nose, Tongue & Skin Care',
               '🤟 Communication & Visual Perception for Deaf Individuals'] }
  },
  class4: {}
};

/* =====================================================
   MATCHING-GAME DATA (per chapter)
   ===================================================== */
const MATCH_GAME_C5_CH1 = {
  seeds: [
    { id: 'dandelion', label: 'Dandelion',  emoji: '🌼', match: 'wind'   },
    { id: 'maple',     label: 'Maple Seed', emoji: '🍁', match: 'wind'   },
    { id: 'coconut',   label: 'Coconut',    emoji: '🥥', match: 'water'  },
    { id: 'lotus',     label: 'Lotus Pod',  emoji: '🪷', match: 'water'  },
    { id: 'mango',     label: 'Mango',      emoji: '🥭', match: 'animal' },
    { id: 'pea',       label: 'Pea Pod',    emoji: '🫛', match: 'burst'  }
  ],
  zones: [
    { key: 'wind',   label: '🌬️ Wind Dispersal',   limit: 2 },
    { key: 'water',  label: '🌊 Water Dispersal',  limit: 2 },
    { key: 'animal', label: '🐦 Animal Dispersal', limit: 1 },
    { key: 'burst',  label: '💥 Bursting Open',    limit: 1 }
  ]
};

const MATCH_GAME_C4_CH1 = {
  seeds: [
    { id: 'rice',   label: 'Rice / Roti',   emoji: '🍚', match: 'carbs'    },
    { id: 'potato', label: 'Potato',        emoji: '🥔', match: 'carbs'    },
    { id: 'ghee',   label: 'Ghee / Oil',    emoji: '🧈', match: 'fats'     },
    { id: 'nuts',   label: 'Nuts / Butter', emoji: '🥜', match: 'fats'     },
    { id: 'dal',    label: 'Dal / Eggs',    emoji: '🥚', match: 'protein'  },
    { id: 'milk',   label: 'Milk / Paneer', emoji: '🥛', match: 'protein'  },
    { id: 'fruit',  label: 'Fruits',        emoji: '🍊', match: 'vitamins' },
    { id: 'veg',    label: 'Vegetables',    emoji: '🥦', match: 'vitamins' }
  ],
  zones: [
    { key: 'carbs',    label: '⚡ Energy-Giving', limit: 2 },
    { key: 'fats',     label: '🧈 Stored Energy', limit: 2 },
    { key: 'protein',  label: '💪 Body-Building', limit: 2 },
    { key: 'vitamins', label: '🛡️ Protective',   limit: 2 }
  ]
};

const MATCH_GAME_C4_CH2 = {
  seeds: [
    { id: 'incisors',  label: 'Incisors',  emoji: '✂️', match: 'cutting'  },
    { id: 'canines',   label: 'Canines',   emoji: '🗡️', match: 'tearing'  },
    { id: 'premolars', label: 'Premolars', emoji: '🔨', match: 'crushing' },
    { id: 'molars',    label: 'Molars',    emoji: '⚙️', match: 'grinding' }
  ],
  zones: [
    { key: 'cutting',  label: '✂️ Biting & Cutting',    limit: 1 },
    { key: 'tearing',  label: '🗡️ Tearing Food',        limit: 1 },
    { key: 'crushing', label: '🔨 Crushing & Cracking', limit: 1 },
    { key: 'grinding', label: '⚙️ Grinding & Chewing',  limit: 1 }
  ]
};

let activeMatchData = null;

/* =====================================================
   1. THEME & ACCESSIBILITY
   ===================================================== */
function initThemeAndAccessibility() {
  const themeBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeToggleIcon');
  const fontBtn = document.getElementById('fontSizeBtn');
  const fontLabel = document.getElementById('fontSizeLabel');

  applyTheme(localStorage.getItem('lwe_theme') || 'light');
  applyFontSize(localStorage.getItem('lwe_font_size') || 'normal');

  if (themeBtn) themeBtn.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(cur === 'dark' ? 'high-contrast' : cur === 'high-contrast' ? 'light' : 'dark');
  });

  if (fontBtn) fontBtn.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-font-size') || 'normal';
    applyFontSize(cur === 'large' ? 'xlarge' : cur === 'xlarge' ? 'normal' : 'large');
  });

  function applyTheme(theme) {
    if (theme === 'light') { document.documentElement.removeAttribute('data-theme'); if (themeIcon) themeIcon.textContent = '🌙'; }
    else if (theme === 'dark') { document.documentElement.setAttribute('data-theme', 'dark'); if (themeIcon) themeIcon.textContent = '☀️'; }
    else { document.documentElement.setAttribute('data-theme', 'high-contrast'); if (themeIcon) themeIcon.textContent = '⚡'; }
    localStorage.setItem('lwe_theme', theme);
  }

  function applyFontSize(size) {
    if (size === 'normal') { document.documentElement.removeAttribute('data-font-size'); if (fontLabel) fontLabel.textContent = 'A⁺'; }
    else if (size === 'large') { document.documentElement.setAttribute('data-font-size', 'large'); if (fontLabel) fontLabel.textContent = 'A⁺⁺'; }
    else { document.documentElement.setAttribute('data-font-size', 'xlarge'); if (fontLabel) fontLabel.textContent = 'A⁻'; }
    localStorage.setItem('lwe_font_size', size);
  }
}

/* =====================================================
   2. CLASS SELECTOR + RENDER
   ===================================================== */
function initClassSelector() {
  document.querySelectorAll('.class-card[data-class]').forEach(card => {
    card.addEventListener('click', () => {
      const cls = card.getAttribute('data-class');
      if (!CLASS_CONFIG[cls]) return;
      currentClass = cls;
      localStorage.setItem('lwe_current_class', cls);
      renderClassContent();
      navigateTo('home');
      restoreSavedProgress();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

function renderClassContent() {
  const cfg = CLASS_CONFIG[currentClass];

  // ---- Home unit grid ----
  const grid = document.getElementById('homeUnitsGrid');
  if (grid) {
    grid.innerHTML = '';
    cfg.chapters.forEach((ch, idx) => {
      const card = document.createElement('div');
      card.className = 'unit-card' + (ch.status === 'preview' ? ' chapter-preview-card' : '');
      if (ch.status === 'preview') {
        card.setAttribute('data-chapter', ch.id);
        card.style.cursor = 'pointer';
      } else {
        card.setAttribute('data-page', `${currentClass}-${ch.id}`);
      }
      card.innerHTML = `
        <span class="unit-card__icon">${ch.emoji}</span>
        <div class="unit-card__number">Chapter ${idx + 1}</div>
        <div class="unit-card__title">${ch.title}</div>
        ${ch.status === 'preview'
          ? `<span class="unit-card__badge" style="background:rgba(0,0,0,.06);color:var(--text-secondary);margin-top:12px;">Coming Soon • Tap Preview</span>`
          : `<div class="progress-bar" style="margin-top:16px;"><div class="progress-bar__fill" style="width:0%;"></div></div>`}
      `;
      if (ch.status !== 'preview') {
        card.addEventListener('click', () => navigateTo(`${currentClass}-${ch.id}`));
      }
      grid.appendChild(card);
    });
  }

  // ---- Sidebar chapter links ----
  const navList = document.getElementById('sidebarNavList');
  if (navList) {
    navList.innerHTML = '';
    cfg.chapters.forEach((ch, idx) => {
      const li = document.createElement('li');
      const isPreview = ch.status === 'preview';
      li.innerHTML = `
        <a href="#"
           class="sidebar__link${isPreview ? ' chapter-preview-link' : ''}"
           ${isPreview
             ? `data-chapter="${ch.id}"`
             : `data-page="${currentClass}-${ch.id}" id="nav-${currentClass}-${ch.id}"`}>
          <span class="sidebar__link-icon">${ch.emoji}</span>
          <span class="sidebar__link-text">${idx + 1}. ${ch.title}</span>
          <span class="sidebar__progress">${isPreview ? '🔒' : '●'}</span>
        </a>`;
      if (!isPreview) {
        const a = li.querySelector('a');
        a.addEventListener('click', (e) => {
          e.preventDefault();
          navigateTo(`${currentClass}-${ch.id}`);
        });
      }
      navList.appendChild(li);
    });
  }

  document.querySelectorAll('.class-card[data-class]').forEach(card => {
    card.classList.toggle('active', card.getAttribute('data-class') === currentClass);
  });
}

/* =====================================================
   3. NAVIGATION
   ===================================================== */
function initNavigation() {
  const menuBtn = document.getElementById('menuBtn');
  const sidebar = document.getElementById('sidebar');
  const headerLogo = document.getElementById('headerLogo');

  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('open');
    });
  }

  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 1024 && sidebar && menuBtn) {
      if (!sidebar.contains(e.target) && !menuBtn.contains(e.target) && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
      }
    }
  });

  if (headerLogo) headerLogo.addEventListener('click', () => navigateTo('home'));
}

function navigateTo(pageId) {
  if (!pageId) return;
  if (pageId.startsWith('ch')) pageId = `${currentClass}-${pageId}`;

  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  document.querySelectorAll('.sidebar__link').forEach(l => l.classList.remove('active'));

  const target = document.getElementById(`page-${pageId}`);
  if (!target) { console.warn('Page not found:', pageId); return; }

  const [cls, ch] = pageId.split('-');
  if (CLASS_CONFIG[cls] && cls !== currentClass) {
    currentClass = cls;
    localStorage.setItem('lwe_current_class', cls);
    renderClassContent();
  }

  // Bind ISL data
  if (cls === 'class5' && ch === 'ch1') activeIslData = ISL_DATA_C5_CH1;
  else if (cls === 'class4' && ch === 'ch1') activeIslData = ISL_DATA_C4_CH1;
  else if (cls === 'class4' && ch === 'ch2') activeIslData = ISL_DATA_C4_CH2;

  // Bind matching-game data
  if (cls === 'class5' && ch === 'ch1') activeMatchData = MATCH_GAME_C5_CH1;
  else if (cls === 'class4' && ch === 'ch1') activeMatchData = MATCH_GAME_C4_CH1;
  else if (cls === 'class4' && ch === 'ch2') activeMatchData = MATCH_GAME_C4_CH2;
  else activeMatchData = null;

  target.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLink = document.getElementById(`nav-${pageId}`);
  if (navLink) navLink.classList.add('active');

  const sidebar = document.getElementById('sidebar');
  if (sidebar && sidebar.classList.contains('open')) sidebar.classList.remove('open');

  // Reset section tabs to first tab
  const firstTab = target.querySelector('.section-tab');
  if (firstTab && !firstTab.classList.contains('active')) firstTab.click();

  // Reset fade elements
  document.querySelectorAll('.fade-in').forEach(el => el.classList.remove('visible'));
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.88) {
        el.classList.add('visible');
      }
    });
  }, 100);

  // Build the matching game for this chapter (no-op if none)
  initMatchingGame();
}

/* =====================================================
   4. SECTION TABS (scoped per page)
   ===================================================== */
function initTabs() {
  document.querySelectorAll('.page').forEach(page => {
    const tabs = page.querySelectorAll('.section-tab');
    const sections = page.querySelectorAll('.lesson-section');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
        tab.classList.add('active');

        const secId = tab.getAttribute('data-section');
        const sec = page.querySelector(`.lesson-section[data-section="${secId}"]`);
        if (sec) {
          sec.classList.add('active');
          sec.querySelectorAll('.fade-in').forEach(el => {
            el.classList.remove('visible');
            setTimeout(() => el.classList.add('visible'), 50);
          });
        }
      });
    });
  });
}

/* =====================================================
   5. SCROLL EFFECTS
   ===================================================== */
function initScrollEffects() {
  const header = document.getElementById('header');
  const fadeElements = document.querySelectorAll('.fade-in');

  const checkScroll = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 20);
    const wh = window.innerHeight || document.documentElement.clientHeight;
    fadeElements.forEach(el => {
      if (el.getBoundingClientRect().top <= wh * 0.88) el.classList.add('visible');
    });
  };

  window.addEventListener('scroll', checkScroll, { passive: true });
  setTimeout(checkScroll, 100);
}

/* =====================================================
   6. ISL MODAL
   ===================================================== */
let currentIslIndex = 0;

function initISLModalSystem() {
  const modal = document.getElementById('islModal');
  if (!modal) return;

  const closeBtn = document.getElementById('closeIslModal');
  const prevBtn = document.getElementById('islPrevBtn');
  const nextBtn = document.getElementById('islNextBtn');

  function updateModalContent(index) {
    if (!activeIslData.length) return;
    if (index < 0) index = activeIslData.length - 1;
    if (index >= activeIslData.length) index = 0;
    currentIslIndex = index;
    const item = activeIslData[index];

    document.getElementById('islModalEmoji').textContent = item.emoji;
    document.getElementById('islModalTitle').textContent = item.word;
    document.getElementById('islModalGraphic').textContent = item.graphic;
    document.getElementById('islModalGesture').textContent = item.gestureName;
    document.getElementById('islModalStep1').textContent = item.step1;
    document.getElementById('islModalStep2').textContent = item.step2;
    document.getElementById('islModalMeaning').innerHTML = `<strong>Scientific Meaning:</strong> ${item.meaning}`;
    document.getElementById('islCounter').textContent = `${currentIslIndex + 1} / ${activeIslData.length}`;
  }

  document.addEventListener('click', (e) => {
    const card = e.target.closest('.isl-card');
    if (!card) return;
    const id = card.getAttribute('data-isl');
    const idx = activeIslData.findIndex(i => i.id === id);
    updateModalContent(idx !== -1 ? idx : 0);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  if (closeBtn) closeBtn.addEventListener('click', () => {
    modal.classList.remove('active'); document.body.style.overflow = '';
  });
  if (prevBtn) prevBtn.addEventListener('click', () => updateModalContent(currentIslIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => updateModalContent(currentIslIndex + 1));

  modal.addEventListener('click', (e) => { if (e.target === modal) { modal.classList.remove('active'); document.body.style.overflow = ''; } });
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') { modal.classList.remove('active'); document.body.style.overflow = ''; }
    if (e.key === 'ArrowLeft') updateModalContent(currentIslIndex - 1);
    if (e.key === 'ArrowRight') updateModalContent(currentIslIndex + 1);
  });
}

/* =====================================================
   7. CHAPTER PREVIEW MODAL
   ===================================================== */
function initChapterPreviewModal() {
  const modal = document.getElementById('chapterModal');
  if (!modal) return;
  const closeBtn = document.getElementById('closeChModal');
  const confirmBtn = document.getElementById('closeChModalBtn');

  function openPreview(chId) {
    const data = (CHAPTER_PREVIEWS[currentClass] || {})[chId];
    if (!data) return;
    document.getElementById('chModalEmoji').textContent = data.emoji;
    document.getElementById('chModalTitle').textContent = data.title;
    document.getElementById('chModalDesc').textContent = data.desc;
    const ul = document.getElementById('chModalTopics');
    ul.innerHTML = '';
    data.topics.forEach(t => { const li = document.createElement('li'); li.textContent = t; ul.appendChild(li); });
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closePreview() { modal.classList.remove('active'); document.body.style.overflow = ''; }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.chapter-preview-link, .chapter-preview-card');
    if (!trigger) return;
    const chId = trigger.getAttribute('data-chapter');
    if (chId) { e.preventDefault(); openPreview(chId); }
  });

  if (closeBtn) closeBtn.addEventListener('click', closePreview);
  if (confirmBtn) confirmBtn.addEventListener('click', closePreview);
  modal.addEventListener('click', (e) => { if (e.target === modal) closePreview(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('active')) closePreview(); });
}

/* =====================================================
   8. MATCHING GAME (data-driven, safe to re-run)
   ===================================================== */
function initMatchingGame() {
  const activePage = Array.from(document.querySelectorAll('.page'))
    .find(p => p.style.display !== 'none');
  if (!activePage || !activeMatchData) return;

  const gameRoot = activePage.querySelector('.match-game');
  if (!gameRoot) return;

  const bank = activePage.querySelector('#seedBank');
  const dropZones = activePage.querySelectorAll('.drop-zone');
  const scoreEl = activePage.querySelector('#matchScoreCount');
  const celebration = activePage.querySelector('#matchCelebration');
  const resetBtn = activePage.querySelector('#resetMatchBtn');
  if (!bank || !dropZones.length) return;

  // Bind once per chapter (identified by a data flag on the root)
  if (gameRoot.dataset.bound !== 'true') {
    gameRoot._resetFn = bindMatchHandlers(activePage, gameRoot, bank, dropZones, scoreEl, celebration, resetBtn);
    gameRoot.dataset.bound = 'true';
  }

  // Rebuild content every time we visit
  buildMatchContent(activePage, bank, dropZones);
  if (typeof gameRoot._resetFn === 'function') gameRoot._resetFn();
}

function buildMatchContent(activePage, bank, dropZones) {
  bank.innerHTML = '';
  dropZones.forEach(z => {
    const items = z.querySelector('.drop-zone__items');
    if (items) items.innerHTML = '';
    z.classList.remove('filled', 'highlight-target', 'drag-over');
  });

  activeMatchData.seeds.forEach(s => {
    const el = document.createElement('div');
    el.className = 'drag-item';
    el.setAttribute('draggable', 'true');
    el.setAttribute('data-match', s.match);
    el.innerHTML = `<span class="drag-item__emoji">${s.emoji}</span><span class="drag-item__label">${s.label}</span>`;
    bank.appendChild(el);
  });

  activeMatchData.zones.forEach(z => {
    const el = activePage.querySelector(`.drop-zone[data-accept="${z.key}"]`);
    if (!el) return;
    const cnt = el.querySelector('.drop-zone__count');
    if (cnt) cnt.textContent = `0/${z.limit}`;
  });
}

function bindMatchHandlers(activePage, gameRoot, bank, dropZones, scoreEl, celebration, resetBtn) {
  let selectedSeed = null;
  let draggedItem = null;
  let matchedCount = 0;

  const limitOf = key => (activeMatchData.zones.find(z => z.key === key) || {}).limit ?? 99;
  const countOf = key => {
    const el = activePage.querySelector(`.drop-zone[data-accept="${key}"] .drop-zone__count`);
    return el ? (parseInt(el.textContent.split('/')[0], 10) || 0) : 0;
  };
  const bump = key => {
    const el = activePage.querySelector(`.drop-zone[data-accept="${key}"] .drop-zone__count`);
    if (el) el.textContent = `${countOf(key) + 1}/${limitOf(key)}`;
  };

  // ---- reset ----
  function resetGame() {
    matchedCount = 0;
    selectedSeed = null;
    draggedItem = null;
    if (scoreEl) scoreEl.textContent = '0';
    if (celebration) celebration.style.display = 'none';

    dropZones.forEach(z => {
      z.classList.remove('filled', 'drag-over', 'highlight-target');
      const key = z.getAttribute('data-accept');
      const cnt = z.querySelector('.drop-zone__count');
      if (cnt) cnt.textContent = `0/${limitOf(key)}`;
      const items = z.querySelector('.drop-zone__items');
      if (items) items.innerHTML = '';
    });

    activePage.querySelectorAll('.drag-item').forEach(seed => {
      seed.setAttribute('draggable', 'true');
      seed.classList.remove('selected');
      seed.style.cssText = '';
      bank.appendChild(seed);
    });
  }

  // ---- match ----
  function executeMatch(seedEl, zoneEl) {
    if (!seedEl || !zoneEl || seedEl.getAttribute('draggable') === 'false') return;
    const exp = zoneEl.getAttribute('data-accept');
    const act = seedEl.getAttribute('data-match');

    if (exp === act && countOf(exp) < limitOf(exp)) {
      const container = zoneEl.querySelector('.drop-zone__items') || zoneEl;
      container.appendChild(seedEl);
      seedEl.classList.remove('selected');
      seedEl.setAttribute('draggable', 'false');
      seedEl.style.cursor = 'default';
      seedEl.style.border = '2px solid var(--color-primary)';
      seedEl.style.background = '#eafaf1';

      bump(exp);
      if (countOf(exp) >= limitOf(exp)) zoneEl.classList.add('filled');

      seedEl.style.transform = 'scale(1.15)';
      setTimeout(() => seedEl.style.transform = 'scale(1)', 200);

      matchedCount++;
      if (scoreEl) scoreEl.textContent = matchedCount;
      selectedSeed = null;
      activePage.querySelectorAll('.drop-zone').forEach(z => z.classList.remove('highlight-target'));

      if (matchedCount === activeMatchData.seeds.length) {
        if (celebration) celebration.style.display = 'block';
        triggerConfetti();
      }
    } else {
      seedEl.style.transform = 'translateX(-12px)';
      seedEl.style.borderColor = 'var(--color-accent-red)';
      setTimeout(() => {
        seedEl.style.transform = 'translateX(12px)';
        setTimeout(() => {
          seedEl.style.transform = 'translateX(0)';
          seedEl.style.borderColor = '';
        }, 120);
      }, 120);
    }
  }

  // ---- bank: delegated listeners survive rebuilds ----
  bank.addEventListener('click', (e) => {
    const seed = e.target.closest('.drag-item');
    if (!seed) return;
    if (seed.getAttribute('draggable') === 'false') return;

    if (selectedSeed === seed) {
      seed.classList.remove('selected');
      selectedSeed = null;
      activePage.querySelectorAll('.drop-zone').forEach(z => z.classList.remove('highlight-target'));
    } else {
      activePage.querySelectorAll('.drag-item').forEach(s => s.classList.remove('selected'));
      seed.classList.add('selected');
      selectedSeed = seed;
      activePage.querySelectorAll('.drop-zone').forEach(z => z.classList.add('highlight-target'));
    }
  });

  bank.addEventListener('dragstart', (e) => {
    const seed = e.target.closest('.drag-item');
    if (!seed) return;
    draggedItem = seed;
    setTimeout(() => seed.style.opacity = '0.5', 0);
  });

  bank.addEventListener('dragend', (e) => {
    const seed = e.target.closest('.drag-item');
    if (!seed) return;
    setTimeout(() => { seed.style.opacity = '1'; draggedItem = null; }, 0);
  });

  // ---- drop zones: static, bound once ----
  dropZones.forEach(zone => {
    zone.addEventListener('click', () => { if (selectedSeed) executeMatch(selectedSeed, zone); });
    zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      if (draggedItem) executeMatch(draggedItem, zone);
    });
  });

  // ---- reset ----
  if (resetBtn) resetBtn.addEventListener('click', resetGame);

  return resetGame;
}

/* =====================================================
   9. VOCAB FLASHCARDS (delegated)
   ===================================================== */
function initInteractiveFlashcards() {
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.vocab-card');
    if (!card) return;
    const all = document.querySelectorAll('.vocab-card');
    all.forEach(c => {
      if (c !== card) { c.style.borderColor = 'transparent'; c.style.transform = 'scale(1)'; }
    });
    const isFocused = card.style.borderColor === 'var(--color-primary)';
    if (isFocused) { card.style.borderColor = 'transparent'; card.style.transform = 'scale(1)'; }
    else { card.style.borderColor = 'var(--color-primary)'; card.style.transform = 'scale(1.03)'; }
  });
}

/* =====================================================
   10. QUIZ (scoped via [data-quiz])
   ===================================================== */
function initQuiz() {
  document.querySelectorAll('[data-quiz]').forEach(scope => {
    const options = scope.querySelectorAll('.quiz-option');
    const checkBtn = scope.querySelector('#checkQuizBtn');
    const retryBtn = scope.querySelector('#retryQuizBtn');
    const scoreContainer = scope.querySelector('#quizScore');
    const scoreNum = scope.querySelector('#quizScoreNum');
    const scoreStars = scope.querySelector('#quizStars');
    const total = parseInt(scope.getAttribute('data-total') || '7', 10);
    const storageKey = scope.getAttribute('data-quiz');

    let userAnswers = {};

    options.forEach(opt => {
      opt.addEventListener('click', () => {
        if (checkBtn && checkBtn.disabled) return;
        const qId = opt.getAttribute('data-q');
        scope.querySelectorAll(`.quiz-option[data-q="${qId}"]`).forEach(s => s.classList.remove('selected'));
        opt.classList.add('selected');
        userAnswers[qId] = opt;
      });
    });

    if (checkBtn) {
      checkBtn.addEventListener('click', () => {
        if (Object.keys(userAnswers).length < total) {
          alert(`Please answer all ${total} questions before checking! 😊`);
          return;
        }
        checkBtn.disabled = true;
        let correct = 0;

        Object.keys(userAnswers).forEach(qId => {
          const sel = userAnswers[qId];
          const isCorrect = sel.getAttribute('data-correct') === 'true';
          const fb = scope.querySelector(`#${qId}-feedback`);
          const expl = scope.querySelector(`#${qId}-expl`);

          if (isCorrect) {
            sel.classList.add('correct'); correct++;
            if (fb) { fb.textContent = '✅ Correct! Great job!'; fb.className = 'quiz-feedback show correct'; }
          } else {
            sel.classList.add('incorrect');
            const co = scope.querySelector(`.quiz-option[data-q="${qId}"][data-correct="true"]`);
            if (co) co.classList.add('correct');
            if (fb) { fb.textContent = '❌ Oops! See the correct answer above.'; fb.className = 'quiz-feedback show incorrect'; }
          }
          if (expl) expl.classList.add('show');
        });

        checkBtn.style.display = 'none';
        if (scoreContainer) scoreContainer.classList.add('show');
        if (scoreNum) scoreNum.textContent = `${correct} / ${total}`;
        const pct = correct / total;
        if (scoreStars) scoreStars.textContent = pct === 1 ? '🌟🌟🌟' : pct >= 0.7 ? '⭐⭐' : pct >= 0.4 ? '⭐' : '👍';

        localStorage.setItem(`lwe_quiz_${storageKey}`, correct);
        if (pct >= 0.7) {
          localStorage.setItem(`lwe_${storageKey}_completed`, 'true');
          applyCompletionBadge(storageKey);
          triggerConfetti();
        }
      });
    }

    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        userAnswers = {};
        if (checkBtn) { checkBtn.disabled = false; checkBtn.style.display = 'inline-flex'; }
        if (scoreContainer) scoreContainer.classList.remove('show');
        options.forEach(o => o.classList.remove('selected', 'correct', 'incorrect'));
        scope.querySelectorAll('.quiz-feedback').forEach(el => el.classList.remove('show', 'correct', 'incorrect'));
        scope.querySelectorAll('.quiz-explanation').forEach(el => el.classList.remove('show'));
        scope.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });
}

function applyCompletionBadge(storageKey) {
  const navProgress = document.querySelector(`#nav-${storageKey} .sidebar__progress`);
  if (navProgress) {
    navProgress.classList.add('completed');
    navProgress.textContent = '✓';
    navProgress.style.color = 'var(--color-primary)';
    navProgress.style.fontWeight = '900';
  }
  const cardFill = document.querySelector(`.unit-card[data-page="${storageKey}"] .progress-bar__fill`);
  if (cardFill) cardFill.style.width = '100%';
}

function restoreSavedProgress() {
  Object.keys(localStorage).forEach(k => {
    if (k.startsWith('lwe_') && k.endsWith('_completed')) {
      const storageKey = k.replace('lwe_', '').replace('_completed', '');
      applyCompletionBadge(storageKey);
    }
  });
}

/* =====================================================
   11. CONFETTI
   ===================================================== */
function triggerConfetti() {
  const container = document.getElementById('confettiContainer');
  if (!container) return;
  container.innerHTML = '';
  const colors = ['#2ecc71', '#3498db', '#f1c40f', '#e74c3c', '#9b59b6', '#e67e22', '#1abc9c'];
  for (let i = 0; i < 55; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.left = `${Math.random() * 100}vw`;
    p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    p.style.animationDuration = `${2 + Math.random() * 2}s`;
    p.style.animationDelay = `${Math.random() * 0.5}s`;
    p.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(p);
  }
  setTimeout(() => container.innerHTML = '', 4000);
}

/* =====================================================
   12. BOOT
   ===================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initThemeAndAccessibility();
  renderClassContent();
  initClassSelector();
  initNavigation();
  initTabs();
  initScrollEffects();
  initISLModalSystem();
  initChapterPreviewModal();
  initInteractiveFlashcards();
  initQuiz();
  restoreSavedProgress();
  // Note: initMatchingGame is called from navigateTo(), not here.
});
