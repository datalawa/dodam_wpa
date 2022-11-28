import router from "@/routers/router";

export function onArticleWriteButtonClicked(board) {
    router.push({ name: 'write', params: { board: board }})
}