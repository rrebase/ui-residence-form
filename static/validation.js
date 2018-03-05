function checkLenOfPersonalId(id) {
  return id.length === 11;
}

function checkMonthNumber(id) {
  let month = parseInt(id.substring(3, 5));
  return 1 <= month && month <= 12;
}

function maxDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function calculateLastDigit(id) {
  let first10Digits = id.substring(0, 10);
  let result = 0;
  let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
  let arr2 = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
  for (let i = 0; i < arr1.length; i++) {
    result += parseInt(first10Digits.charAt(i)) * arr1[i];
  }
  if (result % 11 === 10) {
    result = 0;
    for (let j = 0; j < arr2.length; j++) {
      result += parseInt(first10Digits.charAt(j)) * arr2[j];
    }
    return result % 11 === 10 ? 0 : result % 11;
  }
  return result % 11;
}

function findYear(id) {
  let personalId = id;
  let year;
  let firstNr = personalId.charAt(0);
  let endOfYearString = personalId.substring(1, 3);
  if (firstNr === "1" || firstNr === "2") {
    year = "18" + endOfYearString;
  } else if (firstNr === "3" || firstNr === "4") {
    year = "19" + endOfYearString;
  } else if (firstNr === "5" || firstNr === "6") {
    year = "20" + endOfYearString;
  } else {
    year = "21" + endOfYearString;
  }
  return parseInt(year);
}

function checkDay(id) {
  let day = parseInt(id.substring(5, 7));
  let month = parseInt(id.substring(3, 5));
  return 1 <= day && day <= maxDaysInMonth(findYear(id), month)
}

function checkGenderOfPersonalId(id) {
  let firstNumber = parseInt(id.charAt(0));
  return 1 <= firstNumber && firstNumber <= 6;
}


export function isIdCodeValid(idcode) {
  let id = idcode.toString();
  return checkLenOfPersonalId(id)
    && checkGenderOfPersonalId(id)
    && checkDay(id)
    && checkMonthNumber(id)
    && parseInt(id.charAt(10)) === calculateLastDigit(id);
}
