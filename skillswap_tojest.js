function filterSkillsByCategory(skills, category) {

    console.log(category);
    const filterResults = category == "All" ? skills : skills.filter(skill => {
        if(skill.category == category) {
            return skill;
        };
    });

    console.log(filterResults.length);
    if (filterResults.length == 0) {
        module.exports.emptyResults();
    }

    return filterResults;
}

function emptyResults() {
    console.log('No results match the filter');
}

function calculateTotalCosts(rate, hrs) {
    return rate * hrs;
}

module.exports = {
    filterSkillsByCategory,
    emptyResults,
    calculateTotalCosts
};