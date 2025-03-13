document.getElementById("jsonButton").addEventListener("click", function() {
    console.log("pressed");
    importFromFile(document.getElementById("jsonInput"))
        .then(content => handleFile(JSON.parse(content.toString())))
        .catch(error => console.error(error));
});

let textFile = null;

function makeTextFile(text) {
    const data = new Blob([text], { type: 'application/json' });

    // Revoke the old object URL to prevent memory leaks
    if (textFile !== null) {
        URL.revokeObjectURL(textFile);
    }

    textFile = URL.createObjectURL(data);
    return textFile; // Returns a URL for the file
}

const button = document.getElementById("jsonButtonExport");

button.addEventListener("mouseover", function () {
    const jsonData = localStorage.getItem("json") || '{}'; // Default to empty JSON if no data
    const blobUrl = makeTextFile(jsonData);

    // Turn the button into a download link
    button.setAttribute("href", blobUrl);
    button.setAttribute("download", "atomicScoutExportedData.json");
    button.style.cursor = "pointer"; // Indicate it's clickable
});

// Ensure it behaves like a link
button.addEventListener("click", function (event) {
    if (!button.href.startsWith("blob:")) {
        event.preventDefault(); // Stop if file is not ready
        alert("File is not ready yet! Hover over the button first.");
    }
});

function importFromFile(fileInput) {
    return new Promise((resolve, reject) => {
        const file = fileInput.files[0]; // Get the first file from the input
        if (!file) {
            reject("No file selected");
            return;
        }

        const reader = new FileReader();

        reader.onload = (event) => {
            resolve(event.target.result); // Return the file contents as a string
        };

        reader.onerror = () => {
            reject("Error reading file");
        };

        reader.readAsText(file); // Read file as text
    });
}

function handleFile(jsonFile) {
    let currentArr = JSON.parse(localStorage.getItem("json"))
    for (let i = 0; i < jsonFile.length; i++) {
        let canContinue = true;
        for (let j = 0; j < currentArr.length; j++) {
            if (jsonFile[i].teamNumber === currentArr[j].teamNumber && jsonFile[i].matchNumber === currentArr[j].matchNumber) {
                // This match already exists in the database. Continue to the next one.
                canContinue = false;
            }
        }

        if (canContinue) {
            currentArr.push(jsonFile[i]);
        }
    }

    localStorage.setItem("json", JSON.stringify(currentArr));

    create();
    document.getElementById("jsonInput").value = "";
}