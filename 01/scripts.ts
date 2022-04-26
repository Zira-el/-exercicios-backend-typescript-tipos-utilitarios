type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
}

const novoCadastroUsuário = (info: Required<Omit<Usuario, 'rg'>>): Required<Omit<Usuario, 'rg'>> => {
    return info;
}

console.log(novoCadastroUsuário({
    nome: 'oi',
    email: 'teste',
    cpf: 'teste',
    dataNacimento: '12/12/12'
}))