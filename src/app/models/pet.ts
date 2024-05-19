export interface Pet {
    matricula: string, // Identificador cada pet, administradora inserirá manualmente
    nome: string, // Nome do pet
    especie: string, // Espécie do pet (por exemplo, 'Cachorro' ou 'Gato'), usado para classificação
    pelagem: string, // Descrição da pelagem do pet (por exemplo, 'curta', 'longa', 'lisa', 'crespa', etc.), é opcional
    raca: string, // Raça do pet
    sexo: string, // Sexo do pet (por exemplo, 'Macho' ou 'Fêmea')
    castracao: string, // (por exemplo, 'Castrado' ou 'Não castrado')
    vacinacao: string, // (por exemplo, 'Vacinado', 'Não vacinado')
    localResgate: string, // Local onde o pet foi resgatado, é opcional e pode ser usado para rastrear a origem do pet
    observacao: string, // Qualquer observação adicional sobre o pet (por exemplo, comportamento, condições de saúde), é opcional
    status: string, // Status atual do pet (por exemplo, 'Disponível para adoção', 'Adotado')
    imagem: string, // URL da imagem do pet, usado para visualização
    idade: number, // Idade
}