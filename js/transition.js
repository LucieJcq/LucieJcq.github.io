const transition = {
    init() {
        const presentation = document.querySelector("#presentation");
        presentation.addEventListener(
            "click",
            transition.handlePresentationTranstion
        );

        const skills = document.querySelector("skills");
        const formation = document.querySelector("formation");
        const experience = document.querySelector("experience");
        const portforlio = document.querySelector("portfolio");
        const contact = document.querySelector("contact");
    },
};
