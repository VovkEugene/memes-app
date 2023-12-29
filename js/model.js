const PREVIEW_MOCK = {
  url: "https://i.imgflip.com/5o32tt.png",
  textTop: "We are not the same",
  textBottom: "We are different",
};

class Model {
  constructor() {
    this.preview = PREVIEW_MOCK;
    // this.preview = {
    //   url: "",
    //   textTop: "",
    //   textBottom: "",
    // };
  }

  getPreview() {
    return this.preview;
  }
}
