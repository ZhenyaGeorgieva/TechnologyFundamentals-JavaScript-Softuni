function solve(input) {
    let companiesEmployees = new Map();

    for (let index = 0; index < input.length; index++) {
        let tokens = input[index].split(" -> ");
        let company = tokens[0];
        let employee = tokens[1];
        if (!companiesEmployees.has(company)) {
            companiesEmployees.set(company, []);
            companiesEmployees.get(company).push(employee);
        } else {
            if (!companiesEmployees.get(company).includes(employee)) {
                companiesEmployees.get(company).push(employee);
            }
        }
    }

    let sorted = [...companiesEmployees.entries()].sort((a, b) => a[0].localeCompare(b[0]));
    for (let [key, value] of sorted) {
        let company = key;
        let employees = value;
        console.log(company)
        for (let employee of employees) {
            console.log(`-- ${employee}`)
        }
    }
}
solve(['SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'])