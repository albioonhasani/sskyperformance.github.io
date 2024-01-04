function updateContent() {
    var selectedCountry = document.getElementById("country-select").value;
    var countryImage = document.getElementById("country-image");
    var deliveryTable = document.getElementById("delivery-table");

    switch (selectedCountry) {
        case "albania":
            countryImage.src = "albania.jpg";  
            updateTable([
                { type: "Standard Delivery", cost: "$4.00", time: "2-5 days" },
                { type: "Express Delivery", cost: "$9.00", time: "1-2 days" },
                { type: "Special Delivery", cost: "$14.00", time: "Next day" }
            ]);
            break;
            case "austria":
                updateTable([
                    { type: "Standard Delivery", cost: "$7.00", time: "2-5 days" },
                    { type: "Express Delivery", cost: "$12.00", time: "1-2 days" },
                    { type: "Special Delivery", cost: "$18.00", time: "Next day" }
                ]);
                break;
            case "belgium":
                countryImage.src = "belgium.jpg"; 
                updateTable([
                    { type: "Standard Delivery", cost: "$8.50", time: "3-7 days" },
                    { type: "Express Delivery", cost: "$13.00", time: "1-3 days" },
                    { type: "Special Delivery", cost: "$19.50", time: "Next day" }
                ]);
                break;
            case "bulgaria":
                countryImage.src = "bulgaria.jpg";  
                updateTable([
                    { type: "Standard Delivery", cost: "$5.00", time: "2-6 days" },
                    { type: "Express Delivery", cost: "$8.00", time: "1-2 days" },
                    { type: "Special Delivery", cost: "$11.00", time: "Next day" }
                ]);
                break;
            case "croatia":
                countryImage.src = "croatia.jpg";  
                updateTable([
                    { type: "Standard Delivery", cost: "$6.00", time: "2-5 days" },
                    { type: "Express Delivery", cost: "$11.00", time: "1-2 days" },
                    { type: "Special Delivery", cost: "$16.00", time: "Next day" }
                ]);
                break;
            case "czech-republic":
                countryImage.src = "czech-republic.jpg";  
                updateTable([
                    { type: "Standard Delivery", cost: "$5.50", time: "3-6 days" },
                    { type: "Express Delivery", cost: "$10.00", time: "1-2 days" },
                    { type: "Special Delivery", cost: "$15.00", time: "Next day" }
                ]);
                break;
            case "denmark":
                countryImage.src = "denmark.jpg";  
                updateTable([
                    { type: "Standard Delivery", cost: "$7.50", time: "2-5 days" },
                    { type: "Express Delivery", cost: "$13.00", time: "1-2 days" },
                    { type: "Special Delivery", cost: "$20.00", time: "Next day" }
                ]);
                break;
            case "estonia":
                countryImage.src = "estonia.jpg";  
                updateTable([
                    { type: "Standard Delivery", cost: "$7.00", time: "3-6 days" },
                    { type: "Express Delivery", cost: "$11.00", time: "1-2 days" },
                    { type: "Special Delivery", cost: "$17.00", time: "Next day" }
                ]);
                break;
            case "finland":
                countryImage.src = "finland.jpg";  
                updateTable([
                    { type: "Standard Delivery", cost: "$8.50", time: "2-5 days" },
                    { type: "Express Delivery", cost: "$15.00", time: "1-2 days" },
                    { type: "Special Delivery", cost: "$20.00", time: "Next day" }
                ]);
                break;
            case "greece":
                countryImage.src = "greece.jpg"; 
                updateTable([
                    { type: "Standard Delivery", cost: "$6.50", time: "3-6 days" },
                    { type: "Express Delivery", cost: "$11.00", time: "1-2 days" },
                    { type: "Special Delivery", cost: "$16.00", time: "Next day" }
                ]);
                break;
            case "germany":
                countryImage.src = "germany.jpg";  
                updateTable([
                    { type: "Standard Delivery", cost: "$6.00", time: "2-5 days" },
                    { type: "Express Delivery", cost: "$11.00", time: "1-2 days" },
                    { type: "Special Delivery", cost: "$16.00", time: "Next day" }
                ]);
                break;
            case "hungary":
                countryImage.src = "hungary.jpg";  
                updateTable([
                    { type: "Standard Delivery", cost: "$6.50", time: "3-6 days" },
                    { type: "Express Delivery", cost: "$9.00", time: "1-2 days" },
                    { type: "Special Delivery", cost: "$13.50", time: "Next day" }
                ]);
                break;
            case "italy":
                countryImage.src = "italy.jpg"; 
                updateTable([
                    { type: "Standard Delivery", cost: "$6.50", time: "2-6 days" },
                    { type: "Express Delivery", cost: "$12.00", time: "1-2 days" },
                    { type: "Special Delivery", cost: "$15.50", time: "Next day" }
                ]);
                break;
            case "kosovo":
                countryImage.src = "kosovo.jpg"; 
                updateTable([
                    { type: "Standard Delivery", cost: "$1.50", time: "3-6 days" },
                    { type: "Express Delivery", cost: "$5.50", time: "1-2 days" },
                    { type: "Special Delivery", cost: "$9.50", time: "Next day" }
                ]);
                break;
                case "lithuania":
        countryImage.src = "lithuania.jpg"; 
        updateTable([
            { type: "Standard Delivery", cost: "$7.50", time: "2-5 days" },
            { type: "Express Delivery", cost: "$12.00", time: "1-2 days" },
            { type: "Special Delivery", cost: "$18.00", time: "Next day" }
        ]);
        break;
    case "netherlands":
        countryImage.src = "netherlands.jpg";  
        updateTable([
            { type: "Standard Delivery", cost: "$8.50", time: "3-7 days" },
            { type: "Express Delivery", cost: "$14.00", time: "1-3 days" },
            { type: "Special Delivery", cost: "$17.00", time: "Next day" }
        ]);
        break;
    case "poland":
        countryImage.src = "poland.jpg";  
        updateTable([
            { type: "Standard Delivery", cost: "$7.50", time: "2-6 days" },
            { type: "Express Delivery", cost: "$13.00", time: "1-2 days" },
            { type: "Special Delivery", cost: "$16.00", time: "Next day" }
        ]);
        break;
    case "portugal":
        countryImage.src = "portugal.jpg";  
        updateTable([
            { type: "Standard Delivery", cost: "$7.50", time: "2-5 days" },
            { type: "Express Delivery", cost: "$12.00", time: "1-2 days" },
            { type: "Special Delivery", cost: "$17.00", time: "Next day" }
        ]);
        break;
    case "romania":
        countryImage.src = "romania.jpg";
        updateTable([
            { type: "Standard Delivery", cost: "$7.00", time: "3-6 days" },
            { type: "Express Delivery", cost: "$12.00", time: "1-2 days" },
            { type: "Special Delivery", cost: "$17.00", time: "Next day" }
        ]);
        break;
    case "slovakia":
        countryImage.src = "slovakia.jpg";  
        updateTable([
            { type: "Standard Delivery", cost: "$6.50", time: "2-5 days" },
            { type: "Express Delivery", cost: "$11.00", time: "1-2 days" },
            { type: "Special Delivery", cost: "$16.00", time: "Next day" }
        ]);
        break;
    case "slovenia":
        countryImage.src = "slovenia.jpg";  
        updateTable([
            { type: "Standard Delivery", cost: "$7.00", time: "2-5 days" },
            { type: "Express Delivery", cost: "$10.00", time: "1-2 days" },
            { type: "Special Delivery", cost: "$16.00", time: "Next day" }
        ]);
        break;
    case "spain":
        countryImage.src = "spain.jpg";  
        updateTable([
            { type: "Standard Delivery", cost: "$7.00", time: "3-7 days" },
            { type: "Express Delivery", cost: "$13.00", time: "1-3 days" },
            { type: "Special Delivery", cost: "$19.50", time: "Next day" }
        ]);
        break;
    case "sweden":
        countryImage.src = "sweden.jpg";  
        updateTable([
            { type: "Standard Delivery", cost: "$8.00", time: "2-5 days" },
            { type: "Express Delivery", cost: "$15.00", time: "1-2 days" },
            { type: "Special Delivery", cost: "$18.00", time: "Next day" }
        ]);
        break;
    case "france":
        countryImage.src = "france.jpg"; 
        updateTable([
            { type: "Standard Delivery", cost: "$6.50", time: "3-7 days" },
            { type: "Express Delivery", cost: "$12.50", time: "1-3 days" },
            { type: "Special Delivery", cost: "$18.50", time: "Next day" }
        ]);
        break;
    
    default:
        countryImage.src = "default.jpg";
        updateTable([]);
        break;
}


function updateTable(deliveryInfo) {
    var deliveryTable = document.getElementById("delivery-table");
    
    deliveryTable.innerHTML = "";

    
    var headerRow = deliveryTable.insertRow();
    ["Delivery Type", "Cost", "Estimated Delivery Time"].forEach(function (header) {
        var cell = headerRow.insertCell();
        cell.innerHTML = `<strong>${header}</strong>`;
    });

   
    deliveryInfo.forEach(function (info) {
        var row = deliveryTable.insertRow();
        var cells = [info.type, info.cost, info.time];
        cells.forEach(function (cellValue) {
            var cell = row.insertCell();
            cell.innerHTML = cellValue;
        });
    });
}
}