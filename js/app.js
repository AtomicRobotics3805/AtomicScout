const infoFieldset = document.getElementById("info");
const autoFieldset = document.getElementById("autonomous");
const teleopFieldset = document.getElementById("teleop");
const endgameFieldset = document.getElementById("endgame");

const stepInfo = document.getElementById("step_info");
const stepAuto = document.getElementById("step_auto");
const stepTeleop = document.getElementById("step_teleop");
const stepEndgame = document.getElementById("step_endgame");

function switchToInfo() {
    infoFieldset.classList.remove("hidden");
    autoFieldset.classList.add("hidden");
    teleopFieldset.classList.add("hidden");
    endgameFieldset.classList.add("hidden");

    // Update steps
    stepInfo.className = "step step-primary"
    stepAuto.className = "step"
    stepTeleop.className = "step"
    stepEndgame.className = "step"
}

function switchToTeleop() {
    infoFieldset.classList.add("hidden");
    autoFieldset.classList.add("hidden");
    teleopFieldset.classList.remove("hidden");
    endgameFieldset.classList.add("hidden");

    // Update steps
    stepInfo.className = "step step-primary"
    stepAuto.className = "step step-primary"
    stepTeleop.className = "step step-primary"
    stepEndgame.className = "step"
}

function switchToAutonomous() {
    infoFieldset.classList.add("hidden");
    autoFieldset.classList.remove("hidden");
    teleopFieldset.classList.add("hidden");
    endgameFieldset.classList.add("hidden");

    // Update steps
    stepInfo.className = "step step-primary"
    stepAuto.className = "step step-primary"
    stepTeleop.className = "step"
    stepEndgame.className = "step"
}

function switchToEndgame() {
    infoFieldset.classList.add("hidden");
    autoFieldset.classList.add("hidden");
    teleopFieldset.classList.add("hidden");
    endgameFieldset.classList.remove("hidden");

    // Update steps
    stepInfo.className = "step step-primary"
    stepAuto.className = "step step-primary"
    stepTeleop.className = "step step-primary"
    stepEndgame.className = "step step-primary"
}

function createJson(
    teamNumber,
    matchNumber,
    startSide,

    autoSamplesScored,
    autoSamplesDropped,
    autoSpecimensScored,
    autoSpecimensDropped,
    autoParkPos,
    autoNotes,

    teleopSamplesScored,
    teleopSamplesDropped,
    teleopSpecimensScored,
    teleopSpecimensDropped,
    teleopNotes,
    teleopParkPos,

    penaltyPoints,
    broke,
    robotDesign,
    otherNotes
) {
    return {
        teamNumber: teamNumber,
        matchNumber: matchNumber,
        startSide: startSide,
        autoSamplesScored: autoSamplesScored,
        autoSamplesDropped: autoSamplesDropped,
        autoSpecimensScored: autoSpecimensScored,
        autoSpecimensDropped: autoSpecimensDropped,
        autoParkPos: autoParkPos,
        autoNotes: autoNotes,
        teleopSamplesScored: teleopSamplesScored,
        teleopSamplesDropped: teleopSamplesDropped,
        teleopSpecimensScored: teleopSpecimensScored,
        teleopSpecimensDropped: teleopSpecimensDropped,
        teleopNotes: teleopNotes,
        teleopParkPos: teleopParkPos,
        penaltyPoints: penaltyPoints,
        broke: broke,
        robotDesign: robotDesign,
        otherNotes: otherNotes
    };
}

function getFormValues() {
    console.log("Submitting");
    let json = localStorage.getItem('json');

    if (json == null) {
        localStorage.setItem('json', JSON.stringify([]));
        json = localStorage.getItem('json');
    }

    const newJson = createJson(
        document.getElementById("teamNum").value,
        document.getElementById("matchNum").value,
        document.getElementById("startSide").value,
        document.getElementById("autoSamplesScored").value,
        document.getElementById("autoSamplesDropped").value,
        document.getElementById("autoSpecimensScored").value,
        document.getElementById("autoSpecimensDropped").value,
        document.getElementById("autoParkLocation").value,
        document.getElementById("autoNotes").value,
        document.getElementById("teleopSamplesScored").value,
        document.getElementById("teleopSamplesDropped").value,
        document.getElementById("teleopSpecimensScored").value,
        document.getElementById("teleopSpecimensDropped").value,
        document.getElementById("teleopNotes").value,
        document.getElementById("endgameParkLocation").value,
        document.getElementById("penaltyPoints").value,
        document.getElementById("wasBroken").checked,
        document.getElementById("robotDesign").value,
        document.getElementById("otherNotes").value
    );

    let finalJson = JSON.parse(json);
    finalJson.push(newJson);
    localStorage.setItem('json', JSON.stringify(finalJson));

    document.getElementById("inputForm").reset();
    switchToInfo();
}

function reset() {
    localStorage.clear()
}

function createTable() {
    const data = JSON.parse(localStorage.getItem('json'));

    document.write("<table border==\"1\"><tr>");
    for (key in data[0]) {
        document.write('<td>' + key + '</td>');
    }
    document.write("</tr>");
    for (var i = 0; i < data.length; i++) {
        document.write('<tr>');
        for (key in data[i]) {
            document.write('<td>' + data[i][key] + '</td>');
        }
        document.write('</tr>');
    }
    document.write("</table>");
}