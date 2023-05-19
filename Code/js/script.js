function setIdade(){
    let nascimento = document.getElementById('data-nascimento').value;
    if(nascimento.length === 10){
        var splitData = nascimento.split('-');
        var dia = parseInt(splitData[2]);
        var mes = parseInt(splitData[1]) - 1;
        var ano = parseInt(splitData[0]);
        var data = new Date(ano, mes, dia);
        var hoje = new Date();
        var idade = hoje.getFullYear() - data.getFullYear();
        console.log(hoje.getFullYear() + "-" + data.getFullYear());
        if(data.getFullYear() < hoje.getFullYear()){
            if(hoje.getMonth() < data.getMonth() || (data.getMonth() == hoje.getMonth() && hoje.getDate() < data.getDate())){
                --idade;
            }
            document.getElementById('idade').value = idade;
        }
        else if(data.getFullYear() == hoje.getFullYear()){
            document.getElementById('idade').value = idade;
            console.log("B");
        }
        else{
            document.getElementById('idade').value = '';
        }
    } else{
        document.getElementById('idade').value = '';
    }
}

function getLogradouro(){
    let campoCEP = document.getElementById('cep').value.replace(/\D/g, '');

    if(campoCEP.length === 8){
        const ajax = new XMLHttpRequest();
        ajax.open('GET', 'https://viacep.com.br/ws/' + campoCEP + '/json/');
        ajax.send();

        ajax.onload = function(){
            let info = JSON.parse(this.responseText);

            document.getElementById('rua').value = info.logradouro;
            document.getElementById('bairro').value = info.bairro;
            document.getElementById('cidade').value = info.localidade;
            document.getElementById('estado').value = info.uf;
        }
    } else{
        document.getElementById('rua').value = '';
        document.getElementById('bairro').value = '';
        document.getElementById('cidade').value = '';
        document.getElementById('estado').value = '';
    }

    /*
    $("#data-nascimento").on("change", function() {
        var dataNascimento = $(this).val();
        if (dataNascimento != "") {
          var partesData = dataNascimento.split("/");
          var dia = parseInt(partesData[0]);
          var mes = parseInt(partesData[1]) - 1;
          var ano = parseInt(partesData[2]);
          var data = new Date(ano, mes, dia);
          var hoje = new Date();
          var idade = hoje.getFullYear() - data.getFullYear();
          if (hoje.getMonth() < data.getMonth() || (hoje.getMonth() == data.getMonth() && hoje.getDate() < data.getDate())) {
            idade--;
          }
          $("#idade").val(idade);
        } else {
          $("#idade").val("");
        }
      });
    });
    */
}