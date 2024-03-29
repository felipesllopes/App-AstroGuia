const planetas = [
    {
        id: 1,
        nome: "Mercúrio",
        imagem: require('../img/planets/mercurio.png'),
        diametro_equatorial: "4.879,4 km.",
        area_superficie: "74.800.000 km².",
        massa: "3,285 x 10^23 kg.",
        distancia_sol: "57.910.000 km.",
        satelites_naturais: "0",
        periodo_rotacao: "58 dias, 15 horas e 30 minutos.",
        periodo_translacao: "Aprox 88 dias.",
        temperatura_media: "179 ºC.",
        composicao_atmosferica: "Por estar tão próximo do Sol, a atmosfera de Mercúrio é bem instável e fraca, se comparada com a da Terra. Em geral, possui gases como hélio, sódio e oxigênio, com predomínio dos dois primeiros.",
    },
    {
        id: 2,
        nome: "Vênus",
        imagem: require('../img/planets/venus.png'),
        diametro_equatorial: "12.103,6 km.",
        area_superficie: "460.200.000 km².",
        massa: "4,867 x 10^24 kg.",
        distancia_sol: "108.200.000 km.",
        satelites_naturais: "0",
        periodo_rotacao: "243 dias.",
        periodo_translacao: "224 dias.",
        temperatura_media: "462º C.",
        composicao_atmosferica: "Não tem oceanos e está envolto por uma atmosfera pesada composta principalmente por dióxido de carbono e quase sem vapor de água. As suas nuvens são compostas por gotas de ácido sulfúrico. Na superfície, a pressão atmosférica é 92 vezes a da Terra ao nível do mar.",
    },
    {
        id: 3,
        nome: "Terra",
        imagem: require('../img/planets/terra.png'),
        diametro_equatorial: "12.756,2 km.",
        area_superficie: "510.100.000 km².",
        massa: "5,972 x 10^24 kg.",
        distancia_sol: "149.600.000 km.",
        satelites_naturais: "1 (Lua).",
        periodo_rotacao: "23 horas e 56 minutos.",
        periodo_translacao: "365 dias.",
        temperatura_media: "15º C.",
        composicao_atmosferica: "A atmosfera terrestre atual é constituída por diferentes gases, dos quais podemos destacar: o nitrogênio, com 78%; oxigênio, 21%; e outros gases (como dióxido de carbono, neônio, ozônio, hélio e vapor de água) 1%.",
    },
    {
        id: 4,
        nome: "Marte",
        imagem: require('../img/planets/marte.png'),
        diametro_equatorial: "6.794,4 km.",
        area_superficie: "144.800.000 km².",
        massa: "6,39 x 10^23 kg.",
        distancia_sol: "227.940.000 km.",
        satelites_naturais: "2 (Fobos e Deimos).",
        periodo_rotacao: "24 horas e 37 minutos.",
        periodo_translacao: "687 dias.",
        temperatura_media: "-60º C.",
        composicao_atmosferica: "O principal componente da atmosfera de Marte é o dióxido de carbono (CO2). Durante o inverno marciano os polos entram em um período de escuridão contínua, o que resfria a superfície de tal forma que 25% do CO2 atmosférico condensa em dióxido de carbono sólido (gelo seco) formando uma capa de gelo nos polos.",
    },
    {
        id: 5,
        nome: "Júpiter",
        imagem: require('../img/planets/jupiter.png'),
        diametro_equatorial: "142.984 km.",
        area_superficie: "6,142 x 10^10 km².",
        massa: "1,898 x 10^27 kg.",
        distancia_sol: "778.330.000 km.",
        satelites_naturais: "79.",
        periodo_rotacao: "9 horas e 56 minutos.",
        periodo_translacao: "12 anos.",
        temperatura_media: "-110º C.",
        composicao_atmosferica: "A atmosfera de Júpiter é composta, basicamente, por dois gases: 86% de hidrogênio e 14% de hélio. Há, de forma ínfima, a presença de metano, amoníaco, vapor d'água e sulfureto de hidrogênio.",
    },
    {
        id: 6,
        nome: "Saturno",
        imagem: require('../img/planets/saturno.png'),
        diametro_equatorial: "120.536 km.",
        area_superficie: "4,27 x 10^10 km².",
        massa: "5,683 x 10^26 kg.",
        distancia_sol: "1.429.400.000 km.",
        satelites_naturais: "82.",
        periodo_rotacao: "10 horas e 34 minutos.",
        periodo_translacao: "29,4 anos.",
        temperatura_media: "-138 º C.",
        composicao_atmosferica: "Sua atmosfera é bastante densa, composta por nitrogênio e metano.",
    },
    {
        id: 7,
        nome: "Urano",
        imagem: require('../img/planets/urano.png'),
        diametro_equatorial: "51.118 km.",
        area_superficie: "8,083 x 10^9 km².",
        massa: "8,681 x 10^25 kg.",
        distancia_sol: "2.870.990.000 km.",
        satelites_naturais: "27.",
        periodo_rotacao: "17 horas e 14 minutos.",
        periodo_translacao: "84 anos.",
        temperatura_media: "-197º C.",
        composicao_atmosferica: "A atmosfera de Urano é composta por 83% de hidrogénio, 15% de hélio, 2% de metano e pequenas porções de acetileno e outros hidrocarbonetos. O metano na alta atmosfera absorve a luz vermelha, dando a Urano a sua cor azul-esverdeada.",
    },
    {
        id: 8,
        nome: "Netuno",
        imagem: require('../img/planets/netuno.png'),
        diametro_equatorial: "49.538 km.",
        area_superficie: "7,618 x 10^9 km².",
        massa: "1,024 x 10^26 kg.",
        distancia_sol: "4.504.300.000 km.",
        satelites_naturais: "14.",
        periodo_rotacao: "16 horas e 6 minutos.",
        periodo_translacao: "165 anos.",
        temperatura_media: "-245º C.",
        composicao_atmosferica: "Possui uma atmosfera fina composta de nitrogênio e metano.",
    },
]

export default planetas;