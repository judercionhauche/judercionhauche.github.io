

    function averageThreeNumbers(a, b, c) {
        let sum = a + b + c;
        let avg = sum / 3;
        return avg;
    }

    function createSentence(num, noun) {
        return `On average, a Berkeley student has ${num} ${noun}s.`;
    }

    function getRandomNum(max) {
        return Math.floor(Math.random() * max);
        }


    const x = getRandomNum(20);
    const y = getRandomNum(10);
    const z = getRandomNum(13);

    const avg = averageThreeNumbers(x, y, z);

    const favoriteAnimal = 'penguin';
    const sentence = createSentence(avg, favoriteAnimal);  
    