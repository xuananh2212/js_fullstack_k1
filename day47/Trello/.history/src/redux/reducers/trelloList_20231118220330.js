const initalState = {
     todoList: []
}
export default function trelloList(state = initalState, action) {
     switch (action.type) {
          case 'list/getList': {
               const listNew = [...action.payload.columns].map((item) => {
                    item.tasks = [];
                    action.payload.tasks.forEach((task) => {
                         if (task.column === item.column) {
                              item.tasks.push(task);

                         }
                    })
                    return item;
               })
               console.log(state, "state");
               console.log(listNew);
               return { ...state, todoList: listNew };
          }
          default: {
               return state;
          }
     }
}
