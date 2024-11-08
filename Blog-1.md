<!-- Blog-1 -->

<!-- The significance of union and intersection types in Typescript. -->

..................<!-- Union Type -->...............
Union type basically we define because when we need to or options. Suppose I have multiple data but I want to even match one of data then I use to Union type.

<!-- ** Syntax** -->
 '|'  

 <!-- Example -->
 type car = string | number

 there if input match one of them then return true.

 <!-- Significance -->
 1. Flexible Using: Union type return if match any of conditions that declare our functions. It is benefited because when meet any of type checking. work will be done any problem.
 2. Error Handling: Union type checks what type we give so union type return if any of type match. that's why error handling so easy.

 ..........<!-- Intersection Types -->..............
 Intersection type is a type when we want to meet all the requirement. When we need to match all requirement there we used Intersections type. This call and operator

  <!--Syntax  -->
  one- '&'

<!-- Example -->
type Car ={car:string};
type Model= {model:number};

type CarInfo = Car & Model;

If there car and model match as per declare type then we get result other wise return error.

<!-- Significance -->
1. Type check: if all requirement fill then return true other wise return false.
2. Code Reusability: this is allow reuse smaller , more specific type.