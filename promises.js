function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },2000);

}

function createPost(post)  {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        posts.push(post);

        const error = false;

        if(!error) {
            resolve();
        } else {
            reject('Error: Something went wrong');
        }    
        
    }, 4000);
  });
}

//createPost({ title: 'Post Three', body: 'This is post three'})
//.then(getPosts) 
//.catch(err => console.log(err));
 

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise ((resolve, reject) => (setTimeout, resolv
 setTimeout(resolve, 2000, 'Goodbye')
);
const promise4 = fetch
('https://jsonplaceholder.typicode.com/users').then(res=>
)