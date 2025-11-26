 const encoded = "NTE5OTE5Mjk4Mzg="; 
    const phone = atob(encoded); 
    const link = "https://api.whatsapp.com/send?phone=" + phone;

    document.getElementById("wsp-btn").href = link;



const servicesData = [
        {
            title: "Importación de Piedras",
            description: "Importamos piedras preciosas de la mejor calidad desde distintos países, garantizando autenticidad y exclusividad.",
            image: "assets/img/Importando.jpg"
        },
        {
            title: "Instalación Especializada",
            description: "Nuestro equipo técnico está altamente capacitado para instalar acabados de lujo con precisión y profesionalismo.",
            image: "assets/img/cortanto_marmol.jpg"
        },
        {
            title: "Acabados Residenciales",
            description: "Transformamos espacios con acabados elegantes hechos a medida para tu hogar.",
            image: "assets/img/Acabados_Recidenciales.jpg"
        },
        {
            title: "Proyectos Comerciales",
            description: "Diseñamos e instalamos proyectos premium para hoteles, oficinas y espacios corporativos.",
            image: "assets/img/proyectos_comerciales.jpg"
        },
        {
            title: "Diseño Personalizado",
            description: "Creamos diseños únicos según tus gustos, necesidades y estilo propio.",
            image: "assets/img/proyectos_personalizados.jpg"
        },
        {
            title: "Garantía Total",
            description: "Ofrecemos garantía completa de nuestros trabajos para tu absoluta tranquilidad.",
            image: "assets/img/garantia_total.jpg"
        }
    ];

    const cards = document.querySelectorAll(".service-card");
    const modal = document.getElementById("serviceModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalImage = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close-modal");

    cards.forEach((card, index) => {
        card.addEventListener("click", () => {
            modal.style.display = "block";
            modalTitle.textContent = servicesData[index].title;
            modalDescription.textContent = servicesData[index].description;
            modalImage.src = servicesData[index].image;
        });
    });

    closeBtn.onclick = () => modal.style.display = "none";

    window.onclick = (e) => {
        if(e.target === modal) modal.style.display = "none";
    };



    const proyectos = {
  1: {
    desc: "Proyecto Residencial con acabados en porcelanato gris mate.",
    fotos: ["assets/img/inventario1.jpg","assets/img/inventario2.jpg","assets/img/inventario3.jpg"]
  },
  2: {
    desc: "Hotel de lujo con mármol importado y diseño moderno.",
    fotos: ["assets/img/inventario2.jpg","assets/img/inventario3.jpg"]
  },
  3: {
    desc: "Oficina corporativa con porcelanato pulido de alto tráfico.",
    fotos: ["assets/img/inventario3.jpg","assets/img/inventario3_2.jpg"]
  }
};

// Variables del carrusel
let currentIndex = 0;

function openModal(id) {
  const modal = document.getElementById("galleryModal");
  modal.style.display = "flex";

  const track = document.getElementById("carouselTrack");
  const desc = document.getElementById("modalDesc");

  track.innerHTML = "";
  currentIndex = 0;

  proyectos[id].fotos.forEach(foto => {
   track.innerHTML += `
  <div class="slide">
    <img src="${foto}" alt="Proyecto">
  </div>
`;
  });

  desc.textContent = proyectos[id].desc;

  updateCarousel();
}

function updateCarousel() {
  const track = document.getElementById("carouselTrack");
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.getElementById("prevBtn").onclick = () => {
  const total = document.querySelectorAll("#carouselTrack img").length;
  currentIndex = (currentIndex - 1 + total) % total;
  updateCarousel();
};

document.getElementById("nextBtn").onclick = () => {
  const total = document.querySelectorAll("#carouselTrack img").length;
  currentIndex = (currentIndex + 1) % total;
  updateCarousel();
};

    function closeModal() {
    document.getElementById("galleryModal").style.display = "none";
    }

window.addEventListener("click", function(e) {
  const modal = document.getElementById("galleryModal");
  if (e.target === modal) closeModal();
});


document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
   
    emailjs.send("service_r4sz7mi", "template_skf12dp", {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value,
        servicio: document.getElementById("servicio").value,
        mensaje: document.getElementById("mensaje").value,
    })
    .then(function() {
       showSuccessModal();
        document.querySelector(".contact-form").reset();
    }, function(error) {
       showErrorModal();
        console.log(error);
       
    });
});

function showSuccessModal() {
  document.getElementById("exitoModal").style.display = "flex";
}

function showErrorModal() {
  document.getElementById("errorModal").style.display = "flex";
}

function closeAlertModal() {
  document.getElementById("exitoModal").style.display = "none";
  document.getElementById("errorModal").style.display = "none";
}


    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

