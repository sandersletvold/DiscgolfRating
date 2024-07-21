let roundNr = 1;

function calculate() {
    let round = {
        roundNr: roundNr,
        name: $("#name").val(),
        course: $("#chooseCourse").val(),
        strokes: $("#strokeCount").val()
    };

    $("#name").val("");
    $("#strokeCount").val("");
    $("#chooseCourse").val("");
    $("#totalStrokes").html("Total Strokes");

    if (round.course === "Ekeberg") {
        $.get("/ekeberg", function(data) {
            if (Array.isArray(data)) {
                let strokes = parseInt(round.strokes, 10);
                if (strokes >= 0 && strokes < data.length) {
                    let value = data[strokes];
                    addToTable(round.name, round.course, strokes, value);
                    roundNr++;
                } else {
                    alert("Antall kast er utenfor gyldig område.");
                }
            } else {
                alert("Feil i dataformatet fra server.");
            }
        }).fail(function() {
            alert("Kunne ikke hente data fra server.");
        });
    } else if (round.course === "Hvam Main") {
        $.get("/hvamMain", function(data) {
            if (Array.isArray(data)) {
                let strokes = parseInt(round.strokes, 10);
                if (strokes >= 0 && strokes < data.length) {
                    let value = data[strokes];
                    addToTable(round.name, round.course, strokes, value);
                    roundNr++;
                } else {
                    alert("Antall kast er utenfor gyldig område.");
                }
            } else {
                alert("Feil i dataformatet fra server.");
            }
        }).fail(function() {
            alert("Kunne ikke hente data fra server.");
        });
    } else if (round.course === "Jessheim") {
        $.get("/jessheim", function(data) {
            if (Array.isArray(data)) {
                let strokes = parseInt(round.strokes, 10);
                if (strokes >= 0 && strokes < data.length) {
                    let value = data[strokes];
                    addToTable(round.name, round.course, strokes, value);
                    roundNr++;
                } else {
                    alert("Antall kast er utenfor gyldig område.");
                }
            } else {
                alert("Feil i dataformatet fra server.");
            }
        }).fail(function() {
            alert("Kunne ikke hente data fra server.");
        });
    } else if (round.course === "Krokhol Blue") {
        $.get("/krokholBlue", function(data) {
            if (Array.isArray(data)) {
                let strokes = parseInt(round.strokes, 10);
                if (strokes >= 0 && strokes < data.length) {
                    let value = data[strokes];
                    addToTable(round.name, round.course, strokes, value);
                    roundNr++;
                } else {
                    alert("Antall kast er utenfor gyldig område.");
                }
            } else {
                alert("Feil i dataformatet fra server.");
            }
        }).fail(function() {
            alert("Kunne ikke hente data fra server.");
        });
    } else if (round.course === "Krokhol Gold") {
        $.get("/krokholGold", function(data) {
            if (Array.isArray(data)) {
                let strokes = parseInt(round.strokes, 10);
                if (strokes >= 0 && strokes < data.length) {
                    let value = data[strokes];
                    addToTable(round.name, round.course, strokes, value);
                    roundNr++;
                } else {
                    alert("Antall kast er utenfor gyldig område.");
                }
            } else {
                alert("Feil i dataformatet fra server.");
            }
        }).fail(function() {
            alert("Kunne ikke hente data fra server.");
        });
    } else if (round.course === "Myrdammen") {
        $.get("/myrdammen", function(data) {
            if (Array.isArray(data)) {
                let strokes = parseInt(round.strokes, 10);
                if (strokes >= 0 && strokes < data.length) {
                    let value = data[strokes];
                    addToTable(round.name, round.course, strokes, value);
                    roundNr++;
                } else {
                    alert("Antall kast er utenfor gyldig område.");
                }
            } else {
                alert("Feil i dataformatet fra server.");
            }
        }).fail(function() {
            alert("Kunne ikke hente data fra server.");
        });
    } else if (round.course === "Nannestad 18-holes") {
        $.get("/nannestad18", function(data) {
            if (Array.isArray(data)) {
                let strokes = parseInt(round.strokes, 10);
                if (strokes >= 0 && strokes < data.length) {
                    let value = data[strokes];
                    addToTable(round.name, round.course, strokes, value);
                    roundNr++;
                } else {
                    alert("Antall kast er utenfor gyldig område.");
                }
            } else {
                alert("Feil i dataformatet fra server.");
            }
        }).fail(function() {
            alert("Kunne ikke hente data fra server.");
        });
    } else if (round.course === "Nannestad 23-holes") {
        $.get("/nannestad23", function(data) {
            if (Array.isArray(data)) {
                let strokes = parseInt(round.strokes, 10);
                if (strokes >= 0 && strokes < data.length) {
                    let value = data[strokes];
                    addToTable(round.name, round.course, strokes, value);
                    roundNr++;
                } else {
                    alert("Antall kast er utenfor gyldig område.");
                }
            } else {
                alert("Feil i dataformatet fra server.");
            }
        }).fail(function() {
            alert("Kunne ikke hente data fra server.");
        });
    } else if (round.course === "Rådhusparken") {
        $.get("/radhusparken", function(data) {
            if (Array.isArray(data)) {
                let strokes = parseInt(round.strokes, 10);
                if (strokes >= 0 && strokes < data.length) {
                    let value = data[strokes];
                    addToTable(round.name, round.course, strokes, value);
                    roundNr++;
                } else {
                    alert("Antall kast er utenfor gyldig område.");
                }
            } else {
                alert("Feil i dataformatet fra server.");
            }
        }).fail(function() {
            alert("Kunne ikke hente data fra server.");
        });
    } else if (round.course === "Stovner") {
        $.get("/stovner", function(data) {
            if (Array.isArray(data)) {
                let strokes = parseInt(round.strokes, 10);
                if (strokes >= 0 && strokes < data.length) {
                    let value = data[strokes];
                    addToTable(round.name, round.course, strokes, value);
                    roundNr++;
                } else {
                    alert("Antall kast er utenfor gyldig område.");
                }
            } else {
                alert("Feil i dataformatet fra server.");
            }
        }).fail(function() {
            alert("Kunne ikke hente data fra server.");
        });
    } else if (round.course === "Valstad") {
        $.get("/valstad", function(data) {
            if (Array.isArray(data)) {
                let strokes = parseInt(round.strokes, 10);
                if (strokes >= 0 && strokes < data.length) {
                    let value = data[strokes];
                    addToTable(round.name, round.course, strokes, value);
                    roundNr++;
                } else {
                    alert("Antall kast er utenfor gyldig område.");
                }
            } else {
                alert("Feil i dataformatet fra server.");
            }
        }).fail(function() {
            alert("Kunne ikke hente data fra server.");
        });
    } else {
        alert("Ugyldig bane");
    }
}

