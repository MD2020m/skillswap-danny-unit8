import { filterSkillsByCategory, emptyResults, calculateTotalCosts } from "./skillswap.js";
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

const calcBtn = document.getElementById('calc-btn');
calcBtn.addEventListener('click', () => {
    renderCalculation();
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
        <li class="offering-entry">
            <div class="skill-card">
                <h2 class="skl-crd-title">${skill.title}</h2>
                <p class="skl-crd-desc">${skill.description}</p>
                <p class="skl-crd-name">${skill.name}</p>
                <p class="skl-crd-price">${skill.price}</p>
            </div>
        </li>`;
    });
}

function renderCalculation() {
    const calcDiv = document.getElementById('calc-input-div')

    const calcRateInpt = document.getElementById('calc-rate-inpt');
    //console.log(calcRateInpt);
    //console.log(calcRateInpt.value);
    const calcHrsInpt = document.getElementById('calc-hrs-inpt');
    try{
        const rate = Number(calcRateInpt.value);
        const hrs = Number(calcHrsInpt.value);

        const cost = calculateTotalCosts(rate, hrs);
        //console.log(cost);

        calcDiv.innerHTML = `<div id="calc-input-div">
                <p class="calc-input-label">Hourly Rate: </p>
                <input class="calc-input" id="calc-rate-inpt">
                <p class="calc-input-label">Hours</p>
                <input class="calc-input" id="calc-hrs-inpt">
                <button id="calc-btn">
                    <p class="calc-btn-text">Calculate</p>
                </button>`;

        calcDiv.innerHTML += `<h2 id="calc-result">Total Cost: $${cost}</h2>`;

        const calcBtn = document.getElementById('calc-btn');
        calcBtn.addEventListener('click', () => {
            renderCalculation();
        });
    } catch (err) {
        calcDiv.innerHTML = `<div id="calc-input-div">
                <p class="calc-input-label">Hourly Rate: </p>
                <input class="calc-input" id="calc-rate-inpt">
                <p class="calc-input-label">Hours</p>
                <input class="calc-input" id="calc-hrs-inpt">
                <button id="calc-btn">
                    <p class="calc-btn-text">Calculate</p>
                </button>`;

        calcDiv.innerHTML += `<h2 id='calc-result'>Invalid Input'</h2>
                              <p>Enter numbers in input boxes</p>`;
        const calcBtn = document.getElementById('calc-btn');
        calcBtn.addEventListener('click', () => {
            renderCalculation();
        });                
        //return;
    }

    /*const cost = calculateTotalCosts(rate, hrs);

    calcDiv.innerHTML += `<h2 id="calc-result">Total Cost: $${cost}</h2>`;*/
}