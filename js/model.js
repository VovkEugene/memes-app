const PREVIEW_MOCK = {
  textTop: "We are not the same",
  textBottom: "We are different",
};

class Model {
  constructor({ onCurrentMemeIdChange, onMemesChange }) {
    this.memes = [];
    this.currentMemeId = null;
    this.preview = PREVIEW_MOCK;

    this.onCurrentMemeIdChange = onCurrentMemeIdChange;
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
    this.onCurrentMemeIdChange();
  }

  getPreview() {
    return this.preview;
  }

  getCurrentMeme() {
    let currentMeme = null;

    this.memes.forEach((meme) => {
      if (meme.id === this.getCurrentMemeId()) {
        currentMeme = meme;
      }
    });

    return currentMeme;
  }
}
