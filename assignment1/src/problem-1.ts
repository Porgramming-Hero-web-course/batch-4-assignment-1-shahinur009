{
    // 
    type Array=number[]

    const sumArray = (array: Array): number => {
        const value = 0;
        const sumValue = array.reduce(
            (accumulator, inputValue) => accumulator + inputValue, value
        );
        return sumValue;
    }


    // Sample Input:
    // console.log(sumArray([1, 2, 3, 4, 5]));

    // 
}