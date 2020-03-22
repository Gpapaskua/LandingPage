let interior = document.querySelector("#interior");
let technology = document.querySelector("#technology");
let travel = document.querySelector("#travel");
let package = document.querySelector("#package");
let all = document.querySelector("#all");
let categoryImages = document.querySelector(".category-images");
let allButtons = document.querySelectorAll(".category-button");



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
     