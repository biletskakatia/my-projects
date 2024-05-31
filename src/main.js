const projects = [
        {
          srcset: "./img/project4-mob-1x.jpg 1x, ./img/project4-mob-2x.jpg 2x",
          media: "(max-width: 767px)",
          srcsetTab: "./img/project4-tab-1x.jpg 1x, ./img/project4-tab-2x.jpg 2x",
          mediaTab: "(min-width: 768px)",
          srcsetDesk: "./img/project4-desk-1x.jpg 1x, ./img/project4-desk-2x.jpg 2x",
          mediaDesk: "(min-width: 1280px)",
          imgSrc: "./img/project4-mob-1x.jpg",
          alt: "project 4",
          techStack: "React, JavaScript, Node JS, Git",
          title: "Project 4",
          buttonText: "Visit"
        },
        {
          srcset: "./img/project5-mob-1x.jpg 1x, ./img/project5-mob-2x.jpg 2x",
          media: "(max-width: 767px)",
          srcsetTab: "./img/project5-tab-1x.jpg 1x, ./img/project5-tab-2x.jpg 2x",
          mediaTab: "(min-width: 768px)",
          srcsetDesk: "./img/project5-desk-1x.jpg 1x, ./img/project5-desk-2x.jpg 2x",
          mediaDesk: "(min-width: 1280px)",
          imgSrc: "./img/project5-mob-1x.jpg",
          alt: "project 5",
          techStack: "React, JavaScript, Node JS, Git",
          title: "Project 5",
          buttonText: "Visit"
        },
        {
          srcset: "./img/project6-mob-1x.jpg 1x, ./img/project6-mob-2x.jpg 2x",
          media: "(max-width: 767px)",
          srcsetTab: "./img/project6-tab-1x.jpg 1x, ./img/project6-tab-2x.jpg 2x",
          mediaTab: "(min-width: 768px)",
          srcsetDesk: "./img/project6-desk-1x.jpg 1x, ./img/project6-desk-2x.jpg 2x",
          mediaDesk: "(min-width: 1280px)",
          imgSrc: "./img/project6-mob-1x.jpg",
          alt: "project 6",
          techStack: "React, JavaScript, Node JS, Git",
          title: "Project 6",
          buttonText: "Visit"
        }
      ];

      let projectIndex = 0;

      document.querySelector('.load-more-button').addEventListener('click', () => {
        const projectList = document.querySelector('.projects-list');
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < 3; i++) {
          if (projectIndex >= projects.length) {
            document.querySelector('.load-more-button').style.display = 'none';
            break;
          }

          const project = projects[projectIndex];
          const li = document.createElement('li');
          li.classList.add('projects-list-items');
          
          li.innerHTML = `
            <picture>
              <source srcset="${project.srcset}" media="${project.media}" /> 
              <source srcset="${project.srcsetTab}" media="${project.mediaTab}" />
              <source srcset="${project.srcsetDesk}" media="${project.mediaDesk}" /> 
              <img src="${project.imgSrc}" alt="${project.alt}" width="320" height="180" class="projects-item-img">
            </picture>
            <div class="tech-stack">${project.techStack}</div>
            <div class="projects-item-title">${project.title}</div>
            <button class="projects-btn">${project.buttonText}</button>
          `;
          
          fragment.appendChild(li);
          projectIndex++;
        }

        projectList.appendChild(fragment);
      });