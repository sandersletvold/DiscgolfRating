function calculate() {
    let round = {
        course: $("#chooseCourse").val(),
        strokes: $("#strokeCount").val()
    };

    if (round.course === "Hvam Main") {
        $.get("/hvamMain", function(data) {
            if (Array.isArray(data)) {
                let strokes = parseInt(round.strokes, 10);
                if (strokes >= 0 && strokes < data.length) {
                    let value = data[strokes];
                    let course = round.course;
                    addToTable(course, strokes, value);
                } else {
                    alert("Antall kast er utenfor gyldig område.");
                }
            } else {
                alert("Feil i dataformatet fra server.");
            }
        }).fail(function() {
            alert("Kunne ikke hente data fra server.");
        });
    } else if (round.course === "Ekeberg") {
        $.get("/ekeberg", function(data) {
            if (Array.isArray(data)) {
                let strokes = parseInt(round.strokes, 10);
                if (strokes >= 0 && strokes < data.length) {
                    let value = data[strokes];
                    let course = round.course;
                    addToTable(course, strokes, value);
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
        alert("Ugyldig bane valgt.");
    }
}

function addToTable(course, strokes, value) {
    // Finn tabellen
    let table = $("#allRounds");

    // Lag en ny rad
    let newRow = $("<tr>");

    // Lag celler for antall kast og verdi
    let courseCell = $("<td>").text(course)
    let strokesCell = $("<td>").text(strokes);
    let valueCell = $("<td>").text(value);

    // Legg cellene til raden
    newRow.append(courseCell).append(strokesCell).append(valueCell);

    // Legg den nye raden til tabellen
    table.append(newRow);
}