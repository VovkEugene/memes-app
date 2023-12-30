class Controller {
  constructor() {
    this.model = new Model({
      onMemeChange: this.handleModelMemesChange,
      onCurrentMemeIdChange: this.handleModelCurrentMemeIdChange,
    });

    this.view = new View({ onMemeChange: this.handleViewMemeChange });

    this.api = new API();
  }

  init() {
    const memes = this.api.getMemes();

    this.model.setMemes(memes);
    this.model.setCurrentMemeId(memes[0].id);
  }

  handleViewMemeChange = (id) => {
    this.model.setCurrentMemeId(id);
  };

  handleModelCurrentMemeIdChange = () => {
    const preview = {
      ...this.model.getPreview(),
      url: this.model.getCurrentMeme().url,
    };

    this.view.renderPreview(preview);
  };
}
