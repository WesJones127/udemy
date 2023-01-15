"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
=======
console.log("hi");
>>>>>>> 4db7686 (stats)
