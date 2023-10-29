const params = new URLSearchParams(window.location.search);
let jsonFile = params.get('jsonPath');
//pass variables here, paths from json, to here
fetch(jsonFile)
.then(function(response) {
    return response.json();
})
.then(function(topics) {
    let placeholder = document.querySelector("#module-detail");
    let out = "";
    out += `<div class="accordion">`
    let i = 1;
    for (let topic of topics) {
        out += `
        <ul class="list-group accordion-body">
            <li class="list-group-item fs-5 fw-bold py-3">Topic ${i} : ${topic.sectionName}</li>
        `
        i += 1;
        topic.sectionContent.forEach(element => {
            out += `
                <li class="list-group-item">
                    <div class="pt-2">
                        <img src="/vindemy/assets/chapter.svg" class="ps-1" width="36px" height="32px"> 
                        <a class="fs-6 text-decoration-none text-dark ps-3" href="/vindemy/pages/md.htm?src=${element.lessonFile}">
                            ${element.lessonName}
                        </a>
                    </div>
                </li>            
            `
        });
        out += `</ul>`;
    }   
    out += `</div>`;
    placeholder.innerHTML = out;
})



