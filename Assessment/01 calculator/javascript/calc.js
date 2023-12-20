let buttons = document.querySelectorAll('button');
let answer = '';
for (i of buttons) {
   i.addEventListener('click', function (e) {
      buttontext = e.target.innerText;
      if (buttontext == "=") {
         {
            let result = eval(answer);
            document.getElementById('result').textContent = result;
            //   answer+= buttontext;
            answer = '';
         }
      }
      else {
         //  console.log(buttontext)
         document.getElementById('function').textContent = buttontext

         if (buttontext == 'DEL') {
            answer = answer.substring(0, answer.length - 1);
            document.getElementById('function').textContent = answer;

         }
         else if (buttontext == "C") {
            answer = "";
            document.getElementById('function').textContent = answer;
            document.getElementById('result').textContent = answer;
         }
         else if (buttontext == 'x') {
            buttontext = '*';
            answer += buttontext;
            document.getElementById('function').textContent = answer;
         }
         else {
            answer += buttontext;
            document.getElementById('function').textContent = answer
         }
      }
   })
}
