export default {
    state: {
        text: [
            {
                id: 1,
                title: "Contes de fées",
                icon: "spark",
                text: "Les contes de fées c'est comme ça. Un matin on se réveille. On dit : « Ce n'était qu'un conte de fées … ». On sourit de soi. Mais au fond on ne sourit guère. On sait bien que les contes de fées c'est la seule vérité de la vie."
            },
            {
                id: 2,
                title: "Route",
                icon: "flower",
                text: "Je vous le dis : vous n'avez le droit d'éviter un effort qu'au nom d'un autre effort, car vous devez grandir.",
            },
            {
                id: 3,
                title: "Aventure",
                icon: "adventure",
                text: "Tu deviens responsable pour toujours de ce que tu as apprivoisé.",
            },
            {
                id: 4,
                title: "Renard",
                icon: "fox",
                text: "Ce n'était qu'un renard semblable à cent mille autres. Mais j'en ai fait mon ami, et il est maintenant unique.",
            },
        ],
    },
    mutations: {
    },
    actions: {
    },
    getters: {
        allText: (state: any) => {
            return state.text
        }
    }
}

