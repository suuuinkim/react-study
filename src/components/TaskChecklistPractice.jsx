import { useState } from "react";
import "../css/TaskChecklistPractice.css";

const initialTasks = [
    {
        id: 1,
        title: "React 복습",
        completed: false,
    },
    {
        id: 2,
        title: "JavaScript 30분 공부",
        completed: false,
    },
    {
        id: 3,
        title: "운동하기",
        completed: false,
    },
];

function TaskChecklistPractice() {
    const [tasks, setTasks] = useState(initialTasks)
    const [newTask, setNewTask] = useState('')
    const [filter, setFilter] = useState('전체')
    const [editingId, setEditingId] = useState(null)
    const [editText, setEditText] = useState('')

    // 할일 완료 처리
    const handleDoneTask = (id) => {
        // console.log('id', id);
        const newTasks = tasks.map((item) => {
            // 현재 item이 클릭한 id와 같은지 확인
            if(item.id === id) {
                // 같다면 completed가 변경된 새 객체 반환
                return {
                    ...item,
                    completed: !item.completed
                }
            }

            return item

        })
        // newTasks를 state에 반영
        setTasks(newTasks)
    }

    const completedTasks = tasks.filter((item)=> {
        // completed가 true인 것만 남기기
        return item.completed
    })

    // 할일 추가
    const handleAddTask = () => {
        if (newTask.trim() === '') {
            return
        }

        const task = {
            id : Date.now(),
            title : newTask.trim(),
            completed : false
        }

        setTasks([...tasks, task])
        setNewTask('')
    }

    // 할일목록 삭제
    const handleDeleteTask = (id) => {
        // console.log('삭제', id);
        const newTasks = tasks.filter((item) => {
            // 삭제할 id 와 다른 것만 남기기
            return id !== item.id
        })

        // newTasks를 tasks state에 반영
        setTasks(newTasks);
    }

    // 필터처리
    const filteredTasks = tasks.filter((item) => {
        if (filter === '전체') {
            return true
        }
        if (filter === '진행중') {
            return !item.completed
        }
        if (filter === '완료') {
            return item.completed
        }

    })

    // 완료 항목 삭제
    // const handleAllDeleteTask = () => {
    //     const newTasks = tasks.filter((item) => {
    //         return !item.completed
    //     })
    //     setTasks(newTasks)
    // }

    // 수정 처리
    const handleEditTask = (id, title) => {
        // console.log('수정', id);
        setEditingId(id)
        setEditText(title)


    }

    // 저장
    const handleSaveTask = (id) => {
        const newTasks = tasks.map((item) => {
            if (id === item.id) {
                return {
                    ...item,
                    title : editText
                }
            }

            return item
        })

        setTasks(newTasks)

        setEditingId(null)
    }

    return (
        <main className="task-page">
            <section className="task-card">
                <header className="task-header">
                    <div>
                        <span className="eyebrow">TODAY</span>
                        <h1>오늘의 할 일</h1>
                    </div>

                    <strong className="task-count">
                        {completedTasks.length} / {tasks.length}
                    </strong>
                </header>

                <div className="task-input-area">
                    <input
                        type="text"
                        placeholder="새로운 할 일을 입력하세요..."
                        value={newTask}
                        onChange={(e) => {
                            setNewTask(e.target.value)
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleAddTask()
                            }
                        }}
                    />

                    <button type="button" onClick={handleAddTask}>
                        추가
                    </button>
                </div>

                <div className="task-filter">
                    <button type="button" className={filter === '전체'? 'active' : ''} onClick={() => {setFilter('전체')}}>전체</button>
                    <button type="button" className={filter === '진행중'? 'active' : ''} onClick={() => {setFilter('진행중')}}>진행중</button>
                    <button type="button" className={filter === '완료'? 'active' : ''} onClick={() => setFilter('완료')}>완료</button>
                </div>

                {/*<button*/}
                {/*    type="button"*/}
                {/*    onClick={() => {handleAllDeleteTask()}}*/}
                {/*    disabled={completedTasks.length === 0}*/}
                {/*>*/}
                {/*    완료 항목 삭제*/}
                {/*</button>*/}

                <div className="task-list">
                    {/* 진행중인 할일이 없을 때 */}

                    {filteredTasks.length === 0 ? (<p>진행중인 일이 없음 </p>) :
                    (

                        filteredTasks.map((item) => {
                            return (
                                <div className={item.completed ? 'task-item completed' : 'task-item'} key={item.id}>
                                    <button
                                        type="button"
                                        className="check-button"
                                        onClick={()=> {
                                            handleDoneTask(item.id)
                                        }}
                                    >
                                        ✓
                                    </button>

                                    {item.id === editingId ? (
                                            <>
                                                <input
                                                    className="edit-input"
                                                    type="text"
                                                    value={item.title}
                                                    onChange={(e) => {
                                                        setEditText(e.target.value)
                                                    }}
                                                />
                                                <button
                                                    type="button"
                                                    className="save-button"
                                                    onClick={() => handleSaveTask(item.id)}
                                                >
                                                    저장
                                                </button>
                                            </>
                                        ) :

                                        (
                                            <span className="task-title">
                                            {item.title}
                                        </span>)
                                    }


                                    {/*    수정 버튼 */}
                                    <button
                                        type="button"
                                        className="edit-button"
                                        onClick={() => {handleEditTask(item.id, item.title)}}
                                    >
                                        수정
                                    </button>

                                    {/*    삭제 버튼 */}
                                    <button
                                        type="button"
                                        className="delete-button"
                                        onClick={() => {handleDeleteTask(item.id)}}
                                    >
                                        삭제
                                    </button>
                                </div>
                            )})
                    )
                    }
                </div>
            </section>
        </main>
    );
}

export default TaskChecklistPractice;