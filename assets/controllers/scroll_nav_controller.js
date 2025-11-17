import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['container'];

  scrollLeft() {
    if (this.hasContainerTarget) {
      this.containerTarget.scrollBy({ left: -250, behavior: 'smooth' });
    }
  }

  scrollRight() {
    if (this.hasContainerTarget) {
      this.containerTarget.scrollBy({ left: 250, behavior: 'smooth' });
    }
  }
}
