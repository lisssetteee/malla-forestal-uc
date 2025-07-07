
const colors = {
    "Ciencias Básicas": "#a6cee3",
    "Forestales": "#1f78b4",
    "Taller": "#b2df8a",
    "Formación General": "#fb9a99",
    "Optativo": "#fdbf6f"
};

const malla = [
    {
        "semestre": 1,
        "ramos": [
            {"nombre": "Precálculo", "creditos": 8, "prereq": [], "tipo": "Ciencias Básicas"},
            {"nombre": "Química", "creditos": 8, "prereq": [], "tipo": "Ciencias Básicas"},
            {"nombre": "Botánica", "creditos": 6, "prereq": [], "tipo": "Forestales"},
            {"nombre": "Taller de Sistemas Agrícolas y Forestales I", "creditos": 4, "prereq": [], "tipo": "Taller"}
        ]
    },
    {
        "semestre": 2,
        "ramos": [
            {"nombre": "Cálculo I", "creditos": 8, "prereq": ["Precálculo"], "tipo": "Ciencias Básicas"},
            {"nombre": "Bioquímica General", "creditos": 8, "prereq": [], "tipo": "Ciencias Básicas"},
            {"nombre": "Filosofía: ¿Para qué?", "creditos": 4, "prereq": [], "tipo": "Formación General"},
            {"nombre": "Taller de Sistemas Agrícolas y Forestales II", "creditos": 4, "prereq": [], "tipo": "Taller"}
        ]
    }
];
