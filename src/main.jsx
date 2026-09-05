import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, info) {
        console.error('Dashboard Error:', error, info);
    }
    render() {
        if (this.state.hasError) {
            return (
                <div style={{ color: '#ff0055', background: '#020b13', padding: 40, fontFamily: 'monospace', minHeight: '100vh' }}>
                    <h1 style={{ color: '#00f2fe' }}>⚠ Dashboard Error</h1>
                    <pre style={{ whiteSpace: 'pre-wrap', color: '#ff6b6b', fontSize: 14 }}>
                        {this.state.error?.toString()}
                    </pre>
                    <button onClick={() => window.location.reload()} style={{ marginTop: 20, padding: '8px 20px', background: '#00f2fe', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 700 }}>
                        Reload
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </React.StrictMode>
);
