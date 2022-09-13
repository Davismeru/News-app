const wrapper = document.querySelector('.wrapper')
// set articles to start where the header ends
const header = wrapper.querySelector('header')
const articlesContainer = wrapper.querySelector('.articles')
const headerHeight = header.clientHeight
articlesContainer.style.top = `${headerHeight}px`

// display  news categories cards(from assets/categories.js)
categories.map(category => {
    articlesContainer.innerHTML += `
    <article class=${category.title}>
        <div class="article-intro">
            <h2>${category.title}</h2>
            <p>${category.description}</p>
        </div>
        <div class="view-btn">
            <i class="fa-solid fa-eye"></i>
        </div>
    </article>
    `
})

// view buttons functionzlity
const allArticles = articlesContainer.querySelectorAll('article')
const selectedCategory = wrapper.querySelector('.selected-category')
allArticles.forEach(article => {
    const viewBtn = article.querySelector('.view-btn')
    viewBtn.addEventListener('click', (e)=> {
        selectedCategory.classList.add('show-category')
        console.log(e.currentTarget.parentElement);
    })
})

// close selected category page
const closeBtn = selectedCategory.querySelector('.fa-x')
closeBtn.addEventListener('click', ()=> {
    selectedCategory.classList.remove('show-category')
})