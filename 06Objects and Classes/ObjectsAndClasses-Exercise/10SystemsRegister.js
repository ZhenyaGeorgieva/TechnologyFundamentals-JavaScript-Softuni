function solution(input) {
    let systems = [];
    for (let index = 0; index < input.length; index++) {
        let tokens = input[index].split(' | ');
        let system = tokens[0];
        let component = tokens[1];
        let subcomponent = tokens[2];

        if (!systems.hasOwnProperty(system)) {
            let systemOfSystem = systems[system];
            systemOfSystem = {};
            systemOfSystem[component] = [];
            systemOfSystem[component].push(compArr);
        } else {
            if (!systems[system].has(component)) {
                let compArr = {};
                compArr[component] = [];
                compArr[component].push(subcomponent);
                systems[system].push(compArr);
            } else {
                compArr[component].push(subcomponent);
                systems[system].push(compArr);
            }
        }
    }
    console.log(systems);
}

solution(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']
)