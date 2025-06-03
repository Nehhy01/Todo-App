const Item = ({ item }) => {
    return (
        <li id={item?.id} className="todo_item">
            <button className="todo-items_left">
                <svg>
                    <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
                </svg>
                <p>{item?.title}</p>
            </button>


            <div className="todo-list-right">
                <button>
                    <span className="visually-hidden">Edit</span>
                    <svg>
                    <path d="" />
                    </svg>
                </button>

                <button>
                    <span className="visually-hidden">Delete</span>
                    <svg>
                    <path d="" />
                    </svg>
                </button>
            </div>
        </li>
    );
}

export default Item;