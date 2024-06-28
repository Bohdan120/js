function saveColor() {
  const colorNameInput = document.getElementById("color-name");
  const colorTypeInput = document.getElementById("color-type");
  const colorCodeInput = document.getElementById("color-code");

  const validationErrors = validateColor(colorNameInput.value, colorTypeInput.value, colorCodeInput.value);

  if (validationErrors.length > 0) {
      alert(validationErrors.join("\n"));
      return;
  }

  const newColor = {
      name: colorNameInput.value.toLowerCase(),
      type: colorTypeInput.value,
      code: colorCodeInput.value
  };

  const existingColors = getColorsFromCookie();

  if (existingColors.some(color => color.name === newColor.name)) {
      alert("Color name must be unique.");
      return;
  }

  existingColors.push(newColor);
  saveColorsToCookie(existingColors);
  displayColorPalette(existingColors);
}

function validateColor(name, type, code) {
  const errors = [];

  if (!name.match(/^[a-zA-Z]+$/)) {
      errors.push("Color name must contain only letters.");
  }

  if (!["RGB", "HEX"].includes(type)) {
      errors.push("Invalid color type.");
  }

  // Validate color code based on type
  if (type === "RGB" && !code.match(/^(\d{1,3},\s*\d{1,3},\s*\d{1,3})$/)) {
      errors.push("Invalid RGB color code format.");
  } else if (type === "HEX" && !code.match(/^#[0-9a-fA-F]{6}$/)) {
      errors.push("Invalid HEX color code format.");
  }

  return errors;
}

function getColorsFromCookie() {
  const storedColors = document.cookie.replace(/(?:(?:^|.*;\s*)colors\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  return storedColors ? JSON.parse(storedColors) : [];
}

function saveColorsToCookie(colors) {
  const jsonColors = JSON.stringify(colors);
  document.cookie = `colors=${jsonColors}; max-age=${3 * 60 * 60}`; 
}

function displayColorPalette(colors) {
  const colorListContainer = document.getElementById("color-list");
  colorListContainer.innerHTML = "<h2>Color Palette</h2>";

  colors.forEach(color => {
      const colorItem = document.createElement("div");
      colorItem.style.backgroundColor = color.type === "HEX" ? color.code : `rgb(${color.code})`;
      colorItem.className = "color-item";
      colorItem.textContent = `${color.name} - ${color.type}: ${color.code}`;
      colorListContainer.appendChild(colorItem);
  });
}

displayColorPalette(getColorsFromCookie());
