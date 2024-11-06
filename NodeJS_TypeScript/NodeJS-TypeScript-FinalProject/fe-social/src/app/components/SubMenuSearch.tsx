// src/app/components/SubMenuSearch.tsx
import React, { useEffect } from "react";

interface SubMenuSearchProps {
  onClose: () => void;
}

const SubMenuSearch: React.FC<SubMenuSearchProps> = ({ onClose }) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".submenu-search")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="absolute left-[244px] top-0 h-full w-[395px] bg-color-light shadow-lg rounded-tr-[16px] rounded-br-[16px]">
      <div className="p-4">Поиск</div>
    </div>
  );
};

export default SubMenuSearch;



// // src/app/components/SubMenuSearch.tsx
// "use client";

// import React, { useState } from "react";

// const SubMenuSearch: React.FC = () => {
//   const [query, setQuery] = useState("");

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setQuery(e.target.value);
//   };

//   return (
//     <div className="absolute left-[244px] top-0 w-[300px] h-full bg-gray-200 p-4">
//       <h3 className="text-xl mb-4">Search</h3>
//       <input
//         type="text"
//         value={query}
//         onChange={handleSearchChange}
//         placeholder="Search..."
//         className="w-full p-2 border rounded"
//       />
//       {/* Здесь можно добавить логику для отображения результатов поиска */}
//       {query && <p className="mt-4">Searching for: {query}</p>}
//     </div>
//   );
// };

// export default SubMenuSearch;
