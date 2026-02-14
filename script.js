import { filterSkillsByCategory, emptyResults } from "./skillswap.js";
let skills = [
    {
        title: 'Web Development',
        description: 'Web development tutoring. Offering help understanding and implementing HTML, CSS, and JavaScript',
        name: 'Danny Marshall',
        price: '$25/hr',
        category: 'Computer Science'
    },
    {
        title: 'Programming Practicum',
        description: 'Offering tutoring to help you understand programming best practices and concepts such as loop based vs. functional programming, control structures, and object-oriented programming',
        name: 'Danny Marshall',
        price: '$25/hr',
        category: 'Computer Science'
    },
    {
        title: 'Financial Math for Actuarial Exam FM',
        description: `I've pssed FM and you can too. I'm offering help understanding complicated financial math concepts and preparing for SOA Exam FM.`,
        name: 'Danny Marshall',
        price: '$30/hr',
        category: 'Mathematics'
    },
    {
        title: 'Probability for Actuarial Exam P',
        description: `I've passed P and you can too. I'm offering tutoring to help you master probability and prepare for SOA Exam P.`,
        name: "Danny Marshall",
        price: "$35/hr",
        category: 'Mathematics'
    }
];

const skillList = document.getElementById('offerings-list');

renderSkills(skills);

const skillCards = document.querySelectorAll('.skill-card');

const fltrBtns = document.querySelectorAll('.fltr-btn');

fltrBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        //console.log(btn.textContent);
        const filteredSkills = filterSkillsByCategory(skills, btn.textContent.trim());
        renderSkills(filteredSkills);
    });
});

skillCards.forEach(card => {

    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = 'indigo'; 
    });
    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = '';
    });
});

function renderSkills(skills) {
    skillList.innerHTML = '';
    
    skills.forEach(skill => {
    skillList.innerHTML += `
        <li class="offerings-list">
            <div class="skill-card">
                <h2 class="skl-crd-title">${skill.title}</h2>
                <p class="skl-crd-desc">${skill.description}</p>
                <p class="skl-crd-name">${skill.name}</p>
                <p class="skl-crd-price">${skill.price}</p>
            </div>
        </li>`;
});
}