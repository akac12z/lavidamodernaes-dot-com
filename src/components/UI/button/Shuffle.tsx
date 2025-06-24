const Shuffle = () => {
  const handleShuffle = () => {
    const cardsContainer =
      document.querySelector<HTMLElement>(".card-container");

    if (!cardsContainer) return;

    const cards = Array.from(
      cardsContainer.querySelectorAll<HTMLElement>(".card-component")
    );

    // Algoritmo de suffle Fisher-Yates para reordenar el array de elementos
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    // Al hacer append de los nodos, se moverán al final del contenedor,
    // reordenándolos de acuerdo al array mezclado.
    cards.forEach((card) => cardsContainer.appendChild(card));
  };

  return (
    <button
      onClick={handleShuffle}
      title="Barajar Tarjetas"
      className="shuffle-btn"
    >
      Mezclar
    </button>
  );
};

export default Shuffle;
