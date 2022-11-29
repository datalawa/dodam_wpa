import router from "@/routers/router";

export function onArticleWriteButtonClicked(board) {
    router.push({ name: 'write', query: { board: board }})
}