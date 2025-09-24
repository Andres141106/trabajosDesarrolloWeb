const template = document.getElementById("card-template");
const contenedor = document.getElementById("contenedor");

  const productos = [
    {titulo: "250Nk", desc: "27 Hp", img: "https://elmotero.lightformconcept.net/wp-content/uploads/2019/09/NK-250-1.1.jpg"
        ,precio: "16.000.000" },
    {titulo: "390duke", desc: "43 Hp",img: "https://web2.fireboldweb.com/wp-content/uploads/2023/11/PHO_BIKE_90_REVO_MY24-KTM-390-DUKE-90-RIGHT-Front_SALL_AEPI_V1.webp"
        ,precio: "32.000.000" },
    {titulo: "450Sr", 
        desc: "49 Hp",
        img: "https://cfmotoargentina.com.ar/wp-content/uploads/2024/08/MY2023_450SR_Nebula_Black_Left_45-removebg.png"
        ,precio: "30.000.000" },
    {titulo: "Ducati Panigale v4", 
        desc: "218 Hp", 
        img: "https://images.ctfassets.net/x7j9qwvpvr5s/ByUJ33Zkwpbg9uzrMv4ZW/ade395a677c57619184b08c026b431fb/SLV4-01-Model-Preview-1050x650.jpg"
        ,precio: "130.000.000" 
    }
  ];

  productos.forEach(p => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = p.titulo;
    clon.querySelector(".desc").textContent = p.desc;
      const imgElem = clon.querySelector(".img");
      if (p.img) {
        imgElem.src = p.img;
      } else {
        imgElem.src = "https://via.placeholder.com/50"; // Imagen por defecto
      }
      clon.querySelector(".Precio").textContent = `$${p.precio || 'N/A'}`; // Mostrar precio o 'N/A' si no existe
      contenedor.appendChild(clon);
  });
