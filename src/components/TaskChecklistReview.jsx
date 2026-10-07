import {useState} from 'react';

const initialTasks = [
    { id: 1, title: "React 복습", completed: false },
    { id: 2, title: "JavaScript 공부", completed: true },
    { id: 3, title: "운동하기", completed: false },
];

function TaskChecklistReview () {
    const [tasks, setTasks] = useState(initialTasks)
    const [newTask, setNewTask] = useState('')
    const [filter, setFilter] = useState('전체')
    const [editingId, setEditingId] = useState(null)
    const [editText, setEditText] = useState('')

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

    const handleDoneTask = (id) => {
        // console.log('완료', id)
        const newTasks = tasks.map((item) => {
            if (id === item.id) {
                return {...item, completed: !item.completed}
            }
            return item
        })

        setTasks(newTasks)
    }

    const completedTasks = tasks.filter((item) => {
        return item.completed
    })

    const handleDeleteTask = (id) => {
        const newTasks = tasks.filter((item) => {
            return id !== item.id
        })

        setTasks(newTasks)
    }

    // 할일목록 삭제
    const handleAllDeleteTask = () => {
        const newTask = tasks.filter((item) => {
            return !item.completed
        })

        setTasks(newTask);
    }

    // 수정버튼
    const handleEditTask = (id, title) => {
        setEditingId(id)
        setEditText(title)
    }

    // 저장
    const handleSaveTask = (id) => {
        const newTask = tasks.map((item)=> {
            if (id === item.id) {
                return {
                    ...item,
                    title : editText
                }
            }
            return item
        })
        setTasks(newTask)
        setEditingId(null)
    }

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


    return (
        <main className="task-page">
            <section className="task-card">
                <header className="task-header">
                    <div>
                        <span className="eyebrow">TODAY</span>
                        <h1>오늘의 할 일</h1>

                        <strong className="task-count">
                            {completedTasks.length} / {tasks.length}
                        </strong>
                    </div>
                </header>

                <div className="task-input-area">
                    <input
                        type="text"
                        placeholder="새로운 할 일을 입력하세요..."
                        value={newTask}
                        onChange={(e) => {setNewTask(e.target.value)}}
                        onKeyDown={(e) => {
                            if(e.key === "Enter") {
                                handleAddTask()
                            }
                        }}
                    />
                    <button
                        type="button"
                        onClick={handleAddTask}
                    >
                        추가
                    </button>
                </div>

                <div className="task-filter">
                    <button type="button" className={filter === '전체' ? 'active' : ''} onClick={() => setFilter('전체')}>전체</button>
                    <button type="button" className={filter === '진행중' ? 'active' : ''} onClick={() => setFilter('진행중')}>진행중</button>
                    <button type="button" className={filter === '완료' ? 'active' : ''} onClick={() => setFilter('완료')}>완료</button>
                </div>

                <button
                    type="button"
                    onClick={() => {handleAllDeleteTask()}}
                    disabled={completedTasks.length === 0}
                >
                    완료 항목 삭제
                </button>

                <div className="task-list">
                    {
                        filteredTasks.map((item) => {
                            return (
                                <div className={item.completed ? "task-item completed" : "task-item"} key={item.id}>
                                    {item.id === editingId ? (
                                        <>
                                            <input
                                                type="text"
                                                value={editText}
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
                                    )
                                    :
                                    (
                                        <span className="task-title">
                                            {item.title}
                                        </span>

                                    )
                                    }

                                    <button
                                        type="button"
                                        onClick={() => {
                                            handleDoneTask(item.id)
                                        }}
                                    >
                                        완료
                                    </button>

                                    {/* 수정버튼 */}
                                    <button
                                        type="button"
                                        onClick={() => handleEditTask(item.id, item.title)}
                                    >
                                        수정
                                    </button>

                                    {/* 삭제버튼 */}
                                    <button
                                        type="button"
                                        onClick={() => {
                                            handleDeleteTask(item.id)
                                        }}
                                    >
                                        삭제
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )

}

export default TaskChecklistReview;