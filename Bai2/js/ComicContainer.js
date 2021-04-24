const $template = document.createElement('template');
$template.innerHTML = `
<div class="content">
    <div class="comic-container">
        <div class="comic-image">
    </div>
        <div class="comic-info"> 
        <div class="comic-name"></div>
        <div class="comic-original-name"></div>
        <div class="comic-gender"></div>
    </div>
</div>
</div>
`;
export default class ComicContainer extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$name = this.querySelector('.comic-name');
        this.$image = this.querySelector('.comic-image');
        this.$type = this.querySelector('.comic-type');
        this.$gender = this.querySelector('.comic-gender');

    }
    // định nghĩa thuộc tính cho thẻ
    static get observedAttributes() {
        return ['name', 'gender', 'image',];
    }
    // chạy khi giá trị của thuộc tính (được địng nghĩa ở trên) thay đổi
    attributeChangedCallback(attrName1, oldValue, newValue) {
        //console.log("thuộc tính " + attrName1 + ":" + newValue);
        if (attrName1 == 'name') {
            this.$name.innerHTML = newValue;
        }
        else if (attrName1 == 'gender') {
            this.$gender.innerHTML = newValue;
        }
        else if (attrName1 == 'image') {
            this.$image.style.backgroundImage = `url('${newValue}')`;
        }
        // else if (attrName1 == 'hot') {
        //     //console.log(newValue);
        //     if (newValue == "true") {
        //         this.$hot.style.display = "inline-block";
        //     }
        //     else if (newValue == "false") {
        //         this.$hot.style.display = "none";
        //     }
        // }
    }
    //được chạy khi lần đầu tiên xuất hiện trên trang web
    connectedCallback() {

        console.log("lần đầu tiên xuất hiện");
    }
    // được chạy khi component bị xóa khỏi trang web
    disconnectedCallback() {
        console.log("Component đã bị xóa");
    }
}
window.customElements.define('comic-container', ComicContainer);