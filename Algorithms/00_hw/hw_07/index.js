const buildFrequencyDict = (text) => {
    const frequencyDict = {};

    // Привожу текст к нижнему регистру
    text = text.toLowerCase();

    // Удаляю пунктуацию и пробелы
    text = text.replace(/[^\w]/g, '');

    // Подсчитываю частоту каждой буквы
    for (const char of text) {
        if (char.match(/[a-z]/)) { // Убеждаюсь, что это буква
            frequencyDict[char] = (frequencyDict[char] || 0) + 1;
        }
    }

    return frequencyDict;
};

const text = "Hello World! My name is Denis.";
const frequencyDict = buildFrequencyDict(text);

// Печать частотного словаря
for (const [letter, freq] of Object.entries(frequencyDict)) {
    console.log(`Letter: ${letter}, Frequency: ${freq}`);
}  
