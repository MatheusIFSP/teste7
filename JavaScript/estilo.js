document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;
    const motivo = document.getElementById('motivo').value;
        alert(`Nome: ${nome}\nEmail: ${email}\nSenha: ${senha}\nIdade: ${idade}\nTelefone: ${telefone}\nWebsite: ${site}\nMensagem: ${mensagem}\nMotivo de Contato: ${motivo}`);
    });
