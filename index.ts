import { de } from "./langs/de.ts";
import { enGb } from "./langs/enGb.ts";
import fs from "fs";
import type { Lang } from "./types.ts";

function createLang(lang: Lang) {
  let fileContent = `
<lexicon version="1.0" 
    xmlns="http://www.w3.org/2005/01/pronunciation-lexicon"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xsi:schemaLocation="http://www.w3.org/2005/01/pronunciation-lexicon 
      http://www.w3.org/TR/2007/CR-pronunciation-lexicon-20071212/pls.xsd"
    alphabet="ipa" xml:lang="${lang.code}">
`;
  let graphemeNumber = 100;

  // Loop through the others
  for (let otherIndex = 0; otherIndex < lang.others.length; otherIndex++) {
    let alias = lang.others[otherIndex].alias;
    let grapheme = lang.others[otherIndex].grapheme;
    fileContent += `
    <lexeme>
    <grapheme>${grapheme}</grapheme>
    <alias>${alias}</alias>
    </lexeme>
    `;
  }

  // Loop through the hundreds
  for (
    let hundredIndex = 0;
    hundredIndex < lang.hundreds.length;
    hundredIndex++
  ) {
    graphemeNumber = 100 * (hundredIndex + 1);

    for (let dateIndex = 0; dateIndex < lang.dates.length; dateIndex++) {
      let alias = lang.hundreds[hundredIndex];

      alias += lang.dates[dateIndex];
      fileContent += `
      <lexeme>
      <grapheme>${graphemeNumber}</grapheme>
      <alias>${alias}</alias>
      </lexeme>
      `;
      graphemeNumber++;
    }
  }

  // Loop through the centuries
  for (
    let centuryIndex = 0;
    centuryIndex < lang.centuries.length;
    centuryIndex++
  ) {
    for (let dateIndex = 0; dateIndex < lang.dates.length; dateIndex++) {
      let grapheme = `${10 + centuryIndex}`;
      let alias = lang.centuries[centuryIndex];
      if (dateIndex < 10) {
        grapheme += "0";
      }
      grapheme += `${dateIndex}`;
      alias += lang.dates[dateIndex];
      fileContent += `
      <lexeme>
      <grapheme>${grapheme}</grapheme>
      <alias>${alias}</alias>
      </lexeme>
      `;
    }
  }

  fileContent += `</lexicon>`;

  const outputFolderPath = "./_output";
  const fileName = `${lang.code}.pls`;

  // Create the output folder if it doesn't exist
  if (!fs.existsSync(outputFolderPath)) {
    fs.mkdirSync(outputFolderPath);
  }

  // Write the file
  fs.writeFileSync(`${outputFolderPath}/${fileName}`, fileContent);

  console.log("File written successfully! – " + fileName);
}

console.log("Welcome to Lang Island 🏝️");

createLang(de);
createLang(enGb);
