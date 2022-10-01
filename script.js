//タイマー表示
let countdown = () => {
  const now = new Date();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);//明日の0:00
  const differ = tomorrow.getTime() - now.getTime();//明日まで何ミリ秒か

  const sec=Math.floor(differ/1000)%60
  const min=Math.floor(differ/1000/60)%60
  const hour=Math.floor(differ/1000/60/60);

  document.getElementById("hour").textContent=String(hour).padStart(2,"0");
  document.getElementById("min").textContent=String(min).padStart(2,"0");
  document.getElementById("sec").textContent=String(sec).padStart(2,"0");

  setTimeout(countdown, 1000);

}
countdown();

//タスク追加
const taskName = document.getElementById("title");
const taskSubmit = document.getElementById("task_submit");
const taskList = document.getElementById("task_list")

// 基本的にfunctionは使わず、アロー関数で書く
let addTask = (task) => {
  //タスクの表示
  const listItem = document.createElement('li');
  const showItem = taskList.appendChild(listItem);
  showItem.innerHTML = task;

  //タスクに削除ボタンを追加
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '削除';
  listItem.appendChild(deleteButton);

  deleteButton.addEventListener('click', evt => {
    //他のイベントを中止
    evt.preventDefault();
    deleteTasks(deleteButton);
  });
}

//削除ボタンの削除機能
const deleteTasks = (deleteButton) => {
  //closest : 親要素の取得
  const selectTask = deleteButton.closest('li');
  taskList.removeChild(selectTask);
}

//submitボタンクリックで、タスクを追加
taskSubmit.addEventListener('click', evt => {
  evt.preventDefault();
  const task = taskName.value;
  addTask(task);
  taskName.value = '';
});
