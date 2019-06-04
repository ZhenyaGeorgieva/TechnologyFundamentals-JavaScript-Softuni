function solve(input) {
    let heroesTechniques = new Map();
    let heroesPointsTotal = new Map();
    for (let index = 0; index < input.length; index++) {
        if (input[index].includes("->")) {
            let tokens = input[index].split(" -> ");
            let name = tokens[0];
            let technique = tokens[1];
            let points = Number(tokens[2]);
            if (!heroesTechniques.has(name)) {
                heroesTechniques.set(name, new Map());
                heroesTechniques.get(name).set(technique, points);
                if (!heroesPointsTotal.has(name)) {
                    heroesPointsTotal.set(name, points);
                } else {
                    heroesPointsTotal.set(name, heroesPointsTotal.get(name) + points);
                }
            } else {
                if (heroesTechniques.get(name).has(technique)) {
                    if (heroesTechniques.get(name).get(technique) < points) {
                        let difference = points - heroesTechniques.get(name).get(technique);
                        heroesTechniques.get(name).set(technique, points)
                        heroesPointsTotal.set(name, heroesPointsTotal.get(name) + difference);
                    }
                } else {
                    heroesTechniques.get(name).set(technique, points);
                    heroesPointsTotal.set(name, heroesPointsTotal.get(name) + points);
                }
            }
        } else if (input[index].includes("vs")) {
            let tokens = input[index].split(" vs ");
            let heroOne = tokens[0];
            let heroTwo = tokens[1];
            if (heroesTechniques.has(heroOne) && heroesTechniques.has(heroTwo)) {
                let heroOneTech = heroesTechniques.get(heroOne);
                let heroTwoTech = heroesTechniques.get(heroTwo);
                let secondKeys = [...heroTwoTech.keys()];
                let common = [...heroOneTech.keys()]
                    .filter(g => secondKeys.includes(g));
                if (common.length > 0) {
                    let heroOneTotal = heroesPointsTotal.get(heroOne);
                    let heroTwoTotal = heroesPointsTotal.get(heroTwo);
                    let heroToRemove;
                    if (heroOneTotal > heroTwoTotal) {
                        heroToRemove = heroTwo;
                    } else {
                        heroToRemove = heroOne;
                    }
                    heroesTechniques.delete(heroToRemove);
                    heroesPointsTotal.delete(heroToRemove);
                }

            }
        }
    }
    
    function compareGladiators(a, b) {
        let aName = a[0];
        let bName = b[0];
        let aTotalPoints = a[1];
        let bTotalPoints = b[1];
        let firstCriteria = bTotalPoints - aTotalPoints;
        if (firstCriteria === 0) {
            return aName.LocaleCompare(bName);
        } else {
            return firstCriteria;
        }
    }
    
    function compareTechniques(a, b) {
        let firstCriteria = b[1] - a[1];
        if (firstCriteria === 0) {
            return a[0].localeCompare(b[0]);
        }
        return firstCriteria;
    }
    
    let sortedGladiators = [...heroesPointsTotal].sort(compareGladiators);
    for (let [key, value] of sortedGladiators) {
        let name = key;
        let totalPoints = value;
        console.log(`${name}: ${totalPoints} skill`)
        let techniquesPoints = heroesTechniques.get(name);
        let sortedTech = [...techniquesPoints].sort(compareTechniques);
        for (let [key1, value1] of sortedTech) {
            let technique = key1;
            let points = value1;
            console.log(`- ${technique} <!> ${points}`);
        }
    }
}
solve(['Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar']
)