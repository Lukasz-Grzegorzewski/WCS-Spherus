// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import PropTypes from "prop-types";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// function AdminHomeCurrentComp({ currentHome }) {
//   const [characters, updateCharacters] = useState(currentHome);
//   const [newOrder, setNewOrder] = useState([]);
//   const [catName, setCatName] = useState([]);
//   const [pubName, setPubName] = useState([]);
//   const [show, setShow] = useState(false);

//   function handleOnDragEnd(result) {
//     if (!result.destination) return;
//     console.log(result.destination.index);
//     const items = Array.from(characters);
//     console.log(items);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);
//     for (let i = 0; i < items.length; i++) {
//       items.splice(i, 1, result.destination.index);
//     }
//     updateCharacters(items);
//     setNewOrder(items);
//   }

//   const getName = () => {
//     axios
//       .get(`${import.meta.env.VITE_PORT_BACKEND}/home/category/name/`)
//       .then((res) => {
//         setCatName(res.data);
//       })
//       .catch((err) => console.error(err));
//     axios
//       .get(`${import.meta.env.VITE_PORT_BACKEND}/publicities/`)
//       .then((res) => {
//         setPubName(res.data);
//         setShow(true);
//       })
//       .catch((err) => console.error(err));
//   };
//   useEffect(() => {
//     getName();
//   }, []);

//   const whatType = (type) => {
//     if (type === 1) {
//       return "Section";
//     }
//     return "Advertising";
//   };

//   const whatName = (type, idLink) => {
//     if (type === 1) {
//       return catName.find((el) => el.id === idLink).name;
//     }
//     return pubName.find((el) => el.id === idLink).name;
//   };

//   return (
//     <div className="adminHomeCurrentComp">
//       {show === true && (
//         <div className="adminHomeCurrentComp_dragBox">
//         <DragDropContext onDragEnd={handleOnDragEnd}>
//         <Droppable droppableId="characters">
//           {(provided) => (
//             <ul
//               className="adminHomeCurrentComp_drag"
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//             >
//               {characters.map(({ id, idLink, type }, index) => {
//                 return (
//                   <Draggable
//                     key={JSON.stringify(id)}
//                     draggableId={JSON.stringify(id)}
//                     index={index}
//                   >
//                     {(provided) => (
//                     <li
//                       className="adminHomeCurrentComp_drag_box"
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                     >
//                       <p>{whatType(type)}</p>
//                       <p>"{whatName(type, idLink)}"</p>
//                     </li>
//                     )}
//                   </Draggable>
//                 );
//               })}
//               {provided.placeholder}
//             </ul>
//           )}
//         </Droppable>
//         </DragDropContext>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminHomeCurrentComp;

// AdminHomeCurrentComp.propTypes = {
//   currentHome: PropTypes.arrayOf(
//     PropTypes.shape({
//       type: PropTypes.number.isRequired,
//       idLink: PropTypes.number.isRequired,
//       id: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import PropTypes from "prop-types";

// function AdminHomeCurrentComp({ id, type, idLink, getHome }) {
//   const [name, setName] = useState();

//   const whatType = () => {
//     if (type === 1) {
//       return "Section";
//     }
//     return "Advertising";
//   };

//   const getName = () => {
//     if (type === 1) {
//       axios
//         .get(`${import.meta.env.VITE_PORT_BACKEND}/categories/${idLink}`)
//         .then((res) => {
//           setName(res.data);
//         })
//         .catch((err) => console.error(err));
//     } else {
//       axios
//         .get(`${import.meta.env.VITE_PORT_BACKEND}/publicities/${idLink}`)
//         .then((res) => {
//           setName(res.data);
//         })
//         .catch((err) => console.error(err));
//     }
//   };

//   useEffect(() => {
//     getName();
//   }, []);

//   const deleteComponent = () => {
//     axios
//       .delete(`${import.meta.env.VITE_PORT_BACKEND}/home/${id}`)
//       .then(() => {
//         getHome();
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div className="adminHomeCurrentComp">
//       {name !== undefined && (
//         <>
//           <div className="adminHomeCurrentComp_infos">
//             <h2>{whatType()}</h2>
//             {name !== undefined && <h3>"{name.name}"</h3>}
//           </div>
//           <div className="adminHomeCurrentComp_delete">
//             <button
//               type="button"
//               onClick={() => {
//                 deleteComponent();
//               }}
//             >
//               <span>Delete</span>
//               <i />
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default AdminHomeCurrentComp;

// AdminHomeCurrentComp.propTypes = {
//   type: PropTypes.number.isRequired,
//   idLink: PropTypes.number.isRequired,
//   id: PropTypes.number.isRequired,
//   getHome: PropTypes.func.isRequired,
// };
