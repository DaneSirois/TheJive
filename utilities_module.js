let utilities_module = {};

utilities_module.generateRandomColor = function () {
  const colors = ["#45b983", "#6ff147", "#dda210", "#2df0f9", "#11a9f2"];

  return colors[Math.floor(Math.random() * colors.length)];
};

module.exports = utilities_module;