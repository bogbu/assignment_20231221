<script lang="ts">
    import {about} from "../routes";
    import Input from "../../components/input.svelte";
    import Button from "../../components/button.svelte";
    import Layout from "../../components/layout.svelte";
    import FullCalendar, {type CalendarOptions} from 'svelte-fullcalendar';
    import timegridPlugin from '@fullcalendar/timegrid';
    import interactionPlugin from '@fullcalendar/interaction';
    import daygridPlugin from '@fullcalendar/daygrid';
    import Plugin from '@fullcalendar/list';
    import {AddTodo, EditTodo} from "../../api/_post";
    import TimePicker from "../../components/timePicker.svelte";
    import {deleteTodoList, getTodoList} from "../../api/_get";
    import type {EventClickArg} from "@fullcalendar/core";
    import {regTodo} from "./utils/validation";

    interface eventList {
        title: string,
        date: string,
        done: boolean,
        color: string,
        id: string
    }

    let numClicks = 0;
    let todo = "";
    let targetId = "";
    let error = "";
    let success = "";
    let borderColor = "";
    let targetDone: undefined;
    let setTodoList: eventList[] = [];
    // let list : ResponseTodoBody[] = [];
    let date = new Date();
    const resetTarget = () => {
        numClicks = 0;
        targetId = "";
        targetDone = undefined;
        todo = "";
        date = new Date();
    };
    const resetError = () => {
        error = "";
        success = "";
        borderColor = "";
    }
    let options: CalendarOptions = {
        aspectRatio: 2,
        height: 700,
        plugins: [daygridPlugin, timegridPlugin, interactionPlugin, Plugin],
        droppable: true,
        editable: true,
        eventColor: "purple",
        eventClassNames: function (arg) {
            if (arg.event.extendedProps.done === false) {
                //todo 안함
                return ['not-done'];
            } else {
                return ['done'];
            }

        },
        eventAdd: (e) => {
            console.log(e);
        },
        events: [],
        headerToolbar: {
            right: 'prev,next today',
        },
        buttonText: {
            today: '오늘',
        },
        eventDrop: (e) => {
            editDate(e);
        },
        eventClick: (event) => {
            resetError();
            numClicks++;
            if (targetId.length > 0) {
                if (event.event.id !== targetId) {
                    error = '투두 여부 선택이 취소되었습니다.';
                    borderColor = 'red';
                    resetTarget();
                    return
                }
            }
            if (numClicks === 2) {
                editDone(event);
                numClicks = 0;
            } else if (numClicks === 1) {
                editTitle(event)
            }
            // console.log(event)
        }
    };
    const editTitle = (event: EventClickArg) => {
        todo = event.event.title;
        date = new Date(event.event.start!);
        targetId = event.event.id;
        targetDone = event.event.extendedProps.done;
    }

    const editDone = (event: EventClickArg) => {
        resetError();
        EditTodo(event.event.title, event.event.start!, event.event.extendedProps.done === false, event.event.id).then(() => {
            success = "투두 여부가 변경되었습니다.";
            borderColor = "blue";
            list = getTodo();
            resetTarget();
        });
    }
    const editDate = (event: EventClickArg) => {
        resetError();
        EditTodo(event.event.title, event.event.start!, event.event.extendedProps.done, event.event.id)
            .then(() => {
                success = "날짜가 변경되었습니다.";
                borderColor = "blue";
                resetTarget();
            });
    }

    const getTodo = async () => {
        await getTodoList().then((response) => {
            setTodoList = [];
            response.forEach((item) => {
                    let todo = item.title;
                    let index = todo.indexOf('#');
                    let title = todo.substring(0, index);
                    let date = todo.substring(index + 1);
                    const ob: eventList = {
                        title: title,
                        date: date,
                        done: item.done,
                        color: item.done ? "#797EF6" : "#FA8072",
                        id: item.id
                    }
                    setTodoList.push(ob);
                }
            );
            options.events = setTodoList;
            return response;
        });
    }
    let list = getTodo();
    const postTodo = () => {
        resetError();
        console.log(todo);
        console.log(regTodo.test(todo));
        if (!regTodo.test(todo)) {
            borderColor = "red";
            return error = "투두는 2글자 이상 20글자 이하로 작성해야 합니다.";
        }
        if (targetId.length != 0) {
            EditTodo(todo, new Date(date), targetDone!, targetId).then(() => {
                borderColor = "blue";
                success = "투두 수정이 완료되었습니다.";
                resetTarget();
                return;
            });
        } else {
            AddTodo(todo, new Date(date)).then(() => {
                success = "투두가 등록되었습니다.";
                borderColor = "blue";
                list = getTodo();
                resetTarget();
            });
        }
    }
    const deleteTodo = () => {
        resetError();
        if (targetId.length === 0) {
            error = '삭제할 대상이 존재하지 않습니다.';
            borderColor = 'red';
            return;
        }
        deleteTodoList(targetId).then(() => {
            success = '투두를 삭제하였습니다.';
            borderColor = 'blue';
            resetTarget();
            list = getTodo();
        })
    }
</script>


<Layout>
    <section slot="content">
        <!--    <h2 class="todoTitleView">{todo}</h2>-->
        <div class="todo">
            <div class="todoInput">
                <div class="inputWrap">
                    <Input bind:value={todo} borderColor={borderColor} placeholder="TODO를 입력해주세요."/>
                </div>
                <TimePicker bind:date/>
            </div>
            <div class="todoBtn">
                <Button onclick={postTodo}>전송</Button>
                <Button color="bg-red" onclick={deleteTodo}>삭제</Button>
            </div>
        </div>
        <div class="todoAlertView">
            <p class="error">{error}</p>
            <p class="success">{success}</p>
        </div>
        {#await list}
            <FullCalendar {options}/>
        {:then list}
            <FullCalendar {options}/>
        {:catch error}
            <p>데이터를 불러오지 못했습니다 {error}</p>
        {/await}
    </section>
</Layout>

<style lang="scss">
  @media (max-width: 650px) {
    section {
      .todo {
        display: block !important;

        .todoBtn {
          margin-top: 20px;
          width: 100% !important;
        }
      }
    }
  }

  @media (max-width: 500px) {
    section {
      .todo {
        .todoInput {
          display: block !important;

          .inputWrap {
            margin-bottom: 20px;
          }
        }
      }
    }
  }

  section {
    position: relative;

    .todoTitleView {
      margin-bottom: 10px;
    }

    .todo {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-bottom: 20px;

      .todoInput {
        width: 100%;
        display: flex;
        justify-items: center;
        gap: 10px;
        align-items: center;

        .inputWrap {
          width: 100%;
          height: 64px;
        }
      }

      .todoBtn {
        width: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
      }
    }

    .todoAlertView {
      position: absolute;
      display: flex;
      width: 100%;
      align-content: center;
      justify-content: center;

      .error {
        color: #FA8072;
      }

      .success {
        color: #797EF6;
      }
    }
  }

</style>