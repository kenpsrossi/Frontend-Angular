export interface Adotante {
    matricula: string, // Identificador único para cada adotante, será gerado automaticamente
    nome: string, // Nome completo do adotante
    telefone: string, // Número de telefone 
    email: string, // Endereço de email
    cpf: string, // Número do CPF (Cadastro de Pessoas Físicas)
    estadoCivil: string, // Estado civil do adotante (solteiro, casado, divorciado, etc.)
    logradouro: string, // Nome da rua, avenida, etc onde o adotante reside
    cep: string, // Código de Endereçamento Postal
    numero: string, // Número da residência do adotante
    bairro: string, // Nome do bairro onde o adotante reside
    cidade: string, // Nome da cidade onde o adotante reside
    estado: string, // Nome do estado onde o adotante reside
    complemento: string // Informações adicionais do endereço
}
