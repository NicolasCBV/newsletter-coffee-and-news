const popup_container = document.getElementById("popup-container");

const popup_error = `
  <div id="popup">
    <div id="popup-content">
      <div id="popup-wrapper">
        <h1>Erro!</h1>
        <p>
          Ooops! Parece que não foi possível assinar a nossa newslatter. Verifique se este email já foi usado ou se é valido e tente novamente.
        </p>
        <button 
          id="close-popup" 
          class="error-button" 
          type="submit"
        >
          Ok
        </button>
      </div>
    </div>
  </div>
`;

export const setPopoupError = () => {
  popup_container.innerHTML = popup_error;

  const popup = document.getElementById("popup");
  const button = document.getElementById("close-popup");

  button.addEventListener("click", () => {
    popup.remove();
  });
};
