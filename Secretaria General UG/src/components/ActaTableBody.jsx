import React from "react";
import { deleteCatalog, getData } from "./utils/apiCalls";

function ActaTableBody({ data, setData, setDone }) {
  async function HandleDelete(id) {
    await deleteCatalog(id);
    await getData("catalogs", setData, setDone);
  }

  return (
    <tbody>
      {data.map((row, idx) => {
        return (
          <tr key={idx}>
            <td className="border-2 border-spacing-0 border-gray-600 p-4">
              {row.num}
            </td>
            <td className="border-2 border-spacing-0 border-gray-600 p-4">
              {row.nombre}
            </td>
            <td className="border-2 border-spacing-0 border-gray-600 p-4">
              {row.cedula}
            </td>
            <td className="border-2 border-spacing-0 border-gray-600 p-4">
              {row.anexo}
            </td>
            <td className="border-2 border-spacing-0 border-gray-600 p-4 text-center">
              <span
                className="underline hover:text-emerald-400 cursor-pointer"
                onClick={() => HandleDelete(row.IdTabla)}
              >
                Editar
              </span>
            </td>
            <td className="border-2 border-spacing-0 border-gray-600 p-4 text-center">
              <span
                className="underline hover:text-emerald-400 cursor-pointer"
                onClick={() => HandleDelete(row.IdTabla)}
              >
                Eliminar
              </span>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default ActaTableBody;
