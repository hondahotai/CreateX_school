// tab benefits

function tabBenefits(itemSelector, parentSelector, contentSelector) {
    try {
        const tabItem = document.querySelectorAll(itemSelector),
            tabParent = document.querySelector(parentSelector),
            tabContent = document.querySelectorAll(contentSelector);

        function hideTabContent () {
            tabContent.forEach(item => {
                item.classList.add('hidden');
                item.classList.remove('show');
            });

            tabItem.forEach(item => {
                item.classList.remove('tab__item_active');
            });
        }

        function showTabContent (i = 0) {
            tabContent[i].classList.add('show');
            tabContent[i].classList.remove('hidden');
            tabItem[i].classList.add('tab__item_active');
        }
        hideTabContent();
        showTabContent();

        tabParent.addEventListener('click', (e) => {
            let target = e.target;

            if (target && target.classList.contains('tab__item')) {
                tabItem.forEach((item, i) => {
                    if (target === item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    } catch (e) {
        console.log(e.name);
    }
}


//tabs (courses page)
function tabsCourses() {
   try {
       const tabsParent = document.querySelector('.courses-tabs'),
           tabsItems = document.querySelectorAll('.courses-tab__item'),
           tabsContent = document.querySelectorAll('.card-item');
       let tabTextContent = 'All';

       tabsParent.addEventListener('click', (e) => {
           if (e.target && e.target.classList.contains('courses-tab__item')) {
               tabsItems.forEach(item => {
                   item.classList.remove('courses-tab__item_active');
                   if (e.target === item) {
                       item.classList.add('courses-tab__item_active');
                       tabTextContent = e.target.textContent;
                       tabTextContent = tabTextContent.replace(/[0-9\s]/g, '');
                       console.log(tabTextContent);
                       // console.log(tabsContentBadge[1].innerHTML !== tabTextContent);
                       filterCards(tabTextContent);
                   }
               })
           }
       });


       function filterCards (str) {
           for (let i = 0; i < tabsContent.length; i++) {
               if (str === tabsItems[0].textContent.trim().slice(0, 3)) {
                   tabsContent.forEach(item => {
                       item.classList.remove('hide');
                   });
               }
               if (tabsContent[i].children[1].children[0].textContent.trim().replaceAll(' ', '') === str) {
                   tabsContent[i].classList.remove('hide');
               } else {
                   tabsContent[i].classList.add('hide');
               }
           }
       }
   } catch (e) {
       console.log(e.name);
   }
}


//tabs (blogs page) |  don't forget to remove duplication in the future
function tabsBlogs() {
    try {
        const tabsParent = document.querySelector('.blogs-tabs'),
            tabsItems = document.querySelectorAll('.blogs-tab'),
            tabsContent = document.querySelectorAll('.blog__item');
        let tabTextContent = 'All';

        tabsParent.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains('blogs-tab')) {
                tabsItems.forEach(item => {
                    item.classList.remove('blogs-tab_active');
                    if (e.target === item) {
                        item.classList.add('blogs-tab_active');
                        tabTextContent = e.target.textContent;
                        tabTextContent = tabTextContent.replace(/[0-9\s]/g, '');
                        console.log(tabTextContent);
                        // console.log(tabsContentBadge[1].innerHTML !== tabTextContent);
                        filterCards(tabTextContent);
                    }
                })
            }
        });


        function filterCards (str) {
            for (let i = 0; i < tabsContent.length; i++) {
                if (str === tabsItems[0].textContent.trim().slice(0, 3)) {
                    tabsContent.forEach(item => {
                        item.classList.remove('hide');
                        document.querySelector('#bigBlogItemImg').style.width = '495px';
                        document.querySelector('#wideBlogItem').style.gridColumn = `1/3`;
                    });
                }
                if (tabsContent[i].firstElementChild.lastElementChild.textContent.trim().replaceAll(' ', '') === str.substring(0, str.length - 1)) {
                    tabsContent[i].classList.remove('hide');
                    if (str.substring(0, str.length - 1) === 'Video') {
                        document.querySelector('#bigBlogItem').style.gridColumn = `auto`;
                        document.querySelector('#bigBlogItem').style.width = 'auto';
                        document.querySelector('#bigBlogItemImg').style.width = '390px';
                    }
                    if (str.substring(0, str.length - 1) === 'Article') {
                        document.querySelector('#wideBlogItem').style.gridColumn = `2/4`;
                    }
                } else {
                    tabsContent[i].classList.add('hide');
                }
            }
        }
    } catch (e) {
        console.log(e.name);
    }
}


export  {tabBenefits, tabsCourses, tabsBlogs};
