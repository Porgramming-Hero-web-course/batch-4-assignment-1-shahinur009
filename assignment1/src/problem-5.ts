{
    // 

    const getProperty = <A, S extends keyof A>(obj: A, key: S) => {
        return obj[key];
    }

    const person = {
        name: 'Alice',
        age: 30,
    };

    // console.log(getProperty(person, "name"));












    // 
}