import {interiorApi} from "./createKy";
import type {ResponseTodoBody} from "../interface/Res";
import type {AddRequestBody} from "../interface/Req";
import {formatDate} from "../lib/formatDate";

export const AddTodo = async (title : string, date : Date = new Date()) => {
    try {
        let dateString = parsingDate(date);
        let todoWithDate = `${title}#${dateString}`;
        console.log(todoWithDate);
        const response = await interiorApi.post('todos', {
            json : {
                title : todoWithDate,
            }
        }).json<AddRequestBody>();
    } catch (error) {

    }
}
const parsingDate = (date: Date) => {
    let dateString = formatDate(date);
    if(dateString === formatDate(new Date)) return dateString;
    else return formatDate(new Date(date.setDate(date.getDate() +1)));
}
export const EditTodo = async (title : string, date : Date = new Date(), done:boolean ,todoId: string) => {
    try {
        let dateString = parsingDate(date);
        let todoWithDate = `${title}#${dateString}`;
        const response = await interiorApi.put(`todos/${todoId}`, {
            json : {
                title : todoWithDate,
                done : done,
            }
        }).json<AddRequestBody>();
        console.log(response);
    } catch (error) {

    }
}