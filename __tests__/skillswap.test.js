const skillswap = require('../skillswap_tojest');

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
        const emptyResultsSpy = jest.spyOn(skillswap, 'emptyResults');

        const filterResults = skillswap.filterSkillsByCategory(testSkills, 'Nothing');

        expect(filterResults.length).toBe(0);
        expect(emptyResultsSpy).toHaveBeenCalled();
    });
});

describe('calculateTotalCosts', () => {

    test('returns the correct values for different hours and rates', () => {
        const hr1 = 2.5;
        const rate1 = 20;
        const cost1 = hr1 * rate1;

        const hr2 = 4;
        const rate2 = 30;
        const cost2 = 4 * 30;

        const hr3 = 1;
        const rate3 = 25;
        const cost3 = hr3 * rate3;

        const result1 = skillswap.calculateTotalCosts(rate1, hr1);
        const result2 = skillswap.calculateTotalCosts(rate2, hr2);
        const result3 = skillswap.calculateTotalCosts(rate3, hr3);

        expect(result1).toBe(cost1);
        expect(result2).toBe(cost2);
        expect(result3).toBe(cost3);
    });

    test('handles free sessions (0 price and 0 hours)', () => {
        const zeroHours = skillswap.calculateTotalCosts(20, 0);
        const zeroRate = skillswap.calculateTotalCosts(0, 4);
        const zeroBoth = skillswap.calculateTotalCosts(0, 0);

        expect(zeroHours).toBe(0);
        expect(zeroRate).toBe(0);
        expect(zeroBoth).toBe(0);
    });

    test('returns correct value for decimal hours', () => {
        const decHr = 1.5;
        const rate = 20;
        const cost = decHr * rate;

        const result = skillswap.calculateTotalCosts(rate, decHr);

        expect(result).toBe(cost);
    });
});