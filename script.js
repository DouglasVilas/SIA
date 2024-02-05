//aplicando hover nos icones pou-pop
					const imageContainers = document.querySelectorAll('#barralateral li');
					imageContainers.forEach(function(imageContainer) {
					const popup = imageContainer.querySelector('.popup');

					imageContainer.addEventListener('mouseover', function() {
						popup.style.display = 'block';
					});

					imageContainer.addEventListener('mouseout', function() {
						popup.style.display = 'none';
					});
					});
//aplicando alert 
		function exibirAlerta() {

			alert("Essa função não está disponível, aguarde atualizações!");
		};

//ativando o modo escuro
		const modoescuro = document.querySelector('#imgTema li');
		const popUpmodo = document.querySelector('.popUpModo');
		
		modoescuro.addEventListener('click', ()=>{
				popUpmodo.style.display = 'block';

				
			});
		
			modoescuro.addEventListener('click', event => {
				const classNameOfClickElement = event.target.classList[0]
				if (classNameOfClickElement === 'popupClose' || classNameOfClickElement === 'popUpModo')
					popUpmodo.style.display = 'none';
				});
//função de ativar o modo escuro ou modo claro
function aplicarSelecao() {
	var modoSelecionado = document.querySelector('input[name="theme"]:checked').value;
	var bodyElemento = document.body;
	const trocadeImagens = document.querySelectorAll('#barralateral li img');
  
	if (modoSelecionado === 'dark') {
	  bodyElemento.classList.add('dark');
	  trocadeImagens[0].setAttribute('src', 'IMAGENS_DARK/modo-claro.png');
	  trocadeImagens[1].setAttribute('src', 'IMAGENS_DARK/pesquisa_dark.png');
	  trocadeImagens[2].setAttribute('src', 'IMAGENS_DARK/dashboards_dark.png');
	  trocadeImagens[3].setAttribute('src', 'IMAGENS_DARK/suporte_dark.png');
	  trocadeImagens[4].setAttribute('src', 'IMAGENS_DARK/ajuda_dark.png');
	  
	
	} else {
	  bodyElemento.classList.remove('dark');
	  trocadeImagens[0].setAttribute('src', 'IMAGENS/modo-escuro.png');
	  trocadeImagens[1].setAttribute('src', 'IMAGENS/pesquisa.png');
	  trocadeImagens[2].setAttribute('src', 'IMAGENS/dashboards.png');
	  trocadeImagens[3].setAttribute('src', 'IMAGENS/suporte.png');
	  trocadeImagens[4].setAttribute('src', 'IMAGENS/ajuda.png');
	 
	 
	}

}