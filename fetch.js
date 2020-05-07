
const posts=[
    {title:'post one',body:'this is post one'},

    {title:'post two',body:'this is post two'}

];



function getpost(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML =output;
    },1000);
}

//callback
//function createpost(post,callback){
    //setTimeout(()=>{
        //posts.push(post);
        //callback();
    //},2000);
//}

//createpost({title:'post three',body:'this is post three'},getpost);

//promises
function createpost(post){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            posts.push(post);

            const error=false;
            if(!error){
                resolve();
            }else{
                reject('Error:something went wrong');
            }             
        },2000);
    });
}

createpost({title:'post three', body:'this is post three'})
.then(getpost)
.catch(err=>console.log(err));

//async/await
async function init(){
    await createpost({
        title:'post three',body:'this is post three'
    });
    getpost();
}
init();




//asunc/await/fatch
async function fetchUsers(){
    const res=await fetch
    ('https://jsonplaceholder.typicode.com/users');
    const date= await res.json();
    console.log(date);
}
fetchUsers();



//promise.all
const promise1=Promise.resolve('hello world');

const promise2=10;
const promise3= new Promise((resolve, reject) =>
setTimeout(resolve, 2000, 'good bye')
);
const promise4=fetch
('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json());

Promise.all([promise1,promise2,promise3,promise4])
.then(values=>
    console.log(values)
);
