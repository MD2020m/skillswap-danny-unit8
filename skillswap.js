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

/*module.exports = {
    filterSkillsByCategory,
    emptyResults
};*/