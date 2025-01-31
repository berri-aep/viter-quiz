import { setIsAdd, setIsArchive, setIsDelete, setIsRestore } from "@/components/store/storeAction";

import { StoreContext } from "@/components/store/storeContext";
import {
  Archive,
  ArchiveRestore,
  FilePenLine,
  Trash2
} from "lucide-react";
import React from "react";
import ModalConfirm from "../partials/Modals/ModalConfirm";
import ModalDelete from "../partials/Modals/ModalDelete";
import Pills from "../partials/Pills";

const QuestionTable = () => {
  const{store,dispatch} = React.useContext(StoreContext);
  let counter = 1;
  

  const handleDelete = () => {
    dispatch(setIsDelete(true));
  };
  const handleEdit = () => {
    dispatch(setIsAdd(true));
  };
  const handleRestore = () => {
    dispatch(setIsRestore(true));
  };
  const handleArchive = () => {
    dispatch(setIsArchive(true));
  };
  return (
    <>
      <div className="p-4 bg-secondary rounded-md mt-10 border border-line relative">
        {/* <SpinnerTable /> */}
        <div className="table-wrapper custom-scroll">
          {/* <TableLoader count={20} cols={5} /> */}
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th>Title</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
              <td colSpan={100}>
                <IconNoData />
              </td>
            </tr>
            <tr>
              <td colSpan={100}>
                <IconServerError />
              </td>
            </tr> */}

              {Array.from(Array(6).keys()).map((i)=>(

              <tr key={i}>
                <td>{counter++}.</td>
                <td>
                  <Pills />
                </td>
                <td>zzzzz</td>
                <td>
                  <ul className="table-action">
                    {true ? (
                      <>
                        <li>
                          <button
                            className="tooltip"
                            data-tooltip="Edit"
                            onClick={() => handleEdit()}
                          >
                            <FilePenLine />
                          </button>
                        </li>
                        <li>
                          <button
                            className="tooltip"
                            data-tooltip="Archive"
                            onClick={handleArchive}
                          >
                            <Archive />
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <button className="tooltip" data-tooltip="Restore">
                            <ArchiveRestore onClick={() => handleRestore()} />
                          </button>
                        </li>
                        <li>
                          <button
                            className="tooltip"
                            data-tooltip="Delete"
                            onClick={handleDelete}
                          >
                            <Trash2 />
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {store.isDelete && <ModalDelete />}
      {store.isRestore && <ModalConfirm />}
      {store.isArchive && <ModalConfirm />}
    </>
  );
};

export default QuestionTable;
