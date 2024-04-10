import { Adotante } from '../models/adotante';

// Array de objetos Adotante
export default [
    {
        // Cada objeto Adotante tem várias propriedades
        id: 1,
        matricula: '1',
        nome: 'Ana',
        telefone: '99999',
        email: 'adotante1@Email.com',
        cpf: '111.111.111-11',
        estadoCivil: 'Solteira',
        cep: '11111-111',
        logradouro: 'Rua errada',
        numero: '1',
        bairro: 'Apipucos',
        cidade: 'Recife',
        estado: 'PE',
        complemento: 'APTO 1'
    },
    {
        id: 2,
        matricula:'2',
        nome: 'Rodrigo',
        telefone: '88888',
        email: 'adotante2@Email.com',
        cpf: '222.222.222-22',
        estadoCivil: 'Casado',
        cep: '22222-222',
        logradouro: 'Rua certa',
        numero: '2',
        bairro: 'Jardim',
        cidade: 'Sao Paulo',
        estado: 'SP',
        complemento: 'Condominio'
    },
    {
        id: 5,
        matricula: '7',
        nome: 'Paula',
        telefone: '55555',
        email: 'ado@Email.com',
        cpf: '222.233321',
        estadoCivil: 'Casado',
        cep: '22222-222',
        logradouro: 'Rua direita',
        numero: '2',
        bairro: 'Campo',
        cidade: 'Maringá',
        estado: 'PR',
        complemento: 'Complemento'
    },
    {
        id: 5,
        matricula: 7,
        nome: 'Paula',
        telefone: '55555',
        email: 'adot77777@Email.com',
        cpf: '222.222.222-22',
        estadoCivil: 'Casado',
        cep: '22222-222',
        logradouro: 'Rua falsa',
        numero: '2',
        bairro: 'Parque',
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
        complemento: 'Apartamento'
    },
    {
        id: 8,
        matricula: '9',
        nome: 'Aline',
        telefone: '55555',
        email: 'adot9999@Email.com',
        cpf: '77762.222.2',
        estadoCivil: 'Solteira',
        cep: '34562',
        logradouro: 'Rua 24',
        numero: '5',
        bairro: 'vila 2',
        cidade: 'Salvador',
        estado: 'BA',
        complemento: 'Complement'
    },
    {
        id: 12,
        matricula:'10',
        nome: 'Rone',
        telefone: '8887765',
        email: 'adot2@Email.com',
        cpf: '245.222.662-22',
        estadoCivil: 'Casado',
        cep: '88782-222',
        logradouro: 'Rua 2',
        numero: '2',
        bairro: 'Jardim',
        cidade: 'Porto Alegre',
        estado: 'RS',
        complemento: 'Casa'
    },
 


] as Array<Adotante>; // O array é tipado como Array<Adotante> para garantir que todos os objetos no array sigam a estrutura do modelo Adotante