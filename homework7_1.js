var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

function testEmails(array) {
    let goodEmails = []; 
    const re = /^[\w]+(\.[\w]+)?@(gmail|yahoo)\.com$/;

    array.forEach(function(item) {
        if (re.test(item.email)) {
            goodEmails.push(item.email);
        }
    });

    return goodEmails; 
}

console.log(testEmails(arr)); 
