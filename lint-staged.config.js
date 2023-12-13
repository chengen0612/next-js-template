module.exports = {
  // Lint and format JavaScript files.
  "**/*.{js,jsx}": ["eslint --fix"],

  // Format json and markdown.
  "**/*.{json,md}": "prettier --write",
};
