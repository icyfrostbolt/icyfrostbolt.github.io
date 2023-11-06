projects = [
  {
    "name": "Ultimate Mafia",
    "description": "An open source chat Mafia site that I contributed to.",
    "image": "ultimatemafia.png",
    "link": "https://github.com/UltiMafia/Ultimafia",
  },
  {
    "name": "Valdivian",
    "description": "Made during a hackathon, Valdivian is a platform that is used to search up various tutorials.",
    "image": "valdivian.png",
    "link": "https://devpost.com/software/valdivian",
  },
  {
    "name": "Decentralized Chat",
    "description": "A discord bot made to communicate anonymously via proxies.",
    "image": "decentralizedchat.png",
    "link": "https://github.com/icyfrostbolt/DecentralizedChat",
  },
  {
    "name": "Last.fm Twitter",
    "description": "A script that posts last.fm listens onto twitter.",
    "image": "twitter.png",
    "link": "https://github.com/icyfrostbolt/Last.fm-Twitter",
  },
  {
    "name": "Music Generation",
    "description": "A program that allows you to visualize music and export this visualzation into a MIDI file.",
    "image": "music.png",
    "link": "https://github.com/icyfrostbolt/Music-Generation",
  },
  {
    "name": "Flappy Bird",
    "description": "Made a Flappy Bird game using Gamemaker.",
    "image": "flappy.png",
    "link": "https://github.com/icyfrostbolt/Flappy-Bird",
  },
  {
    "name": "Spritemaker",
    "description": "A small pixel character creation engine I made.",
    "image": "sprite.png",
    "link": "https://github.com/icyfrostbolt/Cuboid-Spritemaker",
  },
  {
    "name": "pAIge Sounds",
    "description": "Hackathon project. Creates playlist based on content from a book.",
    "image": "paige.png",
    "link": "https://devpost.com/software/paige-sounds",
  }
]

for (let i=0; i < projects.length; i++) {
  //console.log(projects[i]);
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

  text_container.appendChild(title);
  text_container.appendChild(text);

  container.appendChild(image_container);
  container.appendChild(text_container);

  project_container.appendChild(container);
}
