
let entry = prompt("what would you like to do?");
const todos = ['clean','shop','sleep'];

while(entry !== 'quit') {
    if (entry === 'new') {
        const task = prompt("enter new todo to add to your list:");
        todos.push(task);
        console.log(`${task} added to your list.`);
    } else if (entry === 'list') {
        console.log(`Here is your to do list: `);
        for (let i=0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
    } else if (entry === 'delete') {
        const del = prompt("enter task you want to delete from the list:");
        num = todos.indexOf(del);
        if (num > -1) {
            todos.splice(num,1);
        }
        console.log(`Ok. ${del} deleted.`);
    }
    entry = prompt("what would you like to do?");
}
alert("See you later.")