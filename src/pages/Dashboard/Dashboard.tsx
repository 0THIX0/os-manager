import React, { useState, useEffect } from 'react';
import {
    House, Search, SquareChartGantt, Blocks, Settings,
    ChartLine, Bell, CalendarDays, TrendingUp, ChevronLeft, ChevronRight
} from 'lucide-react';
import './Dashboard.css';

const Dashboard: React.FC = () => {
    // Estado para o nome do usuário e controle de submenus
    const [userName, setUserName] = useState('Usuário');
    const [isOSMenuOpen, setIsOSMenuOpen] = useState(false);

    useEffect(() => {
        // Recupera o nome salvo no localStorage durante o Login
        const savedName = localStorage.getItem('nomeUsuario');
        if (savedName) setUserName(savedName);
    }, []);

    return (
        <div className="dashboard-layout">
            {/* SIDEBAR */}
            <nav className="sidebar-container">
                <span className="brand-name">OS Manager</span>
                <hr className="divider" />

                <ul className="nav-list">
                    <li className="nav-item active">
                        <House size={18} /> <span>Visão geral</span>
                    </li>

                    <li className="submenu-container">
                        <div className="submenu-trigger" onClick={() => setIsOSMenuOpen(!isOSMenuOpen)}>
                            <Search size={18} /> <span>Gerenciar OS</span>
                        </div>
                        {isOSMenuOpen && (
                            <ul className="submenu-list">
                                <li>OS Individual</li>
                                <li>OS Empresa</li>
                            </ul>
                        )}
                    </li>

                    <li className="nav-item">
                        <SquareChartGantt size={18} /> <span>Gerenciar valores</span>
                    </li>
                    <li className="nav-item">
                        <Blocks size={18} /> <span>Estoque</span>
                    </li>
                    <li className="nav-item">
                        <Settings size={18} /> <span>Configurações</span>
                    </li>
                </ul>

                <hr className="divider" />

                <a className="card-sidebar">
                    <ChartLine size={18} /> <span className="card-sidebar-text">Estatísticas</span>
                </a>
                <a className="card-sidebar">
                    <Bell size={18} /> <span className="card-sidebar-text">Notificações</span>
                </a>

                <hr className="divider" style={{ marginTop: '25px', marginBottom: '45px' }} />

                <span className="user-greeting">
                    Bem vindo, <span className="user-name-display">{userName}!</span>
                </span>
            </nav>

            {/* CONTEÚDO PRINCIPAL */}
            <div className="container-dashboard">
                <header className="header">
                    <span>Visão Geral</span>
                    <div className="header-actions">
                        <button className="button-notification">
                            <Bell size={20} color="#666161" />
                        </button>
                        <div className="foto-perfil-wrapper">
                            {/* Espaço para foto de perfil dinâmica futuramente */}
                            <div className="foto-perfil-placeholder"></div>
                        </div>
                    </div>
                </header>

                <section className="filter-group">
                    <button className="filter-btn">Dia</button>
                    <button className="filter-btn">Semana</button>
                    <button className="filter-btn active">Mês</button>
                    <button className="filter-btn">Ano</button>
                    <button className="date-picker-btn">
                        <CalendarDays size={16} />
                        <span>1 Jan, 2025 - Hoje</span>
                    </button>
                </section>

                <section className="cards-infos">
                    <div className="card-faturamento">
                        <h3 >Total faturado</h3>
                        <h2 className="value-display">R$ 0,00</h2>
                        <p className="stat-percent">
                            <TrendingUp size={12} color="#04A822" />
                            <span>--% do último dia</span>
                        </p>
                    </div>
                    {['Clientes', 'Novos clientes', 'Total clientes'].map((title) => (
                        <div key={title} className="card-count">
                            <h3>{title}</h3>
                            <h2 className="value-display">0</h2>
                            <p className="stat-percent grey">
                                <TrendingUp size={12} color="#04A822" />
                                <span>--% do último dia</span>
                            </p>
                        </div>
                    ))}
                </section>

                <section className="more-infos-cards">
                    <div className="card-stat-semester">
                        <h3>Total faturado</h3>
                        <div className="chart-placeholder">
                            {/* Aqui entrará o gráfico de barras futuramente */}
                            <p>Gráfico em desenvolvimento...</p>
                        </div>
                    </div>

                    <div className="card-stat-week">
                        <div className="header-card-week">
                            <ChevronLeft size={20} cursor="pointer" />
                            <span>Dezembro 2025</span>
                            <ChevronRight size={20} cursor="pointer" />
                        </div>

                        <div className="div-days">
                            {/* Exemplo de dias da semana */}
                            <div className="day-item"><span>Seg</span><strong>01</strong></div>
                            <div className="day-item active"><span>Ter</span><strong>02</strong></div>
                            <div className="day-item"><span>Qua</span><strong>03</strong></div>
                            <div className="day-item"><span>Qui</span><strong>04</strong></div>
                            <div className="day-item"><span>Sex</span><strong>05</strong></div>
                        </div>

                        <div className="stat-week-sub-card">
                            <div className="growth-info">
                                <span>Crescimento de clientes</span>
                                <p className="stat-percent grey">--% do último dia</p>
                            </div>
                            <div className="circular-progress">
                                <span>00%</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;