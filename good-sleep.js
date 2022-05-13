const $doc = document;
// 日付取得ー変更
const today = new Date();

let showDate = new Date(today.getFullYear(), today.getMonth(),today.getDay(), 1);
// console.log(showDate);

  // 初期表示
// window.onload = function () {
//     showProcess(today, calender);
// }

const year = today.getFullYear();
// 月は　＋１ 注意
const month = today.getMonth() + 1;
const day = today.getDate();
const monthDay = month + "/" + day;
console.log(year,monthDay);

      // 要らなかったらID消去
const $years = document.getElementById('js-year');
// const $years = document.getElementsByClassName('yearClass');
const $day = document.querySelectorAll('.dayClass');
const dayIndex = $day.length;
console.log(dayIndex);
// const $dayOne = $doc.getElementById('js-day-1');
// const $dayTwo = $doc.getElementById('js-day-2');
console.log($years, $day);
 $years.textContent = year;
$day[0].textContent = monthDay;
$day[1].textContent = monthDay;
//  $dayOne.textContent = monthDay;
//  $dayTwo.textContent = monthDay;

//  $day.textContent = monthDay;            


// 睡眠チェックポイント
// チェックされた数を表示させる
const $dayPoint = $doc.getElementById('js-check_point');
const $checkBoxs = $doc.getElementsByName('checkbox');
const $btnConfirm = $doc.getElementById('dayConfirm');
//チェック済みのチェックボックスの数を返す
const getCheckedCount = () => {
      let count = 0;
      for (let i = 0; i < $checkBoxs.length; i++) {
          if ($checkBoxs[i].checked) {
              count++;
          }
      }
         $dayPoint.textContent = count;
      //   alert(count);
  };  
  //ボタンをクリックした時に「getCheckedCount()」を呼び出す
//   $btnConfirm.addEventListener("change", getCheckedCount, false);
  $btnConfirm.addEventListener("click", getCheckedCount, false);
         

// チェックされたら即,表示

// Wake_upクラス　表示
const $feelPoint = $doc.getElementById('js-wake_up_point');
const $feelNum = $doc.getElementById('js-feel_number');
const $rst_btn = $doc.getElementById('js-rst_btn');
const $point =$doc.getElementById('wake_point');
// 数値入力されたら即，表示
$feelNum.addEventListener('change', handleChange);
function handleChange(e) {
      $feelPoint.textContent = e.target.value;
    }
$rst_btn.addEventListener("click", rstFunc); 
function rstFunc() {
      $feelPoint.textContent = 0;
}
      
// function display (e) {
//          $feelPoint.textContent = $feelNum.value;
//    }
//    input.addEventListener('change', handleChange);
// changeイベント

// function handleChange(event) {
//   output2.textContent = event.target.value;
// }


// $button.addEventListener('click', (e) => {
//         e.preventDefault(); 
//        const $feelNum = $doc.getElementById('js-feel_number').value;
//        console.log($feelNum);
      // const $changeNum = parseInt($feelNum, 10);

// });


      //    const $display = document.getElementById('couter_display');
      //    const $button = document.getElementById('js-couter');
      //    const $rst_btn = document.getElementById("js-rst_btn");

      // 　　//addEventListenerで登録
      //    $button.addEventListener("click", incFunc);
      //    $rst_btn.addEventListener("click", rstFunc); 
        
      //    // インクリメント
      //  function incFunc (e) {
      //   let num = parseInt($display.textContent, 10);
      //   $display.textContent = num + 1;
      // }
      //   // リセット
      // function rstFunc (e){
      //   $display.textContent = 0;
      // }
// ---------------------------------------------------------------------

      //    const buttonCount = $button;
         
      //  for (let buttonCount = 1; buttonCount < 10; buttonCount++) {
      //   //  const element = array[index];
      //    console.log(buttonCount);
      //  }
