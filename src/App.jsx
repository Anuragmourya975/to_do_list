import { useState } from "react";
import List from "./components/List";

function App() {
  const [inputList, setInputList] = useState("");
  const [item, setItem] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItem((oldItem) => {
      return [...oldItem, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    setItem((oldItem) => {
      return oldItem.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <h1 className="flex justify-center text-4xl bg-purple-900 text-white py-2 font-semibold">
        ToDo List
      </h1>
      <br />
      <div className="mb-6 lg:px-20 px-8 flex justify-around ">
        <input
          type="text"
          id="add_items"
          className=" shadow-sm mr-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 dark:shadow-sm-light py-4 px-5"
          placeholder="Add an Item"
          required
          value={inputList}
          onChange={itemEvent}
        />
        <button
          type="button"
          className="m-auto text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-purple-500 dark:hover:text-white dark:focus:ring-purple-800"
          onClick={listOfItems}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <br />
      </div>
      <div>
        <ul className=" lg:px-20 px-8 space-y-1 list-inside text-gray-500 dark:text-gray-400">
          {item.map((itemval, index) => {
            return (
              <List
                id={index}
                key={index}
                text={itemval}
                onSelect={deleteItems}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
