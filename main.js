const buttons = document.getElementById("buttons");
const cards = document.getElementById("cards");

const localquestionSet =
  JSON.parse(localStorage.getItem("questionSet")) || questionSet;

localquestionSet.map((item, index) => {
  buttons.classList.add("d-none");
  cards.innerHTML += `
  <div class="cards shadow rounded-4 p-3 "  onclick="masala(${index})" style="background-color: #303041 ">
  <h3>${item.title}</h3>
  <div class=" d-flex justify-content-between align-items-center">
    <p class="pt-4"> 
      ${item.questionsNumber}<i class="fa-regular fa-hourglass-half"></i>
    </p>
    <p class="p-4 m-0 rounded-pill shadow">12%</p>
  </div>
</div>
   `;
});

const misollar = document.getElementById("misollar");
const leftTop = document.getElementById("left-top");
const masala = (index) => {
  cards.innerHTML = "";
  // console.log(Object.values(questionSet[index]));

  Object.values(localquestionSet[index]).map((item) => {
    // console.log(item);
    leftTop.innerHTML = `
        <h1 class="example-title">${localquestionSet[index].title}</h1>
        <button
            class="btn text-white px-4 py-3 border-0"
            style="background-color: #303041"
            onclick="orqaga()"
          >
            <i class="fa-solid fa-arrow-left"></i>
          </button>
      `;
  });

  localquestionSet[index].questions.map((item, idx) => {
    //console.log(item);

    misollar.innerHTML += `
          <div onclick="bajarish(${index},${idx})" class="cards text-center rounded-4 p-3" style="background-color: #303041 ">
          <p class="m-0" id="example${idx}">${item.fun_name.slice(
      0,
      item.fun_name.indexOf(" ")
    )}</p>
          </div>
      `;
  });
};

const orqaga = () => {
  cards.innerHTML = "";
  misollar.innerHTML = "";
  leftTop.innerHTML = "";
  localquestionSet.map((item, index) => {
    cards.innerHTML += `
    <div class="cards shadow rounded-4 p-3 "  onclick="masala(${index})" style="background-color: #303041 ">
    <h3>${item.title}</h3>
    <div class=" d-flex justify-content-between align-items-center">
      <p class="p-4"> 
        ${item.questionsNumber}<i class="fa-regular fa-hourglass-half"></i>
      </p>
      <p class="p-4 m-0 rounded-pill shadow">12%</p>
    </div>
  </div>
     `;
  });
};
// const buttons = document.getElementById("buttons");
const yechim = document.getElementById("yechim");
// console.log(yechim);

const orqaga2 = (index) => {
  localquestionSet[index].questions.map((item, idx) => {
    //console.log(item);

    misollar.innerHTML += `
          <div onclick="bajarish(${index},${idx})" class="cards text-center rounded-4 p-3" style="background-color: #303041 ">
          <p id="example${idx}">${item.fun_name.slice(
      0,
      item.fun_name.indexOf(" ")
    )}</p>
          </div>
      `;
  });
  cards.innerHTML = "";
};

const top1 = document.getElementById("topP");

const bajarish = (bindex, bidx) => {
  top1.classList.add("d-none");
  buttons.classList.remove("d-none");

  buttons.innerHTML = "";
  misollar.innerHTML = "";
  leftTop.innerHTML = "";
  leftTop.classList.add("d-none");
  misollar.classList.add("d-none");
  cards.classList.add("d-none");
  const malumot = localquestionSet[bindex]?.questions[bidx];
  buttons.innerHTML += `
      
      
      <div class="d-flex align-items-start gap-4">
      <div class=" w-50"> 
      <button style="background-color: #1f1f2b " onclick="home()" class="btn text-white px-4 py-2 border-0"> <i class="fa-solid fa-home text-white"></i> </button>
      <button style="background-color: #1f1f2b " onclick="orqaga2(${bindex})" class="btn text-white px-4 py-2 border-0"><i class="fa-solid fa-arrow-left text-white"></i></button>
      <button style="background-color: #1f1f2b" onclick="oldingi(${bindex},${bidx})" class="btn text-white px-4 py-2 border-0"> Oldingisi</button>
      <button style="background-color: #1f1f2b" onclick="keyingi(${bindex},${bidx})" class="btn text-white px-4 py-2 border-0">Keyingisi</button>
       <h1 class="my-3">${malumot.fun_name.slice(
         0,
         malumot.fun_name.indexOf(" ")
       )}</h1>
       <p>${malumot.text}</p>
       <ul>
       <li>${malumot.examples[0]}</li>
       <li class="my-3">${malumot.examples[1]}</li>
       <li>${malumot.examples[2]}</li>
       </ul>
       <h3 class="text-white">Natijalar</h3>
       <div class="row ms-1 tekshirishArea rounded-3 overflow-y-auto" style=" width: 650px;height:200px; background-color: #1f1f2b">
       
       </div>
      </div>      
      <div class="w-50 ">
      <div id="code-area" class=" rounded-3" style="height: 450px;background-color: #1f1f2b">
      </div>
      <button style="background-color: #1f1f2b" onclick="tekshirish(${bindex}, ${bidx})"  class="btn text-white px-4 py-2 border-0 mt-3">Tekshirish</button>
      </div>
      </div>
      `;
  codeArea(malumot);
  saveStorage();
};

