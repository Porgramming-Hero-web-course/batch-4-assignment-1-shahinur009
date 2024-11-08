{
    // 

    type sentence = string;
    type word = string;

    const countWordOccurrences = (sentence: sentence, word: word): number => {
        const lowerCaseSentence = sentence.toLowerCase();
        const lowerCaseWord = word.toLowerCase();

        const words = lowerCaseSentence.split(' ');
        const sentences = lowerCaseSentence.split(' ');

        const matchWords = words.filter(word => word === lowerCaseWord);



        return matchWords.length;
    }

    // Sample Input: 
    // console.log(countWordOccurrences("I love typescript","typescript"));




    // 
}