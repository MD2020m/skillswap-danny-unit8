const skillswap = require('../skillswap');

describe('filterSkillsByCategory', () => {

    const testSkills = [
        {
            id: 1,
            name: 'Web Development',
            category: 'Computer Science'
        },
        {
            id: 2,
            name: 'Programming Practicum',
            category: 'Computer Science'
        },
        {
            id: 3,
            name: 'Financial Math for Actuarial Exam FM',
            category: 'Mathematics'
        },
        {
            id: 4,
            name: 'Probability for Actuarial Exam P',
            category: 'Mathematics'
        }
    ]

    test('filters skills by category', () => {
        const filterResults = skillswap.filterSkillsByCategory(testSkills, 'Mathematics');

        expect(filterResults.length).toBe(2);
        expect(filterResults[0].id).toBe(3);
        expect(filterResults[1].id).toBe(4);
    });

    test('handles "All" category', () => {
        const allFilterResults = skillswap.filterSkillsByCategory(testSkills, 'All');

        expect(allFilterResults.length).toBe(4);
        expect(allFilterResults[0].id).toBe(1);
        expect(allFilterResults[3].id).toBe(4);
    });

    test('Checks for an empty array when no matches', () => {
        const filterResults = skillswap.filterSkillsByCategory(testSkills, 'Nothing');

        expect(filterResults.length).toBe(0);
    });
});