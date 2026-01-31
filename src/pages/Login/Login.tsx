import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css' // Importando seu CSS

export default function Login() {
    const [nome, setNome] = useState('')
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')

    const navigate = useNavigate()

    const handleEntrar = (e: React.FormEvent) => {
        e.preventDefault() // Impede a página de recarregar

        // Lógica de Login (Admin / 123)
        if (usuario === 'admin' && senha === '123') {
            setErro('')
            // Salva o nome editável que você pediu
            localStorage.setItem('nomeUsuario', nome)
            navigate('/dashboard')
        } else {
            setErro('Usuário ou senha incorretos!')
        }
    }

    return (
        <div className="container" style={{ height: '100vh', display: 'flex' }}>
            <div className="page-login" style={{ backgroundImage: `url("/bg-login.png")` }}>

                <div className="part-b">
                    <span style={{ fontSize: '40px', fontWeight: '700', color: '#F2F0F0', width: '300px', marginLeft: '115px' }}>
                        Bem vindo ao OS Manager
                    </span>
                    <span style={{ fontSize: '16px', color: '#F2F0F0', width: '280px', marginLeft: '115px', marginTop: '0px' }}>
                        Preencha as informações a seguir e faça login para acessar o app!
                    </span>
                </div>

                <div className="aba-form">
                    <span style={{ width: '300px' }}>Preencha corretamente as informações abaixo</span>

                    <form className="form-login" onSubmit={handleEntrar}>
                        <input
                            type="text"
                            placeholder="Nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />

                        {/* MENSAGEM DE ERRO DINÂMICA */}
                        {erro && <span style={{ color: '#ff4d4d', fontSize: '13px', marginBottom: '10px' }}>{erro}</span>}

                        <input
                            type="text"
                            placeholder="Usuario"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            placeholder="Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />

                        <button type="submit">Entrar</button>
                    </form>
                </div>

            </div>
        </div>
    )
}