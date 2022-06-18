console.log('notes app');
var html = ""
var box = document.getElementById('box');
var search = document.getElementById('search')
addBtn = document.getElementById('addBtn');
showNote()
addBtn.addEventListener('click', () => {
  if (localStorage.getItem('notes') == null) {
    notesObject = [];
    localStorage.setItem('notes', JSON.stringify(notesObject))
  }
  else {
    notesObject = JSON.parse(localStorage.getItem('notes'))
  };
  text = document.getElementById('text').value;
  notesObject.push(text);
  console.log(notesObject);
  localStorage.setItem('notes', JSON.stringify(notesObject));
  html = html.concat(`
  <div class="card mx-4 my-2" style="width: 18rem;">
  <div class="card-body">
  <p class="card-text py-2 ">
  ${text}</p>
  <button class="btn btn-danger"
  onclick="deleteNote(${notesObject.indexOf(notesObject[notesObject.length - 1])})">Delete</button>
  </div> </div>`);
  box.innerHTML = html;
  document.getElementById('text').value = ""
})
function showNote() {
  if (localStorage.getItem('notes') == null) {
    notesObject = [];
    localStorage.setItem('notes', JSON.stringify(notesObject))
  }
  else {
    notesObject = JSON.parse(localStorage.getItem('notes'))
  };
  for (let i = 0; i < notesObject.length; i++) {
    html = html.concat(`
    <div class="card mx-4 my-2" style="width: 18rem;">
    <div class="card-body">
    <p class="card-text py-2 ">${notesObject[i]}</p>
    <button  class="btn btn-danger " onclick="deleteNote(${notesObject.indexOf(notesObject[i])})">
    Delete</a></div> </div>`);
    box.innerHTML = html;
  }
}
function deleteNote(index){
  console.log(index + " is here")
  console.log(notesObject[Number(index)])
  notesObject.splice(Number(index) , 1)
  localStorage.setItem('notes', JSON.stringify(notesObject))
  html = ""
  for (let i = 0; i < notesObject.length; i++) {
    html = html.concat(`
    <div class="card mx-4 my-2" style="width: 18rem;">
    <div class="card-body">
    <p class="card-text py-2 ">${notesObject[i]}</p>
    <button  class="btn btn-danger " onclick="deleteNote(${notesObject.indexOf(notesObject[i])})">
    Delete</a></div> </div>`);
    box.innerHTML = html;
  }
  console.log(notesObject)

}
var query = document.getElementById('search')
query.addEventListener('input', function search(event) {
  query = document.getElementById('search')
 let notesForShow = notesObject.filter(function(notefor){
  return notefor.includes(query.value)
  })
  // console.log(event)
  console.log('event')
  console.log(notesForShow)
  box.innerHTML = ""
  for (let i = 0; i < notesForShow.length; i++) {
    box.innerHTML = box.innerHTML.concat(`
    <div class="card mx-4 my-2" style="width: 18rem;">
    <div class="card-body">
    <p class="card-text py-2 ">${notesForShow[i]}</p>
    <button  class="btn btn-danger " onclick="deleteNote(${notesForShow.indexOf(notesForShow[i])})">
    Delete</a></div> </div>`);
   
  }
}


)