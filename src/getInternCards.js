function getInternCards(data) {
  let internCards = []
  for (let i = 0; i < data.length; i++) {
    let intern = `<div class="card-wrapper">
      <div class="card-header">
        <div class="card-icon">
          <i class="fa fa-book" style="font-size:40px"></i>
        </div>
        <div class="card-headings">
          <h2>${data[i].name}</h2>
          <p>Intern</p>
        </div>
      </div>
      <div class="card-body">
        <div class="card-content"><p class="card-p">ID: ${data[i].id}</p></div>
        <div class="card-content"><p class="card-p">Email: <a href="mailto:${data[i].email}">${data[i].email}</a></p></div>
        <div class="card-content"><p class="card-p">School: ${data[i].school}<p></div>
      </div>
      </div>`
    internCards.push(intern)
  }
  return internCards.join("\n")
}

module.exports = getInternCards