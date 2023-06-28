const OnlyPost=(doc)=>{
   return `
    <div class = "container-post_post">
  <p>${doc.contenido}</p>
    <h6>${doc.userName}</h6>
   <button type="button" class="delete-post-button" id="${doc.id}">X</button>
  </div>`

}

export default OnlyPost;

