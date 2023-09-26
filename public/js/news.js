
const ITEMS_PER_PAGE = 4;
const MAX_VISIBLE_PAGINATION = 8; // Example: 1 ... 4 5 6 ... 25

function generatePagination(currentPage, maxPages) {
    let pages = [];
    if (maxPages <= MAX_VISIBLE_PAGINATION) {
        for (let i = 1; i <= maxPages; i++) {
            pages.push(i);
        }
    } else {
        pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', maxPages];
        if (currentPage <= 3) {
            pages = [1, 2, 3, 4, '...', maxPages];
        } else if (currentPage >= maxPages - 2) {
            pages = [1, '...', maxPages - 3, maxPages - 2, maxPages - 1, maxPages];
        }
    }
    return pages;
}

function updatePaginationLinks(currentPage) {
    let maxPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);
    let pages = generatePagination(currentPage, maxPages);

    $(".custom-pagination").empty();
    pages.forEach(page => {
        if (page === '...') {
            $(".custom-pagination").append('<li class="ellipsis">...</li>');
        } else {
            $(".custom-pagination").append(`<li${page === currentPage ? ' class="active"' : ''}><a href="#">${page}</a></li>`);
        }
    });
}

$(".custom-pagination").on('click', 'li a', function(e) {
    e.preventDefault();  

    let pageClicked = parseInt($(this).text());

    if (isNaN(pageClicked)) return; // Skip if ... is clicked
    
    loadNewsItems((pageClicked - 1) * ITEMS_PER_PAGE);
    updatePaginationLinks(pageClicked);
});

$(document).ready(function() {
    loadNewsItems();  // Load the first set of news items initially
    updatePaginationLinks(1);
    // Handle "Jump" button click
    $("#jumpToPage").click(function() {
        let desiredPage = parseInt($("#gotoPage").val());

        if(isNaN(desiredPage) || desiredPage <= 0 || desiredPage > getMaxPages()) {
            alert("Please enter a valid page number between 1 and " + getMaxPages());
            return;
        }

        currentPage = desiredPage;
        loadNewsItems((desiredPage - 1) * ITEMS_PER_PAGE);
        updateActivePagination();
        updatePaginationLinks(currentPage);
    });


});

function loadNewsItems(startFrom = 0) {
    for (let i = 0; i < ITEMS_PER_PAGE; i++) {
        if (newsData[startFrom + i]) {
            updateNews(i + 1, startFrom + i);
        } else {
            clearNewsItem(i + 1);
        }
    }
}

function clearNewsItem(id) {
    $("#news-"+id+" h2 a").text("");
    $("#news-"+id+" .meta span:nth-child(2)").text("");
    $("#news-"+id+" .meta").contents().filter(function() {
        return this.nodeType === 3;
    }).last().replaceWith("");
    $("#news-"+id+" p").text("");
    $("#news-"+id+" figure img").attr("src", "");
}

function getMaxPages() {
    return Math.ceil(newsData.length / ITEMS_PER_PAGE);
}


function updateNews(id,idnews) {
    var news = newsData.find(n => n.id == idnews);  // Use .find() to get the correct news item by id

    $("#news-"+id+" h2 a").text(news.title);
    $("#news-"+id+" .meta span:nth-child(2)").text(news.date);
    $("#news-"+id+" .meta").contents().filter(function() {
        return this.nodeType === 3; // Node.TEXT_NODE
    }).last().replaceWith(" " + news.author);
    $("#news-"+id+" p").text(news.description);  // Use .description here
    $("#news-"+id+" figure img").attr("src", news.imageUrl);
}


function updateActivePagination() {
    $(".custom-pagination li.active").removeClass("active");
    $(".custom-pagination li").eq(currentPage - 1).addClass("active");
}

