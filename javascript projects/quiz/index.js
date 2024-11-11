window.onload = () => {

    async function getQuestion(indexQ, points) {
            const response = await fetch('./question.json');
            const data = await response.json();
            var questions = Object.keys(data);
            var qAnswers = data[questions[indexQ.num]]
            var testName = document.getElementById('testName');
            var imgMaxPoints = document.getElementById('img')
            var questionContainer = document.getElementById('question');

            //Конец теста и вывод кол-ва правильных ответов
            if ( questionContainer != undefined) {

                var checked = document.querySelectorAll('.btn-check');
                checked = [...checked];
                checked.forEach((item) => {
                    if (item.value === 'true' && item.checked === true) {
                        points.count += 1;
                    }
                })
                questionContainer.remove();
            }

            if (document.getElementById('allPoints')) {
                document.getElementById('allPoints').remove()
            }

            if (imgMaxPoints){
                imgMaxPoints.remove();
            }

            if (testName) {
                testName.remove()
            }

            if (qAnswers === undefined) {
                var btnQ = document.getElementById('btn');
                var allPoints = document.createElement('span');
                var imgMaxPoints = document.createElement('img');
                imgMaxPoints.setAttribute('id', 'img');
                imgMaxPoints.setAttribute('class', 'mt-2');
                imgMaxPoints.setAttribute('width', '300');
                imgMaxPoints.setAttribute('height', '300');
                var WhoU;
                var percentPoints = Math.floor(points.count / questions.length * 100);
                allPoints.setAttribute('id', 'allPoints');

                if( percentPoints >= 40 && percentPoints < 60) {
                    imgMaxPoints.setAttribute('src', './img/3.jpg');
                    WhoU = 'Поздравляем, вы прогойдный мракобес';
                } else if (percentPoints >= 60 && percentPoints < 70) {
                    imgMaxPoints.setAttribute('src', './img/4.jpg');
                    WhoU = 'Поздравляем, вы профессор Святожоп Багиров';
                } else  if (percentPoints > 10 && percentPoints < 40){
                    imgMaxPoints.setAttribute('src', './img/5.jpg');
                    WhoU = 'У вас отвалились BALLS';
                } else if (percentPoints >= 70) {
                    imgMaxPoints.setAttribute('src', './img/1.jpg');
                    WhoU = 'Вы чих пыхнули зазы и теперь поголовно окружаете себя травой да травушкой-муравой';
                } else {
                    imgMaxPoints.setAttribute('src', './img/1.jpg');
                    WhoU = 'Вы на кондициях';
                }
                allPoints.innerHTML = `Отвечено правильно: ${points.count} ${(points.count === 1) ? 'вопрос' : (points.count > 1 && points.count < 5) ? 'вопроса' :'вопросов'} из ${questions.length} </br>
                ${WhoU}`;
                test.append(imgMaxPoints);
                test.append(allPoints);
                btnQ.innerText = 'Начать заново';
                indexQ.num = 0;
                points.count = 0;
            } else {
                //Получение данных
                var numAnswer = 0;
                test.insertAdjacentHTML('afterbegin', `
                    <div id="question" class="d-flex flex-column gap-3 align-items-center justify-content-center ">
                        <h1>Вопрос №${indexQ.num+1}</h1>
                        <span class="question">${qAnswers.textQuestion}</span>
                        <div id="btnList" class="container d-flex justify-content-around flex-wrap gap-2">
                        </div>
                    </div>
                `);
                var btnList = document.getElementById('btnList');
                for (var q in qAnswers.answers) {
                    btnList.insertAdjacentHTML('beforeend', `
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio${numAnswer}" value="${qAnswers.answers[q].correctAnswer}" autocomplete="off" checked>
                        <label class="btn btn-outline-primary" for="btnradio${numAnswer}">${qAnswers.answers[q].name}</label>
                    `);
                    numAnswer++;
    
                }
                indexQ.num++;
    
            }
    }
    var btnQ = document.getElementById('btn');
    var indexQ = {num: 0};
    var point = {count: 0};

    btnQ.addEventListener('click', () => {
        btnQ.innerText = 'Следующий вопрос'
        getQuestion(indexQ, point)
    })
}







