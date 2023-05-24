import { render, RenderPosition } from '../render';
import BoardView from '../view/board-view';
import EditFormView from '../view/form-edit-view';
import WaypointView from '../view/waypoint-view';

const ITEMS_COUNT = 3;

export default class BoardPresenter {
  boardComponent = new BoardView();
  constructor({ boardContainer }) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(new EditFormView(), this.boardComponent.getElement(), RenderPosition.AFTERBEGIN);

    for (let i = 0; i < ITEMS_COUNT; i++) {
      render(new WaypointView(), this.boardComponent.getElement());
    }

    render(this.boardComponent, this.boardContainer);
  }
}
