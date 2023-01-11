$(".copy-btn").on("click", copyEmail);

function copyEmail(email_id, button_id) {
    function copy() {
        const range = document.createRange();
        range.selectNode(document.getElementById(email_id));
        window.getSelection().removeAllRanges(); // clear current selection
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges();// to deselect
    }

    function update_tooltip() {
        const tooltip = bootstrap.Tooltip.getInstance(button_id);
        tooltip.setContent({".tooltip-inner": "Copied!"});
        setTimeout(() => {
            tooltip.setContent({".tooltip-inner": "Copy to clipboard."})
        }, 1000);
    }

    copy();
    update_tooltip();
}