console.log("Portfolio JavaScript loaded successfully.");


const navToggle = document.querySelector("#nav-toggle");

const navLinks = document.querySelector("#nav-links");


navToggle.addEventListener("click", function () {

    navLinks.classList.toggle("open");


    const menuIsOpen =
        navLinks.classList.contains("open");


    navToggle.setAttribute(
        "aria-expanded",
        menuIsOpen
    );


    if (menuIsOpen) {

        navToggle.setAttribute(
            "aria-label",
            "Close navigation menu"
        );

    } else {

        navToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

});
const navigationItems =
    document.querySelectorAll(
        "#nav-links a"
    );


navigationItems.forEach(
    function (navigationItem) {

        navigationItem.addEventListener(
            "click",
            function () {

                navLinks.classList.remove("open");


                navToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                navToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }
        );

    }
);
const currentYear =
    document.querySelector("#current-year");


const year =
    new Date().getFullYear();


currentYear.textContent = year;
const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


const sectionObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (entry.isIntersecting) {

                        const sectionId =
                            entry.target.id;


                        navigationLinks.forEach(
                            function (link) {

                                link.classList.remove(
                                    "active"
                                );


                                if (
                                    link.getAttribute("href")
                                    ===
                                    "#" + sectionId
                                ) {

                                    link.classList.add(
                                        "active"
                                    );

                                }

                            }
                        );

                    }

                }
            );

        },

        {
            threshold: 0.55
        }

    );


sections.forEach(
    function (section) {

        sectionObserver.observe(section);

    }
);