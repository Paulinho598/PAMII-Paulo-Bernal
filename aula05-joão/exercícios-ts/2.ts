var Capitais: string[] = [
    'RS. Porto Alegre',
    'SC. Florianópolis',
    'PR. Curitiba',
    'SP. São Paulo',
    'RJ. Rio de Janeiro',
    'MG. Belo Horizonte',
    'ES. Vitória',
    'BA. Salvador',
    'AC. Rio Branco',
    'AM. Manaus',
    'RO. Porto Velho',
    'RR. Boa Vista',
    'AP. Macapá',
    'PA. Belém',
    'TO. Palmas',
    'MT. Cuiabá',
    'MS. Campo Grande',
    'GO. Goiânia',
    'DF. Brasília',
    'MA. São Luis',
    'PI. Teresina',
    'SE. Aracajú',
    'AL. Maceió',
    'PE. Recife',
    'PB. João Pessoa',
    'CE. Fortaleza',
    'RN. Natal'
]

function Listar(lista: string[]){
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i])
    }
};

Listar(Capitais);