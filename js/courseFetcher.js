fetch("/vindemy/data/overall.json")
.then(function(response) {
    return response.json();
})
.then(function(courses) {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let course of courses) {
        out += `
            <div class="col">
                <div class="card shadow-sm border rounded-3">
                    <div class="card-img-top card-img-none">
                        <img src="${course.coverPage}" alt="" preserveAspectRatio="xMidYMid slice" width="100%" height="250px">
                    </div>
                    <div class="card-body">
                        <p class="card-title fs-4">${course.courseName}</p>
                        <p class="card-text">${course.description}</p>
                        <button type="button" class="btn btn-md btn-primary bg-black p-2 px-5" onclick="location.href='/vindemy/pages/course_detail.html?jsonPath=${course.jsonPath}'">
                                Explore                       
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    placeholder.innerHTML = out;
})