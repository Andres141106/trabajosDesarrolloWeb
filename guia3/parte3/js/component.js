class MiCard extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({mode: "open"});
      shadow.innerHTML = `
        <style>
          .card {
            border: 1px solid #ccc;
            padding: 18px;
            margin: 10px;
            border-radius: 16px;
            box-shadow: 0 4px 16px rgba(44, 62, 80, 0.12);
            background: #fff;
            max-width: 400px;
            display: inline-flex;
            flex-direction: column;
            align-items: center;
          }
          .card img {
            width: 350px;
            height: 220px;
            object-fit: contain;
            border-radius: 12px;
            margin-bottom: 16px;
            background: #f6f6f6;
          }
          .card h2 {
            margin: 0 0 8px 0;
            font-size: 1.3em;
            color: #0a3d62;
            font-weight: 600;
            text-align: center;
          }
          .card p {
            font-size: 1em;
            color: #3c6382;
            text-align: center;
          }
        </style>
        <div class="card">
          <img src="${this.getAttribute("img") || 'img/placeholder.jpg'}" alt="Imagen de la moto">
          <h2>${this.getAttribute("titulo")}</h2>
          <p>${this.getAttribute("descripcion")}</p>
        </div>
      `;
    }
  }
  customElements.define("mi-card", MiCard);
