const MEMES_MOCK = [
  {
    id: "110133729",
    name: "spiderman pointing at spiderman",
    url: "https://i.imgflip.com/1tkjq9.jpg",
    width: 800,
    height: 450,
  },
  {
    id: "342785297",
    name: "Gus Fring we are not the same",
    url: "https://i.imgflip.com/5o32tt.png",
    width: 700,
    height: 1000,
  }, 
];

class API {
  constructor() {}

  getMemes() {
    return MEMES_MOCK;
  }
}
