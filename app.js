$(function() {

    var router = new VueRouter({
        mode: 'history',
        routes: []
    });

    new Vue({
        router,
        el: 'div[type="cards"]',
        data: {
            list: [
                {
                    title: 'Mirele for Clients',
                    content: 'If you are a Mirele customer and need help, you can refer to this documentation.',
                    link: {
                        text: 'Go to',
                        url: '#'
                    }
                },
                {
                    title: 'Mirele Developer',
                    content: 'If you want to study the source code of Mirele, you can refer to this documentation.',
                    link: {
                        text: 'Go to',
                        url: '#'
                    }
                },
                {
                    title: 'Mirele Repository',
                    content: 'If you want to learn the structure of Git repositories for Mirele, you can refer to this documentation.',
                    link: {
                        text: 'Go to',
                        url: '#'
                    }
                },
                {
                    title: 'Mirele Community',
                    content: 'If you find problems in Mirele\'s security or optimization problems, you can refer to this documentation.',
                    link: {
                        text: 'Go to',
                        url: '#'
                    }
                }
            ]
        }
    });


    new Vue({
        router,
        el: 'ul[role="navbar"]',
        data: {
            items: [
                {
                    content: "Create page",
                    url: "#Create page"
                }
            ]
        }
    });

    new Vue({
        router,
        el: 'main[role="main"]',
        data: {
            mirele_for_clients: [
                {
                    title: 'Create page',
                    content: [
                        "Mirele uses the Rosemary block editor (this editor is supplied for the first time with Mirele and is an editor iRTEX the author). The concepts \"Rosemary Editor\" and \"Mirele Editor\" can be considered equal. <i>Each page created in Rosemary Editor is not a default WordPress page.</i> You can create a WordPress page using the shortcode on a regular page WordPress or you can use a special function in the editor.",
                        "To create a new Rosemary page, you need to go to the WordPress Administrator panel and find <u>\"Mirele Pages\"</u> in the right main menu, then click <u>\"Add New\"</u> and enter the name of your new page. I suggest using lowercase and not using spaces, commas, periods, etc. It is better to use characters that replace the space: - _",
                        "When you create a page by clicking on the Confirm button, you enter the Rosemary page editor described in the articles below"
                    ]
                },
                {
                    title: 'Create block',
                    content: [
                        "On a blank editable page in the panel next to the header there are control buttons. To create a page you need to click on the appropriate button.",
                        "Clicking <u>\"Insert Block\"</u> opens the Block Collection. This collection contains all installed blocks in your system. You can use each block multiple times on the same page.",
                        "Each block in the block collection has several displayed parameters:",
                        "<ol>" +
                            "<li>Title</li>" +
                            "<li>Author</li>" +
                            "<li>Color</li>" +
                            "<li>Description</li>" +
                            "<li>Action button</li>" +
                        "</ol>",
                        "<b>Title</b> is not a unique block title.",
                        "<b>Author</b> is a unique nickname the author/name of the organization which created this block",
                        "<b>Color</b>  is a controversial technology to speed up block navigation. It`s task is that by the color of the dot you can quickly find exactly the block you need if 2-3 similar blocks appear in your collection",
                        "<b>Description</b> is a description of the unit. Typically, the description is written short and local so that the user can quickly understand what this block is for",
                        "<b>Action button</b> is a button for adding a block to a page",
                        "To add a new block, use the search (input bar at the top of the block collection) and click the add block button on the page"
                    ]
                },
                {
                    title: 'Create WordPress page',
                    content: [

                    ]
                },
            ]
        }
    });

});