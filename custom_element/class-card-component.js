class classCard extends HTMLElement {
    
    constructor() {
        super();
    }

    connectedCallback() {

        const name = this.getAttribute('name') || 'Unknown Class Name';
        const subtitle = this.getAttribute('subtitle') || '';
        const description = this.getAttribute('description') || '';
        const link = this.getAttribute('link') || 'https://www.ucsd.edu/';
        const smallImgURL = this.getAttribute('small-img-url') || '';
        const largeImgURL = this.getAttribute('large-img-url') || '';

        // Template for component content
        this.innerHTML = '';
        this.innerHTML += `
            <div class="simple-card">
                <h2>${name}</h2>
                <h3>${subtitle}</h3>
                <picture>
                    <source srcset="${smallImgURL}" type="image/webp">
                    <source srcset="${largeImgURL}" />
                    <img src="${largeImgURL}" alt="${name} image">
                </picture>
                <p>${description}</p>
                <a href=${link}>Read More</a>
            </div>
        `;
        this.querySelector('.simple-card').addEventListener('click', () => this.cardClick());

    }
    cardClick() {
        const event = new CustomEvent('card-click', {
            bubbles: true
        });
        this.dispatchEvent(event);
    }
}


customElements.define('class-card', classCard);