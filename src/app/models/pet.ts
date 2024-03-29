export interface Pet {
    id: number;
    matricula: number;
    nome: string;
    especie: string;
    pelagem: string;
    raca: string;
    sexo: string;
    castracao: string;
    vacinacao: string;
    localResgate?: string;
    observacao?: string;
    status: string;
    imagem: string;
    idade: number;
}
