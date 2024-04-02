// A interface Pet define a estrutura de um objeto Pet no sistema
export interface Pet {
    id: number; // Identificador único para o pet
    matricula: number; // Número de matrícula do pet
    nome: string; // Nome do pet
    especie:  'Cachorro' | 'Gato'; // Espécie do pet, pode ser 'Cachorro' ou 'Gato'
    pelagem?: string; // Descrição da pelagem do pet, é opcional
    raca: string; // Raça do pet
    sexo: string; // Sexo do pet
    castracao: string; // Status de castração do pet
    vacinacao: string; // Status de vacinação do pet
    localResgate?: string; // Local onde o pet foi resgatado, é opcional
    observacao?: string; // Qualquer observação adicional sobre o pet, é opcional
    status: string; // Status atual do pet (por exemplo, disponível para adoção, adotado, etc.)
    imagem?: string; // URL da imagem do pet, é opcional
    idade: number; // Idade do pet em anos
}