const projects = [
    {
      title: "Landing Page Moderna",
      description: "Diseñada con HTML5, CSS3 y JavaScript responsivo.",
      link: "https://tusitio.com/landing-page"
    },
    {
      title: "Panel de Administración",
      description: "Dashboard interactivo con JavaScript puro.",
      link: "https://tusitio.com/admin-dashboard"
    },
    {
      title: "Portafolio Personal",
      description: "Tu portafolio profesional en línea.",
      link: "https://tusitio.com/portafolio"
    }
  ];
  
  const container = document.getElementById("projectList");
  
  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">Ver proyecto</a>
    `;
    container.appendChild(card);
  });
  