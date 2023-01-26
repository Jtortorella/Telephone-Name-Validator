function telephoneCheck(str) {
  console.log(str);
  let punctuation = new RegExp(/ /g);
  let regex1 = new RegExp(/(1{1}|)(\(\d{3}\)|\d{3}(-|))/);
  let regex2 = new RegExp(/(\d{3}-|\d{3})/);
  let regex3 = new RegExp(/\d{4}/)
  let regex = [punctuation, regex1, regex2, regex3];
  for (let regexes of regex) {
    str = str.replace(regexes, "")
  }
    console.log(str);
  if (str === "") {
    return true;
  }
  return false;
}

telephoneCheck("555-555-5555");
