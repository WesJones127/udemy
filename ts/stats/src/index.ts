import { MatchResult } from "./MatchResult";
import { MatchReader } from "./MatchReader";

const reader = new MatchReader("football.csv");
reader.read();

console.log(reader.data[0]);

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);