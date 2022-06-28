function getEngineerCards(data) {
  let engineerCards = []
  for (let i = 0; i < data.length; i++) {
    let engineer = `<div class="card-wrapper">
      <div class="card-header">
        <div class="card-icon">
          <i class="fa fa-calculator" style="font-size:40px"></i>
        </div>
        <div class="card-headings">
          <h2>${data[i].name}</h2>
          <p>Engineer</p>
        </div>
      </div>
      <div class="card-body">
        <div class="card-content"><p class="card-p">ID: ${data[i].id}</p></div>
        <div class="card-content"><p class="card-p">Email: <a href="mailto:${data[i].email}">${data[i].email}</a></p></div>
        <div class="card-content"><p class="card-p">GitHub: <a href="github.com/${data[i].github}">${data[i].github}</a></p></div>
      </div>
      </div>`
    engineerCards.push(engineer)
  }
  return engineerCards.join("\n")
}

module.exports = getEngineerCards