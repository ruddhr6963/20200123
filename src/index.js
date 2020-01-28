import "./styles.css";

// 오브젝트 선언
// 1.
const a = {
 name: 1,
 color: "Red",
 value: 44,
 // getvalue: (val){return val;}
 // 위처럼 사용할 수 있지만 아래처럼 간결하게 사용
 // get함수 용도만 사용
 getValue(val){
   return val;
 }
}

//2
const createColor = (name, color, value) => {
 return{
  name: name,
  color: color,
  value:value
 };
};

//2.1
const createColor1 = (name, color, value) => ({
  name,
  color,
  value
});

//2.2
const createColor2 = (name, color, value) =>
 ({name, color, value});

const A = createColor("A", "red", "44");
const B = createColor("B","yellow", "12");
const C = createColor("C", "green", "90");

console.log(A, B, C);
console.table(A, B, C);