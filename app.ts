interface Player{
  realname:string;
  hp:number;
  weapon:string;
  attack:()=>string
}
let p1:Player={
  realname:"Non",
  hp:100,
  weapon:"sword",
  attack:():string=>{
    return "player attack";
  }
}
console.log(p1.attack());
