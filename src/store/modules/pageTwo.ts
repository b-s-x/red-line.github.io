export default {
    state: {
        quotes: [
            {
                id: 1,
                icon: "star",
                text: "Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction.",
            },
            {
                id: 2,
                text: "On ne voit bien qu'avec le coeur. L'essentiel est invisible pour les yeux.",
            },
            {
                id: 3,
                icon: "moon",
                text: "Fais de ta vie un rêve, et d'un rêve, une réalité.",
            },
            {
                id: 4,
                text: "Faites que le rêve dévore votre vie afin que la vie ne dévore pas votre rêve.",
            },
            {
                id: 5,
                icon: "cloud",
                text: "Si tu diffères de moi, mon frère, loin de me léser, tu m'enrichis.",
            },
            {
                id: 6,
                text: "Pour ce qui est de l'avenir, il ne s'agit pas de le prévoir, mais de le rendre possible.",
            },
        ],
    },
    mutations: {
    },
    actions: {
    },
    getters: {
        allQuotes: (state: any) => {
            return state.quotes
        }
    }
}

