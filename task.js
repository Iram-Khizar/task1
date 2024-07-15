// Step 1: Create a user object
const user = {
  firstName: "Maliha",
  lastName: "Khizar",
};

// Step 2: Function to determine avatar color
function getAvatarColor(firstName) {
  const colorMapping = {
    A: "#687399",
    G: "#687399",
    M: "#687399",
    S: "#687399",
    Y: "#687399",
    B: "#6DAEB0",
    H: "#6DAEB0",
    N: "#6DAEB0",
    T: "#6DAEB0",
    Z: "#6DAEB0",
    C: "#FFDCA8",
    I: "#FFDCA8",
    O: "#FFDCA8",
    U: "#FFDCA8",
    D: "#FAA578",
    J: "#FAA578",
    P: "#FAA578",
    V: "#FAA578",
    E: "#C46693",
    K: "#C46693",
    Q: "#C46693",
    W: "#C46693",
    F: "#78518A",
    L: "#78518A",
    R: "#78518A",
    X: "#78518A",
  };
  const firstLetter = firstName.charAt(0).toUpperCase();
  return colorMapping[firstLetter] || "#000000"; // Default to black if no match
}

// Step 3: Apply the function and set the avatar color
const avatarElement = document.getElementById("avatar");
const avatarColor = getAvatarColor(user.firstName);
avatarElement.style.backgroundColor = avatarColor;
avatarElement.textContent = user.firstName;

// Print the avatar color
console.log(
  `Avatar color for ${user.firstName} ${user.lastName} is: ${avatarColor}`
);