const oldingi = (bIndex, bIdx) => {
  top1.classList.add("d-none");
  buttons.classList.remove("d-none");

  buttons.innerHTML = "";
  misollar.innerHTML = "";
  leftTop.innerHTML = "";
  leftTop.classList.add("d-none");
  misollar.classList.add("d-none");
  cards.classList.add("d-none");
  let malumot;

  if (bIdx > 0) {
    malumot = localquestionSet[bIndex]?.questions[bIdx - 1];
  } else {
    malumot = localquestionSet[bIndex]?.questions[0];
  }
  buttons.innerHTML += `
      
      
      <div class="d-flex align-items-start gap-4">
      <div class=" w-50"> 
      <button style="background-color: #1f1f2b " onclick="home()" class="btn text-white px-4 py-2 border-0"> <i class="fa-solid fa-home text-white"></i> </button>
      <button style="background-color: #1f1f2b " onclick="orqaga2(${bIndex})" class="btn text-white px-4 py-2 border-0"><i class="fa-solid fa-arrow-left text-white"></i></button>
      <button style="background-color: #1f1f2b" onclick="oldingi(${bIndex},${
    bIdx - 1
  })" class="btn text-white px-4 py-2 border-0"> Oldingisi</button>
      <button style="background-color: #1f1f2b" onclick="keyingi(${bIndex},${
    bIdx - 1
  })" class="btn text-white px-4 py-2 border-0">Keyingisi</button>
       <h1 class="my-3">${malumot.fun_name.slice(
         0,
         malumot.fun_name.indexOf(" ")
       )}</h1>
       <p>${malumot.text}</p>
       <ul>
       <li>${malumot.examples[0]}</li>
       <li class="my-3">${malumot.examples[1]}</li>
       <li>${malumot.examples[2]}</li>
       </ul>
       <h3 class="text-white">Natijalar</h3>
       <div class="row ms-1 tekshirishArea rounded-3 overflow-y-auto" style=" width: 650px;height:200px; background-color: #1f1f2b">
       
       </div>
      </div>      
      <div class="w-50 ">
      <div id="code-area" class=" rounded-3" style="height: 450px;background-color: #1f1f2b">
      </div>
      <button style="background-color: #1f1f2b" onclick="tekshirish(${bIndex}, ${
    bIdx - 1
  })"  class="btn text-white px-4 py-2 border-0 mt-3">Tekshirish</button>
      </div>
      </div>
      `;
  codeArea(malumot);
  saveStorage();
};

