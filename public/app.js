document.addEventListener("click", async (event) => {
    if (event.target.dataset.type === "remove") {
        const id = event.target.dataset.id;
        remove(id);
        event.target.closest("li").remove();
    }
    if (event.target.dataset.type === "edit") {
        const title = prompt("Введите новое название");
        const id = event.target.dataset.id;
        const data = { id: id, title: title };
        edit(data);
        document.querySelector(`[id="${id}"]`).textContent = title;
    }
});

async function remove(id) {
    await fetch(`${id}`, { method: "DELETE" });
}

async function edit(data) {
    await fetch(`/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}
