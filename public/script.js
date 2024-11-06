document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  // Create the main container
  const container = document.createElement("div");
  container.className = "main-container";

  // Title
  const title = document.createElement("h1");
  title.innerText = "Enter Your Birth Year";
  title.className = "title";
  container.appendChild(title);

  // Input field for birth year
  const input = document.createElement("input");
  input.type = "number";
  input.placeholder = "Enter your birth year";
  input.className = "input-field";
  container.appendChild(input);

  // Button to show generation
  const button = document.createElement("button");
  button.innerText = "Show Generation";
  button.className = "button";
  container.appendChild(button);

  // Result display
  const result = document.createElement("p");
  result.className = "result";
  container.appendChild(result);

  // Add container to the app div
  app.appendChild(container);

  // Function to determine the generation based on birth year
  function getGeneration(birthYear) {
    if (birthYear < 1900 || birthYear > 2024) {
      return { generation: "Error", message: "Please enter a year from 1900 to 2024.", image: "" };
    } else if (birthYear <= 1927) {
      return { generation: "The Greatest Generation", image: "path/to/greatest_generation.jpg" };
    } else if (birthYear <= 1945) {
      return { generation: "The Silent Generation", image: "path/to/silent_generation.jpg" };
    } else if (birthYear <= 1964) {
      return { generation: "Baby Boomers", image: "path/to/baby_boomers.jpg" };
    } else if (birthYear <= 1980) {
      return { generation: "Generation X", image: "path/to/generation_x.jpg" };
    } else if (birthYear <= 1996) {
      return { generation: "Millennials", image: "path/to/millennials.jpg" };
    } else if (birthYear <= 2012) {
      return { generation: "Generation Z", image: "path/to/generation_z.jpg" };
    } else {
      return { generation: "Generation Alpha", image: "path/to/generation_alpha.jpg" };
    }
  }

  // Event listener for the button
  button.addEventListener("click", () => {
    const birthYear = parseInt(input.value);
    const generationInfo = getGeneration(birthYear);

    if (generationInfo.generation === "Error") {
      result.innerText = generationInfo.message;
      result.className = "result error"; // Apply error styling
      app.style.backgroundImage = "none";
    } else {
      result.innerText = `You belong to ${generationInfo.generation}`;
      result.className = "result success"; // Apply success styling
      app.style.backgroundImage = `url(${generationInfo.image})`;
      app.style.backgroundSize = "cover";
      app.style.backgroundPosition = "center";
    }
  });
});
