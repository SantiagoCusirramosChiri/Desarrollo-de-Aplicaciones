import React, { useState, useEffect } from 'react';

const Api = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/React_(JavaScript_library)';

                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error('Error en la respuesta de la API');
                }

                const result = await response.json();

                setData([result]);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="api-container">
                <h3>Cargando datos de Wikipedia...</h3>
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Cargando...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="api-container">
                <h3>Error al cargar datos</h3>
                <p className="text-danger">{error}</p>
            </div>
        );
    }

    return (
        <div className="api-container">
            <h3>📡 Datos de Wikipedia API (con Hooks)</h3>

            <ul className="list-group">
                {data.map((item, index) => (
                    <li key={index} className="list-group-item">
                        <h5>{item.title}</h5>
                        <p>{item.extract}</p>
                        <div className="mt-2">
                            <strong>Descripción:</strong> {item.description}
                        </div>
                        <a
                            href={item.content_urls?.desktop?.page}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary btn-sm mt-2"
                        >
                            Ver en Wikipedia
                        </a>
                    </li>
                ))}
            </ul>

            <div className="mt-3">
                <small className="text-muted">
                    Este componente usa React Hooks (useState + useEffect)
                </small>
            </div>
        </div>
    );
};

export default Api;