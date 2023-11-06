const properties = [];
let option = "";

do {
  option = prompt(
    "Welcome to the Property Registry!\n" +
      "Registered Properties: " +
      properties.length +
      "\n\nChoose an Option:\n1. Register property\n2. View Registered Properties\n3. Exit"
  );

  switch (option) {
    case "1":
      const property = {};

      property.owner = prompt("Enter the name of the property owner:");
      property.rooms = prompt("How many rooms does the property have?");
      property.bathrooms = prompt("How many bathrooms does the property have?");
      property.garage = prompt("Does the property have a garage? (Yes/No)");

      const confirmation = confirm(
        "Can you confirm the information?\n" +
          "\nOwner: " +
          property.owner +
          "\nRooms: " +
          property.rooms +
          "\nBathrooms: " +
          property.bathrooms +
          "\nDoes it have a garage?" +
          property.garage
      );

      if (confirmation) {
        properties.push(property);
        alert("Property Registered Successfully");
      } else {
        alert("Returning to menu.");
      }
      break;
    case "2":
      for (let i = 0; i < properties.length; i++) {
        alert(
          "Property " +
            (i + 1) +
            "\nOwner: " +
            properties[i].owner +
            "\nRooms: " +
            properties[i].rooms +
            "\nBathrooms: " +
            properties[i].bathrooms +
            "\nDoes it have a garage? " +
            properties[i].garage
        );
      }
      break;
    case "3":
      alert("Exiting...");
      break;
    default:
      alert("Invalid Option!");
  }
} while (option !== "3");
