export const defaultState = {
    users: [{
        id: "user1",
        email:"tomjones@gmail.com",
        name:"Thomas Jones",
        password:"mrT123"
    }],
    questions:[{
        id:123,
        category:1,
        owner: "user1",
        title:"Why is my class failing to compile?"
    },{
        id:124,
        category:1,
        owner: "user1",
        title:"How to declare a global variable?"
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