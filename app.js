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
        const classParent = e.currentTarget.parentElement.classList
        allTopics.filter((selectedTopic)=> {
            if(classParent == selectedTopic.category) {
                selectedCategory.innerHTML += `
                    <div class="topic">
                        <!-- view before the expanded card -->
                        <div class="mini">
                            <div class="mini-img">
                                <img src=${selectedTopic.imgSrc}>
                            </div>
                            <div class="topic-details">
                                <h4>${selectedTopic.topic}</h4>
                                <h6>9 September 2022</h6>
                                <input type="button" value="expand">
                            </div>
                        </div>

                        <!-- view after expanding -->
                        <div class="topic-expanded card-hidden">
                            <div class="expanded-img">
                                <img src=${selectedTopic.imgSrc}>
                            </div>

                            <div class="expanded-content">
                                <div class="topic-details">
                                    <h4>${selectedTopic.topic}</h4>
                                    <h6>9 September 2022</h6>
                                </div>

                                <article>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iste dicta corporis omnis, impedit accusamus enim vel. Quam, repellat ducimus.
                                </article>

                                <input type="button" value="See story">
                            </div>
                        </div>
                    </div>`
            }

            
        })
    })
})

// topics position from top
const categoryHeader = selectedCategory.querySelector('.category-header')
const categoryHeaderHeight = categoryHeader.clientHeight
selectedCategory.style.paddingTop = `${categoryHeaderHeight}px`