export const sidebarSelector = {
    state: () => ({
        selected: 'dash'
    }),
    mutations: {
        sidebarItemSelected(state, value) {
            state.selected = value;
        }
    },
    actions: {
        onChangedSelectedSidebarItem(context, selectedItem) {
            if (this.selected !== selectedItem) {
                context.commit('sidebarItemSelected', selectedItem);
            }
        }
    }
};