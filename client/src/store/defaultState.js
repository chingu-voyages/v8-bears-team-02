export const defaultState = {
    session: {
      authenticated: false
    },
    users: [{
        id: "user1",
        email:"tomjones@gmail.com",
        name:"Thomas Jones",
        password:"mrT123",
        rank: 10,
        date: '1/1/2019'
    }],
    questions:[{
        id:123,
        category:1,
        owner: "user1",
        title:"Why is my class failing to compile?",
        content: "My class is failing to compile and I need some help."
    },{
        id:124,
        category:1,
        owner: "user1",
        title:"How to declare a global variable?",
        content: "The title says it all. Any help will be greatly appreciated."
    }],
    answers:[{
        id:123,
        question:123,
        content:"Your answers!"
    }],
    comments:[{
        id:123,
        question:123,
        content:"My opinion"
    }],
    categories: [{
        id: 1,
        content: "Javascript"
    }]
};