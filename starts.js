class Start extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        const tag = this.getAttribute("tags")
        let n = parseInt(parseInt(tag) / 100)

        let all_starts = "";
        
        for (n; n >= 0; n--) {
            all_starts  += `★`
          }

        this.innerHTML= all_starts
    }
}

customElements.define("start-list", Start);