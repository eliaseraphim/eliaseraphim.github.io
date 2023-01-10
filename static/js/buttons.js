$(".copy-btn").on("click", copyEmail);

function copyEmail(content_id, button_id) {
    var range = document.createRange();
    range.selectNode(document.getElementById(content_id));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect

    const tooltip = bootstrap.Tooltip.getInstance(button_id);
    tooltip.setContent({".tooltip-inner": "Copied!"});
    setTimeout(() => {
        tooltip.setContent({".tooltip-inner": "Copy to clipboard."})
        tooltip.hide()
    }, 1000);
}