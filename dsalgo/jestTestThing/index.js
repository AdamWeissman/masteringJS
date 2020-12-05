function capitalize(str, wordOrSentence) {
  if (wordOrSentence === 'everyWord') {
    const capitalized = []
    for (let word of str.split(' ')) {
      capitalized.push(word[0].toUpperCase() + word.slice(1))
    }
    return capitalized.join(' ')
  } else if (wordOrSentence === 'onlySentence') {
      const capitalizedSentences = []
      for (let sentence of str.split(/\.\s/) ) {
        console.log(sentence)
        capitalizedSentences.push(sentence[0].toUpperCase() + sentence.slice(1))
      }
      return capitalizedSentences.join('. ')
  }
   
}

module.exports = capitalize;