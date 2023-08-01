$(document).ready(function() {
    const $identificadorFormulario = $('#identificadorFormulario');
    const $cadastroTarefa = $('#cadastroTarefa');
    const $listaTarefas = $('#listaTarefas');

    $identificadorFormulario.on('submit', function(event) {
        event.preventDefault();
        const novaTarefa = $cadastroTarefa.val().trim();
        if (novaTarefa === '') return;

        const $li = $('<li>', { class: 'tarefita', text: novaTarefa });

        $li.on('click', function() {
            $(this).toggleClass('linhanotexto');
        });

        $listaTarefas.append($li);
        $cadastroTarefa.val('');
    });
});