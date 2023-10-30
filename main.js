$(document).ready(()=>{
    
    $('form button').click((e)=>{
    e.preventDefault();
    
    onAdicionaCampo('form input[type=text]', $('section ol').children().length);
    })
    $('section ol').children().click((e)=>{
        adicionaClasse(e.target.id)
    })
    });
    
    function onAdicionaCampo(campo, next_id){
        let sInput=$(campo).val();
        let id=next_id+1;
        if(sInput!=''){        
            let oli=`<li id='${id}'>${sInput}</li>`
            $('section ol').append(oli);       
            $(`#${id}`).click(()=>{adicionaClasse(id)});
            $(campo).val('');
        }else{
            alert(`Nome Tarefa: Não pôde ficar Vazio`);
        }
    }

    function adicionaClasse(targetId){    
        $(`#${targetId}`).addClass("pronta");
    }