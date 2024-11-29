import { Plus } from 'lucide-react';
import React from 'react'
import Footer from '../partials/Footer';
import SideNavigation from '../partials/SideNavigation';
import Header from '../partials/Header';
import SearchBar from '../partials/SearchBar';
import QuestiontTable from './QuestionTable';
import { StoreContext } from '@/components/store/storeContext';
import { setIsAdd } from '@/components/store/storeAction';
import ModalAddAdvertisement from './ModalAddQuestion';
import ToastSuccess from '../partials/ToastSuccess';
import ModalError from '../partials/Modals/ModalError';
import ModalValidation from '../partials/Modals/ModalValidation';
import QuestionTable from './QuestionTable';
import ModalAddQuestion from './ModalAddQuestion';

const Question = () => {
const { dispatch, store } = React.useContext(StoreContext);
const handleAdd = () => {
  dispatch(setIsAdd(true));
};
  return (
    <>
      <section className="layout-main">
        <div className="layout-div">
          <SideNavigation menu="Question" />
          <main>
            <Header
              title="Question"
              subtitle="Manage Quiz Questions"
            />
            <div className="p-5">
              <div className="flex justify-between items-center">
                <SearchBar />
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>
              <QuestionTable />
            </div>

            <Footer />
          </main>
        </div>
      </section>
      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}
      {store.isAdd && <ModalAddQuestion />}
    </>
  );
}

export default Question