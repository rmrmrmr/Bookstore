import React from 'react';
import propTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useDispatch } from 'react-redux';
import { deleteBooksThunk } from '../redux/books/apiConnect';
import 'react-circular-progressbar/dist/styles.css';

export default function Book({
  title, author, category, chapter, id, percentage,
}) {
  const dispatch = useDispatch();
  const actionButton = () => {
    dispatch(deleteBooksThunk(id));
  };

  return (
    <div className="border-2 border-slate-300 h-36 w-full grid grid-cols-3 grid-rows-2 p-6 bg-white">
      <div className="flex flex-col">
        <h3 className="text-xs text-slate-500 font-sans">{category}</h3>
        <h2 className="text-xl font-bold">{title}</h2>
        <h3 className="text-xs text-blue-400">{author}</h3>
      </div>
      <div className="row-start-2 flex items-end w-full justify-between text-blue-400">
        <input
          value="Comments"
          type="button"
          className="pr-6"
        />
        <input
          value="Remove"
          type="button"
          className="border-x-2 border-slate-300 grow text-center"
          onClick={() => actionButton()}
          onKeyUp={() => actionButton()}
        />
        <input
          value="Edit"
          type="button"
          className="grow text-center"
        />
      </div>
      <div className="col-start-2 row-span-2 flex flex-wrap flex-col overflow-hidden content-end font-sans border-r-2">
        <div className="w-1/3 h-full">
          <CircularProgressbar value={percentage} className=" h-3/4 w-1/2" />
        </div>
        <div className="w-1/3 h-full flex content-center flex-wrap">
          <p className="text-2xl font-bold w-full">
            {percentage}
            %
          </p>
          <p className="text-slate-500 w-ful">Completed</p>
        </div>
      </div>
      <div className="flex flex-wrap pl-10 items-center h-full row-span-2">
        <div className="w-full">
          <p className="w-full text-slate-500 text-xs">CURRENT CHAPTER</p>
          <p className="w-full text-lg">{chapter}</p>
        </div>
        <input type="button" value="UPDATE PROGRESS" className="bg-blue-500 text-white py-2 text-sm w-4/6" />
      </div>
    </div>
  );
}

Book.defaultProps = {
  chapter: 'Not Specificated',
  percentage: 0,
};

Book.propTypes = {
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  percentage: propTypes.number,
  chapter: propTypes.string,
  category: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};
