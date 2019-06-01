function solve(input) {
    let flights = [];
    let flightsList = input[0];
    let flightStatus = input[1];
    let flightStatusToSeach = input[2][0];

    for (let index = 0; index < flightsList.length; index++) {
        let tokens = flightsList[index].split(' ');
        let flightName = tokens[0];
        let flightDestination = tokens[1];
        let obj = {
            name: '',
            destination: '',
            status: ''
        };
        obj.name = flightName;
        obj.destination = flightDestination;
        obj.status = 'Ready to fly';
        flights.push(obj);
    }

    for (let index = 0; index < flightStatus.length; index++) {
        let tokens = flightStatus[index].split(' ');
        let flightName = tokens[0];
        let status = tokens[1];
        if (flights.some(x => x.name == flightName)) {
            let filteredFlight = flights.find(x => x.name === flightName);
            filteredFlight.status = status;
        }
    }

    let filteredFlights = flights.filter(x => x.status == flightStatusToSeach);

    for (let arr of filteredFlights) {
        let currentDestination = arr.destination;
        let currentStatus = arr.status;
        console.log(`{ Destination: '${currentDestination}', Status: '${currentStatus}' }`)
    }
}
solve([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
]
)