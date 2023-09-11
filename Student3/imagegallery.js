// Define an object to store the details of each member
var members = {
  member1: {
    name: "Abdul",
    role: "Student 01"
  },
  member2: {
    name: "Shakthi",
    role: "Student 02"
  },
  member3: {
    name: "Lithila",
    role: "Student 03"
  },
  member4: {
    name: "Nilesh",
    role: "Student 04"
  }
};

// Get the member elements and details element from the HTML
var memberElements = document.querySelectorAll(".member");
var detailsElement = document.getElementById("details");

// Add event listeners to each member element
memberElements.forEach(function(memberElement) {
  memberElement.addEventListener("mouseover", function() {
    // Get the ID of the current member
    var memberId = memberElement.getAttribute("id");
    // Get the details of the current member from the members object
    var memberDetails = members[memberId];
    // Update the details element with the member's name and role
    detailsElement.innerHTML = memberDetails.name + " - " + memberDetails.role;
  });
  memberElement.addEventListener("mouseout", function() {
    // Clear the details element when the mouse moves away from the member element
    detailsElement.innerHTML = "";
  });
});
