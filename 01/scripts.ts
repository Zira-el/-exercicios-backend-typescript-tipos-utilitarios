type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

const cadastrarUsu├írio = (info: Usuario): Usuario => {
    return info;
}

const novoCadastroUsu├írio = (info: Required<Omit<Usuario, 'rg'>>): Required<Omit<Usuario, 'rg'>> => {
    return info;
}

console.log(novoCadastroUsu├írio({
    nome: 'oi',
    email: 'teste',
    cpf: 'teste',
    dataNacimento: '12/12/12'
}))