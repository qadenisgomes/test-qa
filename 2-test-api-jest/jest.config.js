const path = require("path");

module.exports = {
  reporters: [
    "default",
    ["jest-html-reporter", {
      "pageTitle": "Relatório de Testes",
      "outputPath": path.join(__dirname, `./reports/jest-report_${new Date().toLocaleDateString("pt-BR").replace(/\//g, "-")}_${new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }).replace(":", "-")}.html`),
      "includeFailureMsg": true,
      "includeConsoleLog": true
    }]
  ]
};
