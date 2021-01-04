let products = [
  {
    id: 1,
    title: "Psyduck",
    type: "Water",
    MRP: 8000,
    price: 6000,
    img: "https://t1.daumcdn.net/cfile/tistory/233AF54B547972030A",
    rating: '4.8',
    desc: "Psyduck is a yellow Pokémon resembling a duck or a bipedal platypus. On top of its head are three thick strands of black hair and it has a wide, flat cream-colored beak. Its eyes seem vacant and have tiny pupils. Its legs and tail are stubby, and it has cream-colored webbed feet. There are three claws on each of its hands. Psyduck is constantly stunned by its headache and is unable to think very clearly. It usually stands immobile, trying to calm its headache. However, when its headache becomes too severe, it releases tension in the form of strong psychic powers. The use of these powers produces brain waves identical to those seen in sleepers, and the Pokémon is unable to recall these episodes. Psyduck lives in freshwater lakes and small ponds, but can be seen in rivers in tropical areas as shown in Pokémon Snap.",
    stars: []
    },
  {
    id: 2,
    title: "Golduck",
    type: "Water",
    MRP: 13000,
    price: 9000,
    img: "https://t1.daumcdn.net/cfile/tistory/253BD24B5479720309",
    rating: '4.1',
    desc: "Golduck is a blue, bipedal, platypus-like Pokémon. It has red eyes, a cream-colored beak, a red gem in the center of its forehead, and four spikes on the back of its head. Its hands and feet all have three clawed digits with cream-colored webbing in-between. Its body is especially adapted to have a hydrodynamic shape, and it has a long tail that it uses as a rudder to steer. Golduck is sometimes mistaken for the Japanese monster, and physical inspiration for Golduck, the Kappa due to its bluish color, general body shape, and webbed hands and feet.",
    stars: []
  },
  {
    id: 3,
    title: "Krabby",
    type: "Water",
    MRP: 6000,
    price: 4500,
    img: "https://t1.daumcdn.net/cfile/tistory/25428C4C5480545B15",
    rating: '3.2',
    desc: "Krabby is a crustacean Pokémon with a strong outer shell protecting its small body. Its upper half is red and has its eyes and two small spikes on the top of its head. Its light tan arms are also connected to its upper body. Its lower body is light tan and doubles as its jaw with two fangs overlapping its upper body. Its hips are visible on the lower front of its body connected to its four long, thin legs. Each leg has a single, claw-like foot. The main features of Krabby's body are the two large, red pincers at the end of its arms. Krabby uses them as its main form of offense, and as a form of balance.",
    stars: []
  },
  {
    id: 4,
    title: "Kingler",
    type: "Water",
    MRP: 8000,
    price: 5000,
    img: "https://t1.daumcdn.net/cfile/tistory/2244904C5480545D12",
    rating: '4.5',
    desc: "Kingler is a crustacean Pokémon resembling a crab. Its strong shell covers the outside of its body, featuring a red upper half and a light tan lower half. Its upper half is topped with six tall, thin spikes that resemble a crown. Its light tan arms are also connected to its upper body. Its lower half doubles as its jaw with six fangs overlapping its upper body. Its two outer fangs are much larger than the inner four and are roughly half as tall as Kingler's entire body. Its hips visibly protrude from its lower body and connect to its four long, thin legs. Each leg has a single, claw-like foot. Kingler's main feature is its red pincers. Its left claw is roughly twice as large as the other and hard as steel.",
    stars: []
  },
  {
    id: 5,
    title: "Magikarp",
    type: "Water",
    MRP: 4300,
    price: 4000,
    img: "https://t1.daumcdn.net/cfile/tistory/2636B03A5485797616",
    rating: '2.3',
    desc: "Magikarp is a fish-like Pokémon with large, heavy reddish-orange scales. It has large, vacant eyes and pink lips. Its pectoral and tail fins are white. On its back is a stiff, three-peaked yellow fin, resembling a crown; there is an identical fin on its underside. It also has long barbels. The barbels are white on a female and pale-yellow on a male. A long-lived Magikarp is able to utilize its immense splashing power to leap high enough to scale mountains. It also has a strong enough immune system to survive in the most polluted of waters. However, it is usually overlooked by Trainers because of its perceived weakness: even in the heat of battle, it will do nothing but flop around. It is believed that the ancestors of Magikarp were actually much stronger than modern Magikarp, and this led scientists to research this species.",
    stars: []
  },
  {
    id: 6,
    title: "Gyarados",
    type: "Water",
    MRP: 13900,
    price: 12000,
    img: "https://t1.daumcdn.net/cfile/tistory/252BAE3A5485797826",
    rating: '4.8',
    desc: "Gyarados is a serpentine Pokémon with a long body covered in slightly overlapping scales. It is mostly blue with a yellow underbelly and a row of yellow spots down each side. Its mouth is very large and gaping, bearing four pointed teeth and yellow lips. It has one barbel and a small white fin on each side of its face. The barbels are white on a female and tan on a male. It has small, red eyes, a three-pointed, dark blue crest on its head, and four white, spiky dorsal fins. Gyarados's tail fin is similar in structure to the crest on its head, except with a thin, white fin spread between the points.",
    stars: []
  },
  {
    id: 7,
    title: "Omanyte",
    type: "Water",
    MRP: 6500,
    price: 5000,
    img: "https://t1.daumcdn.net/cfile/tistory/236A86425486D6EB06",
    rating: '2.6',
    desc: "Omanyte is a small Pokémon similar to an ammonite. It has a sky blue body with ten tentacles and a pale yellow, helix-spiraled shell on its back. The shell's rim has two circular indents where Omanyte's large saucer-like eyes protrude. If attacked or threatened, it quickly withdraws into its hard shell.",
    stars: []
  },
  {
    id: 8,
    title: "Omastar",
    type: "Water",
    MRP: 10000,
    price: 9000,
    img: "https://t1.daumcdn.net/cfile/tistory/266562425486D6ED0B",
    rating: '3.5',
    desc: "Omastar is a Pokémon similar to an ammonite. Its sky blue body has several tentacles; the tentacles toward the front are shorter and thicker than those in the back. There is a pale yellow, helix spiraled shell on its back. Several sharp spikes line the shell's midsection from the front to about halfway down its back. The shell's rim has two circular indents where Omastar's eyes are visible. Its eyes have yellow sclerae and vertically-slit pupils. It has an oval mouth with a four-sectioned, fang-like beak.",
    stars: []
  },
  {
    id: 9,
    title: "Charizard",
    type: "Fire",
    MRP: 25000,
    price: 22000,
    img: "https://t1.daumcdn.net/cfile/tistory/244106405474101030",
    rating: '4.4',
    desc: "Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like appendage juts out from the third joint of each wing. A single wing-finger is visible through the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade feet. The tip of its long, tapering tail burns with a sizable flame.",
    stars: []
  },
  {
    id: 10,
    title: "Vulpix",
    type: "Fire",
    MRP: 6500,
    price: 3600,
    img: "https://t1.daumcdn.net/cfile/tistory/221B28385475F90423",
    rating: '2.6',
    desc: "Vulpix is a small, quadrupedal, fox-like Pokémon. It has a red-brown pelt with a cream-colored underbelly. It has brown eyes, large, pointed ears with dark brown insides, and a triangular dark brown nose. Its paws are slightly darker than the rest of its pelt and have light brown paw pads. On top of its head are three curled locks of orange fur with bangs, and it has orange tails with curled tips. It is most commonly seen with six tails. However, Vulpix is born with only a single, white tail that splits as Vulpix grows. The tails grow hot as it approaches evolution.",
    stars: []
  },
  {
    id: 11,
    title: "Ninetales",
    type: "Fire",
    MRP: 11000,
    price: 7500,
    img: "https://t1.daumcdn.net/cfile/tistory/211A4C385475F90424",
    rating: '3.7',
    desc: "Ninetales is a fox-like, quadrupedal Pokémon covered in thick, luxurious golden-white fur. It has a small mane of thicker fur around its neck and a long, fluffy crest atop its head. It has slender legs with three-toed paws and nine, long tails with pale orange tips. It has red eyes, pointed ears, and a triangular black nose.iption",
    stars: []
  },
  {
    id: 12,
    title: "Arcanine",
    type: "Fire",
    MRP: 12000,
    price: 8200,
    img: "https://t1.daumcdn.net/cfile/tistory/273E694B5479720407",
    rating: '2.2',
    desc: "Arcanine is a quadrupedal, canine Pokémon with an orange pelt marked by jagged black stripes. It has diamond-shaped ears with beige insides, black eyes, a round, black nose, and two pointed teeth protruding from its upper jaw. Its head, muzzle, and chest are covered in shaggy, beige fur, except for two oval sections around each eye and ear. Long tufts of fur grow behind its elbows and around its ankles. Its underside is black, and it has a billowing, beige tail that is bent in the middle. Each paw has three toes and a round, pink pad.",
    stars: []
  },
  {
    id: 13,
    title: "Graveler",
    type: "Rock",
    MRP: 16000,
    price: 9500,
    img: "https://t1.daumcdn.net/cfile/tistory/240B3E4B547C1CF220",
    rating: '3.8',
    desc: "Graveler is a bipedal, boulder Pokémon. Its round body is covered with small bumps and it has a rocky crest above its small eyes and mouth. It has four arms, each with a three-fingered hand. Its second pair of arms is typically kept tucked against its chest. It was shown in Pokémon Snap that, despite having legs, it can revert to a legless form. This grants it the ability to float.",
    stars: []
  },
  {
    id: 14,
    title: "Alolan Raichu",
    type: "Electric",
    MRP: 17600,
    price: 16000,
    img: "https://t1.daumcdn.net/cfile/tistory/2356C3425474106404",
    rating: '3.9',
    desc: "Raichu is a bipedal, rodent-like Pokémon. Raichu is covered in dark orange fur with a white belly. Its bifurcated ears are brown on the outside, yellow on the insides, and end in a distinctive curl. There is a circular yellow marking on each cheek where its electric sacs are, and it has a triangular, dark brown nose. Its arms and feet have patches of brown fur at the end, and the soles of its long feet are tan with a circular orange pad in the center. On its back are two horizontal brown stripes. Its long, thin tail has a lightning bolt-shaped end. This lightning bolt is chipped on females. Raichu exudes a weak electrical charge from all its body and glows slightly in the dark.",
    stars: []
  },
  {
    id: 15,
    title: "Magneton",
    type: "Electric",
    MRP: 12500,
    price: 11000,
    img: "https://t1.daumcdn.net/cfile/tistory/2519A640547DB6240F",
    rating: '4.2',
    desc: "Magneton is the result of three Magnemite becoming linked together by a strong magnetic force, although a single Magnemite can evolve by itself when no other Magnemite are in the vicinity. Each individual Magnemite has a gray spherical body with a single eye, a gray and red-and-blue tipped horseshoe magnet on each side. The topmost Magnemite has three Phillips head screws on its body, while the others appear to have only two. The three Magnemite that Magneton consists of can be linked in several ways.ion",
    stars: []
  },
  {
    id: 16,
    title: "Electrode",
    type: "Electric",
    MRP: 6800,
    price: 3600,
    img: "https://t1.daumcdn.net/cfile/tistory/274CBD4C5480546103",
    rating: '1.7',
    desc: "Electrode is a round Pokémon resembling a reverse-colored Poké Ball with a mouth and eyes. Its top half is white, while its lower half is red. For this reason, many Trainers try to pick it up, mistaking it for an item. The Pocket Monsters Carddass Trading Cards depict Electrode as hollow. Many know it by the nickname Bomb Ball, due to its unpredictable and explosive nature.",
    stars: []
  },
  {
    id: 17,
    title: "Primeape",
    type: "Fighting",
    MRP: 9500,
    price: 8400,
    img: "https://t1.daumcdn.net/cfile/tistory/240E314B547972052F",
    rating: '4.1',
    desc: "Primeape is a bipedal, simian Pokémon with a round body covered in whitish, shaggy fur. There is usually a throbbing vein on the left side of its forehead, and it has triangular ears with pink insides, narrow eyes with tiny pupils, and a pink, snout-like nose. Its arms and legs are brown and have metal shackles on the wrists and ankles. This is probably indicative of a method of training with weights. The hands have no visible fingers, instead resembling mittens or boxing gloves, and the feet have two toes.",
    stars: []
  },
  {
    id: 18,
    title: "Machamp",
    type: "Fighting",
    MRP: 13500,
    price: 9500,
    img: "https://t1.daumcdn.net/cfile/tistory/215D583F547ACD5333",
    rating: '4.4',
    desc: "Machamp is a large, humanoid Pokémon with four well-muscled arms. It has bluish-gray skin, red eyes, and pale yellow lips. On its head, there are three brown ridges right above its eyes. It has two arms on each side of its body: a pair located in the normal position, and another pair directly above that attaches on the top of the shoulders. It has black markings that resemble briefs and wears a golden power-save belt that resembles a championship belt. Its legs have considerable muscle tone, and its feet have two toes each.",
    stars: []
  },
  {
    id: 19,
    title: "Hitmonchan",
    type: "Fighting",
    MRP: 10000,
    price: 9000,
    img: "https://t1.daumcdn.net/cfile/tistory/27682B4854816A9120",
    rating: '3.9',
    desc: "Hitmonchan is a tan, humanoid Pokémon that is exclusively male and has no female counterpart. There are five blunt protrusions on top of its head, and it has structures resembling pads over its shoulders. It appears to be wearing a light purple tunic and kilt, as well as red boxing gloves and light purple boxing shoes. In-between the tunic and kilt is a small, black area.",
    stars: []
  },
  {
    id: 20,
    title: "Zapdos",
    type: "Electric",
    MRP: 16000,
    price: 15500,
    img: "https://t1.daumcdn.net/cfile/tistory/224A2943548829A817",
    rating: '4.3',
    desc: "Zapdos is a large, avian Pokémon with predominantly yellow plumage. It has small, triangular eyes with black around them and a long, thin, light orange beak. Its wings and tail are a mass of spiky feathers and there are black feathers covering the back of its wings and inner tail feathers. A large crest of spiked feathers surrounds its head. Its thighs are tan, and it has thin, light orange legs. It has feet with three forward-facing toes and one backward-facing toe; each toe has a short talon.",
    stars: []
  },
  {
    id: 21,
    title: "Sandslash",
    type: "Ground",
    MRP: 15000,
    price: 9600,
    img: "https://t1.daumcdn.net/cfile/tistory/2609C0335474A09B25",
    rating: '3.9',
    desc: "Sandslash is a bipedal, ground-dwelling pholidote Pokémon. Although Sandslash is usually bipedal, it can run on all fours. Most of its underside is light yellow with a white underbelly. It has a narrow muzzle, almond-shaped blue eyes, and a thick tail. Its back is mostly covered in sharp, brown quills formed from its tough, dry hide. It has two large claws on its paws and feet.",
    stars: []
  },
  {
    id: 22,
    title: "Marowak",
    type: "Ground",
    MRP: 19000,
    price: 15000,
    img: "https://t1.daumcdn.net/cfile/tistory/2759CD4854816A8D34",
    rating: '4.7',
    desc: "Marowak is a bipedal Pokémon with light brown skin and a cream-colored underside. Two small claws, one on each hand, serve as its thumbs, and one large nail on each foot make up its toes. It has a short tail with a small spike near the tip. Marowak's head is composed of the skull it once wore as a mask. It can no longer remove the skull, which has become part of its body. The skull has two pointed spikes on the back similar to ears and tiny nostrils on the tip of the snout. Marowak's triangular, brown eyes are also located in the skull. Marowak is well known for ferocity with its bone club, which it is said to collect from a hidden graveyard. Marowak and its pre-evolved form, Cubone, are the only known Pokémon that can learn Bone Club and Bonemerang, the only Pokémon capable of using the Thick Club item, and once claimed Bone Rush as another signature move.",
    stars: []
  },
  {
    id: 23,
    title: "Rhydon",
    type: "Ground",
    MRP: 18000,
    price: 16000,
    img: "https://t1.daumcdn.net/cfile/tistory/212E964F54816A9B21",
    rating: '4.8',
    desc: "Rhydon is a large, gray, bipedal Pokémon with features similar to both dinosaurs and rhinoceroses. It has narrow, red eyes and two fangs in its upper jaw. On the tip of its snout is a cream-colored horn, which is smaller on a female than a male. There are several other spikes and projections on its head: on top is a spike that curves forward, two triangular points resembling ears on the sides, a wide, wavy crest under each ear, and spiky ridges on each cheek. It has a cream-colored abdomen divided into strips by thin divots. A rocky plate on its chest slightly overlaps its abdomen. There is a row of spikes down its back and they have a long tail with thin, black stripes.ription",
    stars: []
  },
  {
    id: 24,
    title: "Onix",
    type: "Ground",
    MRP: 12000,
    price: 9000,
    img: "https://t1.daumcdn.net/cfile/tistory/2731664C548054562E",
    rating: '3.3',
    desc: "Onix is composed of a giant chain of gray boulders that become smaller towards the tail. Its length makes it the tallest Rock-type Pokémon. It has black eyes and a rounded snout. On top of its head is a rocky spine. As it grows older, it becomes more rounded and smoother, eventually becoming similar to black diamonds. Inside its brain is a magnet that serves as an internal compass, guiding Onix wherever they need to go and prevents them from getting lost while digging.",
    stars: []
  },
  {
    id: 25,
    title: "Gengar",
    type: "Ghost",
    MRP: 10500,
    price: 13000,
    img: "https://t1.daumcdn.net/cfile/tistory/24360B44547F01BC1C",
    rating: '4.2',
    desc: "Gengar is a dark purple, bipedal Pokémon with a roundish body. It has red eyes, a wide mouth that is usually curled into a sinister grin, and pointed ears. On its back are numerous spikes and it has smaller spikes on top of its head similar to tufty fur. Its arms and legs are short with three digits on both its hands and feet. It also has a stubby tail.",
    stars: [] 
  },

  {
    id: 26,
    title: "Gastly",
    type: "Ghost",
    MRP: 10000,
    price: 9000,
    img: "https://t1.daumcdn.net/cfile/tistory/271C254E547F01B82F",
    rating: '3.9',
    desc: "Gastly has no true form, due to 95% of its body being poisonous gas. However, it consistently appears as a black, spherical Pokémon surrounded by a purple haze. It has a wide, pink mouth with two visible fangs. Though its eyes seem to extend past its round body, visible eyelids surround them. It produces a faint, sweet smell. The toxic gas surrounding the main body can induce fainting and suffocation, and it is capable of enshrouding an enemy of any size. Gastly's gaseous form makes it one of the lightest Pokémon in existence.",
    stars: []
  },
];