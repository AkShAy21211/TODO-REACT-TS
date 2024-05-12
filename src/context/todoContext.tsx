import { createContext, ReactNode, useContext, useState } from "react";

export type TodosProviderProps = {
    children: ReactNode,
}

export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
} 

export type TodosContextType = {
    todos: Todo[];
    handleAddTodo: (task: string) => void;
    delteTodo:(id:string)=>void;

}

export const TodosContext = createContext<TodosContextType>({
    todos: [],
    handleAddTodo: () => {},
    delteTodo:()=>{}
});

export const TodosProvider = ({ children }: TodosProviderProps) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAddTodo = (task: string) => {
        setTodos((prev: Todo[]) => {
            const newTodos: Todo[] = [
                {
                    id: Math.random().toString(),
                    task: task,
                    completed: false,
                    createdAt: new Date(),
                },
                ...prev,
            ];
            console.log('previous',prev);
            
            console.log(newTodos);
            
            return newTodos;
        });
    };  

    const delteTodo = (id:string)=>{

         setTodos([
                ...todos.filter((t)=>t.id !== id),
              
          
        ]);
    }

    return (
        <TodosContext.Provider value={{ todos, handleAddTodo,delteTodo }}>
            {children}
        </TodosContext.Provider>
    );
};

export const useTodos = (): TodosContextType => {
    const todoState = useContext(TodosContext);
    if (!todoState) {
        throw new Error("Todo context does not exist");
    }
    return todoState;
};
