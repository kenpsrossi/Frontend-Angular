
export interface Adotante {
    id: number, // Identificador único do adotante
    matricula: number, // Número de matrícula do adotante
    nome: string, // Nome completo do adotante
    telefone: string, // Número de telefone do adotante
    email: string, // Endereço de email do adotante
    cpf: string, // Número do CPF do adotante
    estadoCivil: string, // Estado civil do adotante
    logradouro: string, // Nome da rua, avenida, etc
    cep: string, // Código de Endereçamento Postal
    numero: string, // Número da residência
    bairro: string, // Nome do bairro
    cidade: string, // Nome da cidade
    estado: string, // Nome do estado
    complemento: string // Informações adicionais do endereço
}

