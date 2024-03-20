


const url = 'http://localhost:3000/posts';

fetch(url, {
    method: "GET",
    mode: 'cors'
})
    .then((resp) => resp.json())
    .then(function (data) {
        let posts = data;

        console.log(posts);

        let PostHTMl = ""

        posts.forEach(post => {
            PostHTMl+= `<p>${post.entry} </p>`
            
        });
        document.querySelector("#blog_list").innerHTML = PostHTMl

    })
    .catch(function (error) {
        console.log(error);
    });


