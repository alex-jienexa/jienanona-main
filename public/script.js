document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('projects.json');
        const projects = await response.json();
        renderProjects(projects);
    } catch (error) {
        console.error('Ошибка загрузки списка проектов:', error);
        // Заглушка на случай ошибки
        renderProjects([
            { name: 'Пример проекта', description: 'Вставить текст...', url: '/project' }
        ]);
    }
});

function renderProjects(projects) {
    const container = document.getElementById('projects');
    container.innerHTML = '';
    projects.forEach(proj => {
        const card = document.createElement('article');
        card.className = 'project-card';
        card.innerHTML = `
            <h2>${proj.name}</h2>
            <p>${proj.description}</p>
            <a href="${proj.url}">Перейти →</a>
        `;
        container.appendChild(card);
    });
}