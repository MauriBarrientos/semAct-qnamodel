document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search').addEventListener('click', async () => {
      const context = document.getElementById('context').value;
      const question = document.getElementById('question').value;
  
      // Cargar el modelo
      const model = await qna.load();
  
      // Encontrar las respuestas
      const answers = await model.findAnswers(question, context);
  
      // Mostrar las respuestas
      const answerDiv = document.getElementById('answer');
      answerDiv.innerHTML = '';
      answers.forEach(answer => {
        const p = document.createElement('p');
        p.textContent = `Answer: ${answer.text} (Score: ${answer.score})`;
        answerDiv.appendChild(p);
      });
    });
  });
  git