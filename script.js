$(document).ready(function(){
    /*console.log(document.querySelector('header button'))
    console.log($('#botao-cancelar'))

    document.querySelector('header button').addEventListener('click', function(){
    })*/

    $('header button').click(function (){
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function () {
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault()
        const enderecoNova = $('#endereco-imagem-nova').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src='${enderecoNova}'/>`).appendTo(novoItem)
        $(`
            <div class='overlay-imagem-link>
                <a href = "${enderecoNova}" target="_blank" title="Ver imagem em tamanho real"
                </a>
            </div>
        `).appendTo(novoItem)

        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
        $('#endereco-imagem-nova').val('')

    })
})

