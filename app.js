$(function() {

    var r_function = function (list = {}) {

        var body = '';

        for (const function_ of list) {
            body += `<tr>
                           <td>${function_.func}</td>
                           <td>${function_.desc}</td>
                           <td>${function_.params.join('<br>')}</td>
                           <td>${function_.ret}</td>
                       </tr>`;
        }

        return `<table width="100%">

                       <thead>
                           <th>Function</th>
                           <th>Description</th>
                           <th>Params</th>
                           <th>Return</th>
                       </thead>
            
                        ${body}
                       
                   </table>`;
    }

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
                        text: 'Go to Article Block',
                        url: '#mirele_for_clients'
                    }
                },
                {
                    title: 'Mirele Developer',
                    content: 'If you want to study the source code of Mirele, you can refer to this documentation.',
                    link: {
                        text: 'Go to Article Block',
                        url: '#'
                    }
                },
                {
                    title: 'Mirele Repository',
                    content: 'If you want to learn the structure of Git repositories for Mirele, you can refer to this documentation.',
                    link: {
                        text: 'Go to Article Block',
                        url: '#'
                    }
                },
                {
                    title: 'Mirele Community',
                    content: 'If you find problems in Mirele\'s security or optimization problems, you can refer to this documentation.',
                    link: {
                        text: 'Go to Article Block',
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
            items: {
                mireleForYou: [
                    {
                        content: "Create page",
                        url: "#Create page"
                    },
                    {
                        content: "Remove page",
                        url: "#Remove page"
                    },
                    {
                        content: "Create block",
                        url: "#Create block"
                    },
                    {
                        content: "Edit block",
                        url: "#Edit block"
                    },
                    {
                        content: "Create WordPress page",
                        url: "#Create WordPress page"
                    },
                    {
                        content: "Migration (Export/Import)",
                        url: "#Migration (Export/Import)"
                    },
                    {
                        content: "Market",
                        url: "#Market"
                    },
                    {
                        content: "Choosing interface options",
                        url: "#Choosing interface options"
                    },
                    {
                        content: "WooCommerce",
                        url: "#WooCommerce"
                    }
                ],
                dev: [
                    {
                        content: "Development block",
                        url: "#Development block"
                    }
                ]

            }
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
                    title: 'Remove page',
                    content: [
                        "Any Rosemary page you can be removed very easily.",
                        "To do this, go to the <u>\"Mirele Pages\"</u> page and find the required page in the table and click <u>\"Remove Page\"</u> in the menu that appears"
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
                    title: 'Edit block',
                    content: [
                        "Each Mirele block consists of editable content. That means you can change it on a frame block. You cannot change item positions, but you can change other values.",
                        "Let's prepare the block:",
                        "<img src='img/blocks.png' class='image'>",
                        "It follows from the picture above that in order to change the stacking of an element, you should modify the stacking in the field \"Value for element\"",
                        "Large blocks and elements are equipped with rich logic and a set of options that you can change.",
                        "To change the options for the entire block (for example, appearance animation), click the link \"Link for editing option of block,\" and to change the options for the element, you should point to the required element and click the link \"Link for editing option of element.\"",
                        "Note that not all blocks and elements can be provided with options and there will be no such references on some elements and blocks.",
                        "After each change you make, you must click on the \"Save block\" button, otherwise the changes on the page will not be saved.",
                        "You can also remove blocks by clicking the \"Remove block\" button.",
                        "If your blocks have become too many and you can 't navigate them, you can double-click on the block cap to roll it out. A double click on the closed block will open it. The blocks will remain collapsed before you close browser. After the browser reloads, all blocks are returned to the open state."
                    ]
                },
                {
                    title: 'Create WordPress page',
                    content: [
                        "Every page you create in the Rosemary Page Reader is not a WordPress page. Creating a page WordPress their Rosemary page is very easy. To do this, go to <u>\"Mirele Pages\"</u> and find the page you need in the table, then hover over the name of your page and click <u>\"Create WordPress Page\"</u> in the menu that appears"
                    ]
                },
                {
                    title: "Migration (Export/Import)",
                    content: [
                        "To export a set of blocks, just go to the desired page and click on the \"Export\" button (in the control unit)\n",
                        "After export approval in the modal menu, a block file is downloaded to your computer. You can import it to another page or to another site\n",
                        "To import a block, go to the desired Mirele page and select the \"Import\" button\n",
                        "After choosing the correct block file, you will be asked if you really want to import blocks (in the modal window you can see which blocks will be imported)\n",
                        "After successful import, your page will reload and you will see new blocks on your page\n"
                    ]
                },
                {
                    title: "Market",
                    content: [
                        "Mirele can install blocks from external GitHub repositories or ZIP files. By default, your Mirele is connected to the official Mirele repository, but you can add to the list of available repositories.",
                        "To install a new block, site, plugin or Mirele application, go to the <u>\"Block collection\"</u> and select the <u>\"Market\"</u> tab in the tabbed area.",
                        "By default, you 'll be in the app store. For Mirele owners, all items in this store are absolutely free.",
                        "You can use this store in the same way you use the plugin search engine in WordPress.",
                        "In the panel where the search string will be opened, you can find several tabs. To install the package by direct link, go to the <u>\"Install from URL\"</u> tab.",
                        "After that, a form will open for you with the ability to enter a URL link to the package. Enter the link and click on the <u>\"Install Now\"</u> button.",
                        "You should see a modal window that will have a message with information about the block and a request for confirmation of the installation, or a message with an error that your repository is not responding or the package is damaged.",
                        "If your link is valid, then in the modal window you will see the name of the package, its author and version. If all data is correct, confirm the installation. The system may also require a MIrele security password. Read about it in the article \"Account Mirele\".",
                        "If you get an error, then you should check the link for validity. Perhaps you accidentally added a space at the end of the link or you pressed Tab.",
                        "If your link is completely correct and you can open it in a browser, but the installer notifies you that the link is not valid - contact the creator of the package. Most likely the source code of his project is corrupted.",
                        "In addition to installing packages by reference, you can also install them from the zip archive. To do this, select the <u>\"Install from ZIP\"</u> tab in the menu already known to you. You will see a form that looks like a package installation form by URL link, but instead of an input field, you will see a field for selecting a file. Select the desired file by clicking on <u>\"Choose file\"</u> and wait for the archive to be unpacked.",
                        "If your archive is fully functional, you will receive a success message. But you can also get error messages. If the essence of the message says that you do not have a class installed for working with archives, you should contact your system administrator with a request to install a module on your server for working with the ZipArchive class for PHP. You can say the following words to him: <i> Hey, there you need to install a module on the server for working with archives, here is a link with solutions to Stack Overflow: <a href='https://stackoverflow.com/questions/3872555/fatal-error-class-ziparchive-not-found-in'>https://stackoverflow.com/questions/3872555/fatal-error-class-ziparchive-not-found-in</a></i>",
                        "If you have not received any messages at all after installation, then most likely the size of your archive exceeds the maximum file size that can be uploaded to your server. Ask your system administrator to compare the size of the maximum upload file to the server with the size of your archive. If the archive size is greater than the maximum limit, ask your system administrator to increase the maximum file limit. You can throw him a link to solutions with Stack Overflow: <a href='https://stackoverflow.com/questions/23432181/debian-php-max-file-upload'>https://stackoverflow.com/questions/23432181/debian-php-max-file-upload</a> or <a href='https://stackoverflow.com/search?q=max+upload+file+php'>https://stackoverflow.com/search?q=max+upload+file+php</a>",
                        "If you receive a message that tells you that the file type is not a ZIP file type, then you have selected the wrong file. Mirele only supports archive formats, such as .ZIP, .JAR, etc.",
                        "If you need to add a new Git repository to your product, then you should go to the \"Add new GIt\" tab. After going to this tab, you will have a table with your repositories. You can remove an extra repository by clicking on <u>\"Remove\"</u> (or <u>\"Delete\"</u>) on the right side of the repository. To add a new repository, paste the link of the form <a href='https://github.com/irtex-web/mirele.git'>https://github.com/irtex-web/mirele.git</a> into the form below the table and click <u>\"Add Now\"</u>. If you did everything correctly, then after reloading the page in the table, you will see a repository. Attention! The system may request a password from your Mirele account for security reasons. About your Mirele account, see the article <u>\"Mirele Account\"</u>",
                        "After adding a new repository, you can go to the \"Market\" and search for packages. You will notice that you have new blocks in your market. If they do not exist, then contact the administrator of the repository and ask if he has correctly marked out the file \"market.json\""
                    ]
                },
                {
                    title: "Choosing interface options",
                    content: [
                        "To export a set of blocks, just go to the desired page and click on the \"Export\" button (in the control unit)\n",
                        "After export approval in the modal menu, a block file is downloaded to your computer. You can import it to another page or to another site\n",
                        "To import a block, go to the desired Mirele page and select the \"Import\" button\n",
                        "After choosing the correct block file, you will be asked if you really want to import blocks (in the modal window you can see which blocks will be imported)\n",
                        "After successful import, your page will reload and you will see new blocks on your page\n"
                    ]
                },
                {
                    title: "WooCommerce",
                    content: [
                        "To export a set of blocks, just go to the desired page and click on the \"Export\" button (in the control unit)\n",
                        "After export approval in the modal menu, a block file is downloaded to your computer. You can import it to another page or to another site\n",
                        "To import a block, go to the desired Mirele page and select the \"Import\" button\n",
                        "After choosing the correct block file, you will be asked if you really want to import blocks (in the modal window you can see which blocks will be imported)\n",
                        "After successful import, your page will reload and you will see new blocks on your page\n"
                    ]
                }
            ],
            dev: [
                {
                    'title': 'Development block',
                    'content': [
                        "How are package files connected in Mirele? The system checks the templates folder, indexes all files, gives the code to the antivirus for verification, and if all the checks have been passed, the code is connected. There are also options for connecting HTML files, but read about it below, since this is a completely different block development technology.",
                        "Not all files in the folder will be included as templates. You need to have a comment in your code - Rosemary Template: Name;. So the system will understand that the template file is in the folder, and not a other PHP file.",
                        "As a result, your code should start as in the example below.",
                        "<pre><code data-language=\"php\">&lt;?php\n" +
                        "\n" +
                        "/**\n" +
                        " * Rosemary Template: Name;\n" +
                        " * Type: Template;\n" +
                        " * Author: Mirele;\n" +
                        " * Version: 1.0.0;\n" +
                        " * Description: :);\n" +
                        " */\n" +
                        "\n" +
                        "rosemary_register('template_id', function ($event=null) {\n" +
                        "\n\t// Logic\n\n" +
                        "}, array(\n" +
                        "    'title' => 'Title block',\n" +
                        "    'description' => 'Description',\n" +
                        "    'author' => 'You Package'\n" +
                        ")); ?></code></pre>",
                        "Remember that what you write in the comments in your block template files will be displayed when you install a block from the market, and the meta information that you pass to the function will be displayed to users as information about the block. This allows you to register more than 1 block in one file with different meta information.",
                        "This is how the main function for registering a template works:",
                        r_function (
                            [
                                {
                                    func: 'rosemary_register',
                                    desc: 'Registers a block and its executable code\n',
                                    params: [
                                        'id:any - ID of the template. On it he will be called',
                                        'function:function - The function that will be called when the template is on the page. The function should render content',
                                        'meta:array - meta information so that your template can be identified among others. This information is displayed in the block collection.'
                                    ],
                                    ret: 'void'
                                },

                            ]
                        )
                    ]
                }
            ]
        }
    });

    Rainbow.color();

});