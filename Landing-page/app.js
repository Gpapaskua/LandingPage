let interior = document.querySelector("#interior");
let technology = document.querySelector("#technology");
let travel = document.querySelector("#travel");
let package = document.querySelector("#package");
let all = document.querySelector("#all");
let categoryImages = document.querySelector(".category-images");
let allButtons = document.querySelectorAll(".category-button");
let counterDiv = document.querySelector(".branch");
let counters = document.querySelectorAll(".counter");
const speed = 200;


let data = 
    {
        "interior": [
            {
                "url": "https://demo.w3layouts.com/demos_new/template_demo/28-07-2018/universe-demo_Free/1957452837/web/images/g3.jpg"
            },
            {
                "url": "https://demo.w3layouts.com/demos_new/template_demo/28-07-2018/universe-demo_Free/1957452837/web/images/g7.jpg"
            },
            {
                "url": "https://demo.w3layouts.com/demos_new/template_demo/28-07-2018/universe-demo_Free/1957452837/web/images/g8.jpg"
            },
            {
                "url": "https://demo.w3layouts.com/demos_new/template_demo/28-07-2018/universe-demo_Free/1957452837/web/images/g9.jpg"
            },
            {
                "url": "https://demo.w3layouts.com/demos_new/template_demo/28-07-2018/universe-demo_Free/1957452837/web/images/g3.jpg"
            }
            
        ],
        "technology": [
            {
                "url": "https://demo.w3layouts.com/demos_new/template_demo/28-07-2018/universe-demo_Free/1957452837/web/images/g2.jpg"
            },
            {
                "url": "https://demo.w3layouts.com/demos_new/template_demo/28-07-2018/universe-demo_Free/1957452837/web/images/g6.jpg"
            },
            {
                "url": "https://demo.w3layouts.com/demos_new/template_demo/28-07-2018/universe-demo_Free/1957452837/web/images/g11.jpg"
            },
            {
                "url": "https://demo.w3layouts.com/demos_new/template_demo/28-07-2018/universe-demo_Free/1957452837/web/images/g1.jpg"
            }

        ],
        "travel": [
            {
                "url": "https://demo.w3layouts.com/demos_new/template_demo/28-07-2018/universe-demo_Free/1957452837/web/images/g11.jpg"
            },
            {
                "url": "https://demo.w3layouts.com/demos_new/template_demo/28-07-2018/universe-demo_Free/1957452837/web/images/g1.jpg"
            }
        ],
        "package": [
            {
                "url": "https://demo.w3layouts.com/demos_new/template_demo/28-07-2018/universe-demo_Free/1957452837/web/images/g11.jpg"
            },
            {
                "url": "https://demo.w3layouts.com/demos_new/template_demo/28-07-2018/universe-demo_Free/1957452837/web/images/g1.jpg"
            },
            {
                "url": "https://demo.w3layouts.com/demos_new/template_demo/28-07-2018/universe-demo_Free/1957452837/web/images/g11.jpg"
            },
            {
                "url": "https://demo.w3layouts.com/demos_new/template_demo/28-07-2018/universe-demo_Free/1957452837/web/images/g1.jpg"
            }
        ]
  
  
  
  
  
    }


    window.onload = function() {
        displayAllPhotos();
      };

let displayAllPhotos = () =>{
    categoryImages.innerHTML = "";
    let newDiv = document.createElement('div');
    newDiv.setAttribute("class", "photos");
    data.interior.map((image) =>{
        let img = document.createElement('img');
        img.setAttribute("class", "img-fluid");
        img.setAttribute("src", image.url);
        newDiv.appendChild(img);
    })
    data.technology.map((image) =>{
        let img = document.createElement('img');
        img.setAttribute("class", "img-fluid");
        img.setAttribute("src", image.url);
        newDiv.appendChild(img);
    })
    data.travel.map((image) =>{
        let img = document.createElement('img');
        img.setAttribute("class", "img-fluid");
        img.setAttribute("src", image.url);
        newDiv.appendChild(img);
    })
    data.package.map((image) =>{
        let img = document.createElement('img');
        img.setAttribute("class", "img-fluid");
        img.setAttribute("src", image.url);
        newDiv.appendChild(img);
    })
    categoryImages.appendChild(newDiv);
}

allButtons.forEach(function(elem) {
    elem.addEventListener("click", () => {
        if(elem.id==="all"){
            displayAllPhotos();
        }
        else{
        let category = elem.id;
        categoryImages.innerHTML = "";
        let newDiv = document.createElement('div');
        newDiv.setAttribute("class", "photos");
        data[category].map((image) =>{
        let img = document.createElement('img');
        img.setAttribute("class", "img-fluid");
        img.setAttribute("src", image.url);
        newDiv.appendChild(img);
    })
    categoryImages.appendChild(newDiv);
    }});
});

let isInViewport = function (elem) {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', function (event) {
    if(isInViewport(counterDiv)){
    updateCounter();
    }
}, false);
let updateCounter = () =>{
counters.forEach(counter =>{
    const updateCount = () =>{
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;
        if(count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        }
        else{
            count.innerText = target;
        }
    }
    updateCount();
})
}

