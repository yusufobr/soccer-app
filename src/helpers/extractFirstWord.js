function getFirstWord(inputString) {
    let words = inputString.split(' ');
  
    if (words.length > 0) {
      return words[0];
    } else {
      return '';
    }
  }
export default getFirstWord;