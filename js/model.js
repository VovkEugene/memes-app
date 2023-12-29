const PREVIEW_MOCK = {
  url: "https://i.imgflip.com/5o32tt.png",
  textTop: "We are not the same",
  textBottom: "We are different",
};

class Model {
  constructor() {
    this.memes = [];
    this.currentMemeId = null;
    this.preview = PREVIEW_MOCK;
  }

  getMemes() {
    return this.memes;
  }

  setMemes(memes) {
    this.memes = memes;
  }

  getCurrentMemeId() {
    return this.currentMemeId;
  }

  setCurrentMemeId(currentMemeId) {
    this.currentMemeId = currentMemeId;
  }

  getPreview() {
    return this.preview;
  }
}
