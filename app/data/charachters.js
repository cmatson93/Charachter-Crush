

var charactersArray = [
  {
    "name":"Jamie Lannister",
    "photo":"https://upload.wikimedia.org/wikipedia/en/b/b4/Jaime_Lannister-Nikolaj_Coster-Waldau.jpg",
    "scores":[
        5,
        5,
        5,
        4,
        4,
        2,
        4,
        5,
        4,
        3
      ]
  },
  {
    "name":"Jon Snow",
    "photo":"https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Jon_Snow-Kit_Harington.jpg/220px-Jon_Snow-Kit_Harington.jpg",
    "scores":[
        1,
        5,
        2,
        5,
        4,
        2,
        4,
        2,
        1,
        5
      ]
  },
  {
    "name":"Robb Stark",
    "photo":"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRobb_Stark&psig=AOvVaw2xRgvJ9c_jei8NOXS9UEM7&ust=1510977097940306",
    "scores":[
        3,
        5,
        4,
        4,
        3,
        2,
        4,
        4,
        2,
        3
      ]
  },
  {
    "name":"Joffery Baratheon",
    "photo":"http://www.thinkgeek.com/images/products/zoom/jonk_twilight_princess_zelda_figma_fig.jpg",
    "scores":[
        5,
        4,
        5,
        1,
        1,
        1,
        3,
        5,
        5,
        1
      ]
  },
  {
    "name":"Tyrion Lannister",
    "photo":"https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Tyrion_Lannister-Peter_Dinklage.jpg/220px-Tyrion_Lannister-Peter_Dinklage.jpg",
    "scores":[
        2,
        4,
        4,
        2,
        5,
        4,
        2,
        5,
        3,
        2
      ]
  },
  {
    "name":"The Hound",
    "photo":"https://upload.wikimedia.org/wikipedia/en/b/b4/Sandor_Clegane-The_Hound-Rory_McCann.jpg",
    "scores":[
        1,
        5,
        1,
        2,
        3,
        2,
        1,
        3,
        2,
        3
      ]
  },
  {
    "name":"Khal Drago",
    "photo":"https://upload.wikimedia.org/wikipedia/en/e/ef/Khal_Drogo-Jason_Momoa.jpg",
    "scores":[
        5,
        5,
        4,
        2,
        2,
        1,
        3,
        3,
        3,
        1
      ]
  },
  {
    "name":"Samwell Tarly",
    "photo":"https://vignette.wikia.nocookie.net/gameofthrones/images/e/e9/Sam_at_Winterfell.jpg/revision/latest?cb=20170903200558",
    "scores":[
        1,
        1,
        1,
        5,
        5,
        5,
        2,
        2,
        1,
        5
      ]
  },
  {
    "name":"Theon Greyjoy",
    "photo":"data:image/jpeg;base64,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",
    "scores":[
        3,
        3,
        4,
        1,
        3,
        1,
        2,
        4,
        5,
        1
      ]
  }
];




module.exports = charactersArray; 
