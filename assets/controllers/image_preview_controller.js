import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['input', 'preview'];

  connect() {
    this.previewTarget.innerHTML = ''; // clean au chargement
  }

  preview() {
    const files = this.inputTarget.files;

    // reset preview
    this.previewTarget.innerHTML = '';

    if (!files || files.length === 0) {
      return;
    }

    Array.from(files).forEach((file) => {
      if (!file.type.startsWith('image/')) return;

      const reader = new FileReader();

      reader.onload = (e) => {
        const div = document.createElement('div');
        div.className =
          'relative w-24 h-24 rounded-lg overflow-hidden shadow border border-gray-200';

        div.innerHTML = `
          <img src="${e.target.result}" class="w-full h-full object-cover" />

          <button type="button"
            class="absolute top-0 right-0 p-1 bg-red-600 text-white text-xs rounded-bl"
            data-action="click->image-preview#remove"
            data-name="${file.name}">
            ×
          </button>
        `;

        this.previewTarget.appendChild(div);
      };

      reader.readAsDataURL(file);
    });
  }

  remove(event) {
    const name = event.currentTarget.dataset.name;

    // recréer la FileList sans l'image retirée
    const dt = new DataTransfer();

    Array.from(this.inputTarget.files).forEach((file) => {
      if (file.name !== name) {
        dt.items.add(file);
      }
    });

    this.inputTarget.files = dt.files;

    // rafraîchir la preview
    this.preview();
  }
}
