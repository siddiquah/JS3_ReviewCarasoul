let reviews = [
    {
        "id": 1,
        "img": "./img/pic1.jpeg",
        "title": "BISMA",
        "position": "Software Developer",
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, vitae aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, vitae aliquam nisl nisl sit amet nisl."
    },  
    {
        "id": 2,
        "img": "./img/pic2.jpg",
        "title": "ESHAAL",
        "position": "Nurse Practitioner",
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, vitae aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, vitae aliquam nisl nisl sit amet nisl."
    },
    {
        "id": 3,
        "img": "./img/pic3.jpg",
        "title": "FAIZA",
        "position": "CEO",
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, vitae aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, vitae aliquam nisl nisl sit amet nisl."
    },
    {
        "id": 4,
        "img": "./img/pic4.webp",
        "title": "JAWARIA",
        "position": "Medical and Health Services Manager",
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, vitae aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, vitae aliquam nisl nisl sit amet nisl."
    },
    {
        "id": 5,
        "img": "./img/pic5.jpg",
        "title": "KHADIJA",
        "position": "CEO",
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, vitae aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, vitae aliquam nisl nisl sit amet nisl."
    },
    {
        "id": 6,
        "img": "./img/pic6.webp",
        "title": "Abbas",
        "position": "Physician Assistant",
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, vitae aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, vitae aliquam nisl nisl sit amet nisl."
    },
    {
        "id": 7,
        "img": "./img/pic7.jpeg",
        "title": "Adeel",
        "position": "CTO",
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, vitae aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, vitae aliquam nisl nisl sit amet nisl."
    },
    {
        "id": 8,
        "img": "./img/pic8.jpeg",
        "title": "Ahmed",
        "position": "Financial Manager",
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, vitae aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, vitae aliquam nisl nisl sit amet nisl."
    },
    {
        "id": 9,
        "img": "./img/pic9.avif",
        "title": "LAIBA",
        "position": "Lawyer",
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, vitae aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, vitae aliquam nisl nisl sit amet nisl."
    },
    {
        "id": 10,
        "img": "./img/pic10.jpeg",
        "title": "INAYA",
        "position": "Data Scientist",
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, vitae aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, vitae aliquam nisl nisl sit amet nisl."
    }
];

const img = document.getElementById("image");
const names = document.getElementById("name");
const position = document.getElementById("title");
const review = document.getElementById("description");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const randomBtn = document.querySelector("#surpriseBtn");

let currentItem = 0; 
windows.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
});

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    names.textContent = item.title;
    position.textContent = item.position;
    review.textContent = item.review;
}

function next(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
}

function prev(){
    currentItem--;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
}

function surprise(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
}    