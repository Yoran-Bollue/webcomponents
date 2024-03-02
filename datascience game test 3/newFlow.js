const newFlowButton = document.getElementById("newFlow");

newFlowButton.addEventListener("click", () => {
    const lastFlowContainer = scene.querySelector('flow-container:last-child');
    let lastFlowContainerTitle = "Flow0";
    if (lastFlowContainer) {
        lastFlowContainerTitle = lastFlowContainer.getAttribute("title");
    }
    const splitArray = lastFlowContainerTitle.split(/(\d+)/).filter(Boolean);

    const newFlowContainer = document.createElement('flow-container');
    newFlowContainer.setAttribute('title', `${splitArray[0]} ${++splitArray[1]}`);

    scene.appendChild(newFlowContainer);
    flowContainers.push(newFlowContainer);

    loopContainers();
});
