import View from './View';
import previewView from './previewView.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipe found for your query! Try again :)';
  _message = 'Start by searching for a recipe or an ingredient. Have fun!';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
