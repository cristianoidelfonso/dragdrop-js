function onDragStart(event) {
  console.log(event.target.id);
  event
    .dataTransfer
    .setData('text/plain', event.target.id);

  if(event.target.id.substring(0,9) === 'draggable'){
    // event
    // .currentTarget
    // .style
    // .backgroundColor = 'yellow';
  }
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event.dataTransfer.getData('text');
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);

  event.dataTransfer.clearData();

}