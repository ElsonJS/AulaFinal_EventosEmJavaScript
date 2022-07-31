<!DOCTYPE html>
<html>
  <head>
     <title>Usando Evento com JavaScript</title>
     <b><h3>Programa que soma duas notas e mostra a média delas sem um <em>"button"</em> para clicar.</b></h3><hr>
     <b>Digite sua segunda nota:  </b><input type="text" onblur="myFunction()" id="numero" type="number"><br>
  </head>
  <body> 
     <b><p>Após digitar a segunda nota acima, <em>clique aqui</em> fora da caixa.</b></p>
     <fieldset><b><p>O evento <em>onblur</em> funciona quando o usuário clica fora de uma determinada caixa de texto e ele <br>
               apresenta um texto de alerta informando que aquela ação está fora do foco daquela página. Já no caso do <br>
               <em>prompt</em> ele é uma caixa para se digitar um texto ou número que o alerta pede em uma página, Exemplo: Acima.<br></fieldset>
     <script>
          var n2=parseFloat(prompt("Digite sua primeira nota:  "));
          function myFunction() {
              var n1 =  parseFloat(document.getElementById("numero").value);
              soma=parseFloat(n1)+parseFloat(n2);
                 document.write("<b>Resultado da soma:  "+soma/2+ "</b>");
          }
     </script>
  </body>
</html>
