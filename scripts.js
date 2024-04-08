document.addEventListener('DOMContentLoaded', function() {
    const cursosContainer = document.getElementById('cursos-container');
    const filtro = document.getElementById('filtro');
  
    const cursos = [
      { nome: 'Curso de Design Gráfico', categoria: 'design' },
      { nome: 'Curso de Web Development', categoria: 'programacao' },
      { nome: 'Curso de Marketing Digital', categoria: 'marketing' },
      { nome: 'Curso de UI/UX Design', categoria: 'design' },
      { nome: 'Curso de JavaScript Avançado', categoria: 'programacao' },
      { nome: 'Curso de SEO', categoria: 'marketing' },
    ];
  
    function exibirCursos() {
      const categoriaSelecionada = filtro.value;
      const cursosFiltrados = categoriaSelecionada === 'all' ? cursos : cursos.filter(curso => curso.categoria === categoriaSelecionada);
  
      cursosContainer.innerHTML = '';
  
      cursosFiltrados.forEach(curso => {
        const cursoElement = document.createElement('div');
        cursoElement.classList.add('curso');
        cursoElement.innerHTML = `
          <h2>${curso.nome}</h2>
          <p>Categoria: ${curso.categoria}</p>
        `;
        cursosContainer.appendChild(cursoElement);
      });
    }
  
    filtro.addEventListener('change', exibirCursos);
  
    exibirCursos();
  });