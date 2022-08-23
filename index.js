const express = require('express');

const serve = express();

serve.use(express.json());

const cursos = ['Desenvolvimento full stack', 'Desenvolvimento de games', 'Viver de Youtube'];

// Retorna um curso
serve.get('/cursos/:index', (req, resp) => {
    const { index } = req.params;

    return resp.json(cursos[index]);
});

// Retornar todos os cursos
serve.get('/cursos', (req, res) => {
    return res.json(cursos)
});

//Criar novo curso
serve.post('/cursos', (req, res) => {
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});

//atualizar um cursos
serve.put('cursos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
});

//Deletar um curso
serve.delete('/cursos/:index', (req, res) => {
    const { index } = req.params;

    cursos.splice(index, 1);
    return res.json({ message: "O curso foi deletado"});
});


serve.listen(3010);