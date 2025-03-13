function populateDetails(teamNum, matchNum) {
    let allTheData = JSON.parse(localStorage.getItem('json'));
    let thisMatch;
    for (let i = 0; i < allTheData.length; i++) {
        if (allTheData[i].teamNumber === teamNum && allTheData[i].matchNumber === matchNum) {
            thisMatch = allTheData[i];
            break;
        }
    }

    document.getElementById("detailsMatchNum").innerText = thisMatch.matchNumber;
    document.getElementById("detailsTeamNum").innerText = thisMatch.teamNumber;
    document.getElementById("detailsStartingPos").innerText = thisMatch.startSide;
    document.getElementById("detailsAutoHighSamples").innerText = createScoreAndDroppedString(thisMatch.autoHighSamplesScored, thisMatch.autoHighSamplesDropped);
    document.getElementById("detailsAutoLowSamples").innerText = createScoreAndDroppedString(thisMatch.autoLowSamplesScored, thisMatch.autoLowSamplesDropped);
    document.getElementById("detailsAutoNetSamples").innerText = createScoreAndDroppedString(thisMatch.autoNetSamplesScored, thisMatch.autoNetSamplesDropped);

    document.getElementById("detailsAutoHighSpecimens").innerText = createScoreAndDroppedString(thisMatch.autoHighSpecimensScored, thisMatch.autoHighSpecimensDropped);
    document.getElementById("detailsAutoLowSpecimens").innerText = createScoreAndDroppedString(thisMatch.autoLowSpecimensScored, thisMatch.autoLowSpecimensDropped);
    document.getElementById("detailsAutoPark").innerText = thisMatch.autoParkPos;
    document.getElementById("detailsAutoNotes").innerText = thisMatch.autoNotes;

    document.getElementById("detailsTeleOpHighSamples").innerText = createScoreAndDroppedString(thisMatch.teleopHighSamplesScored, thisMatch.teleopHighSamplesDropped);
    document.getElementById("detailsTeleOpLowSamples").innerText = createScoreAndDroppedString(thisMatch.teleopLowSamplesScored, thisMatch.teleopLowSamplesDropped);
    document.getElementById("detailsTeleOpNetSamples").innerText = createScoreAndDroppedString(thisMatch.teleopNetSamplesScored, thisMatch.teleopNetSamplesDropped);

    document.getElementById("detailsTeleOpHighSpecimens").innerText = createScoreAndDroppedString(thisMatch.teleopHighSpecimensScored, thisMatch.teleopHighSamplesDropped);
    document.getElementById("detailsTeleOpLowSpecimens").innerText = createScoreAndDroppedString(thisMatch.teleopLowSpecimensScored, thisMatch.teleopLowSpecimensDropped);
    document.getElementById("detailsTeleOpNotes").innerText = thisMatch.teleopNotes;

    document.getElementById("detailsTeleOpPark").innerText = thisMatch.teleopParkPos;
    document.getElementById("detailsRobotDesign").innerText = thisMatch.robotDesign;
    if(thisMatch.broke) document.getElementById("detailsBroke").innerText = "Yes"; else document.getElementById("detailsBroke").innerText = "No";
    document.getElementById("detailsPenalties").innerText = thisMatch.penaltyPoints;
    document.getElementById("detailsNotes").innerText = thisMatch.otherNotes;
}

function createScoreAndDroppedString(scored, dropped) {
    if (scored === '') scored = '0';
    if (dropped === '') dropped = '0';
    return scored + " / " + dropped;
}