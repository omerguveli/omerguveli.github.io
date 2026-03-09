import { data } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    renderHero();
    renderAbout();
    renderSkills();
    renderExperience();
    renderFooter();
    setupAnimations();
});

function renderHero() {
    document.getElementById('hero-name').textContent = data.person.name;
    document.getElementById('hero-title').textContent = data.person.title;
}

function renderAbout() {
    document.getElementById('about-text').textContent = data.person.summary;
}

function renderSkills() {
    const qaContainer = document.querySelector('#skills-qa .skill-tags');
    const progContainer = document.querySelector('#skills-prog .skill-tags');
    const devopsContainer = document.querySelector('#skills-devops .skill-tags');

    data.skills.testQA.forEach(skill => {
        qaContainer.innerHTML += `<span class="skill-tag">${skill}</span>`;
    });

    data.skills.programming.forEach(skill => {
        progContainer.innerHTML += `<span class="skill-tag">${skill}</span>`;
    });

    data.skills.devOps.forEach(skill => {
        devopsContainer.innerHTML += `<span class="skill-tag">${skill}</span>`;
    });
}

function renderExperience() {
    const timeline = document.getElementById('experience-timeline');
    data.experience.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'glass-card timeline-item';
        item.innerHTML = `
            <div class="company">${exp.company}</div>
            <h4>${exp.role}</h4>
            <div class="period">${exp.period}</div>
            <ul>
                ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
        `;
        timeline.appendChild(item);
    });
}

function renderFooter() {
    document.getElementById('footer-location').textContent = `📍 ${data.person.location}`;
    document.getElementById('footer-email').textContent = `📧 ${data.person.email}`;
    document.getElementById('link-linkedin').href = data.person.linkedin;
    document.getElementById('link-github').href = data.person.github;
}

function setupAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.glass-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
}