const keyingi = (bIndex, bIdx) => {
  top1.classList.add("d-none");
  buttons.classList.remove("d-none");

  buttons.innerHTML = "";
  misollar.innerHTML = "";
  leftTop.innerHTML = "";
  leftTop.classList.add("d-none");
  misollar.classList.add("d-none");
  cards.classList.add("d-none");
  let malumot;

  if (bIdx === 1) {
    malumot = localquestionSet[bIndex]?.questions[1];
  } else if (bIdx < localquestionSet[bIndex]?.questions.length) {
    malumot = localquestionSet[bIndex]?.questions[bIdx + 1];
  } else if (bIdx > localquestionSet[bIndex]?.questions.length - 2) {
    malumot =
      localquestionSet[bIndex]?.questions[
        localquestionSet[bIndex]?.questions.length - 1
      ];
  }
  buttons.innerHTML += `
      
      
      <div class="d-flex align-items-start gap-4">
      <div class=" w-50"> 
      <button style="background-color: #1f1f2b " onclick="home()" class="btn text-white px-4 py-2 border-0"> <i class="fa-solid fa-home text-white"></i> </button>
      <button style="background-color: #1f1f2b " onclick="orqaga2(${bIndex})" class="btn text-white px-4 py-2 border-0"><i class="fa-solid fa-arrow-left text-white"></i></button>
      <button style="background-color: #1f1f2b" onclick="oldingi(${bIndex},${
    bIdx + 1
  })" class="btn text-white px-4 py-2 border-0"> Oldingisi</button>
      <button style="background-color: #1f1f2b" onclick="keyingi(${bIndex},${
    bIdx + 1
  })" class="btn text-white px-4 py-2 border-0">Keyingisi</button>
       <h1 class="my-3">${malumot.fun_name.slice(
         0,
         malumot.fun_name.indexOf(" ")
       )}</h1>
       <p>${malumot.text}</p>
       <ul>
       <li>${malumot.examples[0]}</li>
       <li class="my-3">${malumot.examples[1]}</li>
       <li>${malumot.examples[2]}</li>
       </ul>
       <h3 class="text-white">Natijalar</h3>
       <div class="row ms-1 tekshirishArea rounded-3 overflow-y-auto" style=" width: 650px;height:200px; background-color: #1f1f2b">
       
       </div>
      </div>      
      <div class="w-50 ">
      <div id="code-area" class=" rounded-3" style="height: 450px;background-color: #1f1f2b">
      </div>
      <button style="background-color: #1f1f2b" onclick="tekshirish(${bIndex}, ${
    bIdx + 1
  })"  class="btn text-white px-4 py-2 border-0 mt-3">Tekshirish</button>
      </div>
      </div>
      `;
  codeArea(malumot);
  saveStorage();
};

const home = () => {
  cards.classList.remove("d-none");
  misollar.classList.remove("d-none");
  leftTop.classList.remove("d-none");

  localquestionSet.map((item, index) => {
    cards.innerHTML += `
    <div class="cards shadow rounded-4 p-3 "  onclick="masala(${index})" style="background-color: #303041 ">
    <h3>${item.title}</h3>
    <div class=" d-flex justify-content-between align-items-center">
      <p class="pt-4"> 
        ${item.questionsNumber}<i class="fa-regular fa-hourglass-half"></i>
      </p>
      <p class="p-4 m-0 rounded-pill shadow">12%</p>
    </div>
  </div>
     `;
  });
  buttons.classList.add("d-none");
};
//let count = 0;
let fullCode = "";

const tekshirish = (tindex, tidx) => {
  const info = localquestionSet[tindex].questions[tidx];
  //console.log(info);
  const tekshirishArea = document.querySelector(".tekshirishArea");
  tekshirishArea.innerHTML = "";

  // console.log(tekshirishArea);
  // tekshirishArea.innerHTML += `
  //   <ul style="list-style: none" class="pt-4">
  //    <li>${info.examples[0]}</li>
  //      <li class="my-3">${info.examples[1]}</li>
  //      <li>${info.examples[2]}</li>
  //   </ul>
  //  `;

  info.check.map((item, index) => {
    fullCode =
      code +
      info.fun_name.slice(0, info.fun_name.indexOf("(")) +
      "(" +
      item +
      ")";

    console.log(fullCode);
    console.log(eval(fullCode));
    tekshirishArea.innerHTML += `
      <div class="d-flex justify-content-between align-items-center" style=""> 
      <div class=" py-3 px-2">
        ${
          info.fun_name.slice(0, info.fun_name.indexOf("(")) + "(" + item + ")"
        };
      </div>   
      <div class="rounded-4 py-3 px-2 text-center ${
        eval(fullCode) === info.answers[index] ? `bg-success` : `bg-danger`
      }  w-25">  
      
       Javobingiz : ${eval(fullCode)}
      </div>
      </div>
    `;

    eval(fullCode) === info.answers[index] ? (info.solved = true) : info.solved;

    //count++;
  });

  saveStorage();
};

const saveStorage = () => {
  localStorage.setItem("questionSet", JSON.stringify(questionSet));
};
// kamchilik :
// 1 l0calstporage;
// 2 Prosent;
// 3 kodini eslab qolsin;
// 4 you win;
// 5 button ishlatilishi kerak;
