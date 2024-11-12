let data = [
  {
    question: " Who is the first Chief Election Commissioner of India ?",
    answer: [
      { text: "Sukumar Sen", iscorrect: "true" },
      { text: "T N Seshan ", iscorrect: "false" },
      { text: "Sunil Arora", iscorrect: "false" },
      { text: "M S Gill", iscorrect: "false" },
    ]
  },
  {
    question: "	Who was the first recipient of the Jnanpith Award ?",
    answer: [
      { text: "Mahadevi Verma ", iscorrect: "false" },
      { text: "Amitav Ghosh", iscorrect: "false" },
      { text: "G. Sankara Kurup", iscorrect: "true" },
      { text: "Krishna Sobti ", iscorrect: "false" },
    ]
  },
  {
    question: "	Who was the first woman Chief Minister of an Indian state ?",
    answer: [
      { text: "Indira Gandhi  "  , iscorrect: "false" },
      { text: "Sucheta Kriplani " , iscorrect: "true" },
      { text: "Sarojini Naidu " , iscorrect: "false" },
      { text: "Mamta Banerjee" , iscorrect: "false" },
    ]
  },
]

let count = 1
let id = 100
let div = document.querySelector(".question")
data.forEach((ele)=>{
  let div1 = document.createElement("div")
  div1.classList.add("q1")
  div1.innerHTML = `<h2>${ele.question}</h2>`
  ele.answer.forEach((ans)=>{
    div1.innerHTML+=` <div class="margin">
        <input onclick= "fun('${ele.question}','${ans.text}')" id="${id}" name="${count}" class="inp" type="radio">
        <label  for="${id}">${ans.text}</label><br>
          </div>`
    id++
  })
  div.appendChild(div1)
  count++
})
let final = []
let fun = (arg1,arg2)=>{
 for(let i=0;i<final.length;i++){
   if(final[i].question==arg1){
     final[i].ans = arg2
     return
   }
  
 }
  let obj = {
    question: arg1,
    ans: arg2
  }
  final.push(obj)
  console.log(final)
}




let sub = ()=>{
  let score = 0
  if(final.length==0){
    alert("kindly attend question")
    return
  }
  let div = document.querySelector(".question")
  div.innerHTML = ""
  for(let i=0;i<final.length;i++){
    for(let j=0;j<data.length;j++){
      if(data[j].question==final[i].question){
         
        let div1 = document.createElement("div")
        div1.classList.add("q1")
        div1.innerHTML = `<h2>${data[j].question}</h2>`
        for(let k=0;k<data[j].answer.length;k++){
          if(data[j].answer[k].iscorrect == "true"){
            if(final[i].ans==data[j].answer[k].text){
              div1.innerHTML+= `<div class="opt1 right">${final[i].ans}</div>`
              score++
            }
            else{
              div1.innerHTML+= `<div class="opt1 wrong">${final[i].ans}</div>
              <div class="opt1 right">${data[j].answer[k].text}</div>
              `
            }
          }
          else if(data[j].answer[k].text!==final[i].ans && data[j].answer[k].iscorrect == "false"){
            div1.innerHTML+= `<div class="opt1">${data[j].answer[k].text}</div>`
          }
        }
        div.appendChild(div1)
      }
      
    }
  }
   let score1 = score/data.length *100
  let box = document.querySelector(".result")
  box.style.display = "block"
  let h2 = document.getElementById("card")
  let p1 = document.getElementById("p1")
  let p2 = document.getElementById("p2")
  p1.innerText = `${final.length} of ${data.length}`
  h2.innerText = `${Math.round(score1)}%`
  if(score1 <= 50){
    p2.innerText= "You Need to study more"
  }
  else{
     p2.innerText= "You can be proud of you"
  }
}


let display = ()=>{
   let box1 = document.querySelector(".result")
  box1.style.display = "none"
}
let refresh = ()=>{
   
   
window.location.reload()
  let box1 = document.querySelector(".result")
  box1.style.display = "none"
 
  
}
let reset = ()=>{
  window.location.reload()
}
let p = 2
let s = new Number(2)
console.log(s)