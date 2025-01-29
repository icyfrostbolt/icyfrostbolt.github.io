projects = [
  {
    "name": "Ultimate Mafia",
    "description": "An open source chat Mafia/Minigames site that I contributed to. (Contributions were made on an alternate GitHub account, starryburst)",
    "image": "ultimatemafia.png",
    "link": "https://github.com/UltiMafia/Ultimafia",
    "labels": ["JavaScript", "HTML", "CSS"],
    "categories": ["Game Dev"],
  },
  /*{
    "name": "Valdivian",
    "description": "Hackathon Project. Valdivian is a platform that is used to search up various tutorials.",
    "image": "valdivian.png",
    "link": "https://devpost.com/software/valdivian",
  },*/
  {
    "name": "Decentralized Chat",
    "description": "A discord bot made to communicate anonymously via proxies and alternate profiles, perfect for roleplay!",
    "image": "decentralizedchat.png",
    "link": "https://github.com/icyfrostbolt/DecentralizedChat",
    "labels": ["Python"],
    "categories": [],
  },
  {
    "name": "Last.fm Twitter",
    "description": "A script that posts Last.fm listens onto Twitter. (Now defunct due to the Twitter API paywall.)",
    "image": "twitter.png",
    "link": "https://github.com/icyfrostbolt/Last.fm-Twitter",
    "labels": ["Python"],
    "categories": [],
  },
  /*{
    "name": "Music Generation",
    "description": "A program that allows you to visualize music and export this visualzation into a MIDI file.",
    "image": "music.png",
    "link": "https://github.com/icyfrostbolt/Music-Generation",
  },*/
  {
    "name": "Flappy Bird",
    "description": "Made a Flappy Bird game using Gamemaker to teach others how to use GameMaker.",
    "image": "flappy.png",
    "link": "https://github.com/icyfrostbolt/Flappy-Bird",
    "labels": ["GameMaker"],
    "categories": ["Game Dev"],
  },
  {
    "name": "Spritemaker",
    "description": "A small pixel character creation engine I made, inspired by the character creator from life simulation games!",
    "image": "sprite.png",
    "link": "https://github.com/icyfrostbolt/Cuboid-Spritemaker",
    "labels": ["Python"],
    "categories": [],
  },
  {
    "name": "pAIge Sounds",
    "description": "Hackathon project from DubHacks 2023. Creates a Spotify playlist based on content from a book.",
    "image": "paige.png",
    "link": "https://devpost.com/software/paige-sounds",
    "labels": ["Python", "HTML", "CSS"],
    "categories": [],
  },
  {
    "name": "Predicting Forest Fires",
    "description": "Analysis of forest fires in Montesinho National park to see if severity is predictable. Was responsable for part of the code.",
    "image": "forest-fire.png",
    "link": "https://github.com/icyfrostbolt/Forest-Fire-Prediction",
    "labels": ["R"],
    "categories": ["Data Science"],
  },
  {
    "name": "Pickup",
    "description": "Hackathon project from nwHacks 2024.",
    "image": "pickup.png",
    "link": "https://github.com/MatthewAnder/nwhacks-project/tree/main",
    "labels": ["HTML", "CSS", "React", "JavaScript"],
    "categories": [],
  }
  /*{
    "name": "ShowTracker",
    "description": "A program that allows you to track your shows.",
    "image": "",
    "link": "",
    "labels": ["Java"],
    "categories": [],
  },*/
]

for (let i = 0; i < projects.length; i++) {
  project = projects[i];

  // Create container
  project_container = document.getElementById("container");

  container = document.createElement("div");
  container.classList.add("portfolio_container");

  image_container = document.createElement("div");
  image_container.classList.add("image_container");

  image = document.createElement("img");
  image.src = '../images/' + project.image;
  image.classList.add("image");

  image_link = document.createElement("a")
  image_link.href = project.link;

  image_link.appendChild(image)
  image_container.appendChild(image_link);

  text_container = document.createElement("div");
  text_container.classList.add("text_container");

  title = document.createElement("p");
  title.classList.add("proj_text");
  title.innerHTML = project.name;

  text = document.createElement("p");
  text.classList.add("reg_text");
  text.innerHTML = project.description;

  tags_container = document.createElement("div");
  tags_container.classList.add("tags_container");

  label_sub_container = document.createElement("div");
  label_sub_container.classList.add("label_sub_container");

  for (let j = 0; j < project.labels.length; j++) {
    label_container = document.createElement("span");
    label_container.classList.add("label_container");

    label = document.createElement("p")
    label.classList.add("label_text");
    label.innerHTML = project.labels[j];

    label_container.appendChild(label);

    label_sub_container.appendChild(label_container);
    tags_container.appendChild(label_sub_container);
  }

  for (let k = 0; k < project.categories.length; k++) {
    category_container = document.createElement("span");
    category_container.classList.add("label_container");

    category = document.createElement("p")
    category.classList.add("category_text");
    category.innerHTML = project.categories[k];

    category_container.appendChild(category);

    label_sub_container.appendChild(category_container);
    tags_container.appendChild(label_sub_container);
  }

  text_container.appendChild(title);
  text_container.appendChild(text);

  container.appendChild(image_container);
  container.appendChild(tags_container);
  container.appendChild(text_container);

  project_container.appendChild(container);
}