/**
 * Web Component: <tarjeta-producto>
 * Componente nativo (HTML + CSS + JS vanilla) reutilizable y responsivo.
 *
 * Props (atributos):
 *   - imagen      (string, URL de la imagen del producto)
 *   - titulo      (string, nombre del producto)
 *   - descripcion (string, descripción corta del producto)
 *   - precio      (string/number, precio a mostrar)
 *
 * Eventos emitidos:
 *   - "agregar-carrito": se dispara al hacer clic en el botón "Agregar al carrito".
 *        detail => { titulo, precio }
 */

class TarjetaProducto extends HTMLElement {
  static get observedAttributes() {
    return ["imagen", "titulo", "descripcion", "precio"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.shadowRoot
      .querySelector(".btn-agregar")
      .addEventListener("click", () => this.emitirEventoAgregar());
    this.shadowRoot
      .querySelector(".btn-detalle")
      .addEventListener("click", () => this.emitirEventoDetalle());
  }

  attributeChangedCallback() {
    if (this.shadowRoot.innerHTML) this.render();
  }

  emitirEventoAgregar() {
    const evento = new CustomEvent("agregar-carrito", {
      detail: {
        titulo: this.getAttribute("titulo"),
        precio: this.getAttribute("precio"),
      },
      bubbles: true,
      composed: true, // permite que el evento cruce el límite del Shadow DOM
    });
    this.dispatchEvent(evento);
  }

  emitirEventoDetalle() {
    const evento = new CustomEvent("ver-detalle", {
      detail: { titulo: this.getAttribute("titulo") },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(evento);
  }

  render() {
    const imagen = this.getAttribute("imagen") || "";
    const titulo = this.getAttribute("titulo") || "Producto sin nombre";
    const descripcion = this.getAttribute("descripcion") || "";
    const precio = this.getAttribute("precio") || "0";

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          --color-primario: #2f6fed;
          --color-primario-oscuro: #1d4fbf;
          --radio-borde: 12px;
          font-family: "Segoe UI", Arial, Helvetica, sans-serif;
        }

        .tarjeta {
          box-sizing: border-box;
          width: 100%;
          max-width: 280px;
          border: 1px solid #e2e2e2;
          border-radius: var(--radio-borde);
          overflow: hidden;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          background: #fff;
        }

        .tarjeta:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
        }

        .tarjeta__imagen {
          width: 100%;
          height: 160px;
          object-fit: cover;
          display: block;
          background-color: #f1f1f1;
        }

        .tarjeta__cuerpo {
          padding: 14px 16px 18px;
        }

        .tarjeta__titulo {
          margin: 0 0 6px;
          font-size: 1.05rem;
          font-weight: 600;
          color: #1a1a1a;
        }

        .tarjeta__descripcion {
          margin: 0 0 10px;
          font-size: 0.85rem;
          color: #555;
          line-height: 1.35;
        }

        .tarjeta__precio {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-primario);
          margin: 0 0 12px;
        }

        .tarjeta__acciones {
          display: flex;
          gap: 8px;
        }

        button {
          flex: 1;
          border: none;
          border-radius: 8px;
          padding: 8px 10px;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.15s ease;
        }

        .btn-agregar {
          background-color: var(--color-primario);
          color: #fff;
        }

        .btn-agregar:hover {
          background-color: var(--color-primario-oscuro);
        }

        .btn-detalle {
          background-color: #f0f0f0;
          color: #333;
        }

        .btn-detalle:hover {
          background-color: #e0e0e0;
        }

        /* Responsivo: en pantallas pequeñas ocupa todo el ancho */
        @media (max-width: 480px) {
          .tarjeta {
            max-width: 100%;
          }
        }
      </style>

      <div class="tarjeta">
        <img class="tarjeta__imagen" src="${imagen}" alt="${titulo}" />
        <div class="tarjeta__cuerpo">
          <h3 class="tarjeta__titulo">${titulo}</h3>
          <p class="tarjeta__descripcion">${descripcion}</p>
          <p class="tarjeta__precio">$${precio}</p>
          <div class="tarjeta__acciones">
            <button class="btn-agregar">Agregar al carrito</button>
            <button class="btn-detalle">Ver más</button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("tarjeta-producto", TarjetaProducto);
