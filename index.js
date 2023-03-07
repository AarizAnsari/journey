
var source = "";
var destination = "";



//GLOBAL OBJECT TO STORE SELECTED ROUTES
const routes = {
    'delhi': ['delhi'],
    'noida': ['noida'],
    'lucknow': ['lucknow'],
    'roorkee': ['roorkee'],
    'mumbai': ['mumbai'],
    'jaipur': ['jaipur']
};

const cities = ['delhi', 'noida', 'lucknow', 'roorkee', 'mumbai', 'jaipur'];

//FUNCTION TO DISABLE DESTINATION CITY WHEN SELECTED IN SOURCE
function setSource(trigger) {

    for (let i = 1; i <= 6; i++) {
        document.getElementById('destination').options[i].disabled = false;
    }

    if (trigger) {
        let x = document.getElementById('source').value;

        let blocked = routes[x];

        for (let i = 0; i < blocked.length; i++) {
            document.getElementById('destination').options[(cities.indexOf(blocked[i])) + 1].disabled = true;
        }

        document.getElementById('from').innerHTML = ("From :" + x).toUpperCase();
        source = x;
    }
}

//FUNCTION TO DISABLE SOURCE CITY WHEN SELECTED IN DESTINATION
function setDestination(trigger) {

    for (let i = 1; i <= 6; i++) {
        document.getElementById('source').options[i].disabled = false;
    }

    if (trigger) {
        let x = document.getElementById('destination').value;

        let blocked = routes[x];

        for (let i = 0; i < blocked.length; i++) {
            document.getElementById('source').options[(cities.indexOf(blocked[i])) + 1].disabled = true;
        }
        document.getElementById('to').innerHTML = ("To :" + x).toUpperCase();
        destination = x;
    }
}

//FUNTION TO SET SELCTED SOURCE AND DESTINATION TO A ROUTE
function setRoute() {
    try {
        if (source == '' || destination == '') {
            throw "Please select source and destination";
        }
        else {
            routes[source][routes[source].length] = destination;

            let data = "Selected Routes : <br>";

            data = document.getElementById('routes_list').innerHTML;
            data += "From :" + source.toUpperCase() + "&nbsp To:" + destination.toUpperCase() + "<br>";

            document.getElementById('routes_list').innerHTML = data;
            source = "";
            destination = "";
            document.getElementById('to').innerHTML = "";
            document.getElementById('from').innerHTML = "";
            document.getElementById('source').selectedIndex = "0";
            document.getElementById('destination').selectedIndex = "0";
            setSource(false);
            setDestination(false);
        }
    }
    catch (err) {
        window.alert(err);
    }
}