let buttons = document.querySelectorAll('button');
let answer = '';//for print the answer in calc//
let ans = "";// for process calc events//
let result = "";//for store calc events//
for (i of buttons) {
   i.addEventListener('click', function (e) {
      buttontext = e.target.innerText;
      if (buttontext == "=") {
         {
            result = eval(ans);
            document.getElementById('result').textContent = result;
            answer = "";
            result = "";
         }
      }
      else {
         document.getElementById('function').textContent = buttontext
         document.getElementById('result').textContent = result;

         if (buttontext == 'DEL') {
            answer = answer.substring(0, answer.length - 1);
            ans = answer;
            document.getElementById('function').textContent = answer;
            
         }
         else if (buttontext == "C") {
            answer = "";
            document.getElementById('function').textContent = answer;
            document.getElementById('result').textContent = answer;
            ans = answer;
         }
         else if (buttontext == 'x') {
            answer += buttontext;
            buttontext = '*';
            ans += buttontext;
            document.getElementById('function').textContent = answer;
         }
         else {
            answer += buttontext;
            ans += buttontext;
            document.getElementById('function').textContent = answer
         }
      }
   })
}