function addToTable(name, course, strokes, value) {
    // Finn tabellen
    let table = $("#allRounds");

    // Lag en ny rad
    let newRow = $("<tr>").attr("id", "round-" + roundNr);

    // Lag celler for antall kast og verdi
    let courseCell = $("<td>").text(course);
    let strokesCell = $("<td>").text(strokes);
    let valueCell = $("<td>").text(value);
    let nameCell = $("<td>").text(name);
    let deleteButton = $("<button class='btn btn-danger btn-block' onclick='deleteRound(" + roundNr + ")'>Delete</button>");

    // Legg cellene til raden
    newRow.append(nameCell).append(courseCell).append(strokesCell).append(valueCell).append($("<td>").append(deleteButton));

    // Legg den nye raden til tabellen
    table.append(newRow);
}

function deleteRound(roundNr) {
    // Fjern raden
    $("#round-" + roundNr).remove();
}

function checkCourse() {
    if ($("#chooseCourse").val() === "Ekeberg") {
        $("#totalStrokes").html("Total Strokes - Par 55");
    } else if ($("#chooseCourse").val() === "Hvam Main") {
        $("#totalStrokes").html("Total Strokes - Par 62");
    } else if ($("#chooseCourse").val() === "Jessheim") {
        $("#totalStrokes").html("Total Strokes - Par 58");
    } else if ($("#chooseCourse").val() === "Krokhol Blue") {
        $("#totalStrokes").html("Total Strokes - Par 62");
    } else if ($("#chooseCourse").val() === "Krokhol Gold") {
        $("#totalStrokes").html("Total Strokes - Par 62");
    } else if ($("#chooseCourse").val() === "Myrdammen") {
        $("#totalStrokes").html("Total Strokes - Par 56");
    } else if ($("#chooseCourse").val() === "Nannestad 18-holes") {
        $("#totalStrokes").html("Total Strokes - Par 56");
    } else if ($("#chooseCourse").val() === "Nannestad 23-holes") {
        $("#totalStrokes").html("Total Strokes - Par 73");
    }else if ($("#chooseCourse").val() === "Rådhusparken") {
        $("#totalStrokes").html("Total Strokes - Par 54");
    }else if ($("#chooseCourse").val() === "Stovner") {
        $("#totalStrokes").html("Total Strokes - Par 56");
    } else if ($("#chooseCourse").val() === "Valstad") {
        $("#totalStrokes").html("Total Strokes - Par 56");
    } else {
        $("#totalStrokes").html("Total Strokes");
    }
}

function sortByName() {
    alert("Funksjon som sorterer rundene er under arbeid!");
}

function sortByCourse() {
    alert("Funksjon som sorterer rundene er under arbeid!");
}

function sortByStrokes() {
    alert("Funksjon som sorterer rundene er under arbeid!");
}

function sortByRating() {
    alert("Funksjon som sorterer rundene er under arbeid!");
}