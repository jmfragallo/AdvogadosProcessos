import React, { useState } from 'react';
import './index.css';
import './sidebar.css';
import './app.css';
import './main.css';
import Card from './components/Card';
import api from './services/api'; // Verifique se é 'services' em vez de 'serveces'

function App() {
  const [id, setId] = useState('');
  const [card, setCard] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.get(`/search/${id}`);
      setCard(response.data);
    } catch (error) {
      // Trate o erro aqui, se necessário
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div>
      <aside>
        <strong className="titulo-content">Consulte seu Processo</strong>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="advogado_id">id do advogado</label>
            <input
              type="number"
              required
              value={id}
              onChange={(e) => setId(e.target.value)}
              min={1}
              max={9}
            />
          </div>
          <button type="submit">Gerar Resultados</button>
        </form>
      </aside>
      <main>
        <ul>
          {Array.isArray(card) &&
            card.map((data, index) => <Card key={index} data={data} />)}
        </ul>
      </main>
    </div>
  );
}

export default App;
