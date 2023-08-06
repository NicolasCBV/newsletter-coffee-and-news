const popup_container = document.getElementById("popup-container");

const popup_success = `
  <div id="popup">
    <div id="popup-content">
      <div id="popup-wrapper">
        <h1>Parabens!</h1>
        <p>
          Obrigado por se juntar à Coffe & News! Em breve, você receberá informações políticas relevantes diretamente em sua caixa de entrada. Juntos, fortaleceremos a democracia. Não esqueça de verificar o email que te enviamos para validação do mesmo. 
        </p>
        <button 
          id="close-popup" 
          class="button" 
          type="submit"
        >
          Ok
        </button>
      </div>
    </div>
  </div>
`;

export const setPopoupSuccess = () => {
  popup_container.innerHTML = popup_success;

  const popup = document.getElementById("popup");
  const button = document.getElementById("close-popup");

  button.addEventListener("click", () => {
    popup.remove();
  });
};
