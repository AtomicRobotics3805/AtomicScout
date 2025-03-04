const infoFieldset = document.getElementById("info");
const autoFieldset = document.getElementById("autonomous");
const teleopFieldset = document.getElementById("teleop");
const endgameFieldset = document.getElementById("endgame");

const stepInfo = document.getElementById("step_info");
const stepAuto = document.getElementById("step_auto");
const stepTeleop = document.getElementById("step_teleop");
const stepEndgame = document.getElementById("step_endgame");

function switchToInfo() {
    infoFieldset.className = "fieldset bg-base-200 border-base-300 rounded-box mx-auto mt-10 w-md border p-4"
    autoFieldset.className = "hidden";
    teleopFieldset.className = "hidden";
    endgameFieldset.className = "hidden";

    // Update steps
    stepInfo.className = "step step-primary"
    stepAuto.className = "step"
    stepTeleop.className = "step"
    stepEndgame.className = "step"
}


function switchToTeleop() {
    infoFieldset.className = "hidden"
    autoFieldset.className = "hidden";
    teleopFieldset.className = "fieldset bg-base-200 border-base-300 rounded-box mx-auto mt-10 w-sm border p-4";
    endgameFieldset.className = "hidden";

    // Update steps
    stepInfo.className = "step"
    stepAuto.className = "step"
    stepTeleop.className = "step step-primary"
    stepEndgame.className = "step"
}

function switchToAutonomous() {
    infoFieldset.className = "hidden"
    autoFieldset.className = "fieldset bg-base-200 border-base-300 rounded-box mx-auto mt-10 w-sm border p-4";
    teleopFieldset.className = "hidden";
    endgameFieldset.className = "hidden";

    // Update steps
    stepInfo.className = "step"
    stepAuto.className = "step step-primary"
    stepTeleop.className = "step"
    stepEndgame.className = "step"
}

function switchToEndgame() {
    infoFieldset.className = "hidden"
    autoFieldset.className = "hidden";
    teleopFieldset.className = "hidden";
    endgameFieldset.className = "fieldset bg-base-200 border-base-300 rounded-box mx-auto mt-10 w-sm border p-4"

    // Update steps
    stepInfo.className = "step"
    stepAuto.className = "step"
    stepTeleop.className = "step"
    stepEndgame.className = "step step-primary"
}
