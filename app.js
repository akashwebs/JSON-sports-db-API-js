fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
    .then(res => res.json())
    .then(data => displayResult(data))
    .catch(error => errorMessege(error))

const errorMessege = error => {
    alert('try again')
    console.log(error)
}

const displayResult = data => {
    let sports = data.sports;
    sports = sports.splice(0, 15);
    const sportContainer = document.getElementById('sport-container')
    sportContainer.textContent = ''
    sports.forEach(sport => {
        // console.log(sport)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="getId('${sport.idSport}')" class="card">
            <img src="${sport.strSportThumb}" class=" card-img-top" >
            <div class="card-body">
                <h5 class="card-title">${sport.strSport}</h5>
                <p class="card-text">${sport.strSportDescription.slice(0,150)}</p>
            </div>
        </div>
        `
        sportContainer.appendChild(div);
    })
}


const getId = async id => {
    const idNum = id;
    const res = await fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
    const data = await res.json();
    sportDetails(data, idNum)

}
const sportDetails = (sports,
    id) => {
    const allSports = sports.sports;
    const detailsContainer = document.getElementById('details');
    detailsContainer.textContent = '';
    allSports.forEach(sport => {
        if (sport.idSport == id) {
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="card">
                <img src="${sport.strSportThumb}" class=" card-img-top" >
                <div class="card-body">
                    <h5 class="card-title">${sport.strSport}</h5>
                    <p class="card-text">${sport.strSportDescription}</p>
                </div>
            </div>
            `

            detailsContainer.appendChild(div)
            console.log(sport)
        }
    })

}