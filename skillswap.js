export function filterSkillsByCategory(skills, category) {

    console.log(category);
    const filterResults = category == "All" ? skills : skills.filter(skill => {
        if(skill.category == category) {
            return skill;
        };
    });

    console.log(filterResults.length);
    if (filterResults.length == 0) {
        emptyResults();
    }

    return filterResults;
}

export function emptyResults() {
    console.log('No results match the filter');
}

export function calculateTotalCosts(rate, hrs) {
    return rate * hrs;
}

/*module.exports = {
    filterSkillsByCategory,
    emptyResults
};*/