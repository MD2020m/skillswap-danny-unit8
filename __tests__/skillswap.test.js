import { filterSkillsByCategory, emptyResults } from "./skillswap";

describe('filterSkillsByCategory', () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });

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
        const filterResults = filterSkillsByCategory(testSkills, 'Mathematics');

        expect(length(filterResults)).toBe(2);
        expect(filterResults[0].id).toBe(3);
        expect(filterResults[1].id).toBe(4);
    });

    test('handles "All" category', () => {
        const allFilterResults = filterSkillsByCategory(testSkills, 'All');

        expect(length(allFilterResults)).toBe(4);
        expect(filterResults[0].id).toBe(1);
        expect(filterResults[3].id).toBe(4);
    });

    test('Checks for an empty array when no matches', () => {
        const emptyResultsSpy = jest.spyOn(skillswap, emptyResults);

        const filterResults = filterSkillsByCategory(testSkills, 'Nothing');

        expect(length(filterResults)).toBe(0);
        expect(emptyResultsSpy).toHaveBeenCalled();
    });
});