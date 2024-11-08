{
    // 
    type NumberArray = number[];

    const removeDuplicates = (array: NumberArray): NumberArray => {
        return array.filter((value, index, array) => array.indexOf(value) === index);
    }


    // Sample Input:
    // console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5,6, 7, 7, 8, 8, 9,10 ]))


    // 
}